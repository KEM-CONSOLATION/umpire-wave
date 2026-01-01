/**
 * Fetches YouTube video metadata (title, thumbnail, etc.)
 * @param videoId - YouTube video ID (e.g., "_vcQPROz2T4")
 * @returns Promise with video metadata
 */
export async function getYouTubeVideoInfo(videoId: string) {
  try {
    const response = await fetch(`/api/youtube?videoId=${videoId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch video info");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching video info:", error);
    return null;
  }
}

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL (youtube.com/watch?v=..., youtu.be/..., etc.)
 * @returns Video ID or null
 */
export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}
