"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useJourney } from "../context/JourneyContext";
import PremiumButton from "../components/PremiumButton";

const HEADLINES = [
  <>Where does<br/><span className="italic font-serif text-[#D6B36A]">your mind</span><br/>wander today?</>,
  <>What memory<br/><span className="italic font-serif text-[#D6B36A]">will you</span><br/>create next?</>,
  <>Where would you<br/><span className="italic font-serif text-[#D6B36A]">disappear</span><br/>for a while?</>,
  <>Where is your<br/><span className="italic font-serif text-[#D6B36A]">next story</span><br/>waiting?</>
];

export default function AmbientGateway() {
  const { location, setLocation } = useJourney();
  const router = useRouter();
  const [displayLocation, setDisplayLocation] = useState("Detecting your location...");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(!location);
  const [mounted, setMounted] = useState(false);
  const [locationDetected, setLocationDetected] = useState(!!location);
  const hasDetected = useRef(false);

  const getGreetingVideo = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "/back-videos/morning.mp4";
    if (hour >= 12 && hour < 17) return "/back-videos/afternoon.mp4";
    if (hour >= 17 && hour < 20) return "/back-videos/evening.mp4";
    return "/back-videos/night.mp4";
  };

  useEffect(() => {
    setMounted(true);
    
    // CRITICAL BUG FIX: Clear old journey schemas when starting at home
    sessionStorage.removeItem("journey");
    sessionStorage.removeItem("selectedDestination");
    sessionStorage.removeItem("manifest");
    localStorage.removeItem("journey_backup");

    const headlineInterval = setInterval(() => {
      setHeadlineIndex(prev => (prev + 1) % HEADLINES.length);
    }, 6000);

    // Premium Mood Animation instead of geolocation
    if (!hasDetected.current) {
      hasDetected.current = true;
      
      const hour = new Date().getHours();
      let moodPhrase = "✦ Somewhere beautiful is calling.";
      if (hour >= 18 || hour < 5) moodPhrase = "✦ Evening journeys begin differently.";
      else if (hour >= 5 && hour < 12) moodPhrase = "✦ Morning light brings new horizons.";
      else moodPhrase = "✦ The world is waiting today.";

      setDisplayLocation(moodPhrase);
      
      // We don't set Location in context because we don't want technical location in the header
      setLocation(""); 
      setLocationDetected(true);

      setTimeout(() => {
        setShowIntro(false);
      }, 3500);
    }

    return () => {
      clearInterval(headlineInterval);
    };
  }, [setLocation]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#111111] text-[#F8F7F4]">
      {/* Removed old duplicate header location. Header.tsx handles it globally. */}
      {/* Background Video with subtle vignette and noise */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
        animate={!showIntro ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <video 
          src={mounted ? getGreetingVideo() : "/back-videos/night.mp4"}
          autoPlay 
          muted 
          loop 
          playsInline
          className="object-cover w-full h-full opacity-40"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111111_100%)] opacity-80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center pt-20">
        <div className="relative h-[280px] md:h-[350px] w-full max-w-5xl flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            {showIntro ? (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] z-50 text-center px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-[1px] bg-[#D6B36A]/50 mb-8" />
                  <h2 className="text-xl md:text-3xl font-serif text-[#F8F7F4] mb-4 tracking-widest uppercase opacity-80">
                    Welcome to
                  </h2>
                  <h1 className="text-4xl md:text-7xl font-serif text-[#F8F7F4] mb-12 tracking-tight">
                    Orbital Journeys
                  </h1>
                  
                  <div className="h-6 flex items-center justify-center font-serif italic tracking-wide text-lg text-[#F8F7F4]/90">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={displayLocation}
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        {displayLocation}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.h1 
                key={headlineIndex}
                className="absolute text-5xl md:text-[7rem] font-serif font-light leading-[1.05] tracking-tight w-full text-center"
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {HEADLINES[headlineIndex]}
              </motion.h1>
            )}
          </AnimatePresence>



        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <PremiumButton 
            className="bg-[#FCFBF8] text-[#111111]"
            onClick={() => router.push("/profile")}
          >
            <span>Begin Journey</span>
            <motion.div animate={{ x: 0 }} whileHover={{ x: 4 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D6B36A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.div>
          </PremiumButton>
        </motion.div>
      </div>
    </main>
  );
}
