"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div
        className={`relative h-40 w-40 sm:h-56 sm:w-56 lg:h-64 lg:w-64 transform transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <Image
          src="https://i.ibb.co/R3cMPnR/Ma-Dakaei-Byed.png"
          alt="Logo"
          fill
          className="object-contain rounded-md shadow-xl"
          priority
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
