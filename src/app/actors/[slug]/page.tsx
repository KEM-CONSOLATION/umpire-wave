"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiArrowLeft,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

const actorsData: Record<
  string,
  {
    name: string;
    image: string;
    bio: string;
    achievements: string[];
    specializations: string[];
    socialLinks?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
      tiktok?: string;
    };
  }
> = {
  "blossom-barrett": {
    name: "Blossom Barrett",
    image: "/assets/TEAM MEMBERS/BLOSSOM BARRETT ACTOR:MARKETER.jpg",
    bio: "Blossom: The Screen Siren!  With a versatility that dazzles  and a presence that captivates , she brings every role to life with mesmerizing ease . Audiences can't look away , and the industry can't get enough.",
    achievements: [
      "Dual expertise in acting and marketing",
      "Strong on-screen presence",
      "Strategic brand development",
    ],
    specializations: ["Drama", "Comedy", "Marketing"],
    socialLinks: {
      instagram: "https://www.instagram.com/blossom__barrett?igsh=dHN1M2g4OTk4MWZl",
      tiktok: "https://www.tiktok.com/@digitalblursome?_r=1&_t=ZS-92iFOcuZnTL",
    },
  },
  "clever-dickson": {
    name: "Clever Dickson",
    image: "/assets/actors/CLEVER DICKSON.jpg",
    bio: "A versatile actor known for bringing depth and authenticity to every character. With years of experience in film and television, Clever Dickson has established himself as a force to be reckoned with in the Nigerian entertainment industry.",
    achievements: [
      "Lead roles in multiple acclaimed productions",
      "Recognition for outstanding performances in dramatic roles",
      "Featured in award-winning film projects",
    ],
    specializations: ["Drama", "Action", "Comedy"],
    socialLinks: {
      facebook: "https://www.facebook.com/share/17sdkatrz4/?mibextid=wwXIfr",
      tiktok: "https://www.tiktok.com/@official_cjdickson?_r=1&_t=ZS-92iDwJgJA5E",
    },
  },
  "emmanuel-nemere": {
    name: "Emmanuel Nemere",
    image: "/assets/actors/EMMANUEL NEMERE.jpeg",
    bio: "An emerging talent with a passion for storytelling through acting. Emmanuel brings fresh perspectives and raw emotion to every role, captivating audiences with his natural charisma and dedication to the craft.",
    achievements: [
      "Rising star in contemporary Nigerian cinema",
      "Notable performances in independent films",
      "Recognized for versatility across genres",
    ],
    specializations: ["Drama", "Romance", "Thriller"],
    socialLinks: {
      instagram: "https://www.instagram.com/nemere2.8?igsh=ajcwd3J1cG43cnJk",
      tiktok: "https://www.tiktok.com/@nemereemmanuel28?_r=1&_t=ZS-92iGJnaiQwW",
    },
  },
  mimi: {
    name: "Mimi",
    image: "/assets/actors/MIMI.jpg",
    bio: "A dynamic performer who seamlessly transitions between comedic and dramatic roles. Mimi's magnetic presence on screen and ability to connect with audiences makes her one of the most sought-after talents in the industry.",
    achievements: [
      "Award-nominated performances",
      "Featured in blockbuster productions",
      "Praised for comedic timing and emotional depth",
    ],
    specializations: ["Comedy", "Drama", "Romance"],
  },
  "queeneth-bassey": {
    name: "Queeneth Bassey",
    image: "/assets/actors/QUEENETH BASSEY.jpeg",
    bio: "A talented actress with a gift for embodying complex characters. Queeneth's commitment to authenticity and her ability to convey nuanced emotions has earned her critical acclaim and a loyal following.",
    achievements: [
      "Standout performances in leading roles",
      "Recognition for character development",
      "Featured in critically acclaimed productions",
    ],
    specializations: ["Drama", "Period Pieces", "Romance"],
  },
};

export default function ActorPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const actor = actorsData[slug];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!actor) {
    return (
      <div className="relative">
        <WhatsAppWidget />
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#48484A] mb-4">
            Actor Not Found
          </h1>
          <Link href="/actors" className="text-[#E7BF44] hover:underline">
            Return to Actors
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <WhatsAppWidget />
      <Nav />
      <HeaderCard
        title="Sound. Vision. Influence."
        subtitle={`Meet ${actor.name}`}
        image="/assets/Header_.png"
        currentPage={actor.name}
        previousPage="Actors"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-[#48484A] hover:text-[#E7BF44] transition-colors cursor-pointer"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Actors</span>
        </button>

        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          data-aos="fade-up"
        >
          {/* Actor Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={actor.image}
                alt={actor.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
              />
            </div>
            {/* Social Links */}
            {actor.socialLinks && (
              <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                {actor.socialLinks.instagram && (
                  <a
                    href={actor.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                )}
                {actor.socialLinks.facebook && (
                  <a
                    href={actor.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="w-5 h-5" />
                  </a>
                )}
                {actor.socialLinks.twitter && (
                  <a
                    href={actor.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                )}
                {actor.socialLinks.tiktok && (
                  <a
                    href={actor.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="TikTok"
                  >
                    <SiTiktok className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Actor Details */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48484A] mb-4">
                {actor.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {actor.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#E7BF44]/10 text-[#E7BF44] rounded-full text-sm font-semibold"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                About
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {actor.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                Achievements
              </h2>
              <ul className="space-y-3">
                {actor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#E7BF44] mt-1">•</span>
                    <span className="text-lg text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#E7BF44] text-[#48484A] font-semibold rounded-lg hover:bg-[#D4A93A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Book for Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
