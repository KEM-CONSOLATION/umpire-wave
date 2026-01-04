"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import PortFolio from "@/components/PortFolio";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getImageUrl } from "@/lib/cloudinary";

export default function PortfolioPage() {
  return (
    <div className=" ">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="Portfolio"
        previousPage="Home"
      />

      <PortFolio />

      <Footer />
    </div>
  );
}
