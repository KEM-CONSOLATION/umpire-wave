"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Stats = () => {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Trigger counting animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [counted]);

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      icon: "🎬",
    },
    {
      number: "50+",
      label: "Artists Managed",
      icon: "🎤",
    },
    {
      number: "200+",
      label: "Events Covered",
      icon: "📸",
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: "⭐",
    },
  ];

  return (
    <section
      id="stats-section"
      className="relative w-full py-24 bg-[#09090b] overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E7BF44]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E7BF44]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_15px_rgba(231,191,68,0.2)]">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-3 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-bold text-[#E7BF44] uppercase tracking-[0.2em]">
                {stat.label}
              </div>
              <div className="mt-4 w-12 h-1 bg-[#E7BF44] mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
