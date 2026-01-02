"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <WhatsAppWidget />
      <Nav />

      <div className="flex-1 flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center" data-aos="fade-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/assets/umpireLogo.PNG"
              alt="Umpire Wave Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          {/* 404 Number */}
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-[#E7BF44] leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div
            className="mb-8 space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#48484A]">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist or may
              have been moved to a new location.
            </p>
          </div>

          {/* Warning Icon */}
          <div
            className="mb-8 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#E7BF44]/10 flex items-center justify-center">
              <Image
                src="/assets/WarningOctagon.svg"
                alt="warning"
                width={40}
                height={40}
                className="md:w-12 md:h-12"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-8 py-4 border-2 border-[#E7BF44] text-[#E7BF44] font-semibold rounded-lg hover:bg-[#E7BF44]/10 transition-all duration-300 cursor-pointer"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-[#E7BF44] text-[#48484A] font-semibold rounded-lg hover:bg-[#D4A93A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <FiHome className="w-5 h-5" />
              Go Home
            </Link>
          </div>

          {/* Additional Links */}
          <div
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link
              href="/about"
              className="text-[#48484A] hover:text-[#E7BF44] transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/service"
              className="text-[#48484A] hover:text-[#E7BF44] transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/portfolio"
              className="text-[#48484A] hover:text-[#E7BF44] transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-[#48484A] hover:text-[#E7BF44] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
