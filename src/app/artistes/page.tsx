"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function ArtistesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Placeholder data - replace with actual artiste data
  const artistes = [
    {
      id: 1,
      name: "Artiste Name 1",
      image: "/assets/team.png",
    },
    {
      id: 2,
      name: "Artiste Name 2",
      image: "/assets/team.png",
    },
    {
      id: 3,
      name: "Artiste Name 3",
      image: "/assets/team.png",
    },
    {
      id: 4,
      name: "Artiste Name 4",
      image: "/assets/team.png",
    },
    {
      id: 5,
      name: "Artiste Name 5",
      image: "/assets/team.png",
    },
    {
      id: 6,
      name: "Artiste Name 6",
      image: "/assets/team.png",
    },
  ];

  return (
    <div className="relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="Discover Our Amazing Artists"
        image="/assets/Header_.png"
        currentPage="Artistes"
        previousPage="Our Talent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#48484A] mb-4">
            Our Artistes
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the exceptional musicians and performers who create
            unforgettable sounds and experiences through their artistry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {artistes.map((artiste, index) => (
            <div
              key={artiste.id}
              className="flex flex-col items-center text-center space-y-4 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg ring-2 ring-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Image
                  src={artiste.image}
                  alt={artiste.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <h3 className="font-semibold text-base md:text-lg text-[#48484A] group-hover:text-[#E7BF44] transition-colors">
                {artiste.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
