import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json(
      { error: "Video ID is required" },
      { status: 400 }
    );
  }

  try {
    // Using YouTube oEmbed API (no API key required)
    const oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

    const response = await fetch(oEmbedUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch video data");
    }

    const data = await response.json();

    return NextResponse.json({
      title: data.title,
      thumbnail: data.thumbnail_url,
      author: data.author_name,
    });
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return NextResponse.json(
      { error: "Failed to fetch video information" },
      { status: 500 }
    );
  }
}
