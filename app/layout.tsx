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
  openGraph: {
    title: "DAKAEi Morocco",
    description: "First Moroccan AI Platform",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/c41dc69f-d6e7-429b-b8bf-4bec868c4d18.jpg?token=LDKVEP-7h3zkX_lQIDAb0C4t4t-gCLb-2KZB0FQHob8&height=675&width=1200&expires=33274510245",
        width: 1200,
        height: 675,
        alt: "DAKAEi Morocco OpenGraph Image",
      },
    ],
    type: "website",
    url: "https://dakaei.ma", // Replace with your actual website URL
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
