"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold dark:text-neutral-200 text-neutral-900 font-sans text-right">
        فين غادي تحتاجني؟
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    title:
      "مع Dakaei، غادي تولي كل فكرة عندك واقع. سواء كنت كتقلب على إنتاجية أكثر ولا حلول ذكية لحياتك اليومية، Dakaei ديما معاك.",
    src: "https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "خدمتك، حياتك، ومستقبلك... كلشي غادي يتبدل مع ذكاء Dakaei. كون سبّاق ودير الفرق اليوم قبل غدا.",
    src: "https://images.unsplash.com/photo-1628642004970-1da51c8c7dec?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "سواء بغيت تطور مشروعك، ولا غير تنظم يومك، Dakaei عندها الأدوات اللي كتحتاج باش توصل لأهدافك بذكاء.",
    src: "https://images.unsplash.com/photo-1628642393776-70a715f2cc40?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "بذكاء Dakaei، غادي تكتشف كيفاش تسهل حياتك وتوصل للنجاح بسرعة، سواء فخدمتك ولا فحياتك اليومية.",
    src: "https://images.unsplash.com/photo-1605882090044-aa9cbe6df29e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
