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
  return (
    <div className="px-4" data-aos="fade-up">
      <div className="max-w-lg mx-auto text-center mt-16 mb-8">
        <p className="font-semibold text-2xl text-gray-700">
          The Wave Makers Behind the Scenes
        </p>
        <p className="font-normal text-base text-gray-700 mt-2">
          Our team is a blend of diverse talents—directors, producers,
          engineers, designers, marketers, and dreamers—all working together to
          push the boundaries of music, film, and visual art in Africa and
          beyond.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto scrollbar-hidden ">
        <div className="flex gap-6 min-w-max px-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 space-y-4 max-w-[253px] w-full text-center"
            >
              <div className="h-[253px] w-[253px] rounded-full bg-gray-200 overflow-hidden mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <p className="font-semibold text-[16px] text-[#48484A]">
                  {member.name}
                </p>
                <p className="font-normal text-[12px] text-[#48484A]">
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
