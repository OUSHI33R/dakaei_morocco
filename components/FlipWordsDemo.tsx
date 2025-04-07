import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["ذكاء", "قوة", "سرعة", "تطور"];

  return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto my-5 font-normal text-neutral-600 dark:text-neutral-400">
        شوف
        <FlipWords words={words} /> <br />
        ديال الذكاء الاصطناعي ديالنا
      </div>
    </div>
  );
}
