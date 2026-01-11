"use client";
import ImageWithSkeleton from "./ImageWithSkeleton";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createSlug } from "@/lib/utils";
import { getImageUrl } from "@/lib/cloudinary";

const teamMembers = [
  {
    name: "Isaac Brown",
    role: "Director",
    image: "/assets/TEAM MEMBERS/ISAAC BROWN CEO:FOUNDER.jpg",
  },
  {
    name: "Blessing Bassey",
    role: "HR / Scriptwriter",
    image:
      "/assets/TEAM MEMBERS/BLESSING BASSEY HUMAN RESOURCE MANAGER: SCRIPTWRITER: ASSOCIATE PRODUCER.jpg",
  },
  {
    name: "Grandeur Amos",
    role: "Music Producer / Talent Manager",
    image: "/assets/TEAM MEMBERS/GRANDEUR AMOS MUSIC TEAM HEAD: PRODUCER.jpg",
  },
  {
    name: "Francis Eyo",
    role: "Live Studio Manager / Mixing Engineer",
    image: "/assets/TEAM MEMBERS/FRANCIS  EYO STUDIO HEAD: MUSICIAN.jpg",
  },
  {
    name: "Inimfon Inwang",
    role: "Cinematography Lead / D.O.P",
    image: "/assets/TEAM MEMBERS/INIMFON INWANG CINEMATOGRAPHER: EDITOR.jpg",
  },
  {
    name: "Blossom Barrett",
    role: "CMO",
    image: "/assets/TEAM MEMBERS/Blossom Barret.jpeg",
  },
  {
    name: "Clever Dickson",
    role: "Production Manager / CAM Assistant",
    image: "/assets/TEAM MEMBERS/CLEVER DICKSON ACTOR: CINEMATOGRAPHER.jpeg",
  },
  {
    name: "Emmanuel Inyang Inyang",
    role: "Sound Recordist / Maintenance Officer",
    image:
      "/assets/TEAM MEMBERS/EMMANUEL INYANG MAINTENANCE OFFICER: MUSICIAN: SOUND RECORDIST.jpg",
  },
  {
    name: "Emmanuel Nemere",
    role: "Writer / Business PR",
    image: "/assets/TEAM MEMBERS/EMMANUEL NEMERE ACTOR.jpeg",
  },
  {
    name: "Esther Manyo",
    role: "Makeup Artist",
    image: "/assets/TEAM MEMBERS/ESTHER MANYO MAKEUP ARTIST: ACTOR: SINGER.jpg",
  },

  {
    name: "Marylyn Uyanah",
    role: "Secretary",
    image: "/assets/TEAM MEMBERS/MARYLYN UYANAH SECRETARY: ARTISTE.jpg",
  },
  {
    name: "Rejoice Onyebuchi",
    role: "Props and Set",
    image:
      "/assets/TEAM MEMBERS/REJOICE ONYEBUCHI ARTISTE: PROPS AND SET DESIGNER.jpg",
  },
  {
    name: "Samuel Brown",
    role: "BTS",
    image: "/assets/TEAM MEMBERS/SAMUEL BROWN.jpg",
  },
  {
    name: "Victor Ofum",
    role: "Gaffer",
    image: "/assets/TEAM MEMBERS/VICTOR OFUM ARTISTE: LIGHT MAN.jpg",
  },
];

const Teams = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  // Duplicate team members for seamless infinite scroll (need at least 3 copies)
  const duplicatedMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
  ];

  // Calculate the width of one full set (member width + gap)
  const itemWidth = 253; // w-[253px]
  const gap = 32; // gap-8 = 2rem = 32px
  const singleSetWidth = teamMembers.length * (itemWidth + gap);

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

        <div
          className="flex gap-8 animate-scroll"
          style={
            {
              "--scroll-width": `${singleSetWidth}px`,
            } as React.CSSProperties
          }
        >
          {duplicatedMembers.map((member, index) => {
            const slug = createSlug(member.name);
            return (
              <Link
                key={`${member.name}-${index}`}
                href={`/team/${slug}`}
                className="flex-shrink-0 space-y-4 w-[253px] text-center group cursor-pointer"
              >
                <div className="h-[253px] w-[253px] rounded-full bg-gray-200 overflow-hidden mx-auto shadow-lg ring-2 ring-gray-100 transition-transform duration-300 group-hover:scale-105">
                  <ImageWithSkeleton
                    src={getImageUrl(member.image, {
                      width: 253,
                      quality: 90,
                      format: "auto",
                    })}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    width={253}
                    height={253}
                    sizes="253px"
                    quality={90}
                    loading="lazy"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[16px] text-[#48484A] group-hover:text-[#E7BF44] transition-colors">
                    {member.name}
                  </p>
                  <p className="font-normal text-[12px] text-gray-600 mt-1">
                    {member.role}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;
