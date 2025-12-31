"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import About from "@/components/About";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function AboutPage() {
  return (
    <div className=" relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="A culture-driven multimedia powerhouse redefining African creativity."
        image="/assets/Header_.png"
        currentPage="About"
        previousPage="Home"
      />

      <About />

      <Footer />
    </div>
  );
}
