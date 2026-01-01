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
  FiMusic,
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

const artistesData: Record<
  string,
  {
    name: string;
    image: string;
    bio: string;
    genre: string[];
    achievements: string[];
    socialLinks?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
      tiktok?: string;
      spotify?: string;
      appleMusic?: string;
    };
  }
> = {
  "b-girl": {
    name: "B-Girl",
    image: "/assets/Artiste/B-GIRL.jpg",
    bio: "A dynamic and electrifying performer who brings energy and passion to every stage. B-Girl's unique sound and charismatic presence have made her a standout artist in the contemporary music scene.",
    genre: ["Afrobeats", "Hip-Hop", "R&B"],
    achievements: [
      "Featured in major music festivals",
      "Collaborations with top-tier artists",
      "Growing fan base across multiple platforms",
    ],
  },
  "izik-brown": {
    name: "Izik Brown",
    image: "/assets/Artiste/IZIK BROWN.jpeg",
    bio: "A talented musician and songwriter known for creating music that resonates with audiences. Izik Brown combines soulful melodies with powerful lyrics, delivering performances that leave lasting impressions.",
    genre: ["Afro-Pop", "Soul", "R&B"],
    achievements: [
      "Original compositions gaining recognition",
      "Live performances at notable venues",
      "Collaborative projects with industry professionals",
    ],
  },
  "rj-buchi": {
    name: "RJ Buchi",
    image: "/assets/Artiste/RJ BUCHI.jpg",
    bio: "An innovative artist pushing boundaries in contemporary music. RJ Buchi's distinctive style and creative approach to music production have established him as a forward-thinking talent in the industry.",
    genre: ["Afrobeats", "Alternative", "Electronic"],
    achievements: [
      "Innovative music production",
      "Unique artistic vision",
      "Growing recognition in the music community",
    ],
  },
  "vee-ofum": {
    name: "Vee Ofum",
    image: "/assets/Artiste/VEE OFUM.jpg",
    bio: "A versatile performer with a powerful voice and commanding stage presence. Vee Ofum's ability to connect with audiences through heartfelt performances has made her a beloved artist in the music scene.",
    genre: ["Gospel", "Contemporary", "R&B"],
    achievements: [
      "Inspirational performances",
      "Dedicated following",
      "Meaningful musical contributions",
    ],
  },
};

export default function ArtistePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const artiste = artistesData[slug];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!artiste) {
    return (
      <div className="relative">
        <WhatsAppWidget />
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#48484A] mb-4">
            Artiste Not Found
          </h1>
          <Link href="/artistes" className="text-[#E7BF44] hover:underline">
            Return to Artistes
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
        subtitle={`Discover ${artiste.name}`}
        image="/assets/Header_.png"
        currentPage={artiste.name}
        previousPage="Artistes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-[#48484A] hover:text-[#E7BF44] transition-colors cursor-pointer"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Artistes</span>
        </button>

        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          data-aos="fade-up"
        >
          {/* Artiste Image */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={artiste.image}
                alt={artiste.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
              />
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              {artiste.socialLinks?.instagram && (
                <a
                  href={artiste.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              )}
              {artiste.socialLinks?.facebook && (
                <a
                  href={artiste.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
              )}
              {artiste.socialLinks?.twitter && (
                <a
                  href={artiste.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </a>
              )}
              {artiste.socialLinks?.spotify && (
                <a
                  href={artiste.socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                  aria-label="Spotify"
                >
                  <FiMusic className="w-5 h-5" />
                </a>
              )}
              {artiste.socialLinks?.tiktok && (
                <a
                  href={artiste.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                  aria-label="TikTok"
                >
                  <SiTiktok className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Artiste Details */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48484A] mb-4">
                {artiste.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {artiste.genre.map((g, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#E7BF44]/10 text-[#E7BF44] rounded-full text-sm font-semibold"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                About
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {artiste.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                Highlights
              </h2>
              <ul className="space-y-3">
                {artiste.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#E7BF44] mt-1">•</span>
                    <span className="text-lg text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#E7BF44] text-[#48484A] font-semibold rounded-lg hover:bg-[#D4A93A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Book Performance
              </Link>
              <Link
                href="/music"
                className="inline-block px-8 py-4 border-2 border-[#E7BF44] text-[#E7BF44] font-semibold rounded-lg hover:bg-[#E7BF44]/10 transition-all duration-300 cursor-pointer"
              >
                View Music
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
