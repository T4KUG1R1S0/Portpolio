import React from 'react';
import { motion } from 'framer-motion';

export default function OrbitNode({ id, index, x, y, isSelected, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.9 }}
      className={`absolute w-10 h-10 rounded-full flex items-center justify-center border text-xs font-mono font-bold transition-all duration-300 ${
        isSelected
          ? 'border-cosmic-cyan bg-cosmic-cyan/20 text-cosmic-cyan shadow-glow-cyan z-20 scale-110'
          : 'border-space-border bg-space-card/80 text-cosmic-muted hover:border-cosmic-purple hover:text-white'
      }`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      0{index + 1}
    </motion.button>
  );
}