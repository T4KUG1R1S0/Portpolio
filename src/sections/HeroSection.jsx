import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-panel p-6 md:p-8 flex flex-col justify-between min-h-[220px]">
      {/* Background Glowing Orbital Ring Decorative */}
      <div className="absolute -right-12 -top-12 w-64 h-64 border border-cosmic-purple/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none" />
      <div className="absolute -right-6 -top-6 w-52 h-52 border border-dashed border-cosmic-cyan/20 rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none" />

      {/* Top Header Tag */}
      <div className="flex items-center gap-2 text-xs font-mono text-cosmic-cyan mb-3">
        <Sparkles size={14} className="animate-pulse" />
        <span className="tracking-widest uppercase">TRANSMISSION // INITIALIZED</span>
      </div>

      {/* Main Content */}
      <div className="space-y-2 relative z-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-cosmic-text tracking-wide">
          Welcome to my universe.
        </h2>
        <p className="text-sm text-cosmic-muted max-w-xl leading-relaxed">
          Hi, I'm <span className="text-cosmic-cyan font-semibold">TAKUGIRISO</span>. 
          I build digital experiences, interactive interfaces, and intelligent systems.
        </p>
      </div>

      {/* Bottom Status / Navigation Trigger */}
      <div className="mt-6 pt-4 border-t border-space-border/60 flex items-center justify-between text-xs font-mono text-cosmic-muted">
        <div className="flex items-center gap-2">
          <Compass size={14} className="text-cosmic-purple" />
          <span>EXPLORE ORBITAL MODULES BELOW</span>
        </div>
        <span className="hidden sm:inline-block text-cosmic-purple/80">SECTOR 01</span>
      </div>
    </div>
  );
}