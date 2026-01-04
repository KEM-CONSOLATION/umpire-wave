const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Map local folders to Cloudinary folders
const folderMapping = {
  'public/assets/Portfolio': 'portfolio',
  'public/assets/Facility': 'facility',
  'public/assets/TEAM MEMBERS': 'team-members',
  'public/assets/actors': 'actors',
  'public/assets/Artiste': 'artistes',
  'public/assets/Images': 'assets',
  'public/assets': 'assets', // General assets in root assets folder
};

// Configuration: Set to true to delete local files after successful upload
const DELETE_AFTER_UPLOAD = process.env.DELETE_AFTER_UPLOAD === 'true' || false;

// Track upload statistics
let stats = {
  uploaded: 0,
  skipped: 0,
  errors: 0,
  deleted: 0,
  total: 0,
};

/**
 * Upload a single file to Cloudinary
 */
async function uploadFile(filePath, cloudinaryFolder) {
  const fileName = path.basename(filePath);
  
  // Clean filename for Cloudinary public_id (replace special chars with underscores)
  const cleanName = path.parse(fileName).name
    .replace(/[:/\\?#\[\]@!$&'()*+,;=]/g, '_')
    .replace(/\s+/g, '_');
  
  const publicId = `${cloudinaryFolder}/${cleanName}`;

  try {
    // Escape special characters for search
    const escapedPublicId = publicId.replace(/:/g, '\\:');
    
    // Check if file already exists
    const existing = await cloudinary.search
      .expression(`public_id:${escapedPublicId}`)
      .execute();

    if (existing.total_count > 0) {
      console.log(`⏭️  Skipping ${fileName} (already exists)`);
      stats.skipped++;
      return { success: true, skipped: true };
    }

    // Upload file with explicit public_id to handle special characters
    // Note: public_id already includes folder, so don't set folder separately
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      use_filename: false,
      unique_filename: false,
      overwrite: false,
      resource_type: 'auto',
      quality: 'auto',
      fetch_format: 'auto',
      invalidate: true,
    });

    stats.uploaded++;
    console.log(`✅ Uploaded ${fileName} → ${result.public_id}`);
    
    // Delete local file if option is enabled
    if (DELETE_AFTER_UPLOAD) {
      try {
        fs.unlinkSync(filePath);
        stats.deleted++;
        console.log(`   🗑️  Deleted local file: ${fileName}`);
      } catch (deleteError) {
        console.error(`   ⚠️  Could not delete ${fileName}: ${deleteError.message}`);
      }
    }
    
    return { success: true, url: result.secure_url };
  } catch (error) {
    stats.errors++;
    console.error(`❌ Error uploading ${fileName}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Get all image files from a directory
 */
function getImageFiles(dir, rootDir = null) {
  const files = [];
  const isRootDir = rootDir === null;
  if (isRootDir) rootDir = dir;
  
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return files;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    // Skip subdirectories that are already mapped (avoid duplicates)
    if (item.isDirectory() && isRootDir) {
      const subDirName = item.name;
      // Only recurse into subdirectories if this is the root assets folder
      // and the subdirectory is not one of our mapped folders
      const mappedSubDirs = ['Portfolio', 'Facility', 'TEAM MEMBERS', 'actors', 'Artiste', 'Images'];
      if (!mappedSubDirs.includes(subDirName)) {
        files.push(...getImageFiles(fullPath, rootDir));
      }
    } else if (item.isDirectory() && !isRootDir) {
      // If we're in a subdirectory, don't recurse further
      // (this handles nested folders in general assets)
      files.push(...getImageFiles(fullPath, rootDir));
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

/**
 * Upload all images from a folder
 */
async function uploadFolder(localFolder, cloudinaryFolder) {
  console.log(`\n📁 Processing ${localFolder} → ${cloudinaryFolder}/`);
  
  const files = getImageFiles(localFolder);
  
  if (files.length === 0) {
    console.log(`   No images found in ${localFolder}`);
    return;
  }

  console.log(`   Found ${files.length} images`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    stats.total++;
    process.stdout.write(`   [${i + 1}/${files.length}] `);
    await uploadFile(file, cloudinaryFolder);
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

/**
 * Main upload function
 */
async function uploadAllImages() {
  console.log('🚀 Starting Cloudinary Upload...\n');
  console.log('📋 Configuration:');
  console.log(`   Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME || 'NOT SET'}`);
  console.log(`   API Key: ${process.env.CLOUDINARY_API_KEY ? '***' : 'NOT SET'}`);
  console.log(`   API Secret: ${process.env.CLOUDINARY_API_SECRET ? '***' : 'NOT SET'}\n`);

  // Validate configuration
  if (!process.env.CLOUDINARY_CLOUD_NAME || 
      !process.env.CLOUDINARY_API_KEY || 
      !process.env.CLOUDINARY_API_SECRET) {
    console.error('❌ Error: Cloudinary credentials not found!');
    console.error('\nPlease set these environment variables:');
    console.error('  CLOUDINARY_CLOUD_NAME=your-cloud-name');
    console.error('  CLOUDINARY_API_KEY=your-api-key');
    console.error('  CLOUDINARY_API_SECRET=your-api-secret');
    console.error('\nOr create a .env file with these values.');
    process.exit(1);
  }

  // Upload each folder
  for (const [localFolder, cloudinaryFolder] of Object.entries(folderMapping)) {
    await uploadFolder(localFolder, cloudinaryFolder);
  }

  // Print summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Upload Summary:');
  console.log(`   Total files: ${stats.total}`);
  console.log(`   ✅ Uploaded: ${stats.uploaded}`);
  console.log(`   ⏭️  Skipped (already exist): ${stats.skipped}`);
  console.log(`   ❌ Errors: ${stats.errors}`);
  if (DELETE_AFTER_UPLOAD) {
    console.log(`   🗑️  Deleted (local): ${stats.deleted}`);
  }
  console.log('='.repeat(50));
  
  if (!DELETE_AFTER_UPLOAD && stats.uploaded > 0) {
    console.log('\n💡 Tip: Local files were kept as backup.');
    console.log('   To delete them after upload, set DELETE_AFTER_UPLOAD=true in .env');
    console.log('   Or delete manually once you verify images load from Cloudinary.');
  }

  if (stats.uploaded > 0) {
    console.log('\n✅ Upload complete! Your images are now on Cloudinary.');
    console.log('Don\'t forget to set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local');
  }
}

// Run the upload
uploadAllImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
