"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto">
      <div className="flex items-center gap-[16px]">
        <div className="space-y-[16px] hidden lg:block animate-pulse space-x-[10px]">
          <Link
            href="https://www.facebook.com/share/1DX7QdVcRs"
            target="_blank"
          >
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              width={50}
              height={50}
              priority
              className="object-contain w-full"
            />
          </Link>
          <Link
            href="https://www.instagram.com/_umpirewavestudio?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
          >
            <Image
              src="/assets/instagram.svg"
              alt="Instagram"
              width={50}
              height={50}
              priority
              className="object-contain w-full"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1"
            target="_blank"
          >
            <Image
              src="/assets/tiktok.svg"
              alt="TikTok"
              width={50}
              height={50}
              priority
              className="object-contain w-full"
            />
          </Link>
          {/* <Image
            src="/assets/twitter.svg"
            alt="Twitter"
            width={50}
            height={50}
            priority
            className="object-contain w-full"
          /> */}
          <Link
            href="https://youtube.com/@umpirewave?si=1cRjpXv-gbmIXEyu"
            target="_blank"
          >
            <Image
              src="/assets/youtube.svg"
              alt="YouTube"
              width={50}
              height={50}
              priority
              className="object-contain w-full"
            />
          </Link>
        </div>

        <div
          className="flex-1 rounded-2xl relative h-full pb-[22px] lg:pb-[42px] pt-[20px] lg:pt-[86px] px-[10px] lg:px-[64px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/hero.png')" }}
        >
          <div className="max-w-[541px] mt-[84px] space-y-[24px] mx-auto text-center">
            <p className="font-[600] text-[20px] lg:text-[40px] text-[#E7BF44]">
              Umpire Wave Studios
            </p>
            <p className="font-[700] text-[12px] lg:text-[16px] text-[#FFFFFF]">
              Sound. Vision. Influence.
            </p>
            <p className="font-[400] text-[16px] lg:text-[20px] text-[#FFFFFF]">
              Nigeria’s multimedia powerhouse redefining creativity across
              music, film, and visual arts.
            </p>

            <div className=" space-y-[10px] space-x-[20px] w-full">
              <Link href="/service">
                <p className=" lg:max-w-[175px] w-full text-center block lg:inline-block  font-[600] text-[16px] text-[#FFFFFF] py-[12px] px-[10px] bg-[#E7BF44] rounded-[8px]">
                  Explore Our Services
                </p>
              </Link>
              <Link href="/contact">
                <p className="   lg:max-w-[120px] w-full text-center block lg:inline-block  font-[600] text-[16px] text-[#FFFFFF] py-[12px] px-[10px] border border-[#E7BF44] rounded-[8px]">
                  Get In Touch
                </p>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end brands-marquee w-[500px] brands-marquee">
            <div className="flex items-center space-x-[16px]">
              <Image
                src="/assets/artisteManagement.jpg"
                alt="Hero Image 1"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
              <Image
                src="/assets/eventCoverage.jpg"
                alt="Hero Image 2"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
              <Image
                src="/assets/musicProduction.jpg"
                alt="Hero Image 2"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
              <Image
                src="/assets/photography.jpg"
                alt="Hero Image 2"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
              <Image
                src="/assets/studioRecording.jpg"
                alt="Hero Image 2"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
              <Image
                src="/assets/studioRentals.jpg"
                alt="Hero Image 2"
                width={100}
                height={100}
                priority
                className="object-contain max-w-[100px] h-[100px] w-full"
              />
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block cursor-pointer animate-bounce"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <Image
            src="/assets/scrollDown.png"
            alt="Scroll Down"
            width={50}
            height={50}
            priority
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
