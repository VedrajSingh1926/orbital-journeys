"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/loading") {
    return null;
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 0.8, x: 0 }}
      whileHover={{ x: -4, scale: 1.03, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => router.back()}
      className="fixed z-[9999] group flex items-center gap-3 text-[#F8F7F4] rounded-[50px] transition-all duration-300 pointer-events-auto"
      style={{
        top: '24px',
        left: '24px',
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.15)',
        padding: '12px 20px',
      }}
    >
      <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full opacity-100 group-hover:opacity-0"
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
