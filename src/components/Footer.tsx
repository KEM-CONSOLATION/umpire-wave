"use client";

import React from "react";
import Image from "next/image";
import FooterIcon from "@assets/FooterIcon.svg";
import Facebook from "@assets/FaceB.svg";
import Instagram from "@assets/insta.svg";
import Youtube from "@assets/YoutubeIcon.svg";
import Tiktok from "@assets/TiktokIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getImageUrl } from "@/lib/cloudinary";

const Footer = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", id: "/" },
    { name: "About", id: "/about" },
    { name: "Service", id: "/service" },
    { name: "Portfolio", id: "/portfolio" },
    { name: "Contact", id: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 md:mt-16">
      <div className="bg-[#101010] relative text-white">
        {/* Scroll to Top Button */}
        <div
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 cursor-pointer transition-transform hover:scale-110 z-10"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <Image
            src={FooterIcon}
            alt="Scroll to top"
            width={50}
            height={50}
            sizes="56px"
            quality={90}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-20 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src={getImageUrl("/assets/umpireLogo.PNG", {
                    width: 360,
                    quality: 90,
                  })}
                  alt="Umpire Wave Studios Logo"
                  width={180}
                  height={45}
                  sizes="180px"
                  quality={90}
                  loading="lazy"
                  className="max-w-[180px] h-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {siteConfig.description}
              </p>
            </div>

            {/* Navigation Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.id}
                      className={`text-sm md:text-base transition-colors hover:text-[#E7BF44] ${
                        pathname === item.id
                          ? "text-[#E7BF44] font-semibold"
                          : "text-gray-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                Connect With Us
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-6">
                <Link
                  href="https://www.facebook.com/share/1DX7QdVcRs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Image
                    src={Facebook}
                    alt="Facebook"
                    width={24}
                    height={24}
                    sizes="24px"
                    quality={90}
                    loading="lazy"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@umpirewave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <Image
                    src={Youtube}
                    alt="YouTube"
                    width={24}
                    height={24}
                    sizes="24px"
                    quality={90}
                    loading="lazy"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="TikTok"
                >
                  <Image
                    src={Tiktok}
                    alt="TikTok"
                    width={24}
                    height={24}
                    sizes="24px"
                    quality={90}
                    loading="lazy"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/_umpirewavestudio?igsh=YzljYTk1ODg3Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Image
                    src={Instagram}
                    alt="Instagram"
                    width={24}
                    height={24}
                    sizes="24px"
                    quality={90}
                    loading="lazy"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                <p>WhatsApp: +{siteConfig.whatsappNumber}</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>
                © {currentYear} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <Link
                  href="/about"
                  className="hover:text-[#E7BF44] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#E7BF44] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
