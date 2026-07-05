"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PremiumButton({ children, onClick, className = "" }: PremiumButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      className={`relative px-10 py-4 md:px-12 md:py-5 rounded-full group font-sans tracking-widest uppercase text-xs transition-shadow duration-500 ${className}`}
      style={{
        boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.1)" : "0 0 0px rgba(0,0,0,0)",
      }}
    >
      <div className="relative z-10 flex items-center justify-center gap-4 w-full h-full">
        {children}
      </div>
    </motion.button>
  );
}
