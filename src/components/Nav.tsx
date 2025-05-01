"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "service", "portfolio", "contact"];

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLink = (section: string) => {
    return section === "home" ? "/" : `/${section}`;
  };

  const isActive = (section: string) => {
    return (
      (section === "home" && pathname === "/") || pathname === `/${section}`
    );
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className=" max-w-6xl mx-auto w-full px-6 py-[27px] flex items-center justify-between bg-white z-50 ">
      <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
        <Image
          src="/assets/umpireLogo.png"
          alt="Umpire Wave Logo"
          width={100}
          height={100}
          priority
          className="object-contain max-w-[170px] w-full"
        />
      </Link>

      <div className="hidden md:flex items-center gap-6 text-[16px] font-[600]">
        {sections.map((section) => (
          <Link
            key={section}
            href={getLink(section)}
            className={`transition p-[10px] ${
              isActive(section)
                ? "text-[#E7BF44] border-b border-[#E7BF44]"
                : "text-[#48484A] "
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-2xl z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-semibold">
          {sections.map((section) => (
            <Link
              key={section}
              href={getLink(section)}
              onClick={closeMenu}
              className={`transition ${
                isActive(section)
                  ? "text-[#E7BF44] border-b border-[#E7BF44]"
                  : "text-[#48484A] "
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
