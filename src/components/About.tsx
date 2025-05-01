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
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto mt-[45px] space-y-[20px]">
      <div className=" place-items-center grid gap-[20px] md:flex items-center md:justify-between">
        <div className=" max-w-[617px] w-full" data-aos="fade-up">
          <Image
            src="/assets/About1.svg"
            alt="Image1"
            width={100}
            height={100}
            className="object-cover max-w-[600px]  w-full"
          />
        </div>
        <div className=" max-w-[541px] space-y-[16px]" data-aos="fade-down">
          <p className=" font-[600] text-[12px] text-[#E7BF44]">
            Where Creativity Meets Purpose
          </p>
          <p className=" font-[700] text-[40px] text-[#48484A]">
            About Umpire Wave Studios
          </p>
          <p className=" font-[400] text-[20px] text-[#48484A]">
            Founded in Nigeria, Umpire Wave Studios was built on a bold dream—to
            become a hub for limitless artistic expression across Africa. Today,
            we are more than a multimedia company; we are a community of
            visionary thinkers, creators, and doers. Our mission is to empower
            talent, tell unforgettable stories, and connect with audiences
            through the power of sound, vision, and influence.
          </p>

          <Link href="/contact">
            <p className=" font-[600] inline-block text-[16px] text-[#FFFFFF]  bg-[#E7BF44] rounded-[8px] py-[12px] px-[10px]">
              Contact us now
            </p>
          </Link>
        </div>
      </div>

      <div
        className=" grid place-items-center gap-[20px] md:flex items-center md:justify-between"
        data-aos="fade-up"
      >
        <div className=" max-w-[541px] space-y-[16px] ">
          <p className=" font-[700] text-[40px] text-[#48484A]">
            The Heartbeat of Umpire Wave
          </p>
          <p className=" font-[400] text-[20px] text-[#48484A]">
            At Umpire Wave Studios, our work is fueled by more than just
            talent—it&apos;s powered by purpose. These core values are the
            rhythm behind our creativity, guiding every project, collaboration,
            and story we tell. They&apos;re not just what we believe
            in-they&apos;re who we are.
          </p>
        </div>
        <div className=" max-w-[617px] w-full">
          <Image
            src="/assets/About2.svg"
            alt="Image1"
            width={100}
            height={100}
            className="object-cover max-w-[600px]  w-full"
          />
        </div>
      </div>

      <Teams />
    </div>
  );
};

export default About;
