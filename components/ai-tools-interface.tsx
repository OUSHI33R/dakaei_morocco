"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { toolsContent } from "@/data/Benifits";
import { Cover } from "./ui/cover";
import { motion } from "framer-motion";

export default function AIToolsInterface() {
  const [selectedTool, setSelectedTool] = useState(toolsContent[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen text-white p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Headline and Subtitle */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-black dark:text-white">
            اكتاشف أدواتنا المعززة
            <Cover className="mx-2">بالذكاء الاصطناعي</Cover>
          </h1>
          <p className="text-xl dark:text-gray-300 text-gray-800 max-w-3xl mx-auto">
            جرب مجموعة ديال الأدوات المتطورة بالذكاء الاصطناعي اللي غادي تبدل
            طريقة خدمتك وتزيد الإنتاجية ديالك.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px,1fr] gap-8">
          {/* Tools List */}
          <motion.div className="space-y-4" variants={containerVariants}>
            {toolsContent.map((tool) => (
              <motion.div
                key={tool.id}
                onClick={() => setSelectedTool(tool)}
                className={cn(
                  "flex items-start gap-4 group cursor-pointer transition-all duration-300 p-4 rounded-lg",
                  "hover:bg-primary/10 dark:hover:bg-white/20",
                  selectedTool.id === tool.id &&
                    "border-l-4 border-primary bg-primary/10 dark:bg-white/20"
                )}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    selectedTool.id === tool.id
                      ? "bg-primary text-white"
                      : "dark:bg-white/20 bg-black/80"
                  )}
                >
                  <tool.icon className="w-6 h-6 dark:text-neutral-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-primary">
                    {tool.title}
                  </h2>
                  <p className="text-sm dark:text-gray-400 text-gray-800">
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Display */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            key={selectedTool.id}
          >
            <Card className="dark:bg-neutral-800 border-2 border-gray-300 bg-gray-100 p-6 rounded-xl">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Content Header */}
                <div className="flex items-center gap-4 justify-center">
                  <div className="p-2 rounded-lg dark:bg-white/20 bg-black/80">
                    <selectedTool.icon className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-primary">
                    {selectedTool.title}
                  </h1>
                </div>

                {/* Main Content */}
                <p className="dark:text-white text-black/80 leading-relaxed">
                  {selectedTool.content.text}
                </p>

                {/* Image */}
                <motion.div
                  className="relative h-[300px] sm:h-[430px] w-full overflow-hidden rounded-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={selectedTool.content.image || "/placeholder.svg"}
                    alt={selectedTool.title}
                    fill
                    className="object-contain sm:object-cover"
                  />
                </motion.div>

                {/* Features */}
                {selectedTool.content.features && (
                  <motion.div
                    className="grid sm:grid-cols-2 gap-4 mt-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {selectedTool.content.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 dark:bg-white/20 bg-white p-3 rounded-lg"
                        variants={itemVariants}
                      >
                        <div className="w-2 h-2 rounded-full dark:bg-white bg-black" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
