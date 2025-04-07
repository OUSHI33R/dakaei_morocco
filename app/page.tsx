"use client";

import AIToolsInterface from "@/components/ai-tools-interface";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { CoverDemo } from "@/components/CoverDemo";
import DownloadSection from "@/components/downloadSection";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import { Hero } from "@/components/hero";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { ChatSection } from "@/components/PlaceholdersAndVanishInputDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <section className="container mx-auto py-8 ">
        <HeroScrollDemo />
        <AppleCardsCarouselDemo />
        {/* <CoverDemo /> */}
        <FeaturesSectionDemo />
        <AIToolsInterface />
        <DownloadSection />
        <FlipWordsDemo />
        <ChatSection />
      </section>
    </main>
  );
}
