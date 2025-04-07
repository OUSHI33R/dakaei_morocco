"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (
        scrollPosition > 100 &&
        scrollPosition < documentHeight - windowHeight - 50
      ) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-black/90 text-white py-2 px-4 z-50 rounded-full shadow-lg max-w-md w-auto border border-white/20 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs sm:text-sm flex-1 text-right rtl whitespace-nowrap overflow-hidden text-ellipsis">
          سجل دابا و جربو أحسن ذكاء اصطناعي مغربي !
        </p>
        <Link href="https://app.dakaei.ma/login">
          <Button
            variant="outline"
            size="sm"
            className="bg-white text-black hover:bg-gray-200 font-semibold rtl text-xs px-2 py-1"
          >
            دخل لحسابك
          </Button>
        </Link>
      </div>
    </div>
  );
};
