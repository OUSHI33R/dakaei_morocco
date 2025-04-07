"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const characters = words.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.2,
        delay: index * 0.02,
      }}
    >
      {char}
    </motion.span>
  ));

  return <div className="text-left">{characters}</div>;
};