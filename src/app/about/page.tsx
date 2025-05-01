"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import About from "@/components/About";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className=" relative">
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/2349121096797"
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
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle="A culture-driven multimedia powerhouse redefining African creativity."
        image="/assets/Header_.png"
        currentPage="About"
        previousPage="Home"
      />

      <About />

      <Footer />
    </div>
  );
}
