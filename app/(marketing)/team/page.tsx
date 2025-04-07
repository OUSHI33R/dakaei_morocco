import { TeamPage } from "@/components/team-Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فريقنا | ذكائي",
  description:
    "تعرف على فريق ذكائي المبدع الذي يعمل على تطوير أحدث تقنيات الذكاء الاصطناعي.",
  keywords: "فريق ذكائي, فريق العمل, الذكاء الاصطناعي, خبراء, مطورين",
};

export default function Home() {
  return <TeamPage />;
}
