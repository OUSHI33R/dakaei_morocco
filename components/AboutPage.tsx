"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { Brain, Code2, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      titleAr: "تيكنولوجيا ديال الذكاء الاصطناعي متطورة",
      descriptionAr:
        "كنستعملو أحدث تقنيات الذكاء الاصطناعي لي مخصصة للمغاربة و العرب",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      titleAr: "التراث ديال المغرب",
      descriptionAr:
        "مبني على أساس الفهم العميق ديال الثقافة و اللغة و التقاليد المغربية",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      titleAr: "الإبداع",
      descriptionAr: "كنطورو الذكاء الاصطناعي في المغرب بأحدث التقنيات",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      titleAr: "ساهل للاستعمال",
      descriptionAr:
        "كنجعلو الذكاء الاصطناعي في متناول جميع المغاربة بواجهة سهلة الاستعمال",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#1a1a1a] bg-[#f8f9fa] text-white text-foreground">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-[rgba(26,26,26,0.7)] dark:to-[#1a1a1a] from-[rgba(255,255,255,0.7)] to-[#f8f9fa] z-10" />
        <Image
          src="https://images.unsplash.com/photo-1531230689007-0b32d7a7c33e?q=80&w=2070&auto=format&fit=crop"
          alt="AI Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-30">
          <h2 className="text-5xl font-extrabold tracking-tight text-black dark:text-primary sm:text-6xl">
            ذكائي
          </h2>
          <p className="mt-6 text-2xl dark:text-gray-400 text-neutral-700 max-w-2xl mx-auto">
            أول بلاتفورم ديال الذكاء الاصطناعي مغربي، كيحترم الهوية والتقاليد
            ديالنا.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-black dark:text-primary">
          المهمة ديالنا
        </h2>
        <p className="text-xl dark:text-gray-400 text-neutral-700 max-w-4xl mx-auto leading-relaxed">
          حنا فذكائي كنطورو مستقبل الذكاء الاصطناعي فالمغرب. الهدف ديالنا هو
          نطورو حلول كتفهم وكتخدم الاحتياجات ديال الشعب المغربي، وتجمع بين
          التكنولوجيا الحديثة والهوية ديالنا.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 ">
        <h3 className="text-4xl text-center dark:text-white text-black mb-12">
          شنو كيميزنا
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-center dark:bg-[#333] bg-neutral-300 dark:text-white  text-black shadow-lg"
            >
              <div className="mb-4 dark:text-primary">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 ">
                {feature.titleAr}
              </h3>
              <p className="text-lg dark:text-neutral-600 text-neutral-900">
                {feature.descriptionAr}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 dark:text-white text-black">
          الرؤية ديالنا
        </h2>
        <p className="text-xl dark:text-gray-400 text-neutral-700 max-w-4xl mx-auto leading-relaxed">
          كنشوفو مستقبل فين المغرب غادي يكون رائد فمجال الذكاء الاصطناعي فشمال
          إفريقيا والعالم. من خلال ذكائي، كنهدفو نجمعو بين التكنولوجيا المتطورة
          والثقافة المغربية.
        </p>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center items-center h-[30rem] flex-col px-6 text-center">
        <p className="text-2xl md:text-4xl max-w-3xl mx-auto dark:text-gray-400 text-neutral-700 font-semibold mb-6">
          <LinkPreview
            url="https://dakaei.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            منصة DAKAEI
          </LinkPreview>{" "}
          الوجهة الأولى لي تجمع بين الإبداع والتقنية، واكتشف جميع الميزات
          الخاصة.
        </p>
        <p className="text-2xl md:text-4xl max-w-3xl mx-auto dark:text-gray-400 text-neutral-700 font-semibold">
          جرب{" "}
          <LinkPreview
            url="https://studio.dakaei.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            DAKAEI AI Studio
          </LinkPreview>{" "}
          وحوّل رؤاك إلى واقع، إطارًا تلو الآخر. 🎬✨
        </p>
      </div>
    </div>
  );
}
