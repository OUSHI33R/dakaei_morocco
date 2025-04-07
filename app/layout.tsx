import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer/footer";
import { Banner } from "@/components/FooterBanner";
import { Toaster } from "@/components/ui/toaster";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ذكائي - منصة الذكاء الاصطناعي المغربية",
    template: "%s - ذكائي",
  },
  description:
    "ذكائي هي منصة مغربية مبتكرة في مجال الذكاء الاصطناعي، تقدم حلولاً متطورة لفهم الاحتياجات المحلية وتحقيق الابتكار التكنولوجي لخدمة المجتمع المغربي.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={tajawal.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Banner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
