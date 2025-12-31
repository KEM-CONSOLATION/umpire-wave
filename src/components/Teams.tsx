"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Augustine Innocent",
    role: "Network Security Engineer",
    image: "/assets/team.png",
  },
  {
    name: "Adaora Okonkwo",
    role: "Creative Director",
    image: "/assets/team.png",
  },
  {
    name: "Femi Johnson",
    role: "Music Producer",
    image: "/assets/team.png",
  },
  {
    name: "Zainab Musa",
    role: "Visual Artist",
    image: "/assets/team.png",
  },
  {
    name: "Chinedu Nwachukwu",
    role: "Film Director",
    image: "/assets/team.png",
  },
  {
    name: "Amaka Ibeh",
    role: "Marketing Strategist",
    image: "/assets/team.png",
  },
];

const Teams = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  // Duplicate team members for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="px-4 py-16" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="font-semibold text-3xl md:text-4xl text-[#48484A] mb-4">
          The Wave Makers Behind the Scenes
        </p>
        <p className="font-normal text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Our team is a blend of diverse talents—directors, producers,
          engineers, designers, marketers, and dreamers—all working together to
          push the boundaries of music, film, and visual art in Africa and
          beyond.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-scroll">
          {duplicatedMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="flex-shrink-0 space-y-4 w-[253px] text-center"
            >
              <div className="h-[253px] w-[253px] rounded-full bg-gray-200 overflow-hidden mx-auto shadow-lg ring-2 ring-gray-100 transition-transform duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  width={253}
                  height={253}
                />
              </div>
              <div>
                <p className="font-semibold text-[16px] text-[#48484A]">
                  {member.name}
                </p>
                <p className="font-normal text-[12px] text-gray-600 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
