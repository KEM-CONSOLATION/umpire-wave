"use client";
import Brands from "@/components/Brands";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <div className="  relative">
      <WhatsAppWidget />

      <Nav />
      <HeroSection />
      <CoreServices />
      <Brands />
      <Footer />
    </div>
  );
}
