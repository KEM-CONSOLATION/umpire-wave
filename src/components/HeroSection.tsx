"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative min-h-[600px] flex items-center justify-center">
      {/* Social Media Links - Absolute Positioning */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-6"
      >
        {[
          { id: "facebook", url: "https://www.facebook.com/share/1DX7QdVcRs" },
          {
            id: "instagram",
            url: "https://www.instagram.com/_umpirewavestudio?igsh=YzljYTk1ODg3Zg==",
          },
          {
            id: "tiktok",
            url: "https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1",
          },
          {
            id: "youtube",
            url: "https://youtube.com/@umpirewave?si=1cRjpXv-gbmIXEyu",
          },
        ].map((social) => (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:scale-120 cursor-pointer p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/5"
          >
            <Image
              src={`/assets/${social.id}.svg`}
              alt={social.id}
              width={24}
              height={24}
              className="object-contain opacity-70 hover:opacity-100 transition-all filter grayscale hover:grayscale-0"
            />
          </Link>
        ))}
      </motion.div>

      {/* Hero Image Card - Centered */}
      <div
        className="w-full rounded-[40px] relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden group shadow-2xl"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/45 group-hover:bg-black/40 transition-colors duration-700 pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full px-6 lg:px-12"
        >
          <div className="max-w-[800px] space-y-[40px] mx-auto text-center">
            <motion.h1
              variants={itemVariants}
              className="font-bold text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[1.1] filter drop-shadow-2xl"
            >
              Umpire Wave <span className="text-[#E7BF44]">Studios</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-semibold text-[14px] lg:text-[18px] text-[#E7BF44] tracking-[0.3em] uppercase"
            >
              Sound. Vision. Influence.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-light text-[18px] lg:text-[24px] text-white/90 leading-relaxed max-w-2xl mx-auto"
            >
              Nigeria&apos;s multimedia powerhouse redefining creativity across
              music, film, and visual arts.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            >
              <Link href="/service" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[200px] font-bold text-[16px] text-[#1c1c1e] py-[18px] px-[36px] bg-[#E7BF44] rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(231,191,68,0.3)] cursor-pointer">
                  Explore Our Services
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[170px] font-bold text-[16px] text-white py-[18px] px-[36px] border border-white/30 rounded-full hover:border-[#E7BF44] hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer backdrop-blur-md">
                  Get In Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
