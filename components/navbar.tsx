"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Correct Next.js Link import
import { Logo } from "@/components/ui/logo";
import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/ui/plus-grid";
import { Button } from "./ui/button";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import Image from "next/image";
import { clsx } from "clsx";
import DakaeiMa from "@/assets/DAKAEi_Logo_Ma.svg"; // Light mode logo
import { CiLogin } from "react-icons/ci";

const links = [
  { href: "/about", label: "الشركة" },
  { href: "/pricing", label: "الأثمنة" },
  { href: "/team", label: "الفريق" },
];

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center gap-2">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-white bg-blend-multiply hover:bg-black/10 transition-all duration-200"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <Button className="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-lg hover:bg-neutral-800">
        <Link
          href="https://app.dakaei.ma/login"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <CiLogin className="w-5 h-5" />
          دخل لحسابك
        </Link>
      </Button>
    </nav>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="flex h-12 w-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden"
          aria-label="فتح القائمة الرئيسية"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <Logo />
        <nav className="flex flex-col gap-6 py-4">
          {links.map(({ href, label }, index) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, delay: index * 0.1 }}
              key={href}
            >
              <Link href={href} className="text-base font-medium block">
                {label}
              </Link>
            </motion.div>
          ))}

          {/* Login Button - Added with animation to match other items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15, delay: links.length * 0.1 }}
            className="mt-4"
          >
            <Button className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-neutral-800 border border-neutral-700">
              <Link
                href="https://app.dakaei.ma/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full"
              >
                <CiLogin className="w-5 h-5" />
                دخل لحسابك
              </Link>
            </Button>
          </motion.div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <header className="pt-2 sm:pt-2" dir="rtl">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
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
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNav />
        </PlusGridRow>
      </PlusGrid>
    </header>
  );
}
