"use client";

import { motion } from "framer-motion";

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#FCFBF7]">
      {/* 1. Base Background Color (#FCFBF7) */}

      {/* 2. Soft Radial Gradients */}
      {/* Top Right Warm Gold Glow */}
      <div 
        className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply opacity-[0.15] blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(214,179,106,0.8) 0%, rgba(214,179,106,0) 70%)"
        }}
      />
      
      {/* Bottom Left Cream/Off-white Glow */}
      <div 
        className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen opacity-[0.6] blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)"
        }}
      />

      {/* 3. Subtle Paper/Grain Texture (2-4% opacity) */}
      <div 
        className="absolute inset-0 mix-blend-multiply opacity-[0.03]"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
          backgroundRepeat: "repeat"
        }}
      />

      {/* 4. Faint Travel-Inspired Line Art on Page Sides (3-6% opacity) */}
      
      {/* Left side: Compass / Globe contour */}
      <div className="absolute top-[15%] -left-[10%] opacity-[0.04] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.2">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="32" strokeDasharray="1 2" />
          <line x1="50" y1="2" x2="50" y2="98" />
          <line x1="2" y1="50" x2="98" y2="50" />
          <line x1="15" y1="15" x2="85" y2="85" strokeWidth="0.1" />
          <line x1="15" y1="85" x2="85" y2="15" strokeWidth="0.1" />
        </svg>
      </div>

      {/* Right side: Airplane route curves / Mountain outlines */}
      <div className="absolute bottom-[20%] -right-[5%] opacity-[0.04] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="0.3">
          <path d="M 10 90 Q 40 10, 90 40" strokeDasharray="2 3" />
          <path d="M 0 100 L 20 70 L 40 80 L 70 30 L 100 60" strokeWidth="0.1" />
          <circle cx="90" cy="40" r="2" fill="#111111" />
          <circle cx="10" cy="90" r="1.5" />
        </svg>
      </div>

    </div>
  );
}
