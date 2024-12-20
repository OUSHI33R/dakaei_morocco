"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div
        className={`
          relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80
          transform transition-all duration-1000 ease-out
          ${
            isLoaded
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-90"
          }
        `}
      >
        <Image
          src="https://i.ibb.co/R3cMPnR/Ma-Dakaei-Byed.png"
          alt="Logo"
          fill
          className="object-contain rounded-full shadow-lg shadow-gray-900/50"
          priority
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
