"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Teams from "./Teams";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      description:
        "We push boundaries and explore new creative frontiers, constantly evolving to stay at the forefront of multimedia excellence.",
    },
    {
      title: "Excellence",
      description:
        "Every project is crafted with meticulous attention to detail, ensuring the highest quality in everything we deliver.",
    },
    {
      title: "Authenticity",
      description:
        "We celebrate authentic voices and stories, creating content that resonates with genuine emotion and cultural depth.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of collective creativity, bringing together diverse talents to create something extraordinary.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/Images/IMG_4206.jpeg"
                alt="Umpire Wave Studios"
                width={617}
                height={600}
                className="object-cover w-full h-auto"
                priority
                sizes="(max-width: 1024px) 100vw, 617px"
                quality={90}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
            <div className="inline-block">
              <span className="text-sm font-semibold text-[#E7BF44] uppercase tracking-wider">
                Where Creativity Meets Purpose
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48484A] leading-tight">
              About Umpire Wave Studios
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Founded in Nigeria, Umpire Wave Studios was built on a bold
              dream—to become a hub for limitless artistic expression across
              Africa. Today, we are more than a multimedia company; we are a
              community of visionary thinkers, creators, and doers.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our mission is to empower talent, tell unforgettable stories, and
              connect with audiences through the power of sound, vision, and
              influence.
            </p>
            <Link href="/contact">
              <button className="mt-6 font-semibold cursor-pointer text-base md:text-lg text-white bg-[#E7BF44] hover:bg-[#D4A93A] rounded-lg py-4 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-20 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#48484A] mb-6">
                The Heartbeat of Umpire Wave
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                At Umpire Wave Studios, our work is fueled by more than just
                talent—it&apos;s powered by purpose. These core values are the
                rhythm behind our creativity, guiding every project,
                collaboration, and story we tell. They&apos;re not just what we
                believe in—they&apos;re who we are.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-bold text-[#48484A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
          >
            <Image
              src="/assets/Images/IMG_4207.jpeg"
              alt="Core Values"
              width={617}
              height={600}
              className="object-cover w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 617px"
              quality={90}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <Teams />
    </div>
  );
};

export default About;
