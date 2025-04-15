import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="max-w-7xl mx-[10px] 2xl:mx-auto">
      <div className="max-w-[512px] mx-auto text-center mt-[64px] mb-[32px]">
        <p className="font-[600] text-[24px] text-[#48484A]">
          Brands we work with
        </p>
        <p className="font-[400] text-[16px] text-[#48484A]">
          Trusted by 50+ of the world&apos;s leading companies
        </p>
      </div>

      <div className="brands-marquee">
        <div className="space-x-[16px] flex items-center">
          <Image
            src="/assets/brands.png"
            alt="Brand1"
            width={100}
            height={100}
            priority
            className="object-contain w-full"
          />
          <Image
            src="/assets/brands2.png"
            alt="Brand2"
            width={100}
            height={100}
            priority
            className="object-contain w-full"
          />
          <Image
            src="/assets/brands3.png"
            alt="Brand3"
            width={100}
            height={100}
            priority
            className="object-contain w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
