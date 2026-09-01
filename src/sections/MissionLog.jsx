import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';

const missions = [
  {
    id: 'LOG-01',
    title: 'Deployment of Hypercube Engine',
    date: 'STARDATE 2026.1',
    status: 'SUCCESS',
    detail: 'Successfully integrated 4D Tesseract projection with responsive dynamic lighting and zero frame drops.',
  },
  {
    id: 'LOG-02',
    title: 'Orbital Navigation Stabilization',
    date: 'STARDATE 2026.2',
    status: 'SUCCESS',
    detail: 'Resolved component positioning and fixed state synchronization on the interactive project orbit nodes.',
  },
  {
    id: 'LOG-03',
    title: 'Deep Space Cosmic UI Expansion',
    date: 'STARDATE 2026.3',
    status: 'IN PROGRESS',
    detail: 'Upgrading background rendering to include realistic multi-color spiral galaxies and interactive cursor tracking.',
  },
];

export default function MissionLog() {
  const [activeLog, setActiveLog] = useState('LOG-03');

  return (
    <div className="glass-panel rounded-2xl p-6 border border-cosmic-purple/30 space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <h3 className="text-sm font-heading font-bold text-white tracking-widest flex items-center gap-2">
          <Terminal size={16} className="text-cosmic-cyan" /> MISSION LOGS
        </h3>
        <span className="text-[10px] font-mono text-cosmic-muted">ENCRYPTED ARCHIVE</span>
      </div>

      <div className="space-y-3">
        {missions.map((mission) => {
          const isOpen = activeLog === mission.id;

          return (
            <div
              key={mission.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen ? 'bg-space-bg/80 border-cosmic-cyan/40 shadow-glow-cyan' : 'bg-space-card/40 border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setActiveLog(isOpen ? null : mission.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cosmic-cyan">{mission.id}</span>
                  <span className="text-xs font-bold text-white tracking-wide">{mission.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded ${mission.status === 'SUCCESS' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                    {mission.status}
                  </span>
                  <ChevronDown size={14} className={`text-cosmic-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-cosmic-cyan' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 pb-4 pt-1 border-t border-white/5 text-xs text-cosmic-muted space-y-2 font-mono"
                  >
                    <div className="flex justify-between text-[10px] text-cosmic-cyan/70">
                      <span>TIMESTAMP: {mission.date}</span>
                      <span>SEC_LEVEL: ALPHA</span>
                    </div>
                    <p className="leading-relaxed text-cosmic-text">{mission.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}