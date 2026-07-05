"use client";

import { useEffect, useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Manifest() {
  const [destData, setDestData] = useState<any>(null);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animationState, setAnimationState] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("selectedJourney");
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log("MANIFEST", parsed);
      setDestData(parsed);
    } else {
      console.log("MANIFEST (fallback)");
      import("../../data/destinations").then(({ ALL_DESTINATIONS_INDIA }) => {
        setDestData(ALL_DESTINATIONS_INDIA[0]);
      });
    }
  }, []);

  const finalBudget = destData?.budget ? parseInt(destData.budget.toString().replace(/[^0-9]/g, '')) || 45000 : 45000;

  useEffect(() => {
    const controls = animate(0, finalBudget, {
      duration: 3,
      ease: "circOut",
      onUpdate(value) {
        setBudget(Math.round(value));
      },
    });
    return () => controls.stop();
  }, [finalBudget]);

  const checks = [
    "Emotional match",
    "Travel duration match",
    "Seasonal match",
    "User preference match"
  ];

  const handleConfirm = () => {
    if (animationState !== 0) return;
    setAnimationState(1);
    
    // State 1: Preparing (800ms)
    setTimeout(() => {
      setAnimationState(2);
      
      // State 2: Cinematic travel (1200ms)
      setTimeout(() => {
        setAnimationState(3);
        
        // State 3: Journey Manifested (1000ms)
        setTimeout(() => {
          setAnimationState(4);
          router.push("/");
        }, 1000);
      }, 1200);
    }, 800);
  };

  if (!mounted || !destData) {
    return (
      <main className="relative w-full min-h-screen bg-[#FCFBF7] text-[#111111] flex flex-col items-center justify-center p-6">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="font-serif text-2xl tracking-wide"
        >
          Curating your manifest...
        </motion.p>
      </main>
    );
  }

  return (
    <main className="relative w-full min-h-screen bg-[#FCFBF7] text-[#111111] flex items-center justify-center p-6 overflow-hidden">
      
      <AnimatePresence>
        {animationState === 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111111] flex items-center justify-center overflow-hidden"
          >
            {/* Cinematic stars/particles */}
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-[#D6B36A] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: (Math.random() - 0.5) * window.innerWidth * 2,
                  y: (Math.random() - 0.5) * window.innerHeight * 2,
                  scale: Math.random() * 3,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 1 + 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
            <motion.div
              initial={{ scale: 0.8, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: 1.2, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-[#D6B36A] font-serif text-4xl md:text-6xl tracking-widest uppercase italic"
            >
              Charting Course...
            </motion.div>
          </motion.div>
        )}

        {animationState === 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111111] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0] }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-[#D6B36A] opacity-20 pointer-events-none"
            />
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[#FCFBF7] font-serif text-5xl md:text-7xl mb-4"
            >
              Journey Manifested
            </motion.h2>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-16 h-16 rounded-full bg-[#D6B36A] flex items-center justify-center text-[#111111]"
            >
              <Check className="w-8 h-8" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32"
      >
        {/* Left Column: Summary */}
        <div className="flex flex-col justify-center">
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-[#777777] mb-4">
            The Travel Manifest
          </p>
          <h1 className="text-6xl md:text-8xl font-serif mb-12 tracking-tight uppercase">
            {destData ? destData.name.replace('✦ ', '') : 'KYOTO'}
          </h1>

          <div className="flex flex-col gap-8 mb-16">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-4">Travelers</p>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center hover:bg-brand-text hover:text-brand-bg transition-colors duration-500"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <motion.span 
                  key={travelers}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-4xl w-8 text-center"
                >
                  {travelers}
                </motion.span>
                <button 
                  onClick={() => setTravelers(travelers + 1)}
                  className="w-12 h-12 rounded-full border border-brand-text/20 flex items-center justify-center hover:bg-brand-text hover:text-brand-bg transition-colors duration-500"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-2">Duration</p>
                <div className="font-serif text-2xl text-[#111111]">{destData ? destData.duration : '7 Days'}</div>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-2">Distance</p>
                <div className="font-serif text-2xl text-[#111111]">{destData && destData.story ? destData.story.distance : '5000 KM'}</div>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-2">Weather</p>
                <div className="font-serif text-2xl text-[#111111]">{destData && destData.story ? destData.story.weather : 'Pleasant'}</div>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-secondary mb-2">Budget</p>
                <div className="font-serif text-2xl text-[#D6B36A]">₹{budget.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="mb-8 p-6 bg-white border border-[#111111]/10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="font-sans text-xs tracking-widest uppercase text-[#D6B36A] mb-3">Experience Summary</h3>
              <p className="font-serif italic text-lg leading-relaxed">{destData && destData.story ? destData.story.whyVisit : 'A journey to discover the unknown.'}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Why this destination? */}
        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-brand-text/10 pt-16 md:pt-0 md:pl-16">
          <h2 className="font-serif text-3xl mb-8">Journey Recommendation</h2>
          <p className="font-serif text-xl italic text-brand-text mb-12">"{destData && destData.story ? destData.story.personalizedReason : 'A perfect match for your travel intent.'}"</p>
          <ul className="flex flex-col gap-6 mb-16">
            {checks.map((check, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 + i * 0.2, ease: "easeOut" }}
                className="flex items-center gap-4 text-brand-secondary"
              >
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-accent" />
                </div>
                <span className="font-sans text-sm tracking-wide">{check}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            {animationState === 0 && (
              <button 
                onClick={handleConfirm}
                className="group relative w-full flex items-center justify-between px-8 py-6 overflow-hidden rounded-sm bg-[#111111] text-[#FCFBF7] hover:bg-[#D6B36A] hover:text-[#111111] transition-colors duration-1000"
              >
                <span className="relative z-10 font-sans tracking-widest uppercase text-sm">
                  Confirm Journey
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-700" />
              </button>
            )}
            {animationState === 1 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1.02,
                  boxShadow: "0px 0px 20px rgba(214,179,106,0.5)"
                }}
                className="w-full flex items-center justify-center px-8 py-6 rounded-sm bg-[#D6B36A] text-[#111111] overflow-hidden relative"
              >
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
                <span className="relative z-10 font-sans tracking-widest uppercase text-sm blur-[0.5px]">
                  Preparing your journey...
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
