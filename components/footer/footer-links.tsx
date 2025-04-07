"use client";

import { Link } from "@/components/ui/link";

export const footerLinks = {
  product: {
    title: "المنتج",
    links: [
      { href: "/features", label: "المميزات" },
      { href: "/pricing", label: "الأسعار" },
    ],
  },
  company: {
    title: "الشركة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/team", label: "الفريق" },
    ],
  },
  legal: {
    title: "قانوني",
    links: [
      { href: "/privacy", label: "الخصوصية" },
      { href: "/terms", label: "الشروط" },
    ],
  },
};

interface FooterColumnProps {
  title: string;
  links: Array<{ href: string; label: string }>;
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-black dark:text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-neutral-800 hover:text-black dark:text-white hover:dark:text-neutral-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
