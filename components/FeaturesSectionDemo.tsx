import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "مصممة للمطورين والمهندسين",
      description:
        "ذكائي مصممة خصيصاً للمطورين والمهندسين باش يسهل عليهم بناء حلول ذكية ومتطورة في وقت قياسي.",
      icon: <IconTerminal2 />,
    },
    {
      title: "سهولة الوصول والاستخدام",
      description:
        " ذكائي كتقدم لك واجهة استخدام بسيطة وسهلة بحال ما كتستعمل آيفون. تقدر تخدم بكل سلاسة بلا ما تضيع الوقت.",
      icon: <IconEaseInOut />,
    },
    {
      title: "أسعار تنافسية",
      description:
        "مع ذكائي، تقدر تلقى الحلول التقنية المتطورة بأثمنة معقولة بلا ما تحتاج تدفع مبالغ ضخمة.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "أداء موثوق وفعال",
      description:
        "خدماتنا ما تتوقفش. مع ذكائي، كتضمن أداء مستمر، وموثوق فيه بنسبة 100%.",
      icon: <IconCloud />,
    },
    {
      title: " حلول ذكية لأعمالك ",
      description:
        "دكائي ماشي غير منصة، ولكن حلاً ذكياً يساعدك تدير أعمالك وتنميها بكل سهولة.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "دعم مستمر 24/7",
      description:
        "خدمة الزبناء ديالنا متوفرة 24 ساعة في اليوم، 7 أيام في الأسبوع. إذا كنت محتاج أي مساعدة، ذكائي ديما معاك.",
      icon: <IconHelp />,
    },
    {
      title: "حلول مبتكرة",
      description:
        "دكائي كتقدم لك حلول مبتكرة لأكبر التحديات التقنية ديالك، وكل هذا بمواصفات عالية.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: " تجربة فريدة",
      description:
        "كل شيء فدكائي متصمم باش يعاونك تحقّق النجاح بأقل جهد، وبأفضل تجربة ممكنة.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-4">
        استكشف ميزات ذكائي الرائعة
      </h2>
      <p className="text-lg text-center text-neutral-600 dark:text-neutral-300 mb-8">
        حلول مبتكرة مصممة لتسهيل حياتك الرقمية بأفضل تجربة ممكنة.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
