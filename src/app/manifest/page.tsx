"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";

export default function Manifest() {
  const [destData, setDestData] = useState<any>(null);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = sessionStorage.getItem("manifest");
    if (stored) {
      const parsed = JSON.parse(stored);
      console.log("MANIFEST", parsed);
      setDestData(parsed);
    } else {
      console.log("MANIFEST (fallback)");
      import("../../data/destinations").then(({ ALL_DESTINATIONS }) => {
        setDestData(ALL_DESTINATIONS[0]);
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

  return (
    <main className="relative w-full min-h-screen bg-[#F8F7F4] text-[#111111] flex items-center justify-center p-6">
      
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
            
            <div className="mb-8 p-6 bg-white border border-[#111111]/5 rounded-sm">
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
            <button className="group relative w-full flex items-center justify-between px-8 py-6 overflow-hidden rounded-sm bg-[#111111] text-[#F8F7F4] hover:bg-[#D6B36A] hover:text-[#111111] transition-colors duration-1000">
              <span className="relative z-10 font-sans tracking-widest uppercase text-sm">
                Confirm Journey
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-700" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
