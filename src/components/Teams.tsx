"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Blessing Bassey",
    role: "Human Resource Manager, Scriptwriter, Associate Producer",
    image:
      "/assets/TEAM MEMBERS/BLESSING BASSEY HUMAN RESOURCE MANAGER: SCRIPTWRITER: ASSOCIATE PRODUCER.jpg",
  },
  {
    name: "Blossom Barrett",
    role: "Actor, Marketer",
    image: "/assets/TEAM MEMBERS/Blossom Barret.jpeg",
  },
  {
    name: "Clever Dickson",
    role: "Actor, Cinematographer",
    image: "/assets/TEAM MEMBERS/CLEVER DICKSON ACTOR: CINEMATOGRAPHER.jpeg",
  },
  {
    name: "Emmanuel Inyang",
    role: "Maintenance Officer, Musician, Sound Recordist",
    image:
      "/assets/TEAM MEMBERS/EMMANUEL INYANG MAINTENANCE OFFICER: MUSICIAN: SOUND RECORDIST.jpg",
  },
  {
    name: "Emmanuel Nemere",
    role: "Actor",
    image: "/assets/TEAM MEMBERS/EMMANUEL NEMERE ACTOR.jpeg",
  },
  {
    name: "Esther Manyo",
    role: "Makeup Artist, Actor, Singer",
    image: "/assets/TEAM MEMBERS/ESTHER MANYO MAKEUP ARTIST: ACTOR: SINGER.jpg",
  },
  {
    name: "Francis Eyo",
    role: "Studio Head, Musician",
    image: "/assets/TEAM MEMBERS/FRANCIS  EYO STUDIO HEAD: MUSICIAN.jpg",
  },
  {
    name: "Grandeur Amos",
    role: "Music Team Head, Producer",
    image: "/assets/TEAM MEMBERS/GRANDEUR AMOS MUSIC TEAM HEAD: PRODUCER.jpg",
  },
  {
    name: "Inimfon Inwang",
    role: "Cinematographer, Editor",
    image: "/assets/TEAM MEMBERS/INIMFON INWANG CINEMATOGRAPHER: EDITOR.jpg",
  },
  {
    name: "Isaac Brown",
    role: "CEO, Founder",
    image: "/assets/TEAM MEMBERS/ISAAC BROWN CEO:FOUNDER.jpg",
  },
  {
    name: "Marylyn Uyanah",
    role: "Secretary, Artiste",
    image: "/assets/TEAM MEMBERS/MARYLYN UYANAH SECRETARY: ARTISTE.jpg",
  },
  {
    name: "Rejoice Onyebuchi",
    role: "Artiste, Props and Set Designer",
    image:
      "/assets/TEAM MEMBERS/REJOICE ONYEBUCHI ARTISTE: PROPS AND SET DESIGNER.jpg",
  },
  {
    name: "Samuel Brown",
    role: "Team Member",
    image: "/assets/TEAM MEMBERS/SAMUEL BROWN.jpg",
  },
  {
    name: "Victor Ofum",
    role: "Artiste, Light Man",
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
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                  width={253}
                  height={253}
                  sizes="253px"
                  quality={90}
                  loading="lazy"
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
