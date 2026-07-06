"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import FilmGrain from "../../components/FilmGrain";
import { useJourney } from "../../context/JourneyContext";
import { getSmartFallback } from "../../data/destinations";

const messages = [
  "Curating your journey...",
  "Consulting the oracle...",
  "Preparing your next memory..."
];

const WAVES = [
  { wave: "M 0 300 Q 200 200 400 300 T 800 300 T 1200 300", x: 300, y: 300 },
  { wave: "M 0 150 Q 300 250 600 150 T 1200 150", x: 600, y: 150 },
  { wave: "M 0 600 C 300 500, 600 700, 900 600 S 1500 700, 1800 600", x: 800, y: 600 },
  { wave: "M 0 450 Q 250 350 500 450 T 1000 450 T 1500 450", x: 400, y: 450 }
];

export default function ResonanceLoading() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { updateDestinations, mood, companions, distance, location, days } = useJourney();

  useEffect(() => {
    setMounted(true);
    
    const generateJourney = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      
      let finalDestinations = [];

      try {
        const payload = {
          mood,
          duration: days,
          companions,
          locationPreference: distance,
          currentLocation: location || "Earth",
          currentMonth: new Date().toLocaleString('default', { month: 'long' }),
          currentSeason: "Summer"
        };

        const res = await fetch("/api/enhance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        
        if (res.ok) {
          const { success, destinations } = await res.json();
          if (success && destinations && Array.isArray(destinations)) {
            finalDestinations = destinations;
          }
        }
      } catch (e) {
        console.warn("AI Generation failed or timed out. Initiating fallback...", e);
      } finally {
        clearTimeout(timeoutId);
        
        if (finalDestinations.length === 0) {
          console.log("FALLBACK ACTIVATED");
          finalDestinations = getSmartFallback(distance);
        } else {
          console.log("FINAL DESTINATIONS (AI GENERATED)", finalDestinations);
        }

        // Attach UI graph coordinates
        const withUI = finalDestinations.map((d: any, i: number) => ({
          ...d,
          wave: WAVES[i % WAVES.length].wave,
          x: WAVES[i % WAVES.length].x,
          y: WAVES[i % WAVES.length].y
        }));

        updateDestinations(withUI);

        try {
          router.replace("/resonance");
        } catch (e) {
          window.location.href = "/resonance";
        }
      }
    };

    generateJourney();

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 600);

    const fallbackTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = "/resonance";
      }
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(fallbackTimer);
    };
  }, [router, mood, companions, distance, location, days, updateDestinations]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-transparent text-[#111111] flex flex-col items-center justify-center">
      <FilmGrain />
      
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
            className="text-2xl md:text-4xl font-serif tracking-tight text-[#FCFBF7] font-light"
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
