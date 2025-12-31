"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TabType = "bts" | "featured" | "chronicles";

export default function FilmsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("bts");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const tabs = [
    { id: "bts" as TabType, label: "BTS" },
    { id: "featured" as TabType, label: "Featured Films" },
    { id: "chronicles" as TabType, label: "Chronicles of Oga Solo" },
  ];

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
              <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] text-center mb-8">
                Behind The Scenes
              </h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Get an exclusive look at the creative process, production moments,
                and the incredible teamwork that brings our films to life.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for BTS content */}
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">BTS Content Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">BTS Content Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">BTS Content Coming Soon</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "featured" && (
            <div className="space-y-8" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] text-center mb-8">
                Featured Films
              </h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                Explore our collection of compelling stories, documentaries, and
                cinematic productions that showcase African creativity.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Featured Films content */}
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Featured Film Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Featured Film Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Featured Film Coming Soon</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "chronicles" && (
            <div className="space-y-8" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#48484A] text-center mb-8">
                Chronicles of Oga Solo
              </h2>
              <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
                A captivating series that tells the story of Oga Solo. Follow the
                journey, the drama, and the moments that define this extraordinary
                narrative.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Chronicles content */}
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Chronicles Content Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Chronicles Content Coming Soon</p>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <p className="text-gray-400">Chronicles Content Coming Soon</p>
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
