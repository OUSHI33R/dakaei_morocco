"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { PiGooglePlayLogoFill } from "react-icons/pi";

import { useCustomChat } from "@/hooks/useDarijaGPT";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, User, X } from "lucide-react";
import AiAssestentIcon from "@/assets/DAKAEi_Logo_Icon.svg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const CallToActionMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-black text-white p-4 rounded-lg mb-4 text-center"
  >
    <p className="font-bold mb-2">انتهى الوقت التجريبي!</p>
    <p className="mb-2">حمل التطبيق ديالنا باش تكمل التجربة ديالك!</p>
    <Button
      asChild
      className="flex items-center gap-2 bg-white text-black px-4 py-6 rounded-lg hover:bg-neutral-500"
    >
      <Link href="https://play.google.com/store" target="_blank" prefetch>
        <PiGooglePlayLogoFill className="w-5 h-5" />
        تحميل من جوجل بلاي
      </Link>
    </Button>
  </motion.div>
);

export function ChatSection() {
  const { messages, loading, error, isTrialEnded, handleSubmit } =
    useCustomChat();
  const [input, setInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isTrialEnded) {
      setIsDialogOpen(true);
    }
  }, [isTrialEnded]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      handleSubmit(input);
      setInput("");
      setHasSubmitted(true);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          جرب الشات بالدارجة المغربية
        </h2>
        <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg">
          <CardHeader className="bg-black text-white py-3">
            <CardTitle className="text-xl font-bold">
              الشات محدود بالوقت
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`h-[50vh] overflow-y-auto p-4 ${
              isTrialEnded ? "relative" : ""
            }`}
          >
            <AnimatePresence>
              {!hasSubmitted && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center text-gray-500 mb-4"
                >
                  اكتب رسالة للبدء في الدردشة
                </motion.div>
              )}
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start mb-4 ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "assistant" && (
                    <Avatar className="bg-black w-10 h-10 rounded-full shadow-lg">
                      <AvatarImage
                        src="/DAKAEi_Logo_Icon.png"
                        alt="Assistant"
                      />
                      <AvatarFallback className="text-white font-semibold bg-gray-800">
                        DAKAEI
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      m.role === "user"
                        ? "bg-black text-white mx-2 "
                        : "bg-gray-200 text-black mx-2"
                    }`}
                  >
                    <TextGenerateEffect words={m.content} />
                  </div>
                  {m.role === "user" && (
                    <Avatar className="ml-2">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                      <AvatarImage src="/user-avatar.png" alt="User" />
                    </Avatar>
                  )}
                </motion.div>
              ))}
              {isTrialEnded && <CallToActionMessage />}
            </AnimatePresence>
          </CardContent>
          <hr className="bg-primary " />

          <CardFooter className="bg-background p-3">
            <form onSubmit={onSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isTrialEnded ? "انتهى الوقت التجريبي" : "كتب رسالتك هنا..."
                }
                className="flex-grow border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 text-sm"
                disabled={isTrialEnded}
              />
              <Button
                type="submit"
                disabled={loading || isTrialEnded}
                className="bg-black text-white font-bold py-2 px-3 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-800 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                إرسال
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>انتهى الوقت التجريبي</DialogTitle>
            <DialogDescription>
              وصلتي للحد ديال الشات فهاد النسخة التجريبية. حمل التطبيق ديالنا
              باش تكمل التجربة ديالك!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/us/app/your-app-id")
              }
              className="bg-black text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-gray-800"
            >
              حمل من App Store
            </Button>
          </DialogFooter>
          <DialogClose asChild>
            <Button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setIsDialogOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog> */}
    </section>
  );
}
