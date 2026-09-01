import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverEffect = true }) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Subtle Corner Accents (Sci-Fi Vibe) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cosmic-purple/60" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cosmic-purple/60" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cosmic-purple/60" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cosmic-purple/60" />

      {children}
    </motion.div>
  );
}