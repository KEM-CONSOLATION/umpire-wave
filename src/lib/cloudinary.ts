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

const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const USE_CLOUDINARY = Boolean(CLOUDINARY_CLOUD_NAME);

/**
 * Clean filename for Cloudinary (matches upload script logic)
 * Replace special characters and spaces with underscores
 */
function cleanFilename(filename: string): string {
  // Extract filename from path if it includes directory
  const parts = filename.split("/");
  const name = parts[parts.length - 1];
  const ext = name.includes(".") ? name.substring(name.lastIndexOf(".")) : "";
  const nameWithoutExt = name.includes(".")
    ? name.substring(0, name.lastIndexOf("."))
    : name;

  // Replace special characters and spaces (matching upload script)
  const cleanName =
    nameWithoutExt
      .replace(/[:/\\?#\[\]@!$&'()*+,;=]/g, "_")
      .replace(/\s+/g, "_") + ext;

  // Reconstruct path if there were directories
  if (parts.length > 1) {
    parts[parts.length - 1] = cleanName;
    return parts.join("/");
  }

  return cleanName;
}

/**
 * Maps local image paths to Cloudinary folder structure
 */
function getCloudinaryPath(localPath: string): string {
  // Remove leading slash and 'assets/' if present
  const path = localPath.replace(/^\/?assets\//, "");

  let cloudinaryPath: string;

  // Map to Cloudinary folders
  if (path.startsWith("Portfolio/")) {
    cloudinaryPath = `portfolio/${path.replace("Portfolio/", "")}`;
  } else if (path.startsWith("Facility/")) {
    cloudinaryPath = `facility/${path.replace("Facility/", "")}`;
  } else if (path.startsWith("TEAM MEMBERS/")) {
    cloudinaryPath = `team-members/${path.replace("TEAM MEMBERS/", "")}`;
  } else if (path.startsWith("actors/")) {
    cloudinaryPath = `actors/${path.replace("actors/", "")}`;
  } else if (path.startsWith("Artiste/")) {
    cloudinaryPath = `artistes/${path.replace("Artiste/", "")}`;
  } else if (path.startsWith("Images/")) {
    cloudinaryPath = `assets/${path.replace("Images/", "")}`;
  } else if (
    !path.includes("/") ||
    path.match(/^[^/]+\.(jpg|jpeg|png|gif|webp)$/i)
  ) {
    // Handle general assets in root (Header_, brands, hero, etc.)
    cloudinaryPath = `assets/${path}`;
  } else {
    // Default to assets folder
    cloudinaryPath = `assets/${path}`;
  }

  // Clean the filename to match what was uploaded (spaces -> underscores)
  // Split path and filename, clean only the filename part
  const parts = cloudinaryPath.split("/");
  const folder = parts.slice(0, -1).join("/");
  const filename = parts[parts.length - 1];
  const cleanedFilename = cleanFilename(filename);

  return folder ? `${folder}/${cleanedFilename}` : cleanedFilename;
}

/**
 * Converts a local image path to a Cloudinary URL
 * Falls back to local path if Cloudinary is not configured
 */
export function getImageUrl(
  localPath: string,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "auto" | "webp" | "jpg" | "png";
  }
): string {
  // If Cloudinary is not configured, use local path
  if (!USE_CLOUDINARY) {
    // Ensure path starts with / if it's a local path
    return localPath.startsWith("/") ? localPath : `/${localPath}`;
  }

  const cloudinaryPath = getCloudinaryPath(localPath);

  // Build Cloudinary transformation URL
  const transformations: string[] = [];

  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  if (options?.quality) transformations.push(`q_${options.quality}`);
  if (options?.format) transformations.push(`f_${options.format}`);

  // Add automatic quality and format if not specified
  if (!options?.quality) transformations.push("q_auto");
  if (!options?.format) transformations.push("f_auto");

  const transformationString =
    transformations.length > 0 ? transformations.join(",") + "/" : "";

  // URL encode the path but preserve forward slashes
  // Cloudinary expects spaces to be encoded or underscores (we use underscores from upload)
  // But we should still URL-encode other special characters
  const encodedPath = cloudinaryPath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}${encodedPath}`;
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
    format: "auto",
  });
}
