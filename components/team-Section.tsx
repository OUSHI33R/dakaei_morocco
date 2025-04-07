"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

interface TeamMember {
  name: string;
  arabicName: string;
  image: string;
  social: {
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Jourfi",
    arabicName: "محمد جرفي",
    image: "https://i.ibb.co/YkYyybQ/dk-f.png",
    social: {
      linkedin: "https://www.linkedin.com/in/jourfi/",
    },
  },
  {
    name: "Samia Cherkaoui",
    arabicName: "سامية الشرقاوي",
    image: "https://i.ibb.co/8D8Ln34b/Nouveau-projet.png",
    social: {
      linkedin: "https://www.linkedin.com/in/samia-cherkaoui-050002348/",
    },
  },
  {
    name: "Abdelhakim Ouchiar",
    arabicName: "عبد الحكيم أوشيعر",
    image: "https://i.ibb.co/SDMdSW0m/00001-01.png",
    social: {
      linkedin: "https://www.linkedin.com/in/aelhakim-ouchiar/",
    },
  },
  {
    name: "Wiam Klia",
    arabicName: "وئام كليا",
    image: "https://i.ibb.co/JjDDSW8J/Untitled-1-01.png",
    social: {
      linkedin: "https://www.linkedin.com/in/kliawiam/",
    },
  },
  {
    name: "Yahya",
    arabicName: "يحيى الرحائلي ",
    image: "https://i.ibb.co/4nLXjVnK/Yahya-01.png",
    social: {
      linkedin: "https://www.linkedin.com/in/yahyaerrehaili/",
    },
  },
];

export function TeamPage() {
  return (
    <div className="min-h-screen dark:bg-[#1a1a1a] bg-[#f8f9fa] text-white font-arabic">
      <div className="relative h-[40vh] bg-[url('https://images.unsplash.com/photo-1468183654773-77e2f0bb6bf9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center   left-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-b dark:from-[rgba(26,26,26,0.7)] dark:to-[#1a1a1a] from-[rgba(255,255,255,0.7)] to-[#f8f9fa]">
          <div className="h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold tracking-tight text-black dark:text-primary sm:text-5xl">
              فريقنا
            </h2>
            <p className="mt-6 text-lg dark:text-gray-400 text-neutral-700">
              نحن مجموعة ديناميكية من الأفراد الشغوفين بعملنا والمكرسين لتقديم
              أفضل النتائج لعملائنا.
            </p>
          </div>
        </div>
      </div>
      <Example />
    </div>
  );
}

export function Example() {
  return (
    <div className="py-14 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {teamMembers.map((member) => (
            <li key={member.name} className="text-center">
              <div className="relative w-full aspect-square">
                <Image
                  alt={member.name}
                  src={member.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold dark:text-gray-100 text-neutral-900 ">
                {member.arabicName}
              </h3>
              <div className="mt-6 flex justify-center gap-x-6">
                <Link
                  href={member.social.linkedin}
                  className="dark:text-gray-400 dark:hover:text-gray-500 text-neutral-800 hover:text-neutral-400"
                  prefetch
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
