"use client";
import { Check, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PaymentDialog } from "@/components/payment-methods";
import { Container } from "@/components/ui/container";

const plans = [
  {
    name: "مجاني",
    price: "0",
    tokens: "1,000",
    features: [
      "الوصول إلى GPT-4o Mini للمهام الأساسية",
      "إنشاء الصور مع DALL·E 2",
      "وصول محدود لأدوات الذكاء الاصطناعي",
      "مثالي للمستخدمين العاديين والاستكشاف",
      "2 مساعد ذكاء اصطناعي",
      "5 قوالب كتابة",
    ],
    popular: false,
    paymentLink: "https://app.dakaei.ma/app",
  },
  {
    name: "ستارتر",
    price: "49",
    tokens: "20,000",
    features: [
      "الوصول إلى GPT-4o Mini و GPT-3.5 Turbo و Haiku 3 و Command Light",
      "إنشاء الصور مع DALL·E 3 و DALL·E 2 و FLUX.1 [schnell]",
      "أوقات استجابة أسرع",
      "مناسب للطلاب والعاملين المستقلين والمشاريع الصغيرة",
      "10 مساعد ذكاء اصطناعي",
      "جميع قوالب الكتابة",
    ],
    popular: true,
    paymentLink:
      "https://app.dakaei.ma/app/billing/checkout/0194692a-3c29-70c5-bf7c-2c9e8185b699",
  },
  {
    name: "برو",
    price: "199",
    tokens: "100,000",
    features: [
      "الوصول إلى GPT-4o و GPT-4 Turbo و Sonnet 3 و Haiku 3.5 و Command R و Grok Beta",
      "إنشاء الصور مع DALL·E 3 و FLUX.1 [pro] و FLUX.1 [schnell]",
      "معالجة ذات أولوية لطلبات الذكاء الاصطناعي",
      "الأفضل للمحترفين ومنشئي المحتوى والشركات",
      "جميع مساعدي الذكاء الاصطناعي",
      "جميع قوالب الكتابة",
    ],
    popular: false,
    paymentLink:
      "https://app.dakaei.ma/app/billing/checkout/01960c30-9fc3-72ac-b64e-397c07c36100",
  },
  {
    name: "جولد",
    price: "249",
    tokens: "250,000",
    features: [
      "الوصول إلى GPT-4o و GPT-4 Turbo و GPT-4 و Sonnet 3.5 و Opus 3 و Command R+",
      "إنشاء الصور مع DALL·E 3 و FLUX Realism و FLUX.1 [pro]",
      "أداء فائق السرعة للذكاء الاصطناعي مع وصول متميز",
      "مثالي للمؤسسات ومستخدمي الذكاء الاصطناعي المتقدمين",
      "جميع مساعدي الذكاء الاصطناعي",
      "جميع قوالب الكتابة",
    ],
    popular: false,
    paymentLink:
      "https://app.dakaei.ma/app/billing/checkout/01960c33-75e1-73b4-8af6-08ee75c9296d",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-[#1a1a1a] bg-[#f8f9fa] text-white font-arabic">
      <div className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center   left-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-[rgba(26,26,26,0.7)] dark:to-[#1a1a1a] from-[rgba(255,255,255,0.7)] to-[#f8f9fa]">
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-primary sm:text-5xl">
              الأثمنة ديالنا
            </h2>
            <p className="mt-6 text-lg dark:text-gray-400 text-neutral-700">
              اختار الباك اللي غادي ينفعك
            </p>
          </div>
        </div>
      </div>
      <Container className="my-6  ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 dark:bg-[#1a1a1a] bg-[#f8f9fa]">
          {plans.map((plan, index) => (
            <div key={plan.name}>
              <Card
                className={`relative p-6 h-full flex flex-col bg-[#1a1a1a] ${
                  plan.popular ? "border-2 border-primary bg-card " : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-4 dark:bg-white dark:text-primary-foreground bg-black text-neutral-300 border border-neutral-500 px-3 py-1 rounded-full text-sm">
                    الأكثر شعبية
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className=" dark:text-muted-foreground text-neutral-400 ">
                      درهم / شهرياً
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Zap className="w-4 h-4" />
                    <span>{plan.tokens} رمز</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PaymentDialog plan={plan} />
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
