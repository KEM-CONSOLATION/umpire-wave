"use client";
import Brands from "@/components/Brands";
import Creativity from "@/components/Creativity";
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import CoreServices from "@/components/CoreServices";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  relative">
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/2347031896845"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/chat.svg"
            alt="Footer Icon"
            width={100}
            height={100}
            className="max-w-[100px] w-full cursor-pointer"
          />
        </a>
      </div>

      <Nav />
      <HeroSection />
      <Creativity />
      <Brands />
      <CoreServices />
      <Footer />
    </div>
  );
}
