"use client";
import React, { useState } from "react";

type ColorOption = "yellow-400" | "white" | "black";
type TextColorOption = "white" | "gray-700";

interface BackContent {
  heading: string;
  description: React.ReactNode; // Changed to ReactNode to support JSX elements
}

interface FlipCardProps {
  number: string;
  title: string;
  initialBg: ColorOption;
  flippedBg: ColorOption;
  initialTextColor: TextColorOption;
  flippedTextColor: TextColorOption;
  backContent: BackContent;
}

const FlipCard: React.FC<FlipCardProps> = ({
  number,
  title,
  initialBg,
  flippedBg,
  initialTextColor,
  flippedTextColor,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Map color names to actual Tailwind classes
  const bgColorMap: Record<ColorOption, string> = {
    "yellow-400": "bg-yellow-400", // For #E7BF44
    white: "bg-white",
    black: "bg-black",
  };

  const textColorMap: Record<TextColorOption, string> = {
    white: "text-white",
    "gray-700": "text-gray-700", // For #48484A
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
        {/* Front Side */}
        <div
          className={`absolute w-full h-full rounded-lg backface-hidden p-5 flex items-center justify-center ${bgColorMap[initialBg]} ${textColorMap[initialTextColor]}`}
        >
          <div className="space-y-8">
            <p className="text-start text-4xl font-normal">{number}</p>
            <p className="text-center text-4xl font-normal">{title}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={` shadow-md text-left text-sm absolute w-full h-full rounded-lg backface-hidden p-5 flex flex-col items-center justify-start overflow-y-auto ${bgColorMap[flippedBg]} ${textColorMap[flippedTextColor]} rotate-y-180`}
        >
          <h3 className="mb-3 ">{backContent.heading}</h3>
          <div className=" px-2 w-full">{backContent.description}</div>
        </div>
      </div>
    </div>
  );
};

// Add custom CSS for 3D transforms
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
            <li>1. Talent discovery & grooming</li>
            <li>2. Brand partnerships, PR, tour booking</li>
            <li>3. Content marketing & social media strategy</li>
          </ul>
        ),
      },
    },
    {
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
            <li>1. Spotify, Apple Music, Boomplay, Audiomack, etc.</li>
            <li>2. Royalty tracking and analytics</li>
            <li>3. Sync licensing for film and TV</li>
          </ul>
        ),
      },
    },
    {
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
            <li>1. Music recording, mixing & mastering.</li>
            <li>2. Voice-over recording</li>
            <li>3. Sound design & audio post-production</li>
            <li>4. Production beats & songwriting support</li>
          </ul>
        ),
      },
    },
    {
      number: "04.",
      title: "Studio & Equipment Rentals",
      initialBg: "black",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      fullWidth: true,
      backContent: {
        heading: "Need a creative space? We rent out:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Recording studios.</li>
            <li>2. Film and photography sets</li>
            <li>3. Lighting, cameras, and sound gear</li>
          </ul>
        ),
      },
    },
    {
      number: "05.",
      title: "Film & Video Production",
      initialBg: "white",
      flippedBg: "yellow-400",
      initialTextColor: "gray-700",
      flippedTextColor: "white",
      backContent: {
        heading: "From storytelling to screen, we bring concepts to life:",
        description: (
          <ul className="list-none space-y-[16px]">
            <li>1. Short films & feature films.</li>
            <li>2. Music video direction & production</li>
            <li>3. Commercials & branded content</li>
            <li>4. Documentaries</li>
          </ul>
        ),
      },
    },
    {
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
            <li>1. Concerts, festivals & launches.</li>
            <li>2. Livestream & multi-cam setup</li>
            <li>3. Interviews & red carpet coverage</li>
          </ul>
        ),
      },
    },
    {
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
            <li>1. Album covers, promo shots.</li>
            <li>2. Fashion/editorial photoshoots</li>
            <li>3. Event photography</li>
            <li>4. Studio rental for creatives</li>
          </ul>
        ),
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-2 2xl:mx-auto">
      <CSSOverrides />
      <div className="max-w-lg mx-auto text-center mt-16 mb-8">
        <p className="font-semibold text-2xl text-gray-700">
          Our Core Services
        </p>
        <p className="font-normal text-base text-gray-700">
          At Umpire Wave Studios, we bring ideas to life through a suite of
          premium multimedia services. Whether you&apos;re a musician,
          filmmaker, brand, or content creator, our end-to-end solutions are
          designed to elevate your vision and connect with audiences across the
          globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={
              service.fullWidth
                ? "col-span-1 md:col-span-3 w-full max-w-md"
                : "w-full max-w-md"
            }
          >
            <FlipCard
              number={service.number}
              title={service.title}
              initialBg={service.initialBg}
              flippedBg={service.flippedBg}
              initialTextColor={service.initialTextColor}
              flippedTextColor={service.flippedTextColor}
              backContent={service.backContent}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreServices;
