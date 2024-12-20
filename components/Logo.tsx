'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Logo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="text-center">
      <div 
        className={`
          relative h-48 w-48 md:h-64 md:w-64 
          transform transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
      >
        <Image
          src="https://i.ibb.co/XyJkn61/searchh.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}