"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5"
        style={{
          maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 0%, black 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></motion.div>
      </div>
    </div>
  );
};