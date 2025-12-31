"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const sections = [
  "home",
  "about",
  "service",
  "portfolio",
];

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productionDropdownOpen, setProductionDropdownOpen] = useState(false);
  const [mobileProductionOpen, setMobileProductionOpen] = useState(false);
  const [talentDropdownOpen, setTalentDropdownOpen] = useState(false);
  const [mobileTalentOpen, setMobileTalentOpen] = useState(false);
  const productionDropdownRef = useRef<HTMLDivElement>(null);
  const talentDropdownRef = useRef<HTMLDivElement>(null);
  const productionCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const talentCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getLink = (section: string) => {
    return section === "home" ? "/" : `/${section}`;
  };

  const isActive = (section: string) => {
    return (
      (section === "home" && pathname === "/") || pathname === `/${section}`
    );
  };

  const isProductionActive = () => {
    return pathname === "/films" || pathname === "/music";
  };

  const isTalentActive = () => {
    return pathname === "/actors" || pathname === "/artistes";
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleProductionMouseEnter = () => {
    if (productionCloseTimeoutRef.current) {
      clearTimeout(productionCloseTimeoutRef.current);
      productionCloseTimeoutRef.current = null;
    }
    setProductionDropdownOpen(true);
  };

  const handleProductionMouseLeave = () => {
    productionCloseTimeoutRef.current = setTimeout(() => {
      setProductionDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleTalentMouseEnter = () => {
    if (talentCloseTimeoutRef.current) {
      clearTimeout(talentCloseTimeoutRef.current);
      talentCloseTimeoutRef.current = null;
    }
    setTalentDropdownOpen(true);
  };

  const handleTalentMouseLeave = () => {
    talentCloseTimeoutRef.current = setTimeout(() => {
      setTalentDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productionDropdownRef.current &&
        !productionDropdownRef.current.contains(event.target as Node)
      ) {
        setProductionDropdownOpen(false);
        if (productionCloseTimeoutRef.current) {
          clearTimeout(productionCloseTimeoutRef.current);
          productionCloseTimeoutRef.current = null;
        }
      }

      if (
        talentDropdownRef.current &&
        !talentDropdownRef.current.contains(event.target as Node)
      ) {
        setTalentDropdownOpen(false);
        if (talentCloseTimeoutRef.current) {
          clearTimeout(talentCloseTimeoutRef.current);
          talentCloseTimeoutRef.current = null;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (productionCloseTimeoutRef.current) {
        clearTimeout(productionCloseTimeoutRef.current);
      }
      if (talentCloseTimeoutRef.current) {
        clearTimeout(talentCloseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="max-w-6xl mx-auto w-full px-6 py-[27px] flex items-center justify-between bg-white z-50 relative">
      <Link href="/" className="flex items-center gap-2 cursor-pointer" onClick={closeMenu}>
        <Image
          src="/assets/umpireLogo.png"
          alt="Umpire Wave Logo"
          width={100}
          height={100}
          priority
          className="object-contain max-w-[170px] w-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-[16px] font-[600]">
        {sections.map((section) => (
          <Link
            key={section}
            href={getLink(section)}
            className={`transition p-[10px] cursor-pointer ${
              isActive(section)
                ? "text-[#E7BF44] border-b border-[#E7BF44]"
                : "text-[#48484A]"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        {/* Production Dropdown */}
        <div
          ref={productionDropdownRef}
          className="relative"
          onMouseEnter={handleProductionMouseEnter}
          onMouseLeave={handleProductionMouseLeave}
        >
          <button
            className={`transition p-[10px] flex items-center gap-1 cursor-pointer ${
              isProductionActive()
                ? "text-[#E7BF44] border-b border-[#E7BF44]"
                : "text-[#48484A]"
            }`}
          >
            Production
            <FiChevronDown
              className={`transition-transform duration-200 ${
                productionDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {productionDropdownOpen && (
            <div className="absolute top-full left-0 pt-2 bg-transparent min-w-[180px]">
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
                <Link
                  href="/films"
                  className={`block px-4 py-3 transition-colors cursor-pointer ${
                    pathname === "/films"
                      ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                      : "text-[#48484A] hover:bg-gray-50"
                  }`}
                >
                  Films
                </Link>
                <Link
                  href="/music"
                  className={`block px-4 py-3 transition-colors cursor-pointer ${
                    pathname === "/music"
                      ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                      : "text-[#48484A] hover:bg-gray-50"
                  }`}
                >
                  Music
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Our Talent Dropdown */}
        <div
          ref={talentDropdownRef}
          className="relative"
          onMouseEnter={handleTalentMouseEnter}
          onMouseLeave={handleTalentMouseLeave}
        >
          <button
            className={`transition p-[10px] flex items-center gap-1 cursor-pointer ${
              isTalentActive()
                ? "text-[#E7BF44] border-b border-[#E7BF44]"
                : "text-[#48484A]"
            }`}
          >
            Our Talent
            <FiChevronDown
              className={`transition-transform duration-200 ${
                talentDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {talentDropdownOpen && (
            <div className="absolute top-full left-0 pt-2 bg-transparent min-w-[180px]">
              <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
                <Link
                  href="/actors"
                  className={`block px-4 py-3 transition-colors cursor-pointer ${
                    pathname === "/actors"
                      ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                      : "text-[#48484A] hover:bg-gray-50"
                  }`}
                >
                  Actor
                </Link>
                <Link
                  href="/artistes"
                  className={`block px-4 py-3 transition-colors cursor-pointer ${
                    pathname === "/artistes"
                      ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                      : "text-[#48484A] hover:bg-gray-50"
                  }`}
                >
                  Artiste
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Contact Link - Last */}
        <Link
          href="/contact"
          className={`transition p-[10px] cursor-pointer ${
            isActive("contact")
              ? "text-[#E7BF44] border-b border-[#E7BF44]"
              : "text-[#48484A]"
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl z-50 cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Navigation */}
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
              className={`transition cursor-pointer ${
                isActive(section)
                  ? "text-[#E7BF44] border-b border-[#E7BF44]"
                  : "text-[#48484A]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Mobile Production Dropdown */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setMobileProductionOpen(!mobileProductionOpen)}
              className={`flex items-center gap-2 transition cursor-pointer ${
                isProductionActive()
                  ? "text-[#E7BF44] border-b border-[#E7BF44]"
                  : "text-[#48484A]"
              }`}
            >
              Production
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  mobileProductionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileProductionOpen && (
              <div className="flex flex-col items-center gap-4 mt-4">
                <Link
                  href="/films"
                  onClick={closeMenu}
                  className={`transition cursor-pointer ${
                    pathname === "/films"
                      ? "text-[#E7BF44]"
                      : "text-[#48484A]"
                  }`}
                >
                  Films
                </Link>
                <Link
                  href="/music"
                  onClick={closeMenu}
                  className={`transition cursor-pointer ${
                    pathname === "/music"
                      ? "text-[#E7BF44]"
                      : "text-[#48484A]"
                  }`}
                >
                  Music
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Our Talent Dropdown */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setMobileTalentOpen(!mobileTalentOpen)}
              className={`flex items-center gap-2 transition cursor-pointer ${
                isTalentActive()
                  ? "text-[#E7BF44] border-b border-[#E7BF44]"
                  : "text-[#48484A]"
              }`}
            >
              Our Talent
              <FiChevronDown
                className={`transition-transform duration-200 ${
                  mobileTalentOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileTalentOpen && (
              <div className="flex flex-col items-center gap-4 mt-4">
                <Link
                  href="/actors"
                  onClick={closeMenu}
                  className={`transition cursor-pointer ${
                    pathname === "/actors"
                      ? "text-[#E7BF44]"
                      : "text-[#48484A]"
                  }`}
                >
                  Actor
                </Link>
                <Link
                  href="/artistes"
                  onClick={closeMenu}
                  className={`transition cursor-pointer ${
                    pathname === "/artistes"
                      ? "text-[#E7BF44]"
                      : "text-[#48484A]"
                  }`}
                >
                  Artiste
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Contact Link - Last */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`transition cursor-pointer ${
              isActive("contact")
                ? "text-[#E7BF44] border-b border-[#E7BF44]"
                : "text-[#48484A]"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
