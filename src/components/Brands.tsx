"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto" data-aos="fade-up">
      <div className="max-w-[512px] mx-auto text-center mt-[64px] mb-[32px]">
        <p className="font-[600] text-[24px] text-[#48484A]">
          Brands we work with
        </p>
        <p className="font-[400] text-[16px] text-[#48484A]">
          Trusted by 50+ of the world&apos;s leading companies
        </p>
      </div>

      <div className="brands-marquee">
        <div className="space-x-[32px] flex items-center">
          <Image
            src="/assets/brands.png"
            alt="Brand1"
            width={180}
            height={80}
            priority
            className="object-contain max-w-[180px] h-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/brands2.png"
            alt="Brand2"
            width={180}
            height={80}
            priority
            className="object-contain max-w-[180px] h-auto opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/assets/brands3.png"
            alt="Brand3"
            width={180}
            height={80}
            priority
            className="object-contain max-w-[180px] h-auto opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
