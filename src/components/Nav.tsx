"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "service", "portfolio"];

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productionDropdownOpen, setProductionDropdownOpen] = useState(false);
  const [mobileProductionOpen, setMobileProductionOpen] = useState(false);
  const [talentDropdownOpen, setTalentDropdownOpen] = useState(false);
  const [mobileTalentOpen, setMobileTalentOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productionDropdownRef = useRef<HTMLDivElement>(null);
  const talentDropdownRef = useRef<HTMLDivElement>(null);
  const productionCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const talentCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    }, 200);
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
    }, 200);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productionDropdownRef.current &&
        !productionDropdownRef.current.contains(event.target as Node)
      ) {
        setProductionDropdownOpen(false);
      }

      if (
        talentDropdownRef.current &&
        !talentDropdownRef.current.contains(event.target as Node)
      ) {
        setTalentDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-2 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          onClick={closeMenu}
        >
          <Image
            src="/assets/umpireLogo.png"
            alt="Umpire Wave Logo"
            width={140}
            height={140}
            priority
            quality={90}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-[500] tracking-wide">
          {sections.map((section) => (
            <Link
              key={section}
              href={getLink(section)}
              className={`transition-all relative py-2 px-1 cursor-pointer group ${
                isActive(section)
                  ? "text-[#E7BF44]"
                  : "text-[#48484A] hover:text-[#E7BF44]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#E7BF44] transition-transform duration-300 origin-left ${
                  isActive(section)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
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
              className={`transition-all py-2 px-1 flex items-center gap-1 cursor-pointer group ${
                isProductionActive()
                  ? "text-[#E7BF44]"
                  : "text-[#48484A] hover:text-[#E7BF44]"
              }`}
            >
              Production
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  productionDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {productionDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 min-w-[200px]"
                >
                  <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-white/20 overflow-hidden py-1">
                    <Link
                      href="/films"
                      className={`block px-5 py-3 transition-colors cursor-pointer ${
                        pathname === "/films"
                          ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                          : "text-[#48484A] hover:bg-gray-50 hover:text-[#E7BF44]"
                      }`}
                    >
                      Films
                    </Link>
                    <Link
                      href="/music"
                      className={`block px-5 py-3 transition-colors cursor-pointer ${
                        pathname === "/music"
                          ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                          : "text-[#48484A] hover:bg-gray-50 hover:text-[#E7BF44]"
                      }`}
                    >
                      Music
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Our Talent Dropdown */}
          <div
            ref={talentDropdownRef}
            className="relative"
            onMouseEnter={handleTalentMouseEnter}
            onMouseLeave={handleTalentMouseLeave}
          >
            <button
              className={`transition-all py-2 px-1 flex items-center gap-1 cursor-pointer group ${
                isTalentActive()
                  ? "text-[#E7BF44]"
                  : "text-[#48484A] hover:text-[#E7BF44]"
              }`}
            >
              Our Talent
              <FiChevronDown
                className={`transition-transform duration-300 ${
                  talentDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {talentDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 pt-2 min-w-[200px]"
                >
                  <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl border border-white/20 overflow-hidden py-1">
                    <Link
                      href="/actors"
                      className={`block px-5 py-3 transition-colors cursor-pointer ${
                        pathname === "/actors"
                          ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                          : "text-[#48484A] hover:bg-gray-50 hover:text-[#E7BF44]"
                      }`}
                    >
                      Actor
                    </Link>
                    <Link
                      href="/artistes"
                      className={`block px-5 py-3 transition-colors cursor-pointer ${
                        pathname === "/artistes"
                          ? "bg-[#E7BF44]/10 text-[#E7BF44] font-semibold"
                          : "text-[#48484A] hover:bg-gray-50 hover:text-[#E7BF44]"
                      }`}
                    >
                      Artiste
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-[#E7BF44] text-white rounded-full font-semibold hover:bg-[#D4A93A] transition-all transform hover:scale-105 shadow-md hover:shadow-lg active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-55 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-screen w-full bg-white/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-6"
          >
            {sections.map((section) => (
              <Link
                key={section}
                href={getLink(section)}
                onClick={closeMenu}
                className={`text-2xl font-semibold transition relative group ${
                  isActive(section) ? "text-[#E7BF44]" : "text-[#48484A]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}

            <div className="w-full max-w-[280px] h-[1px] bg-gray-100 my-2" />

            {/* Mobile Production Dropdown */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setMobileProductionOpen(!mobileProductionOpen)}
                className={`flex items-center gap-2 text-2xl font-semibold transition ${
                  isProductionActive() ? "text-[#E7BF44]" : "text-[#48484A]"
                }`}
              >
                Production
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileProductionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileProductionOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col items-center gap-4"
                  >
                    <Link
                      href="/films"
                      onClick={closeMenu}
                      className="text-xl text-[#48484A] hover:text-[#E7BF44]"
                    >
                      Films
                    </Link>
                    <Link
                      href="/music"
                      onClick={closeMenu}
                      className="text-xl text-[#48484A] hover:text-[#E7BF44]"
                    >
                      Music
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Our Talent Dropdown */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setMobileTalentOpen(!mobileTalentOpen)}
                className={`flex items-center gap-2 text-2xl font-semibold transition ${
                  isTalentActive() ? "text-[#E7BF44]" : "text-[#48484A]"
                }`}
              >
                Our Talent
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    mobileTalentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileTalentOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col items-center gap-4"
                  >
                    <Link
                      href="/actors"
                      onClick={closeMenu}
                      className="text-xl text-[#48484A] hover:text-[#E7BF44]"
                    >
                      Actor
                    </Link>
                    <Link
                      href="/artistes"
                      onClick={closeMenu}
                      className="text-xl text-[#48484A] hover:text-[#E7BF44]"
                    >
                      Artiste
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-6 px-10 py-4 bg-[#E7BF44] text-white rounded-full text-xl font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
