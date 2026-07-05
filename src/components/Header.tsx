"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useJourney } from "../context/JourneyContext";

export default function Header() {
  const [timeStr, setTimeStr] = useState("");
  const { location, currentStep } = useJourney();
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const showBackButton = pathname !== "/" && pathname !== "/loading";

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex flex-col justify-center items-center pointer-events-none text-[#FCFBF7]"
      style={{
        height: '56px',
        background: 'rgba(0,0,0,0.18)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,215,0,0.08)',
      }}
    >
      {/* Center: Branding & Location/Time */}
      <div className="flex flex-col items-center justify-center pt-1">
        <motion.div 
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="font-serif tracking-[0.3em] uppercase text-[16px] md:text-[18px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#B89645] via-[#D6B36A] to-[#B89645] font-light flex items-center gap-4"
        >
          <span className="text-[#D6B36A] text-[10px] opacity-70">✦</span>
          <span className="drop-shadow-lg">ORBITAL JOURNEYS</span>
          <span className="text-[#D6B36A] text-[10px] opacity-70">✦</span>
        </motion.div>
        <div className="font-sans text-[10px] tracking-[0.25em] opacity-60 uppercase mt-1">
          {location ? `${location.split(', ').join(' • ')} • ` : ''}{timeStr}
        </div>
      </div>

      {/* Right: Step Indicator (Only on profile) */}
      <div className="absolute right-6 md:right-12 top-0 bottom-0 flex items-center">
        {pathname === "/profile" && (
          <div className="flex items-center gap-2 w-24 md:w-32">
            {[0, 1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div 
                  className={`transition-all duration-700 ${i === currentStep ? 'w-2 h-2' : 'w-1.5 h-1.5'} rounded-full`}
                  style={{
                    backgroundColor: '#FFD700',
                    opacity: i === currentStep ? 1 : 0.8,
                    boxShadow: i === currentStep ? '0 0 20px rgba(255,215,0,0.6)' : 'none',
                  }}
                />
                {i < 3 && (
                  <div 
                    className="flex-1 h-[1px] transition-all duration-700"
                    style={{
                      backgroundColor: '#FFD700',
                      opacity: i < currentStep ? 0.8 : 0.3,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </motion.header>
  );
}
