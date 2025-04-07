"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import { Logo } from "./ui/logo";
import DakaeiMa from "@/assets/DAKAEi_Logo_Ma.svg"; // Light mode logo
import Image from "next/image";
import { CiLogin } from "react-icons/ci";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <Link
        href="/"
        className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
      >
        الرئيسية
      </Link>
      <Link
        href="/about"
        className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
      >
        الشركة
      </Link>
      <Link
        href="/pricing"
        className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
      >
        الأثمنة
      </Link>
      <Link
        href="/team"
        className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-medium"
      >
        الفريق
      </Link>
    </>
  );

  return (
    <header className="bg-card shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" title="الرئيسية" prefetch>
              <Image
                src={DakaeiMa} // Replace with the actual path to your logo image
                alt="ذكائي"
                width={150} // Adjust width as needed
                height={50} // Adjust height as needed
                className="object-contain" // Add styling as needed
                priority // Ensures the logo loads quickly
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <Button
              asChild
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800"
            >
              <Link href="https://app.dakaei.ma/login" target="_blank">
                <CiLogin className="w-5 h-5" />
                دخل لحسابك
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4">
                    <Image
                      src={DakaeiMa} // Replace with the actual path to your logo image
                      alt="ذكائي"
                      width={150} // Adjust width as needed
                      height={50} // Adjust height as needed
                      className="object-contain" // Add styling as needed
                      priority // Ensures the logo loads quickly
                    />
                    <Button variant="ghost" size="icon" onClick={toggleMenu}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                    <Button
                      asChild
                      className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-neutral-800"
                    >
                      <Link href="https://app.dakaei.ma/login" target="_blank">
                        <CiLogin className="w-5 h-5" />
                        دخل لحسابك
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
