"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageWithSkeleton from "./ImageWithSkeleton";
import Link from "next/link";
import ServiceBookingModal from "./ServiceBookingModal";
import { getImageUrl } from "@/lib/cloudinary";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  accent: "yellow" | "white";
}

const Service = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services: ServiceCard[] = [
    {
      id: 1,
      title: "Artiste Management & Promotion",
      description:
        "We manage the careers of talented musicians, helping them grow their brand, connect with the right audiences, and secure meaningful opportunities.",
      features: [
        "Talent discovery & grooming",
        "Career Development",
        "Artist Profile & Branding",
        "Promotion & Marketing",
        "Music Distribution",
      ],
      image: "/assets/artisteManagement.JPG",
      accent: "yellow",
    },
    {
      id: 2,
      title: "Music Distribution",
      description:
        "Get your music heard on global platforms. We provide digital and physical distribution to ensure your sound reaches fans everywhere.",
      features: [
        "Professional music recording & beat production",
        "Mixing & mastering to industry standards",
        "Creative direction & sound development",
        "Release planning & scheduling",
        "Metadata, ISRC & catalog management",
        "Global digital distribution (Spotify, Apple Music, Audiomack, etc.)",
      ],
      image: "/assets/musicProduction.JPG",
      accent: "white",
    },
    {
      id: 3,
      title: "Recording Studio Services",
      description:
        "Our state-of-the-art recording facility is equipped for top-tier sound production with cutting-edge technology and expert engineers.",
      features: [
        "Vocal & instrumental recording",
        "Music, voice-over & podcast sessions",
        "Professional studio engineers",
        "High-end microphones & equipment",
        "Session planning & technical support",
        "Comfortable, creative recording environment",
      ],
      image: "/assets/studioRecording.JPG",
      accent: "yellow",
    },
    {
      id: 4,
      title: "Studio & Equipment Rentals",
      description:
        "Need a creative space? We offer flexible rental options for studios, equipment, and production facilities.",
      features: [
        "Musical instruments & studio equipment",
        "Cameras, lenses & stabilizers",
        "Lighting, audio & grip equipment",
        "Film & photography accessories",
        "Equipment setup & technical support",
      ],
      image: "/assets/studioRentals.JPG",
      accent: "white",
    },
    {
      id: 5,
      title: "Film & Video Production",
      description:
        "From storytelling to screen, we bring concepts to life with cinematic excellence and creative vision.",
      features: [
        "Short films & feature films",
        "Music video direction & production",
        "Commercials & branded content",
        "Documentaries",
      ],
      image: "/assets/eventCoverage.JPG",
      accent: "yellow",
    },
    {
      id: 6,
      title: "Event Coverage & Livestream",
      description:
        "Capture every moment with our professional event solutions, delivering broadcast-quality coverage.",
      features: [
        "Event video coverage & photography",

        "Multi-camera livestreaming setups",
        "Live sound capture & streaming",
        "Online broadcast to YouTube, Facebook, Instagram, etc.",
        "On-site technical crew & support",
        "Post-event edits and highlights",
      ],
      image: "/assets/eventCoverage.JPG",
      accent: "white",
    },
    {
      id: 7,
      title: "Photography & Film",
      description:
        "Our photography arm delivers both creativity and quality, capturing moments that tell compelling stories.",
      features: [
        "Studio & outdoor photography",
        "Cinematography & film production",
        "Professional editing, color grading, and post-production",

        "Commercial, music video, and campaign content",
        "Portraits, events, and creative storytelling",
      ],
      image: "/assets/photography.JPG",
      accent: "white",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header Section */}
      <section className="mb-16 md:mb-24 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48484A] mb-6">
            Creative Solutions Tailored for Artists, Brands & Storytellers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you&apos;re an emerging artist, an established brand, or a
            visionary filmmaker, Umpire Wave Studios delivers full-service
            solutions that help you create, connect, and captivate.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <ImageWithSkeleton
                src={getImageUrl(service.image, { width: 800, quality: 90 })}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  service.accent === "yellow"
                    ? "from-[#E7BF44]/90 to-transparent"
                    : "from-black/70 to-transparent"
                }`}
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`text-2xl font-bold ${
                    service.accent === "yellow"
                      ? "text-white"
                      : "text-[#E7BF44]"
                  }`}
                >
                  0{service.id}.
                </span>
              </div>
              <h3
                className={`absolute bottom-4 left-4 right-4 text-xl md:text-2xl font-bold ${
                  service.accent === "yellow" ? "text-white" : "text-white"
                }`}
              >
                {service.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-700"
                  >
                    <span className="text-[#E7BF44] mr-2 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accent Border */}
            {service.accent === "yellow" && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E7BF44] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            )}
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-br from-[#E7BF44] to-[#D4A93A] rounded-2xl p-8 md:p-12 text-center text-white"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help you achieve your creative goals.
          Get in touch with our team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-white cursor-pointer text-[#48484A] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Service
          </button>
          <Link href="/contact">
            <button className="bg-transparent cursor-pointer border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      {/* Service Booking Modal */}
      <ServiceBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        services={services}
      />
    </div>
  );
};

export default Service;
