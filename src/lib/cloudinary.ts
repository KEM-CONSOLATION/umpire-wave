/**
 * Cloudinary Image URL Helper
 * 
 * This utility helps convert local image paths to Cloudinary URLs.
 * 
 * Setup Instructions:
 * 1. Create a free account at https://cloudinary.com
 * 2. Get your cloud name from the dashboard
 * 3. Set up folders in Cloudinary:
 *    - portfolio (for Portfolio images)
 *    - facility (for Facility images)
 *    - team-members (for Team Member images)
 *    - actors (for Actor images)
 *    - artistes (for Artiste images)
 *    - assets (for other assets)
 * 
 * 4. Upload your images to Cloudinary with the same folder structure
 * 5. Add your cloud name to .env.local:
 *    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
 */

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
const USE_CLOUDINARY = Boolean(CLOUDINARY_CLOUD_NAME);

/**
 * Maps local image paths to Cloudinary folder structure
 */
function getCloudinaryPath(localPath: string): string {
  // Remove leading slash and 'assets/' if present
  let path = localPath.replace(/^\/?assets\//, '');
  
  // Map to Cloudinary folders
  if (path.startsWith('Portfolio/')) {
    return `portfolio/${path.replace('Portfolio/', '')}`;
  }
  if (path.startsWith('Facility/')) {
    return `facility/${path.replace('Facility/', '')}`;
  }
  if (path.startsWith('TEAM MEMBERS/')) {
    return `team-members/${path.replace('TEAM MEMBERS/', '')}`;
  }
  if (path.startsWith('actors/')) {
    return `actors/${path.replace('actors/', '')}`;
  }
  if (path.startsWith('Artiste/')) {
    return `artistes/${path.replace('Artiste/', '')}`;
  }
  if (path.startsWith('Images/')) {
    return `assets/${path.replace('Images/', '')}`;
  }
  
  // Handle general assets in root (Header_, brands, hero, etc.)
  // These are files directly in assets folder without subfolders
  if (!path.includes('/') || path.match(/^[^/]+\.(jpg|jpeg|png|gif|webp)$/i)) {
    return `assets/${path}`;
  }
  
  // Default to assets folder
  return `assets/${path}`;
}

/**
 * Converts a local image path to a Cloudinary URL
 * Falls back to local path if Cloudinary is not configured
 */
export function getImageUrl(localPath: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
}): string {
  // If Cloudinary is not configured, use local path
  if (!USE_CLOUDINARY) {
    // Ensure path starts with / if it's a local path
    return localPath.startsWith('/') ? localPath : `/${localPath}`;
  }

  const cloudinaryPath = getCloudinaryPath(localPath);
  
  // Build Cloudinary transformation URL
  const transformations: string[] = [];
  
  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.quality) transformations.push(`q_${options.quality}`);
  if (options?.format) transformations.push(`f_${options.format}`);
  
  // Add automatic quality and format if not specified
  if (!options?.quality) transformations.push('q_auto');
  if (!options?.format) transformations.push('f_auto');
  
  const transformationString = transformations.length > 0 
    ? transformations.join(',') + '/' 
    : '';
  
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}${cloudinaryPath}`;
}

/**
 * Get optimized image URL for Next.js Image component
 */
export function getOptimizedImageUrl(
  localPath: string,
  width?: number,
  quality: number = 90
): string {
  return getImageUrl(localPath, {
    width,
    quality,
    format: 'auto',
  });
}
