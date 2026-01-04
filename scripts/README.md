# Cloudinary Upload Script

This script automatically uploads all images from your local folders to Cloudinary.

## Setup

### 1. Install Cloudinary SDK
```bash
npm install cloudinary
```

### 2. Get Your Cloudinary Credentials

1. Go to https://cloudinary.com/console
2. Login to your dashboard
3. Go to **Settings** → **Access Keys**
4. Copy:
   - Cloud Name
   - API Key
   - API Secret

### 3. Set Environment Variables

Create a `.env` file in the project root (or add to `.env.local`):

```env
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

⚠️ **Important**: Never commit `.env` to git! It's already in `.gitignore`.

### 4. Run the Upload Script

**Option A: Upload Only (Keeps Local Files as Backup - Recommended)**
```bash
npm run upload-images
```

**Option B: Upload and Delete Local Files**
Add to your `.env` file:
```env
DELETE_AFTER_UPLOAD=true
```
Then run:
```bash
npm run upload-images
```

⚠️ **Warning**: Only use `DELETE_AFTER_UPLOAD=true` after you've verified images load correctly from Cloudinary!

Or add to `package.json` scripts:
```json
{
  "scripts": {
    "upload-images": "node scripts/upload-to-cloudinary.js"
  }
}
```

Then run:
```bash
npm run upload-images
```

## What It Does

1. ✅ Scans all image folders:
   - `public/assets/Portfolio/` → `portfolio/` folder in Cloudinary
   - `public/assets/Facility/` → `facility/` folder in Cloudinary
   - `public/assets/TEAM MEMBERS/` → `team-members/` folder
   - `public/assets/actors/` → `actors/` folder
   - `public/assets/Artiste/` → `artistes/` folder
   - `public/assets/Images/` → `assets/` folder

2. ✅ Uploads each image to the correct Cloudinary folder
3. ✅ Skips images that already exist (won't duplicate)
4. ✅ Shows progress for each file
5. ✅ Provides a summary at the end

## Features

- ✅ **Automatic organization**: Images go to correct folders
- ✅ **Duplicate prevention**: Skips already uploaded images
- ✅ **Progress tracking**: See what's being uploaded
- ✅ **Error handling**: Shows errors but continues uploading
- ✅ **Auto-optimization**: Cloudinary optimizes images automatically

## Example Output

```
🚀 Starting Cloudinary Upload...

📋 Configuration:
   Cloud Name: my-cloud-name
   API Key: ***
   API Secret: ***

📁 Processing public/assets/Portfolio → portfolio/
   Found 76 images
   [1/76] ✅ Uploaded DSC_8976.jpg → portfolio/DSC_8976
   [2/76] ✅ Uploaded DSC_8977.jpg → portfolio/DSC_8977
   ...

📊 Upload Summary:
   Total files: 112
   ✅ Uploaded: 108
   ⏭️  Skipped (already exist): 4
   ❌ Errors: 0
```

## Troubleshooting

### "Cloudinary credentials not found"
- Make sure `.env` file exists in project root
- Check that all three variables are set:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

### "Rate limit exceeded"
- The script has a small delay between uploads
- If you get rate limited, wait a few minutes and run again
- Cloudinary free tier has generous limits

### Some images fail to upload
- Check file size (Cloudinary free tier: 10MB per file)
- Check file format (supports: jpg, png, gif, webp)
- Check internet connection

## After Upload

1. Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in `.env.local`:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
   ```

2. Restart your dev server:
   ```bash
   npm run dev
   ```

3. Check that images load from Cloudinary URLs

4. Once verified, you can remove images from git (they're already in `.gitignore`)
