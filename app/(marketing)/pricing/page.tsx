import PricingPage from "@/components/PricingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأثمنة  | ذكائي",
  description:
    "اختر خطتك المثالية واستمتع بأفضل أدوات الذكاء الاصطناعي من ذكائي، من الخطة المجانية إلى خطة المحترفين.",
  keywords:
    "باقات, أسعار, اشتراك, ذكائي, GPT-4, الذكاء الاصطناعي, إنشاء الصور, FLUX AI",
};

export default function Home() {
  return <PricingPage />;
}
