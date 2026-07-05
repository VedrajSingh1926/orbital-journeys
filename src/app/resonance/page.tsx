"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useJourney } from "../../context/JourneyContext";
import { Search, X, Star } from "lucide-react";
import BackButton from "../../components/BackButton";
import PremiumButton from "../../components/PremiumButton";

export default function Resonance() {
  const router = useRouter();
  const { destinations, generateDestinations } = useJourney();
  
  // STEP 1: Log destinations to verify schema
  console.log("DESTINATIONS", destinations);
  
  const [hovered, setHovered] = useState<string | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [nodePositions, setNodePositions] = useState<Record<string, {x: number, y: number}>>({});
  const [localDestinations, setLocalDestinations] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState("");
  const { location } = useJourney();

  useEffect(() => {
    let journeyExists = false;
    let parsedDestinations = [];
    try {
      const stored = sessionStorage.getItem("journey");
      console.log("JOURNEY", stored);
      if (stored) {
        journeyExists = true;
        const parsed = JSON.parse(stored);
        if (parsed.destinations) {
          parsedDestinations = parsed.destinations;
        }
      }
    } catch (e) {
      console.error(e);
    }
    
    if (parsedDestinations.length > 0) {
      setLocalDestinations(parsedDestinations);
    } else if (destinations.length > 0) {
      setLocalDestinations(destinations);
    } else {
      generateDestinations(); // Generates fallbacks synchronously
      const stored = sessionStorage.getItem("journey");
      if (stored) {
         setLocalDestinations(JSON.parse(stored).destinations || []);
      }
    }
    
    // Set time
    setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);

    setMounted(true);
    return () => clearInterval(timeInterval);
  }, [destinations, generateDestinations]);

  // Use localDestinations instead of context destinations
  const currentDestinations = localDestinations.length > 0 ? localDestinations : destinations;
  
  console.log("DESTINATIONS", currentDestinations);
  console.log("HOVERED", hovered);

  const activeDest: any = currentDestinations.find(d => d.id === hovered);
  const clickedDest = currentDestinations.find(d => d.id === clicked);

  const allNodes = currentDestinations;

  useEffect(() => {
    if (!mounted || allNodes.length === 0) return;
    
    const positions: Record<string, {x: number, y: number}> = {};
    const svgNS = "http://www.w3.org/2000/svg";
    
    // Create a hidden SVG in DOM to reliably calculate path lengths in all browsers
    const hiddenSvg = document.createElementNS(svgNS, "svg");
    hiddenSvg.style.visibility = "hidden";
    hiddenSvg.style.position = "absolute";
    document.body.appendChild(hiddenSvg);
    
    allNodes.forEach((dest, i) => {
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", dest.wave);
      hiddenSvg.appendChild(path);
      try {
        const length = path.getTotalLength();
        // Distribute nodes evenly to prevent visual overlap
        // Using index to stagger them between 20% and 80% of their paths
        const percentage = 0.2 + ((i * 0.25) % 0.6); 
        const point = path.getPointAtLength(length * percentage);
        positions[dest.id] = { x: point.x, y: point.y };
      } catch(e) {
        positions[dest.id] = { x: dest.x, y: dest.y };
      }
    });
    
    document.body.removeChild(hiddenSvg);
    setNodePositions(positions);
  }, [allNodes, mounted]);

  if (!mounted) return null; // Prevent hydration mismatch

  const handleNodeClick = (dest: any) => {
    setClicked(dest.id);
    console.log("CLICKED", dest);
    sessionStorage.setItem("selectedDestination", JSON.stringify(dest));
    setTimeout(() => {
      router.push(`/destination/${dest.id}`);
    }, 1500);
  };

  // Rest of the SVG waves
  return (
    <main className="relative w-full min-h-[150vh] overflow-hidden bg-[#F8F7F4] text-[#111111] flex flex-col pt-32">
      
      {/* Title moved to standard flex layout instead of absolute */}
      <div className="px-12 md:px-24 z-20 opacity-40 mix-blend-multiply flex-shrink-0">
        <h2 className="font-serif text-sm tracking-widest uppercase text-[#111111]">
          Journey Resonance Constellation
        </h2>
      </div>

      <div className="absolute top-8 left-8 z-50 pointer-events-auto">
        <BackButton />
      </div>

      <AnimatePresence>
        {(activeDest || clickedDest) && (
          <motion.div
            key={(clickedDest || activeDest)?.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: clicked ? 0 : 0.8, 
              scale: clicked ? 1.1 : 1 
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${(clickedDest || activeDest)?.image})`, 
              filter: 'blur(30px) brightness(1.2)' 
            }}
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 opacity-[0.4] bg-white/40 pointer-events-none z-0" />

      {/* SVG Waves & Constellation - taking up remaining space */}
      <div className="relative flex-1 w-full flex items-center justify-center pointer-events-none z-10">
        <svg viewBox="0 0 1200 800" className="w-full h-full max-w-7xl overflow-visible">
          {allNodes.map((dest: any) => {
            const isHovered = hovered === dest.id;
            const isOtherHoveredOrClicked = (hovered !== null && !isHovered) || clicked !== null;
            const isClicked = clicked === dest.id;

            return (
              <g key={`group-${dest.id}`}>
                {/* Wave */}
                <motion.path
                  d={dest.wave}
                  fill="transparent"
                  stroke={isHovered || isClicked ? "#D6B36A" : "#111111"}
                  strokeWidth={isHovered ? 1.5 : 0.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: isOtherHoveredOrClicked && !isClicked ? 0.4 : (isClicked ? 0 : (isHovered ? 0.8 : 0.4)),
                    x: isHovered ? [0, -20, 0] : 0
                  }}
                  transition={{ 
                    pathLength: { duration: 3, ease: "easeInOut" },
                    opacity: { duration: 1.5 },
                    x: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  className="transition-colors duration-1000"
                />

                {/* Node */}
                <g 
                  transform={`translate(${nodePositions[dest.id]?.x || dest.x}, ${nodePositions[dest.id]?.y || dest.y})`}
                  className="pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => !clicked && setHovered(dest.id)}
                  onMouseLeave={() => !clicked && setHovered(null)}
                  onClick={() => !clicked && handleNodeClick(dest)}
                >
                  <motion.text
                    x={0}
                    y={-30}
                    textAnchor="middle"
                    className="font-serif tracking-widest text-xs uppercase"
                    fill="#111111"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: isOtherHoveredOrClicked ? 0.4 : 0.8, y: isHovered ? -35 : -30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {dest.isUnexpected && !dest.name.startsWith('✦') ? `✦ ${dest.name}` : dest.name}
                  </motion.text>

                  <motion.circle
                    r={isHovered ? 6 : 3}
                    fill={isHovered || isClicked ? "#D6B36A" : "#111111"}
                    stroke={isHovered || isClicked ? "#D6B36A" : "none"}
                    strokeWidth={isHovered || isClicked ? 4 : 0}
                    strokeOpacity={0.3}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ 
                      scale: isClicked ? 150 : (isHovered ? 1.2 : 1),
                      opacity: isOtherHoveredOrClicked && !isClicked ? 0.4 : 1
                    }}
                    transition={{ 
                      scale: { duration: isClicked ? 1.5 : 0.8, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.8 }
                    }}
                  />
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Cinematic Details */}
      <AnimatePresence>
        {activeDest && !clicked && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 left-12 md:left-24 z-20 max-w-lg pointer-events-none bg-[#FCFBF8]/80 backdrop-blur-2xl p-10 rounded-sm border border-[#111111]/5 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-5 h-5 text-[#D6B36A] fill-[#D6B36A]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#D6B36A] font-medium">
                Travel Resonance Score: {activeDest.match || 95}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif mb-2 tracking-tight text-[#111111]">
              {activeDest.name.replace('✦ ', '')}
            </h1>
            <p className="font-sans uppercase tracking-widest text-xs text-[#777777] mb-8">
              {activeDest.country}
            </p>
            <p className="font-serif text-xl italic text-[#111111] mb-10 leading-relaxed">
              "{activeDest.description}"
            </p>
            
            <div className="grid grid-cols-3 gap-8 font-sans text-xs tracking-widest uppercase border-t border-[#111111]/10 pt-6">
              <div>
                <span className="text-[#777777] block mb-2">Match</span>
                <span className="text-[#111111] font-medium text-lg">{activeDest.match}</span>
              </div>
              <div>
                <span className="text-[#777777] block mb-2">Budget</span>
                <span className="text-[#111111] font-medium text-lg">{activeDest.budget}</span>
              </div>
              <div>
                <span className="text-[#777777] block mb-2">Duration</span>
                <span className="text-[#111111] font-medium text-lg">{activeDest.duration || "N/A"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
