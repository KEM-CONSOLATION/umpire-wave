"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import About from "@/components/About";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getImageUrl } from "@/lib/cloudinary";

export default function AboutPage() {
  return (
    <div className=" relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="A culture-driven multimedia powerhouse redefining African creativity."
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="About"
        previousPage="Home"
      />

      <About />

      <Footer />
    </div>
  );
}
