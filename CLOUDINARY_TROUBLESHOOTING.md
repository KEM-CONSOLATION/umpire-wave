# Cloudinary Troubleshooting Guide

## Issue: "url parameter is valid but upstream response is invalid"

This error usually means one of the following:

### 1. **Filename Mismatch** ✅ FIXED
- **Problem**: Upload script converts spaces to underscores, but URL generator wasn't
- **Solution**: Updated `getCloudinaryPath()` to clean filenames the same way as upload script
- **Status**: Fixed in `src/lib/cloudinary.ts`

### 2. **Check Cloudinary Dashboard Settings**

#### A. Verify Images Are Uploaded
1. Go to [Cloudinary Dashboard](https://console.cloudinary.com/)
2. Click "Media Library" in the sidebar
3. Check these folders exist and have images:
   - `actors/` - should have actor images
   - `artistes/` - should have artiste images
   - `team-members/` - should have team member images
   - `portfolio/` - should have portfolio images
   - `facility/` - should have facility images
   - `assets/` - should have general assets (Header_, brands, etc.)

#### B. Verify Filenames Match
- Check if filenames in Cloudinary have underscores (e.g., `CLEVER_DICKSON.jpg`)
- If they still have spaces, you may need to re-upload

#### C. Check Security Settings
1. Go to **Settings** → **Security**
2. Make sure **"Allow unsigned URLs"** is enabled (for Next.js Image optimization)
3. Check **"Allowed fetch domains"** - should include:
   - `localhost` (for development)
   - `*.vercel.app` (if deploying to Vercel)
   - Your production domain (e.g., `umpirewave.com`)

#### D. Check URL Settings
1. Go to **Settings** → **Media Library**
2. Ensure **"Auto-upload mapping"** is configured if using
3. Check **"Delivery type"** is set to **"Upload"**

### 3. **Verify Environment Variables**

Make sure your `.env.local` file has:
```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

To check your cloud name:
1. Go to Cloudinary Dashboard
2. It's displayed at the top right (or in Settings → Product Environment Credentials)

### 4. **Test Image URL Directly**

Try accessing an image URL directly in your browser:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/q_auto,f_auto/actors/CLEVER_DICKSON.jpg
```

Replace `YOUR_CLOUD_NAME` with your actual cloud name.

If this works in browser but not in Next.js, it's likely a domain whitelist issue.

### 5. **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| 404 errors | Filename mismatch - check spaces vs underscores |
| 400 errors | Check domain whitelist in Security settings |
| CORS errors | Enable "Allow unsigned URLs" in Security |
| Images load in browser but not Next.js | Add domain to "Allowed fetch domains" |

### 6. **Quick Verification Script**

Run this to verify your Cloudinary setup:
```bash
node -e "require('dotenv').config(); console.log('Cloud Name:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'NOT SET');"
```

### 7. **Re-upload Images (if needed)**

If filenames don't match:
```bash
npm run upload-images
```

This will skip files that already exist, but you can force re-upload by:
1. Deleting images from Cloudinary dashboard
2. Running the upload script again
