import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Terminal, Compass, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 border border-cosmic-cyan/40 relative overflow-hidden space-y-6 shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-cyan/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic-cyan/10 border border-cosmic-cyan/30 text-cosmic-cyan text-[10px] font-mono tracking-widest">
          <Sparkles size={12} /> SECTOR 01 // COMMAND AUTHORIZED
        </div>
        <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-white tracking-wider leading-tight">
          GALAXY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-cyan via-purple-400 to-pink-500">CONTROL CENTER</span>
        </h1>
        <p className="text-xs md:text-sm text-cosmic-muted font-mono max-w-xl leading-relaxed">
          High-performance web architecture interface initialized. Navigating immersive 3D spatial dimensions, interactive project orbits, and cosmic data streams.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 relative z-10 font-mono text-xs">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-xl bg-cosmic-cyan text-space-bg font-bold flex items-center gap-2 shadow-glow-cyan"
        >
          <Rocket size={15} /> LAUNCH ORBIT
        </motion.a>
        <motion.a
          href="#transmission"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 rounded-xl bg-space-card/80 border border-white/10 text-white font-bold flex items-center gap-2 hover:border-cosmic-cyan/40 transition-colors"
        >
          <Terminal size={15} /> TRANSMIT SIGNAL
        </motion.a>
      </div>
    </div>
  );
}