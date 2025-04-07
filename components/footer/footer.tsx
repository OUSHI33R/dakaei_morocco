"use client";

import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { FooterColumn, footerLinks } from "./footer-links";
import { Newsletter } from "./newsletter";
import { Separator } from "@/components/ui/separator";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-neutral-300  dark:border-neutral-800 dark:bg-[#1a1a1a] bg-[#f8f9fa]"
      dir="rtl"
    >
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 flex flex-col gap-4 lg:col-span-2">
              <Logo className="h-8" />
              <p className="text-sm text-neutral-800 dark:text-white max-w-xs">
                نحن نساعد الشركات على النمو باستخدام الذكاء الاصطناعي. انضم
                إلينا في رحلة التحول الرقمي.
              </p>
              <Newsletter />
            </div>

            {Object.entries(footerLinks).map(([key, section]) => (
              <FooterColumn key={key} {...section} />
            ))}
          </div>
        </div>

        <Separator className="bg-neutral-300  dark:bg-neutral-800" />

        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-black dark:text-white">
            © {new Date().getFullYear()} ذكائي. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/dakaei.ma/"
              className="text-neutral-800 hover:text-black dark:text-white hover:dark:text-neutral-200 text-xl"
              prefetch
            >
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/dakaei"
              className="text-neutral-800 hover:text-black dark:text-white hover:dark:text-neutral-200 text-xl"
              prefetch
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
