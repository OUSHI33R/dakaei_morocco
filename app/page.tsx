"use client";

import { Logo } from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function ComingSoon() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://api.dakaei.com/darijagpt/beta/register/?email=${encodeURIComponent(
          email
        )}`
      );

      if (response.ok) {
        toast({
          title: "مزيان! 🎉",
          description:
            "شكرا بزاف! غادي نبقاو على اتصال معاك فاش غادي نطلقو الخدمة.",
          duration: 5000,
        });
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "عفوا! 😕",
        description: "كاين شي مشكل. عاود جرب من بعد، الله يخليك.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col md:flex-row-reverse">
        {/* Logo Section */}
        <div className="flex-1 flex justify-center items-center p-4 md:p-8">
          <Logo className="w-32 h-32 md:w-48 md:h-48" />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 py-8 md:px-8 backdrop-blur-md bg-black/30">
          <div className="text-center w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              غادي نفتحو قريبا
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
              أول ذكاء اصطناعي مغربي بالدارجة 🇲🇦
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-6">
              مرحبا بكم! حنا دابا خدامين على أول ذكاء اصطناعي مغربي كيخدم
              بالدارجة المغربية. دخل الإيميل ديالك باش تبقى على اطلاع بجميع
              الإعلانات والعروض ديالنا
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center border border-gray-300 rounded-full overflow-hidden mb-6"
            >
              <Button
                type="submit"
                className="px-4 md:px-6 py-2 bg-black text-white hover:bg-gray-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "..." : "→"}
              </Button>
              <Input
                type="email"
                placeholder="الإيميل ديالك"
                className="px-3 md:px-4 py-2 flex-grow focus:outline-none placeholder:text-right text-sm md:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </form>
            <p className="text-xs md:text-sm text-white mb-8">
              الإيميل ديالك غيستعمل فقط باش نعلموك على تاريخ الافتتاح والتحديثات
            </p>

            {/* DarijaGPT.ma testing section */}
            <div className="bg-white/10 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                جرب DarijaGPT دابا! 🚀
              </h2>
              <p className="text-sm md:text-base text-gray-200 mb-4">
                واش بغيتي تشوف شنو كاين فأول ذكاء اصطناعي مغربي بالدارجة؟ دخل ل
                DarijaGPT.ma وجرب بنفسك!
              </p>
              <Link
                href="https://darijagpt.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black font-bold py-2 px-4 md:px-6 rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base"
                prefetch
              >
                جرب دابا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
