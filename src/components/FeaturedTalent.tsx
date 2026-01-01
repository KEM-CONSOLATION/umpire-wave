"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/lib/utils";

const FeaturedTalent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const featuredActors = [
    {
      name: "Clever Dickson",
      image: "/assets/actors/CLEVER DICKSON.jpg",
      role: "Actor & Cinematographer",
      link: "/actors",
    },
    {
      name: "Emmanuel Nemere",
      image: "/assets/actors/EMMANUEL NEMERE.jpeg",
      role: "Actor",
      link: "/actors",
    },
  ];

  const featuredArtistes = [
    {
      name: "Izik Brown",
      image: "/assets/Artiste/IZIK BROWN.jpeg",
      role: "Artiste",
      link: "/artistes",
    },
    {
      name: "RJ Buchi",
      image: "/assets/Artiste/RJ BUCHI.jpg",
      role: "Artiste",
      link: "/artistes",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="font-bold text-3xl md:text-4xl text-[#48484A] mb-4">
          Our Talent
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the exceptional actors and artistes who bring our creative
          visions to life
        </p>
      </div>

      {/* Featured Actors */}
      <div className="mb-16" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-[#48484A] mb-6 text-center md:text-left">
          Featured Actors
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredActors.map((actor, index) => (
            <Link
              href={`${actor.link}/${createSlug(actor.name)}`}
              key={actor.name}
              className="group flex flex-col items-center text-center space-y-4 cursor-pointer transform transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-gray-100 transition-all duration-300 group-hover:ring-[#E7BF44] group-hover:shadow-xl">
                <Image
                  src={actor.image}
                  alt={actor.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 160px, 192px"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#48484A] group-hover:text-[#E7BF44] transition-colors">
                  {actor.name}
                </h4>
                <p className="text-sm text-gray-600">{actor.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Artistes */}
      <div data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-[#48484A] mb-6 text-center md:text-left">
          Featured Artistes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtistes.map((artiste, index) => (
            <Link
              href={`${artiste.link}/${createSlug(artiste.name)}`}
              key={artiste.name}
              className="group flex flex-col items-center text-center space-y-4 cursor-pointer transform transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-gray-100 transition-all duration-300 group-hover:ring-[#E7BF44] group-hover:shadow-xl">
                <Image
                  src={artiste.image}
                  alt={artiste.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 160px, 192px"
                  quality={90}
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#48484A] group-hover:text-[#E7BF44] transition-colors">
                  {artiste.name}
                </h4>
                <p className="text-sm text-gray-600">{artiste.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-12" data-aos="fade-up">
        <Link
          href="/actors"
          className="inline-flex items-center gap-2 text-[#E7BF44] hover:text-[#D4A93A] font-semibold transition-colors mr-6"
        >
          View All Actors
        </Link>
        <Link
          href="/artistes"
          className="inline-flex items-center gap-2 text-[#E7BF44] hover:text-[#D4A93A] font-semibold transition-colors"
        >
          View All Artistes
        </Link>
      </div>
    </section>
  );
};

export default FeaturedTalent;
