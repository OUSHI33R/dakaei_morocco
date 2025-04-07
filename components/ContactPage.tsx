"use client";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("حدث خطأ");

      toast({ title: "شكراً لك", description: "تم إرسال رسالتك بنجاح" });
      e.currentTarget.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "حدث خطأ أثناء إرسال الرسالة",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              {
                icon: <MapPin />,
                title: "العنوان",
                text: "الدار البيضاء، المغرب",
              },
              { icon: <Phone />, title: "الهاتف", text: "+212 600000000" },
              {
                icon: <Mail />,
                title: "البريد الإلكتروني",
                text: "Contact@dakaei.com",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex items-center space-x-4 rtl:space-x-reverse"
              >
                <span className="w-6 h-6 text-primary">{icon}</span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}

            <div className="pt-8">
              <h3 className="font-semibold mb-4">تابعنا على</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Link
                  href="https://www.linkedin.com/company/dakaei/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/dakaei.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "الاسم الكامل", type: "text" },
                { name: "email", label: "البريد الإلكتروني", type: "email" },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium mb-2"
                  >
                    {label}
                  </label>
                  <Input
                    type={type}
                    name={name}
                    id={name}
                    required
                    className="w-full bg-transparent border-2 border-white"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2  rounded-md border-2 border-white"
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
