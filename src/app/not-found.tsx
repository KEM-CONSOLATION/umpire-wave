"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center justify-center mt-[50px]">
      <Image src="/assets/RAZ 1.png" alt="404" width={68} height={68} />

      <div className="max-w-[37.375rem] bg-white space-y-[24px] mx-auto flex flex-col items-center border-2 border-black rounded-[8px] p-12  ">
        <Image
          src="/assets/WarningOctagon.svg"
          alt="warning"
          width={48}
          height={48}
        />

        <h1 className="text-lg font-bold">404 Error</h1>

        <div className=" max-w-[346px] mx-auto text-center ">
          <p className="text-sm text-[#121212] text-center">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>

          <p className="text-sm text-[#121212] text-center">
            Please log in to your account to continue.
          </p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="px-6 py-2  bg-[#E7BF44] text-white rounded hover:bg-[#d4aa36] transition cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
