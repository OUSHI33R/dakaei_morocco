"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Share2, UserPlus } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "جمع المعلومات",
      content: [
        "كنجمعو المعلومات اللي كتعطيوها لينا مباشرة، بحال:",
        "• الاسم الكامل",
        "• العنوان الإلكتروني",
        "• رقم الهاتف",
        "زيادة على هادشي، كنجمعو معلومات على كيفاش كتستعملو الموقع ديالنا.",
      ],
      icon: Eye,
    },
    {
      title: "استخدام المعلومات",
      content: [
        "كنستعملو المعلومات ديالكم ل:",
        "• تحسين الخدمات ديالنا",
        "• إرسال إعلانات تسويقية",
        "• تحليل كيفية استخدام الموقع",
        "• تخصيص تجربة المستخدم",
      ],
      icon: Shield,
    },
    {
      title: "حماية المعلومات",
      content: [
        "كنديرو مجهود كبير باش نحميو المعلومات ديالكم من:",
        "• الضياع",
        "• السرقة",
        "• سوء الاستخدام",
        "كنستخدمو تقنيات تشفير متطورة لحماية البيانات ديالكم.",
      ],
      icon: Lock,
    },
    {
      title: "مشاركة المعلومات",
      content: [
        "ما كنبيعوش ولا كنشاركو المعلومات الشخصية ديالكم مع شي طرف تالت، إلا:",
        "• بموافقتكم الصريحة",
        "• إيلا كان ضروري قانونيا",
        "• مع شركاء موثوقين لتقديم خدمات محددة",
      ],
      icon: Share2,
    },
    {
      title: "حقوق المستخدم",
      content: [
        "عندكم الحق في:",
        "• الوصول للمعلومات ديالكم",
        "• تصحيح المعلومات الخاطئة",
        "• طلب حذف المعلومات ديالكم",
        "• الاعتراض على معالجة المعلومات ديالكم",
      ],
      icon: UserPlus,
    },
  ];

  return (
    <div className="min-h-screen  dark:bg-[#1a1a1a] bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-black dark:text-primary mb-12">
          سياسة الخصوصية
        </h1>
        <p className="text-xl text-center dark:text-muted-foreground text-neutral-800 mb-12">
          مرحبا بيكم فسياسة الخصوصية ديالنا. هاد الوثيقة كتشرح كيفاش كنجمعو
          ونستعملو المعلومات الشخصية ديالكم.
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
