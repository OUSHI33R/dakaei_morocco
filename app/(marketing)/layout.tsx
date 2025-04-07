import { Logo } from "@/components/ui/logo";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import Header from "@/components/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
}
