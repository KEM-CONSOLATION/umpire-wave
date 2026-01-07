"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

type ColorOption = "yellow-400" | "white" | "black";
type TextColorOption = "white" | "gray-700";

interface BackContent {
  heading: string;
  description: React.ReactNode;
}

interface FlipCardProps {
  imageSrc: string;
  flippedBg: ColorOption;
  flippedTextColor: TextColorOption;
  backContent: BackContent;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imageSrc,
  flippedBg,
  flippedTextColor,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const bgColorMap: Record<ColorOption, string> = {
    "yellow-400": "bg-yellow-400",
    white: "bg-white",
    black: "bg-black",
  };

  const textColorMap: Record<TextColorOption, string> = {
    white: "text-white",
    "gray-700": "text-gray-700",
  };

  return (
    <div
      className="h-96 w-full max-w-md perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full rounded-lg backface-hidden">
          <Image
            src={imageSrc}
            alt="Service"
            className="w-full h-full object-cover rounded-lg"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            loading="lazy"
          />
        </div>

        <div
          className={`shadow-md text-left text-sm absolute w-full h-full rounded-lg backface-hidden p-5 flex flex-col items-center justify-start overflow-y-auto ${bgColorMap[flippedBg]} ${textColorMap[flippedTextColor]} rotate-y-180`}
        >
          <h3 className="mb-3">{backContent.heading}</h3>
          <div className="px-2 w-full">{backContent.description}</div>
        </div>
      </div>
    </div>
  );
};

const CSSOverrides: React.FC = () => {
  return (
    <style jsx global>{`
      .perspective-1000 {
        perspective: 1000px;
      }
      .preserve-3d {
        transform-style: preserve-3d;
      }
      .backface-hidden {
        backface-visibility: hidden;
      }
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
    `}</style>
  );
};

interface ServiceItem {
  imageSrc: string;
  number: string;
  title: string;
  initialBg: ColorOption;
  flippedBg: ColorOption;
  initialTextColor: TextColorOption;
  flippedTextColor: TextColorOption;
  fullWidth?: boolean;
  backContent: BackContent;
}

const CoreServices: React.FC = () => {
  const services: ServiceItem[] = [
    {
      imageSrc: "/assets/artisteManagement.jpg",
      number: "01.",
      title: "Artiste Management & Promotion",
      initialBg: "yellow-400",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading:
          "We manage the careers of talented musicians, helping them grow their brand, connect with the right audiences, and secure meaningful opportunities. Our services include:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Career Development</li>
            <li>2. Artist Profile & Branding</li>
            <li>3. Promotion & Marketing</li>
            <li>4. Music Distribution</li>
          </ul>
        ),
      },
    },
    {
      imageSrc: "/assets/musicProduction.jpg",
      number: "02.",
      title: "Music Production & Distribution",
      initialBg: "white",
      flippedBg: "yellow-400",
      initialTextColor: "gray-700",
      flippedTextColor: "white",
      backContent: {
        heading:
          "Get your music heard on global platforms. We provide digital and physical distribution to ensure your sound reaches fans everywhere:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Professional music recording & beat production</li>
            <li>2. Mixing & mastering to industry standards</li>
            <li>3. Creative direction & sound development</li>
            <li>4. Release planning & scheduling</li>
            <li>5. Metadata, ISRC & catalog management</li>
            <li>
              6. Global digital distribution (Spotify, Apple Music, Audiomack,
              etc.)
            </li>
          </ul>
        ),
      },
    },
    {
      imageSrc: "/assets/studioRecording.jpg",
      number: "03.",
      title: "Recording Studio Services",
      initialBg: "yellow-400",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading:
          "Our state-of-the-art recording facility is equipped for top-tier sound production:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Vocal & instrumental recording</li>
            <li>2. Music, voice-over & podcast sessions</li>
            <li>3. Professional studio engineers</li>
            <li>4. High-end microphones & equipment</li>
            <li>5. Session planning & technical support</li>
            <li>6. Comfortable, creative recording environment</li>
          </ul>
        ),
      },
    },
    {
      imageSrc: "/assets/studioRentals.jpg",
      number: "04.",
      title: "Studio & Equipment Rentals",
      initialBg: "black",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading: "Need a creative space? We rent out:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Musical instruments & studio equipment</li>

            <li>2. Cameras, lenses & stabilizers</li>
            <li>3. Lighting, audio & grip equipment</li>
            <li>4. Film & photography accessories</li>
            <li>5. Equipment setup & technical support</li>
          </ul>
        ),
      },
    },

    {
      imageSrc: "/assets/eventCoverage.jpg",
      number: "06.",
      title: "Event Coverage & Livestream",
      initialBg: "yellow-400",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading: "Capture every moment with our professional event solutions:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Event video coverage & photography</li>

            <li>2. Multi-camera livestreaming setups</li>

            <li>3. Live sound capture & streaming</li>
            <li>4. Online broadcast to YouTube, Facebook, Instagram, etc.</li>
            <li>5. On-site technical crew & support</li>
            <li>6. Post-event edits and highlights</li>
          </ul>
        ),
      },
    },
    {
      imageSrc: "/assets/photography.jpg",
      number: "07.",
      title: "Photography & Photo Studio",
      initialBg: "white",
      flippedBg: "yellow-400",
      initialTextColor: "gray-700",
      flippedTextColor: "white",
      backContent: {
        heading: "Our photography arm delivers both creativity and quality:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Studio & outdoor photography</li>
            <li>2. Cinematography & film production</li>
            <li>3. Professional editing, color grading, and post-production</li>
            <li>4. Commercial, music video, and campaign content</li>
            <li>5. Portraits, events, and creative storytelling</li>
          </ul>
        ),
      },
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      data-aos="fade-up"
    >
      <CSSOverrides />
      <div className="max-w-lg mx-auto text-center mb-8">
        <p className="font-semibold text-2xl text-gray-700">
          {/* Our Core Services */}
          Where Creativity Meets Impact
        </p>
        <p className="font-normal text-base text-gray-700">
          {/* At Umpire Wave Studios, we bring ideas to life through a suite of
          premium multimedia services. Whether you&apos;re a musician,
          filmmaker, brand, or content creator, our end-to-end solutions are
          designed to elevate your vision and connect with audiences across the
          globe. */}
          Umpire Wave Studios is a full-service entertainment company fusing
          music, film, and visual arts. We&apos;re here to amplify African
          voices, empower creators, and deliver captivating experiences that
          resonate globally.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
        {services.map((service, index) => (
          <div key={index} className={"w-full max-w-md"}>
            <FlipCard
              imageSrc={service.imageSrc}
              flippedBg={service.flippedBg}
              flippedTextColor={service.flippedTextColor}
              backContent={service.backContent}
            />
          </div>
        ))}
      </div>
      <div className="mb-8"></div>
    </div>
  );
};

export default CoreServices;
