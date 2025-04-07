"use client";

import { cn } from "@/lib/utils";

export function PlusGrid({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

export function PlusGridRow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("relative", className)}>{children}</div>;
}

export function PlusGridItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("relative", className)}>{children}</div>;
}