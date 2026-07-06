"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MagneticButton() {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; angle: number; speed: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = buttonRef.current!.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    // Generate particles
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 5 + 2,
    }));
    
    setParticles(prev => [...prev, ...newParticles]);

    // Navigate after a tiny delay for effect
    setTimeout(() => {
      router.push("/profile");
    }, 600);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative px-12 py-5 rounded-full bg-[#FCFBF8] text-[#111111] overflow-hidden group font-sans tracking-widest uppercase text-xs transition-shadow duration-500"
      style={{
        boxShadow: isHovered ? "0 0 40px rgba(214,179,106,0.3)" : "0 0 0px rgba(214,179,106,0)",
      }}
    >
      <div className="relative z-10 flex items-center gap-4">
        <span>Begin Your Journey</span>
        <motion.div
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-4 h-4 text-[#D6B36A]" />
        </motion.div>
      </div>

      {/* Particle Burst */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, scale: 0, opacity: 1 }}
          animate={{ 
            x: p.x + Math.cos(p.angle) * p.speed * 20, 
            y: p.y + Math.sin(p.angle) * p.speed * 20,
            scale: [0, 1.5, 0],
            opacity: 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-1 h-1 rounded-full bg-[#D6B36A] pointer-events-none"
        />
      ))}

      {/* Hover background fill */}
      <motion.div
        className="absolute inset-0 bg-[#FAF8F3]"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1.5 : 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        style={{ originX: 0.5, originY: 0.5, borderRadius: '50%' }}
      />
    </motion.button>
  );
}
