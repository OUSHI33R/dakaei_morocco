import Link from "next/link";
import { Navbar } from "@/components/navbar"; // Replace with your actual component path
import { Container } from "./ui/container";
import { Gradient } from "./gradient";
import { Button } from "./ui/button";
import { PiGooglePlayLogoFill } from "react-icons/pi";

export function Hero() {
  return (
    <div className="relative" dir="rtl">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
        {/* Fallback Text */}
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <Gradient className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent opacity-90" />
      </div>

      {/* Content Section */}
      <div className="relative z-20">
        <Container>
          {/* Navbar */}
          <Navbar
            banner={
              <Link
                href="#"
                className="flex items-center gap-1 rounded-full bg-white px-3 py-0.5 text-sm font-medium text-black hover:bg-gray-100"
              >
                💡 الرفيق ديالك ديال الذكاء
              </Link>
            }
          />
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            {/* Headline */}
            <h1 className="font-display text-balance text-right text-3xl sm:text-6xl md:text-8xl font-extrabold leading-tight text-white">
              مرحبا بك فذكائي!
            </h1>

            {/* Subheadline */}
            <p className="mt-8 text-right text-lg sm:text-2xl font-semibold text-gray-300">
              مع فذكائي الخدمة ديالك غادي تولّي ذكية فكل المجالات وحتى فالحياة
              اليومية! تجاوب، تحلل، وتبدع فالحين، سواء فخدمتك ولا فتنظيم حياتك،
              ذكائي ديما معاك باش توصل لأفضل النتائج.
            </p>

            {/* Call to Action Section */}
            <div className="mt-12 flex flex-col items-center sm:flex-row sm:justify-start sm:gap-4">
              <Link
                href="https://app.dakaei.ma/login"
                target="_blank"
                className="mb-4 w-full sm:mb-0 sm:w-auto flex items-center gap-2 px-6 py-2 text-center text-lg font-bold border-2 rounded-lg bg-black text-white"
              >
                دخل لحسابك
              </Link>
              <Link
                href="https://darijagpt.ma"
                className="mb-4 w-full sm:mb-0 sm:w-auto px-6 py-2 text-center text-lg font-bold border-2 rounded-lg border-white text-white "
              >
                جرب الآن
              </Link>
            </div>

            {/* Additional Info */}
            <p className="mt-8 max-w-3xl text-right text-sm sm:text-base text-gray-400">
              مع &quot;ذكاء&quot;، غادي تكتشف كيفاش تطور خدمتك، تجاوب على
              الزبائن فالحين، وتحلل المعطيات باش تخد قرارات ذكية.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
