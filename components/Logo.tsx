"use client";
import { clsx } from "clsx";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/DAKAEi_Logo_Ma.svg" // Replace with the actual path to your logo image
      alt="ذكائي"
      width={150} // Adjust width as needed
      height={50} // Adjust height as needed
      className={clsx(className, "object-contain")} // Add styling as needed
      priority // Ensures the logo loads quickly
    />
  );
}
