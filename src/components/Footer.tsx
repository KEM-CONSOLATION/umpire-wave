"use client";

import React from "react";
import Image from "next/image";
import FooterIcon from "@assets/FooterIcon.svg";
import WorkLogo from "@assets/UmpireLogo.svg";
// import Twitter from "@assets/TwitterIcon.svg";
import Facebook from "@assets/FaceB.svg";
import Instagram from "@assets/insta.svg";
// import Youtube from "@assets/YoutubeIcon.svg";
import Tiktok from "@assets/TiktokIcon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="">
      <div className="mt-[50px] bg-[#101010] relative text-white p-6 space-y-[32px]">
        <div
          className="absolute -top-[25px] left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToTop}
        >
          <Image src={FooterIcon} alt="Footer Icon" />
        </div>

        <div className="mx-auto text-center flex items-start justify-center space-y-[32px] mt-[50px] max-w-[600px] w-full">
          <div className="space-y-[32px]">
            <ul className="grid md:flex md:justify-between items-center gap-6 text-[16px] font-[600]">
              {navLinks.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  <Link
                    href={item.id}
                    className={`hover:text-[#E7BF44] ${
                      pathname === item.id ? "text-[#E7BF44]" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="w-full text-[16px] leading-[24px]">
              Umpire Wave Studios is a creative force in music, film, and visual
              arts—amplifying African talent and delivering world-class
              production services from Nigeria to the world.
            </p>

            <div className="flex justify-center items-center gap-4">
              {/* <Link href="http://x.com/umpirewave" target="_blank">
                <Image src={Twitter} alt="Twitter" />
              </Link> */}
              <Link
                href="https://www.facebook.com/share/1DX7QdVcRs"
                target="_blank"
              >
                <Image src={Facebook} alt="Facebook" />
              </Link>
              {/* <Link href="https://www.youtube.com/@umpirewave" target="_blank">
                <Image src={Youtube} alt="Youtube" />
              </Link> */}
              <Link
                href="https://www.tiktok.com/@umpire.wave.studi?_t=ZM-8vkUn3N4esX&_r=1"
                target="_blank"
              >
                <Image src={Tiktok} alt="Tiktok" />
              </Link>
              <Link
                href="https://www.instagram.com/_umpirewavestudio?igsh=YzljYTk1ODg3Zg=="
                target="_blank"
              >
                <Image src={Instagram} alt="Instagram" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image src={WorkLogo} alt="Work & Shop Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
