"use client";
import { Play } from "lucide-react";
import { TypewriterEffectSmooth } from "./ui/typewrite-effect";
import Link from "next/link";

export default function DownloadSection() {
  const words = [
    { text: "شوف" },
    { text: "الذكاء" },
    { text: "الصناعي" },
    { text: "ديالنا" },
    { text: "مع" },
    { text: "Dakaei.ma", className: "text-yellow-500 dark:text-yellow-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[25rem] rtl">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        المستقبل بدا من دابا!
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row md:space-y-0 space-y-4 space-x-0 md:space-x-4 rtl">
        {/* Google Play Button */}
        <button
          type="button"
          className="px-4 py-2 flex items-center mx-2 rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black opacity-50 cursor-not-allowed"
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            fill="#fff"
            className="inline ml-2"
            viewBox="0 0 64 64"
          >
            <path fill="#57cef3" d="M7 3v58l33-29z" />
            <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
            <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
            <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
          </svg>
          <div className="text-right">
            <p className="text-[10px] text-white leading-none">قريبا على</p>
            Google Play
          </div>
        </button>

        {/* App Store Button */}
        <button
          type="button"
          className="px-4 py-2 flex items-center mx-2 rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black opacity-50 cursor-not-allowed"
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            fill="#fff"
            className="inline ml-2"
            viewBox="0 0 22.773 22.773"
          >
            <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
          </svg>
          <div>
            <p className="text-[10px] text-white leading-none">قريبا على</p>
            App Store
          </div>
        </button>
      </div>
    </div>
  );
}
