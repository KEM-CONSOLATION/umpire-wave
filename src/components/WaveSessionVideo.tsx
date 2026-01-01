"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getYouTubeVideoInfo } from "@/lib/youtube";

interface WaveSessionVideoProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

const WaveSessionVideo: React.FC<WaveSessionVideoProps> = ({
  videoId,
  title: initialTitle,
  thumbnail: initialThumbnail,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [title, setTitle] = useState(initialTitle || "Wave Session");
  const [thumbnail, setThumbnail] = useState(
    initialThumbnail ||
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  useEffect(() => {
    if (!initialTitle && videoId && !videoId.startsWith("VIDEO_ID")) {
      getYouTubeVideoInfo(videoId).then((data) => {
        if (data) {
          setTitle(data.title || title);
          if (data.thumbnail) {
            setThumbnail(data.thumbnail);
          }
        }
      });
    }
  }, [videoId, initialTitle, title]);

  const videoThumbnail = thumbnail;

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full pt-[56.25%] bg-gray-900">
        {showVideo ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={toggleVideo}
          >
            <Image
              src={videoThumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-all duration-300 transform group-hover:scale-110">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-[#E7BF44] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#48484A] text-sm md:text-base line-clamp-2 mb-2">
          {title}
        </h3>
        {showVideo && (
          <button
            onClick={toggleVideo}
            className="text-sm text-[#E7BF44] hover:text-[#D4A93A] font-medium transition-colors"
          >
            Close Video
          </button>
        )}
      </div>
    </div>
  );
};

export default WaveSessionVideo;
