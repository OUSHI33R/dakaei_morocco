import { Logo } from "@/components/ui/logo";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Link from "next/link";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scrollbar-none">
      <body className=" text-foreground">
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
