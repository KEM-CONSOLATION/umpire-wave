"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const HeaderCard = ({
  title = "Sound. Vision. Influence.",
  subtitle = "A culture-driven multimedia powerhouse redefining African creativity.",
  image = "/assets/Header_.png",
  currentPage = "About",
  previousPage = "Home",
}) => {
  const router = useRouter();

  return (
    <div
      className="h-[175px] w-full bg-cover bg-center py-[40px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="max-w-6xl mx-auto flex items-end justify-between">
        <div>
          <p className="font-[600] text-[#FFFFFF] text-[20px] lg:text-[40px]">
            {title}
          </p>
          <p className="font-[600] text-[12px] lg:text-[16px] text-[#E7BF44]">
            {subtitle}
          </p>
        </div>
        <p
          className="font-[600] text-[14px] lg:text-[16px] flex items-center text-[#FFFFFF] cursor-pointer"
          onClick={() => router.back()}
        >
          {previousPage} <FiChevronRight />{" "}
          <span className="text-[#E7BF44]">{currentPage}</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;
