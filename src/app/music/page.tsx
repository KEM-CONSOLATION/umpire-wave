"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TabType = "wave-sessions" | "rising-stars";

export default function MusicPage() {
  const [activeTab, setActiveTab] = useState<TabType>("wave-sessions");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const tabs = [
    { id: "wave-sessions" as TabType, label: "Wave Sessions" },
    { id: "rising-stars" as TabType, label: "Rising Stars" },
  ];

  return (
    <div className="relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="Where Music Meets Innovation"
        image="/assets/Header_.png"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] text-center mb-8">
                Wave Sessions
              </h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Experience intimate live performances, acoustic sessions, and
                exclusive musical moments captured in our studio. Wave Sessions
                brings you closer to the music and the artists who create it.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Wave Sessions content */}
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Wave Session Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Wave Session Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Wave Session Coming Soon</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rising-stars" && (
            <div className="space-y-8" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] text-center mb-8">
                Rising Stars
              </h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Discover the next generation of musical talent. Our Rising Stars
                program showcases emerging artists who are shaping the future of
                African music.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Rising Stars content */}
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Rising Star Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Rising Star Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Rising Star Coming Soon</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
