"use client";

import Image from "next/image";
import { clsx } from "clsx";

import DakaeiMa from "@/assets/DAKAEi_Logo_Ma.svg"; // Light mode logo
import DakaeiMaDark from "@/assets/DAKAEi_Logo_Ma_Dark.svg"; // Dark mode logo

export function Logo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "relative w-[150px] h-[50px]")}>
      {/* Light mode logo (visible by default, hidden in dark mode) */}
      <Image
        src={DakaeiMaDark}
        alt="ذكائي"
        width={150}
        height={50}
        className="dark:hidden object-contain"
        priority
      />

      {/* Dark mode logo (hidden by default, visible in dark mode) */}
      <Image
        src={DakaeiMa}
        alt="ذكائي"
        width={150}
        height={50}
        className="hidden dark:block object-contain absolute inset-0"
        priority
      />
    </div>
  );
}
