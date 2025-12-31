"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto">
      <div className="flex items-center gap-[16px]">
        <div className="flex flex-col gap-4 hidden lg:block">
          <Link
            href="https://www.facebook.com/share/1DX7QdVcRs"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 cursor-pointer"
          >
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              width={40}
              height={40}
              priority
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.instagram.com/_umpirewavestudio?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 cursor-pointer"
          >
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={40}
              height={40}
              priority
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 cursor-pointer"
          >
            <Image
              src="/assets/tiktok.svg"
              alt="TikTok"
              width={40}
              height={40}
              priority
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link
            href="https://youtube.com/@umpirewave?si=1cRjpXv-gbmIXEyu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 cursor-pointer"
          >
            <Image
              src="/assets/youtube.svg"
              alt="YouTube"
              width={40}
              height={40}
              priority
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        <div
          className="flex-1 rounded-2xl relative h-full pb-[22px] lg:pb-[42px] pt-[20px] lg:pt-[86px] px-[10px] lg:px-[64px] bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: "url('/assets/hero.png')" }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
          <div className="relative z-10">
          <div className="max-w-[541px] mt-[84px] space-y-[24px] mx-auto text-center">
            <h1 className="font-[600] text-[20px] lg:text-[40px] text-[#E7BF44] leading-tight">
              Umpire Wave Studios
            </h1>
            <p className="font-[700] text-[12px] lg:text-[16px] text-[#FFFFFF] tracking-wider uppercase">
              Sound. Vision. Influence.
            </p>
            <p className="font-[400] text-[16px] lg:text-[20px] text-[#FFFFFF] leading-relaxed opacity-95">
              Nigeria&apos;s multimedia powerhouse redefining creativity across
              music, film, and visual arts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link href="/service" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[175px] font-[600] text-[16px] text-[#48484A] py-[12px] px-[24px] bg-[#E7BF44] rounded-[8px] hover:bg-[#D4A93A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                  Explore Our Services
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto min-w-[120px] font-[600] text-[16px] text-[#FFFFFF] py-[12px] px-[24px] border-2 border-[#E7BF44] rounded-[8px] hover:bg-[#E7BF44]/10 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end brands-marquee w-[500px] brands-marquee">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/artisteManagement.jpg"
                alt="Artiste Management"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <Image
                src="/assets/eventCoverage.jpg"
                alt="Event Coverage"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <Image
                src="/assets/musicProduction.jpg"
                alt="Music Production"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <Image
                src="/assets/photography.jpg"
                alt="Photography"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <Image
                src="/assets/studioRecording.jpg"
                alt="Studio Recording"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <Image
                src="/assets/studioRentals.jpg"
                alt="Studio Rentals"
                width={100}
                height={100}
                priority
                className="object-cover max-w-[100px] h-[100px] w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
          </div>
        </div>

        <div
          className="hidden lg:block cursor-pointer transition-transform hover:scale-110"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="Scroll down"
        >
          <Image
            src="/assets/scrollDown.png"
            alt="Scroll Down"
            width={50}
            height={50}
            priority
            className="object-contain w-full animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
