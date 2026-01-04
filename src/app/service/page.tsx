"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Service from "@/components/Service";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getImageUrl } from "@/lib/cloudinary";

export default function ServicePage() {
  return (
    <div className=" relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="Our Service"
        previousPage="Home"
      />

      <Service />

      <Footer />
    </div>
  );
}
