"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.dakaei.com/darijagpt/beta/register/?email=${encodeURIComponent(
          email
        )}`
      );

      if (response.ok) {
        setEmail(""); // Clear input field
        setOpen(true);
        setTimeout(() => setOpen(false), 5000); // Close modal after 5 seconds
      } else {
        console.error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold text-black dark:text-white">
        النشرة البريدية
      </h3>
      <p className="text-sm text-neutral-800 dark:text-white">
        اشترك في نشرتنا البريدية للحصول على آخر المستجدات
      </p>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="بريدك الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-[240px] bg-transparent border-2 border-neutral-500 "
          required
        />
        <Button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black "
        >
          اشترك
        </Button>
      </form>

      {/* Success Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تم الاشتراك بنجاح!</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            شكرًا لاشتراكك! ستتلقى آخر الأخبار والمستجدات قريبًا.
          </DialogDescription>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>إغلاق</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
