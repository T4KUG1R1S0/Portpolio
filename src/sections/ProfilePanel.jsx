import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Radio } from 'lucide-react';

export default function ProfilePanel() {
  const [systemStatus, setSystemStatus] = useState('ONLINE');

  const toggleStatus = () => {
    setSystemStatus((prev) => (prev === 'ONLINE' ? 'STEALTH' : 'ONLINE'));
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-cosmic-purple/30 relative overflow-hidden space-y-5 shadow-lg">
      {/* Efek Garis Hologram Scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,34,0)_50%,rgba(6,182,212,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />

      {/* Header Profile */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="relative w-14 h-14 rounded-xl border border-cosmic-cyan/50 overflow-hidden bg-space-card flex items-center justify-center shadow-glow-cyan">
          <Cpu className="text-cosmic-cyan animate-pulse" size={28} />
          <div className="absolute bottom-0 inset-x-0 h-1 bg-cosmic-cyan animate-ping" />
        </div>
        <div>
          <h2 className="text-sm font-heading font-bold text-white tracking-wider">
            COMMANDER // 01
          </h2>
          <p className="text-[11px] font-mono text-cosmic-cyan flex items-center gap-1.5 mt-0.5">
            <Radio size={12} className="animate-spin" /> FULLSTACK ARCHITECT
          </p>
        </div>
      </div>

      {/* Bio / Terminal Status */}
      <div className="relative z-10 p-3 rounded-lg bg-space-bg/60 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-cosmic-muted">
          <span>SECURE_ID: #889-GALAXY</span>
          <span className="text-emerald-400">SYNC OK</span>
        </div>
        <p className="text-xs text-cosmic-text leading-relaxed">
          Specialized in high-performance web architectures, interactive 3D visualizations, and immersive cosmic UIs.
        </p>
      </div>

      {/* Interactive Status Switcher */}
      <div className="relative z-10 pt-2 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${systemStatus === 'ONLINE' ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
          <span className="text-[10px] font-mono tracking-widest text-cosmic-muted">
            MODE: <strong className="text-white">{systemStatus}</strong>
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleStatus}
          className="text-[10px] font-mono px-3 py-1 rounded bg-cosmic-cyan/10 border border-cosmic-cyan/30 text-cosmic-cyan hover:bg-cosmic-cyan/20 transition-all shadow-glow-cyan"
        >
          TOGGLE MODE
        </motion.button>
      </div>
    </div>
  );
}