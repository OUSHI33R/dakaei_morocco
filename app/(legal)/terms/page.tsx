"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  AlertTriangle,
  Copyright,
  ShieldAlert,
  UserX,
} from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      title: "قبول الشروط",
      content: [
        "باستعمالكم للموقع ديالنا، كتوافقو على هاد الشروط والأحكام.",
        "إيلا ما بغيتوش تقبلو هاد الشروط، ما خاصكومش تستعملو الموقع ديالنا.",
        "كنوصيوكم تقراو هاد الشروط بعناية قبل ما تستعملو أي خدمة من خدماتنا.",
      ],
      icon: CheckCircle,
    },
    {
      title: "التغييرات فالخدمة",
      content: [
        "عندنا الحق باش:",
        "• نبدلو الخدمات ديالنا في أي وقت",
        "• نوقفو الخدمة ديالنا مؤقتا أو بشكل دائم",
        "• نغيرو الأسعار ديال الخدمات",
        "غادي نحاولو نخبروكم بأي تغييرات مهمة، ولكن ماشي دائما ممكن.",
      ],
      icon: AlertTriangle,
    },
    {
      title: "حقوق الملكية الفكرية",
      content: [
        "جميع المحتويات فالموقع ديالنا كاينين تحت حماية حقوق الطبع والنشر، بما فيهم:",
        "• النصوص",
        "• الصور",
        "• الشعارات",
        "• التصاميم",
        "ممنوع تستنسخو، توزعو، أو تستغلو هاد المحتويات بدون إذن كتابي منا.",
      ],
      icon: Copyright,
    },
    {
      title: "تحديد المسؤولية",
      content: [
        "ما كنتحملوش المسؤولية على:",
        "• أي ضرر مباشر ينتج من استعمال الموقع ديالنا",
        "• أي ضرر غير مباشر ينتج من استعمال الموقع ديالنا",
        "• أي خسارة في الأرباح أو البيانات",
        "استعمالكم للموقع كيكون على مسؤوليتكم الخاصة.",
      ],
      icon: ShieldAlert,
    },
    {
      title: "إنهاء الخدمة",
      content: [
        "يمكن لينا ننهيو أو نعلقو الحساب ديالكم في أي وقت إيلا:",
        "• خرقتو هاد الشروط والأحكام",
        "• استعملتو الخدمة بطريقة غير قانونية",
        "• ما خلصتوش الرسوم المطلوبة",
        "فهاد الحالات، ما غاديش يكون عندكم الحق في أي تعويض.",
      ],
      icon: UserX,
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#1a1a1a] bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-black dark:text-primary  mb-12">
          الشروط والأحكام
        </h1>
        <p className="text-xl text-center dark:text-muted-foreground text-neutral-800 mb-12">
          مرحبا بيكم فالشروط والأحكام ديال الخدمة ديالنا. قراو هاد الوثيقة مزيان
          قبل ما تستعملو الموقع ديالنا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <Card className="h-full dark:bg-card bg-transparent dark:border-neutral-600 dark:border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold dark:text-primary text-black">
                    <section.icon className="w-8 h-8 ml-3" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="dark:text-muted-foreground text-neutral-800 mb-2"
                    >
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
