"use client";

import NextLink from "next/link";
import { cn } from "@/lib/utils";

export function Link({
  href,
  className,
  children,
  title,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <NextLink href={href} className={cn(className)} title={title}>
      {children}
    </NextLink>
  );
}