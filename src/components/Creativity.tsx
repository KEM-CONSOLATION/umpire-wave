import Image from "next/image";
import React from "react";

const Creativity = () => {
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

      <div className="grid md:grid-cols-3 gap-[20px] place-items-center">
        <div className="space-y-[16px]">
          <Image
            src="/assets/image1.png"
            alt="Image1"
            width={400}
            height={410}
            priority
            className="object-contain max-w-[400px] w-full h-[410px] transform transition duration-300 ease-in-out hover:scale-105"
          />
          <Image
            src="/assets/image4.png"
            alt="Image4"
            width={400}
            height={240}
            priority
            className="object-contain max-w-[400px] w-full h-[240px] transform transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="space-y-[16px]">
          <Image
            src="/assets/image2.png"
            alt="Image2"
            width={400}
            height={324}
            priority
            className="object-contain max-w-[400px] w-full h-[324px] transform transition duration-300 ease-in-out hover:scale-105"
          />
          <Image
            src="/assets/image5.png"
            alt="Image5"
            width={400}
            height={324}
            priority
            className="object-contain max-w-[400px] w-full h-[324px] transform transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="space-y-[16px]">
          <Image
            src="/assets/image3.png"
            alt="Image3"
            width={400}
            height={240}
            priority
            className="object-contain max-w-[400px] w-full h-[240px] transform transition duration-300 ease-in-out hover:scale-105"
          />
          <Image
            src="/assets/image6.png"
            alt="Image6"
            width={400}
            height={410}
            priority
            className="object-contain max-w-[400px] w-full h-[410px] transform transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Creativity;
