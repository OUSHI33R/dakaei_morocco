import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

export const metadata: Metadata = {
  title: "DAKAEi Morocco",
  description: "First Moroccan AI Platform",
  icons: {
    icon: "https://i.ibb.co/XyJkn61/searchh.png",
    shortcut: "https://i.ibb.co/XyJkn61/searchh.png",
  },
};

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
