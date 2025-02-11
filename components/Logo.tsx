"use client";

import { useState } from "react";
import Image from "next/image";

export function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="text-center">
      <div
        className={`
          relative h-48 w-48 md:h-64 md:w-64 
          transform transition-all duration-1000 ease-out
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        `}
      >
        <Image
          src="https://i.ibb.co/R3cMPnR/Ma-Dakaei-Byed.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 192px, 256px"
          quality={100}
        />
      </div>
    </div>
  );
}
