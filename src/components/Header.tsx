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
      className="fixed top-0 left-0 w-full px-6 py-8 md:px-12 md:py-8 z-50 flex justify-between items-center pointer-events-none text-[#F8F7F4] mix-blend-difference"
    >
      {/* Left: Logo */}
      <div className={`font-serif tracking-widest uppercase text-sm md:text-base leading-tight w-1/3 transition-all duration-300 ${showBackButton ? "ml-[120px]" : ""}`}>
        Orbital
        <br />
        Journeys
      </div>

      {/* Center: Step Indicator (Only on profile) */}
      <div className="flex-1 flex justify-center w-1/3">
        {pathname === "/profile" && (
          <div className="flex items-center gap-2 w-full max-w-[200px]">
            {[0, 1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div 
                  className={`w-2 h-2 rounded-full transition-all duration-700 ${i === currentStep ? 'bg-[#D6B36A] shadow-[0_0_10px_rgba(214,179,106,0.5)]' : i < currentStep ? 'bg-[#F8F7F4]' : 'bg-[#F8F7F4]/30'}`} 
                />
                {i < 3 && (
                  <div 
                    className={`flex-1 h-[1px] transition-all duration-700 ${i < currentStep ? 'bg-[#F8F7F4]' : 'bg-[#F8F7F4]/30'}`} 
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Right: Location & Time */}
      <div className="font-sans text-xs tracking-widest text-right opacity-70 uppercase flex flex-col items-end gap-1 w-1/3">
        <span>{timeStr}</span>
        {location && <span>📍 {location}</span>}
      </div>
    </motion.header>
  );
}
