"use client";

import ImageWithSkeleton from "./ImageWithSkeleton";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getImageUrl } from "@/lib/cloudinary";
const Creativity = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto">
      <div className="max-w-[512px] mx-auto text-center mt-[64px] mb-[32px]">
        <p className="font-[600] text-[24px] text-[#48484A]">
          Where Creativity Meets Impact
        </p>
        <p className="font-[400] text-[16px] text-[#48484A]">
          Umpire Wave Studios is a full-service entertainment company fusing
          music, film, and visual arts. We&apos;re here to amplify African
          voices, empower creators, and deliver captivating experiences that
          resonate globally.
        </p>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] place-items-center"
        data-aos="fade-up"
      >
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/artisteManagement.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Artiste Management"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/eventCoverage.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Event Coverage"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/musicProduction.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Music Production"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/photography.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Photography"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/studioRecording.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Studio Recording"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-[400px] h-[410px] rounded-[8px] overflow-hidden">
          <ImageWithSkeleton
            src={getImageUrl("/assets/studioRentals.JPG", {
              width: 800,
              quality: 90,
            })}
            alt="Studio Rentals"
            width={400}
            height={410}
            sizes="400px"
            quality={90}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Creativity;
