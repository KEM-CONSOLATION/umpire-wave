"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getImageUrl } from "@/lib/cloudinary";
import {
  FiArrowLeft,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { SiTiktok, SiYoutube } from "react-icons/si";

const teamMembersData: Record<
  string,
  {
    name: string;
    role: string;
    image: string;
    bio: string;
    responsibilities: string[];
    achievements?: string[];
    socialLinks?: {
      instagram?: string;
      facebook?: string;
      twitter?: string;
      tiktok?: string;
      youtube?: string;
    };
  }
> = {
  "blessing-bassey": {
    name: "Blessing Bassey",
    role: "HR / Scriptwriter",
    image:
      "/assets/TEAM MEMBERS/BLESSING BASSEY HUMAN RESOURCE MANAGER: SCRIPTWRITER: ASSOCIATE PRODUCER.jpg",
    bio: "Blessing Bassey brings a unique blend of organizational excellence and creative storytelling to Umpire Wave. As our Human Resource Manager, she ensures our team thrives in a supportive and dynamic environment, while her scriptwriting talents contribute to compelling narratives that resonate with audiences.",
    responsibilities: [
      "Human resource management and team development",
      "Scriptwriting and narrative development",
      "Associate production on key projects",
    ],
    achievements: [
      "Streamlined HR processes for team efficiency",
      "Contributed scripts to multiple successful productions",
      "Fostered a collaborative team culture",
    ],
  },
  "blossom-barrett": {
    name: "Blossom Barrett",
    role: "CMO",
    image: "/assets/TEAM MEMBERS/Blossom Barret.jpeg",
    bio: "Blossom Barrett is our Chief Marketing Officer, driving brand visibility and strategic growth at Umpire Wave. With her expertise in marketing and her dynamic presence, she ensures our creative projects reach the right audiences and make a lasting impact in the industry.",
    responsibilities: [
      "Strategic marketing and brand development",
      "Digital marketing and social media strategy",
      "Brand positioning and market expansion",
    ],
    achievements: [
      "Developed comprehensive marketing strategies",
      "Increased brand visibility across platforms",
      "Led successful campaign launches",
    ],
    socialLinks: {
      instagram:
        "https://www.instagram.com/blossom__barrett?igsh=dHN1M2g4OTk4MWZl",
      tiktok: "https://www.tiktok.com/@digitalblursome?_r=1&_t=ZS-92iFOcuZnTL",
    },
  },
  "clever-dickson": {
    name: "Clever Dickson",
    role: "Production Manager / CAM Assistant",
    image: "/assets/TEAM MEMBERS/CLEVER DICKSON ACTOR: CINEMATOGRAPHER.jpeg",
    bio: "Clever Dickson is a versatile professional who excels both behind and in front of the camera. As our Production Manager, he orchestrates seamless production workflows, while his cinematography skills ensure every frame captures the essence of our creative vision.",
    responsibilities: [
      "Production management and coordination",
      "Camera assistance and cinematography",
      "On-set operations and logistics",
    ],
    achievements: [
      "Managed multiple successful productions",
      "Maintained high production quality standards",
      "Optimized production workflows for efficiency",
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/share/17sdkatrz4/?mibextid=wwXIfr",
      tiktok:
        "https://www.tiktok.com/@official_cjdickson?_r=1&_t=ZS-92iDwJgJA5E",
    },
  },
  "emmanuel-inyang": {
    name: "Emmanuel Inyang",
    role: "Sound Recordist / Logistics",
    image:
      "/assets/TEAM MEMBERS/EMMANUEL INYANG MAINTENANCE OFFICER: MUSICIAN: SOUND RECORDIST.jpg",
    bio: "Emmanuel Inyang is the technical backbone of our audio production. With expertise in sound recording and logistics management, he ensures every project has the perfect audio quality and seamless operational support needed for success.",
    responsibilities: [
      "Sound recording and audio engineering",
      "Logistics and equipment management",
      "Maintenance of studio and field equipment",
    ],
    achievements: [
      "Delivered exceptional audio quality on all projects",
      "Streamlined logistics operations",
      "Maintained 100% equipment reliability",
    ],
  },
  "emmanuel-nemere": {
    name: "Emmanuel Nemere",
    role: "Writer / Business PR",
    image: "/assets/TEAM MEMBERS/EMMANUEL NEMERE ACTOR.jpeg",
    bio: "Emmanuel Nemere combines creative writing with strategic public relations expertise. His ability to craft compelling narratives and manage business communications makes him an essential part of Umpire Wave's creative and business operations.",
    responsibilities: [
      "Content writing and creative development",
      "Business public relations and communications",
      "Strategic messaging and brand voice",
    ],
    achievements: [
      "Developed key messaging strategies",
      "Enhanced brand communication across channels",
      "Contributed to successful PR campaigns",
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/nemere2.8?igsh=ajcwd3J1cG43cnJk",
      tiktok: "https://www.tiktok.com/@nemereemmanuel28?_r=1&_t=ZS-92iGJnaiQwW",
    },
  },
  "esther-manyo": {
    name: "Esther Manyo",
    role: "Makeup Artist",
    image: "/assets/TEAM MEMBERS/ESTHER MANYO MAKEUP ARTIST: ACTOR: SINGER.jpg",
    bio: "Esther Manyo brings artistic vision to every production through her exceptional makeup artistry. Her attention to detail and creative flair ensures that every talent looks their absolute best on screen, enhancing the visual storytelling of our projects.",
    responsibilities: [
      "Makeup artistry for productions",
      "Character design through makeup",
      "On-set beauty and styling support",
    ],
    achievements: [
      "Created stunning makeup looks for major productions",
      "Worked with diverse talent and character types",
      "Maintained consistency across production schedules",
    ],
  },
  "francis-eyo": {
    name: "Francis Eyo",
    role: "Live Studio Manager / Mixing Engineer",
    image: "/assets/TEAM MEMBERS/FRANCIS  EYO STUDIO HEAD: MUSICIAN.jpg",
    bio: "Francis Eyo is the sonic architect of Umpire Wave. As our Live Studio Manager and Mixing Engineer, he oversees all studio operations and ensures that every mix reaches professional standards, bringing out the best in every recording.",
    responsibilities: [
      "Studio operations management",
      "Audio mixing and mastering",
      "Technical direction for recording sessions",
    ],
    achievements: [
      "Managed high-profile recording sessions",
      "Delivered award-worthy audio mixes",
      "Maintained state-of-the-art studio standards",
    ],
  },
  "grandeur-amos": {
    name: "Grandeur Amos",
    role: "Music Producer / Talent Manager",
    image: "/assets/TEAM MEMBERS/GRANDEUR AMOS MUSIC TEAM HEAD: PRODUCER.jpg",
    bio: "Grandeur Amos is the creative force behind our music production. As both a talented producer and talent manager, he not only creates exceptional music but also nurtures and guides artists to reach their full potential in the industry.",
    responsibilities: [
      "Music production and arrangement",
      "Talent management and artist development",
      "Creative direction for music projects",
    ],
    achievements: [
      "Produced multiple successful tracks",
      "Developed emerging talent into industry stars",
      "Led music team to creative excellence",
    ],
  },
  "inimfon-inwang": {
    name: "Inimfon Inwang",
    role: "Cinematography Lead / D.O.P",
    image: "/assets/TEAM MEMBERS/INIMFON INWANG CINEMATOGRAPHER: EDITOR.jpg",
    bio: "Inimfon inwang is a dedicated cinematographer with a strong focus on visual storytelling. He brings a clear eye for composition, lighting, and movement, capturing authentic moments and translating ideas into clean, compelling visuals. With a calm, detail-driven approach, he is committed to delivering high-quality imagery that supports the story and connects with audiences.",
    responsibilities: [
      "Cinematography and visual direction",
      "Director of Photography duties",
      "Video editing and post-production",
    ],
    achievements: [
      "Captured award-winning cinematography",
      "Led visual direction on major projects",
      "Seamlessly integrated cinematography and editing",
    ],
  },
  "isaac-brown": {
    name: "Isaac Brown",
    role: "Director",
    image: "/assets/TEAM MEMBERS/ISAAC BROWN CEO:FOUNDER.jpg",
    bio: "Isaac Brown is the visionary leader and founder of Umpire Wave. As Director, he oversees all creative and strategic decisions, ensuring that every project aligns with the company's mission to push the boundaries of African creativity in music, film, and visual arts.",
    responsibilities: [
      "Creative and strategic direction",
      "Project oversight and quality control",
      "Leadership and team development",
    ],
    achievements: [
      "Founded and grew Umpire Wave into a multimedia powerhouse",
      "Directed numerous successful productions",
      "Established the company as a leader in African creativity",
    ],
  },
  "marylyn-uyanah": {
    name: "Marylyn Uyanah",
    role: "Secretary",
    image: "/assets/TEAM MEMBERS/MARYLYN UYANAH SECRETARY: ARTISTE.jpg",
    bio: "Marylyn Uyanah ensures the smooth operation of Umpire Wave through her exceptional organizational and administrative skills. As our Secretary, she keeps everything running efficiently while also contributing her artistic talents to various projects.",
    responsibilities: [
      "Administrative support and coordination",
      "Documentation and record keeping",
      "Client and stakeholder communication",
    ],
    achievements: [
      "Streamlined administrative processes",
      "Maintained excellent organizational standards",
      "Supported successful project completions",
    ],
  },
  "rejoice-onyebuchi": {
    name: "Rejoice Onyebuchi",
    role: "Props and Set",
    image:
      "/assets/TEAM MEMBERS/REJOICE ONYEBUCHI ARTISTE: PROPS AND SET DESIGNER.jpg",
    bio: "Rejoice Onyebuchi is our creative set and props designer, bringing stories to life through meticulously designed environments. Her artistic vision and attention to detail ensure that every production has the perfect visual setting to enhance the narrative.",
    responsibilities: [
      "Set design and construction",
      "Props sourcing and creation",
      "Visual environment development",
    ],
    achievements: [
      "Designed stunning sets for multiple productions",
      "Created memorable props and visual elements",
      "Enhanced storytelling through visual design",
    ],
  },
  "samuel-brown": {
    name: "Samuel Brown",
    role: "BTS",
    image: "/assets/TEAM MEMBERS/SAMUEL BROWN.jpg",
    bio: "Samuel Brown captures the behind-the-scenes magic that happens on every production. As our BTS specialist, he documents the creative process, giving audiences an intimate look at how our projects come to life and showcasing the dedication of our team.",
    responsibilities: [
      "Behind-the-scenes documentation",
      "Production process photography and videography",
      "Content creation for marketing and social media",
    ],
    achievements: [
      "Created compelling BTS content for major projects",
      "Enhanced brand storytelling through documentation",
      "Built audience engagement through authentic content",
    ],
  },
  "victor-ofum": {
    name: "Victor Ofum",
    role: "Gaffer",
    image: "/assets/TEAM MEMBERS/VICTOR OFUM ARTISTE: LIGHT MAN.jpg",
    bio: "Victor Ofum is our lighting expert, crafting the perfect illumination for every scene. As Gaffer, he controls the technical aspects of lighting on set, ensuring that every shot has the right mood and visual impact to tell our stories effectively.",
    responsibilities: [
      "Lighting design and execution",
      "Electrical and technical coordination",
      "On-set lighting management",
    ],
    achievements: [
      "Designed lighting for award-winning productions",
      "Maintained technical excellence on every project",
      "Created iconic lighting setups for memorable scenes",
    ],
  },
};

export default function TeamMemberPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const teamMember = teamMembersData[slug];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!teamMember) {
    return (
      <div className="relative">
        <WhatsAppWidget />
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#48484A] mb-4">
            Team Member Not Found
          </h1>
          <Link href="/about" className="text-[#E7BF44] hover:underline">
            Return to About
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
        subtitle={`Meet ${teamMember.name}`}
        image={getImageUrl("/assets/Header_.png", { width: 1920, quality: 90 })}
        currentPage={teamMember.name}
        previousPage="About"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-[#48484A] hover:text-[#E7BF44] transition-colors cursor-pointer"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Team</span>
        </button>

        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          data-aos="fade-up"
        >
          {/* Team Member Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithSkeleton
                src={getImageUrl(teamMember.image, { width: 800, quality: 90 })}
                alt={teamMember.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                priority
                objectFit="cover"
              />
            </div>
            {/* Social Links */}
            {teamMember.socialLinks && (
              <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                {teamMember.socialLinks.instagram && (
                  <a
                    href={teamMember.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                )}
                {teamMember.socialLinks.facebook && (
                  <a
                    href={teamMember.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="w-5 h-5" />
                  </a>
                )}
                {teamMember.socialLinks.twitter && (
                  <a
                    href={teamMember.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                )}
                {teamMember.socialLinks.tiktok && (
                  <a
                    href={teamMember.socialLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="TikTok"
                  >
                    <SiTiktok className="w-5 h-5" />
                  </a>
                )}
                {teamMember.socialLinks.youtube && (
                  <a
                    href={teamMember.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#E7BF44] text-white flex items-center justify-center hover:bg-[#D4A93A] transition-colors cursor-pointer"
                    aria-label="YouTube"
                  >
                    <SiYoutube className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Team Member Details */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#48484A] mb-4">
                {teamMember.name}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-[#E7BF44]/10 text-[#E7BF44] rounded-full text-sm font-semibold">
                  {teamMember.role}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                About
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {teamMember.bio}
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {teamMember.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#E7BF44] mt-1">•</span>
                    <span className="text-lg text-gray-600">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {teamMember.achievements && teamMember.achievements.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#48484A] mb-4">
                  Achievements
                </h2>
                <ul className="space-y-3">
                  {teamMember.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#E7BF44] mt-1">•</span>
                      <span className="text-lg text-gray-600">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#E7BF44] text-[#48484A] font-semibold rounded-lg hover:bg-[#D4A93A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
