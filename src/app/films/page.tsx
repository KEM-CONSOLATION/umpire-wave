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

type TabType = "bts" | "featured" | "chronicles";

interface FeaturedVideo {
  videoId: string;
  title: string;
  thumbnail?: string;
}

export default function FilmsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("bts");
  const [featuredBTS, setFeaturedBTS] = useState<FeaturedVideo[]>([]);
  const [featuredFilms, setFeaturedFilms] = useState<FeaturedVideo[]>([]);
  const [featuredChronicles, setFeaturedChronicles] = useState<FeaturedVideo[]>(
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Fetch BTS video titles
    const fetchBTSTitles = async () => {
      const videoIds: string[] = [
        // Add BTS video IDs here
        // Example: "VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3", "VIDEO_ID_4",
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
            title: data?.title || "Behind The Scenes",
            thumbnail: data?.thumbnail,
          };
        })
      );

      setFeaturedBTS(videosWithTitles);
    };

    const fetchFeaturedFilmsTitles = async () => {
      const videoIds: string[] = ["ZT1MXvP5s6Y"];

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
            title: data?.title || "Featured Film",
            thumbnail: data?.thumbnail,
          };
        })
      );

      setFeaturedFilms(videosWithTitles);
    };

    const fetchChroniclesTitles = async () => {
      const videoIds: string[] = [
        "VTY9ELz7MjY",
        "yVkx2tDENgY",
        "0UHKMttCEo8",
        "MYaDDxdL0As",
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
            title: data?.title || "Chronicles of Oga Solo",
            thumbnail: data?.thumbnail,
          };
        })
      );

      setFeaturedChronicles(videosWithTitles);
    };

    fetchBTSTitles();
    fetchFeaturedFilmsTitles();
    fetchChroniclesTitles();
  }, []);

  const tabs = [
    { id: "bts" as TabType, label: "BTS" },
    { id: "featured" as TabType, label: "Featured Films" },
    { id: "chronicles" as TabType, label: "Chronicles of Oga Solo" },
  ];

  // YouTube Playlist URLs
  const btsPlaylistUrl = "https://www.youtube.com/@umpirewave/playlists";
  const featuredFilmsPlaylistUrl =
    "https://www.youtube.com/@UmpireWaveFilms/videos";
  const chroniclesPlaylistUrl =
    "https://www.youtube.com/watch?v=MYaDDxdL0As&list=PL7PikMR7aNObRr6zRcfokG99UVH-Vdlrt";

  return (
    <div className="relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="Cinematic Excellence in Every Frame"
        image="/assets/Header_.png"
        currentPage="Films"
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
          {activeTab === "bts" && (
            <div className="space-y-8" data-aos="fade-up">
              {featuredBTS.length > 0 ? (
                <>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-4">
                      Behind The Scenes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                      Get an exclusive look at the creative process, production
                      moments, and the incredible teamwork that brings our films to
                      life.
                    </p>
                  </div>

                  {/* Featured Videos Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {featuredBTS.map((video) => (
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
                      href={btsPlaylistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>Watch All BTS Content on YouTube</span>
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
                <div className="text-center py-16 md:py-24">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-2">
                      Not BTS Yet
                    </h2>
                    <p className="font-[400] text-[18px] text-gray-600 max-w-2xl mx-auto">
                      We&apos;re working on exciting behind-the-scenes content. Check back soon for updates!
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "featured" && (
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-4">
                  Featured Films
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our collection of compelling stories, documentaries,
                  and cinematic productions that showcase African creativity.
                </p>
              </div>

              {/* Featured Videos Grid */}
              {featuredFilms.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {featuredFilms.map((video) => (
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
                      href={featuredFilmsPlaylistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>Watch All Featured Films on YouTube</span>
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
                      Add video IDs to display Featured Films
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "chronicles" && (
            <div className="space-y-8" data-aos="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] mb-4">
                  Chronicles of Oga Solo
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  A captivating series that tells the story of Oga Solo. Follow
                  the journey, the drama, and the moments that define this
                  extraordinary narrative.
                </p>
              </div>

              {/* Featured Videos Grid */}
              {featuredChronicles.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
                    {featuredChronicles.map((video) => (
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
                      href={chroniclesPlaylistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>Watch All Chronicles on YouTube</span>
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
                      Add video IDs to display Chronicles content
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
