"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Contact from "@/components/Contact";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { getImageUrl } from "@/lib/cloudinary";

export default function ContactPage() {
  return (
    <div className=" relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="We Bring Creative Visions to Life."
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="Contact us"
        previousPage="Home"
      />

      <Contact />

      <Footer />
    </div>
  );
}
