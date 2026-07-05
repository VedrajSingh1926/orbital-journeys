"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import FilmGrain from "../../components/FilmGrain";

const messages = [
  "Crafting your journey...",
  "Finding hidden destinations...",
  "Preparing your next memory..."
];

export default function ResonanceLoading() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 600); // Faster cycle to see all texts within 2s

    // Exact 2 seconds router transition
    const timer = setTimeout(() => {
      router.replace("/resonance");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#F8F7F4] text-[#111111] flex flex-col items-center justify-center">
      <FilmGrain />
      
      {/* Simple Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#111111]">
        {mounted && Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] rounded-full bg-white opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <svg viewBox="0 0 1000 300" className="w-full max-w-7xl">
          <motion.path
            d="M0 150 Q 125 50 250 150 T 500 150 T 750 150 T 1000 150"
            fill="transparent"
            stroke="#D6B36A"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, x: [0, -100, 0] }}
            transition={{ pathLength: { duration: 2, ease: "easeInOut" }, x: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          />
          <motion.path
            d="M0 150 C 100 250, 200 50, 300 150 S 500 250, 600 150 S 800 50, 900 150 S 1100 250, 1200 150"
            fill="transparent"
            stroke="#111111"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1, x: [0, -200, 0] }}
            transition={{ pathLength: { duration: 2.5, ease: "easeInOut" }, x: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-4xl font-serif tracking-tight text-[#F8F7F4] font-light"
          >
            {messages[index]}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >_</motion.span>
          </motion.p>
        </AnimatePresence>
      </div>
    </main>
  );
}
