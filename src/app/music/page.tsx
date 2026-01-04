"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import WaveSessionVideo from "@/components/WaveSessionVideo";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getYouTubeVideoInfo } from "@/lib/youtube";
import { getImageUrl } from "@/lib/cloudinary";

type TabType = "wave-sessions" | "rising-stars";

interface FeaturedVideo {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export default function MusicPage() {
  const [activeTab, setActiveTab] = useState<TabType>("wave-sessions");
  const [featuredWaveSessions, setFeaturedWaveSessions] = useState<
    FeaturedVideo[]
  >([
    {
      videoId: "",
      title: "",
      thumbnail: "",
    },
  ]);
  const [featuredRisingStars, setFeaturedRisingStars] = useState<
    FeaturedVideo[]
  >([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const fetchWaveSessionTitles = async () => {
      const videoIds: string[] = [
        "bjafWv0JJJA",
        "rElFhCrgR-k",
        "wBkMvmrZsVQ",
        "gTnNmYRGy48",
      ];

      const videosWithTitles = await Promise.all(
        videoIds.map(async (videoId) => {
          if (videoId.startsWith("VIDEO_ID")) {
            return {
              videoId,
              title: "Video Title",
            };
          }

          const data = await getYouTubeVideoInfo(videoId);
          return {
            videoId,
            title: data?.title || "Wave Session",
            thumbnail: data?.thumbnail,
          };
        })
      );

      setFeaturedWaveSessions(videosWithTitles);
    };

    const fetchRisingStarTitles = async () => {
      const videoIds: string[] = [
        "eYM502uuoIU",
        "r0Ruj5vm1Y8",
        "DdGiJ8xhWjw",
        "G8OKYKbFVS8",
      ];

      if (videoIds.length === 0) return;

      const videosWithTitles = await Promise.all(
        videoIds.map(async (videoId) => {
          if (videoId.startsWith("VIDEO_ID")) {
            return {
              videoId,
              title: "Video Title",
            };
          }

          const data = await getYouTubeVideoInfo(videoId);
          return {
            videoId,
            title: data?.title || "Rising Star",
            thumbnail: data?.thumbnail,
          };
        })
      );

      setFeaturedRisingStars(videosWithTitles);
    };

    fetchWaveSessionTitles();
    fetchRisingStarTitles();
  }, []);

  const tabs = [
    { id: "wave-sessions" as TabType, label: "Wave Sessions" },
    { id: "rising-stars" as TabType, label: "Rising Stars" },
  ];

  // YouTube Playlist URLs
  const waveSessionsPlaylistUrl =
    "https://www.youtube.com/watch?v=_vcQPROz2T4&list=PL7PikMR7aNOas6mV3Js4KCvWBJ729qegX";
  const risingStarsPlaylistUrl =
    "https://www.youtube.com/watch?v=eYM502uuoIU&list=PL7PikMR7aNOYj4zwjMeHcEbkt2p5EhZgM";

  return (
    <div className="relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="Where Music Meets Innovation"
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="Music"
        previousPage="Production"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold cursor-pointer text-lg transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-[#E7BF44] border-[#E7BF44]"
                  : "text-gray-600 border-transparent hover:text-[#48484A] hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "wave-sessions" && (
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-4">
                  Wave Sessions
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Experience intimate live performances, acoustic sessions, and
                  exclusive musical moments captured in our studio. Wave
                  Sessions brings you closer to the music and the artists who
                  create it.
                </p>
              </div>

              {/* Featured Videos Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                {featuredWaveSessions.map((video) => (
                  <WaveSessionVideo
                    key={video.videoId}
                    videoId={video.videoId}
                    title={video.title}
                    thumbnail={video.thumbnail}
                  />
                ))}
              </div>

              {/* View Playlist Button */}
              <div className="text-center">
                <a
                  href={waveSessionsPlaylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>Watch All Wave Sessions on YouTube</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {activeTab === "rising-stars" && (
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-4">
                  Rising Stars
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Discover the next generation of musical talent. Our Rising
                  Stars program showcases emerging artists who are shaping the
                  future of African music.
                </p>
              </div>

              {/* Featured Videos Grid */}
              {featuredRisingStars.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {featuredRisingStars.map((video) => (
                      <WaveSessionVideo
                        key={video.videoId}
                        videoId={video.videoId}
                        title={video.title}
                        thumbnail={video.thumbnail}
                      />
                    ))}
                  </div>

                  {/* View Playlist Button */}
                  <div className="text-center">
                    <a
                      href={risingStarsPlaylistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>Watch All Rising Stars on YouTube</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Placeholder when no videos are added yet */}
                  <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                    <p className="text-gray-400">
                      Add video IDs to display Rising Stars
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
