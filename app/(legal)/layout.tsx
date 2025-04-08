import "./globals.css";
import { Tajawal } from "next/font/google";
import Link from "next/link";
import type React from "react";
import Image from "next/image";
import DakaeiMa from "@/assets/DAKAEi_Logo_Ma.svg"; // Light mode logo

// const tajawal = Tajawal({
//   subsets: ["arabic"],
//   weight: ["200", "300", "400", "500", "700", "800", "900"],
// });

export const metadata = {
  title: "سياسة الخصوصية والشروط",
  description: "سياسة الخصوصية والشروط باللهجة المغربية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-foreground">
      <header className="bg-card shadow-md fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                <Link href="/" title="الرئيسية">
                  <Image
                    src={DakaeiMa} // Replace with the actual path to your logo image
                    alt="ذكائي"
                    width={150} // Adjust width as needed
                    height={50} // Adjust height as needed
                    className="object-contain" // Add styling as needed
                    priority // Ensures the logo loads quickly
                  />
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
                prefetch
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/terms"
                className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
                prefetch
              >
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
    </div>
  );
}
