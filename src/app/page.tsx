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

    // Automatic User Location Detection
    if (!hasDetected.current) {
      hasDetected.current = true;
      
      setDisplayLocation("✦ Discovering your corner of the world...");

      const finalizeLocation = (locStr: string) => {
        setLocation(locStr);
        sessionStorage.setItem("userLocation", locStr);
        localStorage.setItem("userLocation", locStr);
        setDisplayLocation(locStr);
        setTimeout(() => {
          setShowIntro(false);
        }, 3500);
      };

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
              const data = await res.json();
              const city = data.address.city || data.address.town || data.address.village || "";
              const state = data.address.state || "";
              const country = data.address.country || "";
              const parts = [city, state, country].filter(Boolean);
              
              if (parts.length > 0) {
                finalizeLocation(parts.join(", "));
              } else {
                finalizeLocation("✦ The world is waiting today.");
              }
            } catch (err) {
              finalizeLocation("✦ The world is waiting today.");
            }
          },
          (error) => {
             finalizeLocation("✦ The world is waiting today.");
          },
          { timeout: 5000 }
        );
      } else {
        finalizeLocation("✦ The world is waiting today.");
      }
    }

    return () => {
      clearInterval(headlineInterval);
    };
  }, [setLocation]);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#111111] text-[#FCFBF7]">
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
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.2, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="flex items-center gap-6 mb-8"
                  >
                    <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#D6B36A]/60" />
                    <span className="text-[#D6B36A] tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs uppercase font-sans font-light">
                      Curated Intelligence
                    </span>
                    <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#D6B36A]/60" />
                  </motion.div>
                  
                  <motion.h1 
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% auto" }}
                    className="text-6xl md:text-[8rem] font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#FCFBF7] via-[#D6B36A] to-[#FCFBF7] tracking-[0.15em] md:tracking-[0.25em] uppercase font-light leading-none mb-12 drop-shadow-2xl text-center"
                  >
                    Orbital<br className="md:hidden" /> Journeys
                  </motion.h1>
                  
                  <div className="h-6 flex items-center justify-center font-serif italic tracking-wide text-lg text-[#FCFBF7]/90">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={displayLocation}
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        {displayLocation.split("").map((char, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(4px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                          >
                            {char}
                          </motion.span>
                        ))}
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
