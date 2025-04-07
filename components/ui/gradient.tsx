"use client";

import { cn } from "@/lib/utils";

export function Gradient({ className }: { className?: string }) {
  return <div className={cn("absolute inset-0", className)} />;
}