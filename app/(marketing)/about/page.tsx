import AboutPage from "@/components/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ذكائي - الذكاء الاصطناعي المغربي",
  description:
    "أول بلاتفورم ديال الذكاء الاصطناعي مغربي، كيحترم الهوية والتقاليد ديالنا. حنا فذكائي كنطورو حلول ذكاء اصطناعي خاصة بالمغاربة والعرب.",
  keywords:
    "ذكاء اصطناعي, المغرب, تقنيات حديثة, ثقافة مغربية, حلول ذكاء اصطناعي",
};

function page() {
  return <AboutPage />;
}

export default page;
