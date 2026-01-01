"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const FeaturedWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Photography Collection",
      image: "/assets/Images/IMG_4206.jpeg",
      category: "Photography",
      link: "/portfolio?tab=photography",
    },
    {
      id: 2,
      title: "Music Production",
      image: "/assets/musicProduction.jpg",
      category: "Music",
      link: "/music",
    },
    {
      id: 3,
      title: "Film Production",
      image: "/assets/eventCoverage.jpg",
      category: "Film",
      link: "/films",
    },
    {
      id: 4,
      title: "Event Coverage",
      image: "/assets/studioRecording.jpg",
      category: "Events",
      link: "/portfolio",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-gray-50">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="font-bold text-3xl md:text-4xl text-[#48484A] mb-4">
          Featured Work
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of creative excellence across music, film, and
          visual arts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProjects.map((project, index) => (
          <Link
            href={project.link}
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative aspect-square">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-sm font-semibold text-[#E7BF44] uppercase tracking-wide mb-1">
                {project.category}
              </p>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
            </div>
            <div className="absolute top-4 right-4 bg-[#E7BF44] text-[#48484A] px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View More
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12" data-aos="fade-up">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 bg-[#E7BF44] hover:bg-[#D4A93A] text-[#48484A] font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
        >
          View Full Portfolio
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
