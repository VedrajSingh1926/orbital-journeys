"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 0.8, x: 0 }}
      whileHover={{ opacity: 1, paddingRight: "1.5rem" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => router.back()}
      className="fixed top-24 left-6 md:left-12 z-40 group flex items-center gap-3 text-[#111111] bg-white/80 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-[#111111]/5"
    >
      <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: 0 }}
          whileHover={{ x: -24 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: 24 }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.div>
      </div>
      <span className="font-sans text-xs uppercase tracking-widest relative mt-[1px]">
        Return
      </span>
    </motion.button>
  );
}
