import React from "react";
import ContactPage from "@/components/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | ذكائي",
  description: "تواصل معنا لأي استفسار أو مساعدة. نحن هنا لخدمتك!",
  keywords: "اتصال, دعم, ذكائي, تواصل معنا",

};

function page() {
  return (
    <div>
      <div className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center   left-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,26,26,0.7)] to-[#1a1a1a]">
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              تواصل معنا
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              نحن هنا للإجابة على أسئلتك ومساعدتك
            </p>
          </div>
        </div>
      </div>
      <ContactPage />
    </div>
  );
}

export default page;
