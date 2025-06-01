"use client";

import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.location.href = "https://umpire.infopips.com/";
  }, []);

  return null;
};

export default Page;
