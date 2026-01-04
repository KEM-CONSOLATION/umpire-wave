"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import { createSlug } from "@/lib/utils";
import { getImageUrl } from "@/lib/cloudinary";

export default function ActorsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const actors = [
    {
      id: 1,
      name: "Blossom Barrett",
      image: "/assets/TEAM MEMBERS/Blossom Barret.jpeg",
    },
    {
      id: 2,
      name: "Clever Dickson",
      image: "/assets/actors/CLEVER DICKSON.jpg",
    },
    {
      id: 3,
      name: "Emmanuel Nemere",
      image: "/assets/actors/EMMANUEL NEMERE.jpeg",
    },
    {
      id: 4,
      name: "Mimi",
      image: "/assets/actors/MIMI.jpg",
    },
    {
      id: 5,
      name: "Queeneth Bassey",
      image: "/assets/actors/QUEENETH BASSEY.jpeg",
    },
  ];

  return (
    <div className="relative">
      <WhatsAppWidget />

      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="Meet Our Talented Actors"
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage="Actors"
        previousPage="Our Talent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#48484A] mb-4">
            Our Actors
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the talented actors who bring stories to life on screen
            with their exceptional performances and dedication to the craft.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {actors.map((actor, index) => {
            const slug = createSlug(actor.name);
            return (
              <Link
                key={actor.id}
                href={`/actors/${slug}`}
                className="flex flex-col items-center text-center space-y-4 group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 shadow-lg ring-2 ring-gray-100 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <ImageWithSkeleton
                    src={getImageUrl(actor.image, { width: 400, quality: 90 })}
                    alt={actor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                    quality={90}
                    loading="lazy"
                    objectFit="cover"
                  />
                </div>
                <h3 className="font-semibold text-base md:text-lg text-[#48484A] group-hover:text-[#E7BF44] transition-colors">
                  {actor.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
