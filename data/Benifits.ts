import { PenLine, Image, Code, MessageSquare, Mic } from "lucide-react";

interface ToolContent {
  id: string;
  title: string;
  description: string;
  icon: any;
  content: {
    text: string;
    image: string;
    features?: string[];
  };
}

export const toolsContent: ToolContent[] = [
  {
    id: "text-generator",
    icon: PenLine,
    title: "مولد النصوص بالذكاء الاصطناعي",
    description: "إنشاء نصوص عالية الجودة بسهولة",
    content: {
      text: "هاد الأداة مصممة باش تعاونك تكتب نصوص بجودة عالية فالحين، بلا مجهود كبير. بواجهة سهلة وخدمات قوية، تقدر تسالي النص، تصدرو ولا تنشرو بسهولة.",
      image: "/chat.png",
      features: [
        "إكمال النصوص بذكاء",
        "أنماط كتابة مختلفة",
        "تصدير فعدة صيغ",
        "تحرير فوري",
      ],
    },
  },
  {
    id: "image-generator",
    icon: Image,
    title: "مولد الصور بالذكاء الاصطناعي",
    description: "إنشاء صور رائعة باستعمال الذكاء الاصطناعي",
    content: {
      text: "حول الأفكار ديالك لصور مبهرة باستعمال مولد الصور بالذكاء الاصطناعي. تقدر تصايب صور فريدة وبجودة عالية لأي غرض، وبنقرة وحدة.",
      image: "/ai_image.png",
      features: [
        "إخراج بجودة عالية",
        "أنماط وفلاتر متنوعة",
        "معالجة بالجملة",
        "أبعاد مخصصة",
      ],
    },
  },
  {
    id: "code-generator",
    icon: Code,
    title: "مولد الكود بالذكاء الاصطناعي",
    description: "إنشاء الكود تلقائياً",
    content: {
      text: "كتب الكود بسرعة وذكاء مع مولد الكود بالذكاء الاصطناعي. مناسب للمطورين اللي بغاو يسرعو الخدمة ويقللو من الأعمال الروتينية.",
      image: "/code.png",
      features: [
        "دعم لغات برمجة متعددة",
        "تحسين الكود",
        "الإكمال التلقائي",
        "إبراز الصياغة",
      ],
    },
  },
  {
    id: "chat-bot",
    icon: MessageSquare,
    title: "روبوت المحادثة بالذكاء الاصطناعي",
    description: "محادثات ذكية مع الذكاء الاصطناعي",
    content: {
      text: "تواصل مع روبوت ذكي كيعرف السياق وكيرد بطريقة معقولة. مثالي لخدمات الزبناء والدعم التقني.",
      image: "/writing_auto.png",
      features: [
        "معالجة اللغة الطبيعية",
        "متوفر 24/7",
        "دعم لغات متعددة",
        "تدريب مخصص",
      ],
    },
  },
  {
    id: "speech-to-text",
    icon: Mic,
    title: "تحويل الكلام للنصوص بالذكاء الاصطناعي",
    description: "حول الكلام للنصوص فالحين",
    content: {
      text: "حول أي كلام لنصوص بدقة عالية باستعمال تقنيات الذكاء الاصطناعي المتطورة. مثالي للكتابة من الصوت وتسهيل الولوج.",
      image: "/transcriber.png",
      features: [
        "نسخ فالحين",
        "دعم لغات متعددة",
        "تمييز المتحدثين",
        "قاموس مخصص",
      ],
    },
  },
];
