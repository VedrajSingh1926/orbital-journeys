"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useJourney } from "../../context/JourneyContext";
import PremiumButton from "../../components/PremiumButton";

const MOODS = [
  { id: "Adventure", desc: "Push your limits and feel alive" },
  { id: "Culture", desc: "Immerse in timeless heritage" },
  { id: "Nature", desc: "Reconnect with the earth" },
  { id: "Luxury", desc: "Indulge in unparalleled elegance" },
  { id: "Escape", desc: "Disappear into the unknown" },
  { id: "Spiritual", desc: "Find your inner resonance" },
];

const COMPANIONS = ["Solo", "Couple", "Family", "Friends"];
const DISTANCES = ["India", "Outside India", "Anywhere"];

export default function Profiler() {
  const router = useRouter();
  
  const { setMood, days, setDays, companions, setCompanions, distance, setDistance, generateDestinations, currentStep, setCurrentStep } = useJourney();

  React.useEffect(() => {
    // CRITICAL: Clear all old cached journey data so we don't load old schema objects
    sessionStorage.removeItem("journey");
    sessionStorage.removeItem("selectedDestination");
    sessionStorage.removeItem("manifest");
    localStorage.removeItem("journey_backup");
  }, []);

  const handleNext = (overrideDistance?: string) => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      generateDestinations(overrideDistance);
      router.push("/loading");
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white flex flex-col items-center justify-center">
      
      {/* Removed soft glows to keep it clean */}


      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto flex flex-col items-center h-full pt-32 pb-16 justify-center">
        <div className="flex-1 w-full flex flex-col items-center justify-center mt-12">
          <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center tracking-tight font-light">
                What are you seeking?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl">
                {MOODS.map((mood) => (
                  <motion.button
                    key={mood.id}
                    onClick={() => { setMood(mood.id); handleNext(); }}
                    className="group relative flex flex-col items-start py-4 border-b border-transparent hover:border-brand-accent/30 transition-all duration-700 text-left"
                  >
                    <span className="font-serif text-2xl md:text-3xl text-brand-text group-hover:text-brand-accent transition-colors duration-700">
                      {mood.id}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-brand-secondary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {mood.desc}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center tracking-tight font-light">
                For how many days?
              </h2>
              
              <div className="flex flex-col items-center w-full max-w-xl gap-16">
                <div className="relative flex justify-center items-center h-40 overflow-hidden px-12 border-y border-brand-text/10 w-full max-w-xs">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={days}
                      initial={{ y: "50%", opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: "-50%", opacity: 0, rotateX: 90 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute text-8xl md:text-[8rem] font-serif font-light text-brand-accent"
                      style={{ transformOrigin: "center" }}
                    >
                      {days}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="flex flex-col items-center w-full">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full h-1 bg-[#111111]/10 rounded-lg appearance-none cursor-pointer accent-[#D6B36A] hover:accent-[#111111] transition-all duration-500"
                    style={{
                      background: `linear-gradient(to right, #D6B36A ${((days - 1) / 29) * 100}%, rgba(17,17,17,0.1) ${((days - 1) / 29) * 100}%)`
                    }}
                  />
                  <style jsx>{`
                    input[type='range']::-webkit-slider-thumb {
                      appearance: none;
                      width: 20px;
                      height: 20px;
                      background: #D6B36A;
                      border-radius: 50%;
                      cursor: pointer;
                      transition: all 0.3s ease;
                    }
                    input[type='range']::-webkit-slider-thumb:hover {
                      transform: scale(1.2);
                      background: #111111;
                    }
                  `}</style>
                </div>

                <PremiumButton
                  onClick={handleNext}
                  className="mt-8 border border-[#111111]/20 hover:border-[#D6B36A] text-[#111111]"
                >
                  <span>Continue</span>
                  <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
                    <ArrowRight className="w-4 h-4 text-[#D6B36A]" />
                  </motion.div>
                </PremiumButton>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center tracking-tight font-light">
                Who shares the journey?
              </h2>
              
              <div className="flex flex-col gap-6 w-full max-w-sm">
                {COMPANIONS.map((comp) => (
                  <motion.button
                    key={comp}
                    onClick={() => { setCompanions(comp); handleNext(); }}
                    className="relative py-4 text-center overflow-hidden group"
                  >
                    <span className="font-serif text-3xl group-hover:text-brand-accent transition-colors duration-500 relative z-10">
                      {comp}
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-700" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center tracking-tight font-light">
                How far would you go?
              </h2>
              
              <div className="flex flex-col gap-6 w-full max-w-sm">
                {DISTANCES.map((dist) => (
                  <motion.button
                    key={dist}
                    onClick={() => { setDistance(dist); handleNext(dist); }}
                    className="relative py-4 text-center overflow-hidden group"
                  >
                    <span className="font-serif text-3xl group-hover:text-brand-accent transition-colors duration-500 relative z-10">
                      {dist}
                    </span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-700" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
