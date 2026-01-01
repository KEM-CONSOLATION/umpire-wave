"use client";
import Brands from "@/components/Brands";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import FeaturedWork from "@/components/FeaturedWork";
import Stats from "@/components/Stats";
import FeaturedTalent from "@/components/FeaturedTalent";

export default function Home() {
  return (
    <div className="  relative">
      <WhatsAppWidget />

      <Nav />
      <HeroSection />
      <CoreServices />
      <Stats />
      <FeaturedWork />
      <FeaturedTalent />
      <Brands />
      <Footer />
    </div>
  );
}
