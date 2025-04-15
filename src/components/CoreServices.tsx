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
          className={`absolute w-full h-full rounded-lg backface-hidden p-5 flex flex-col items-center justify-start overflow-y-auto ${bgColorMap[flippedBg]} ${textColorMap[flippedTextColor]} rotate-y-180`}
        >
          <h3 className="text-lg font-semibold mb-3 text-center">
            {backContent.heading}
          </h3>
          <div className="text-left text-sm px-2 w-full">
            {backContent.description}
          </div>
          <button className="mt-4 px-4 py-2 border rounded-lg hover:bg-opacity-10 hover:bg-black transition-colors">
            Learn More
          </button>
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
          <ul className="list-disc pl-5 space-y-1">
            <li>Talent discovery & grooming</li>
            <li>Career planning & development</li>
            <li>Tour scheduling & bookings</li>
            <li>Media training & public relations</li>
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
          "Our state-of-the-art studios and veteran producers help artists create remarkable music. We provide:",
        description: (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Professional recording facilities</li>
            <li>Expert sound engineering & mixing</li>
            <li>Album mastering & production</li>
            <li>Digital distribution to global platforms</li>
          </ul>
        ),
      },
    },
    {
      number: "03.",
      title: "Event Production & Management",
      initialBg: "yellow-400",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading:
          "From intimate showcases to major festivals, we handle every aspect of event planning and execution:",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Venue selection & management</li>
            <li>Technical production & equipment</li>
            <li>Talent booking & coordination</li>
            <li>Marketing & ticket sales</li>
          </ul>
        ),
      },
    },
    {
      number: "04.",
      title: "Video Production & Direction",
      initialBg: "black",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      fullWidth: true,
      backContent: {
        heading:
          "We manage the careers of talented musicians, helping them grow their brand, connect with the right audiences, and secure meaningful opportunities. Our services include:",
        description: (
          <ol className="list-decimal pl-5 space-y-1">
            <li>Talent discovery & grooming</li>
            <li>Music video conceptualization & production</li>
            <li>Documentary filmmaking</li>
            <li>Live performance captures</li>
            <li>Post-production & visual effects</li>
          </ol>
        ),
      },
    },
    {
      number: "05.",
      title: "Social Media Management",
      initialBg: "white",
      flippedBg: "yellow-400",
      initialTextColor: "gray-700",
      flippedTextColor: "white",
      backContent: {
        heading:
          "We build and maintain dynamic social media presences that grow your audience and strengthen fan relationships:",
        description: (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Content calendar creation & management</li>
            <li>Community engagement & growth</li>
            <li>Analytics & performance optimization</li>
            <li>Paid promotion & influencer partnerships</li>
          </ul>
        ),
      },
    },
    {
      number: "06.",
      title: "Brand Development & Design",
      initialBg: "yellow-400",
      flippedBg: "white",
      initialTextColor: "white",
      flippedTextColor: "gray-700",
      backContent: {
        heading:
          "Our branding experts help you define and communicate your unique identity through:",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Logo design & visual identity systems</li>
            <li>Brand positioning & strategy</li>
            <li>Merchandise design & production</li>
            <li>Press kits & promotional materials</li>
          </ul>
        ),
      },
    },
    {
      number: "07.",
      title: "Content Strategy & Creation",
      initialBg: "white",
      flippedBg: "yellow-400",
      initialTextColor: "gray-700",
      flippedTextColor: "white",
      backContent: {
        heading:
          "We develop comprehensive content plans that tell your story across multiple platforms:",
        description: (
          <ul className="list-disc pl-5 space-y-1 text-white">
            <li>Photography & visual asset creation</li>
            <li>Copywriting & storytelling</li>
            <li>Website content development</li>
            <li>Audio & podcast production</li>
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
