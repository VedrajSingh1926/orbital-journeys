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
      initial={{ y: 0 }}
      whileHover={{ y: -2, backgroundColor: 'rgba(255,215,0,0.08)', borderColor: '#FFD700' }}
      transition={{ duration: 0.2 }}
      onClick={() => router.back()}
      className="fixed z-[999] flex items-center gap-2 transition-colors duration-300 pointer-events-auto"
      style={{
        top: '76px',
        left: '24px',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,215,0,0.25)',
        borderRadius: '999px',
        padding: '10px 18px',
        color: '#FFD700',
      }}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-sans text-xs uppercase tracking-widest relative mt-[1px]">
        Return
      </span>
    </motion.button>
  );
}
