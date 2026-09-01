import React from 'react';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';

export default function ProfilePanel() {
  return (
    <div 
      id="hero"
      className="glass-panel rounded-2xl p-6 border border-red-500/35 bg-space-card/25 backdrop-blur-md shadow-glow-red/10 space-y-4 md:col-span-2"
    >
      {/* Header Status */}
      <div className="flex items-center justify-between border-b border-space-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-red-400 animate-pulse" />
          <span className="font-mono text-xs text-red-400 font-bold tracking-wider">
            SYSTEM STATUS: ONLINE // RED TEAM OPERATOR
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400">
          SECURE_NODE
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="space-y-3 font-mono">
        <div className="space-y-1">
          <span className="text-xs text-red-400 font-bold tracking-widest">[ ACCESS GRANTED ]</span>
          <h1 className="font-heading text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            CYBER_WARFARE & <span className="text-red-500">OFFENSIVE SECURITY</span>
          </h1>
        </div>

        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-mono">
          Specialized in advanced penetration testing, custom C2 framework development, adversary simulation, and rigorous internal infrastructure exploitation.
        </p>
      </div>

      {/* Quick Action Badges */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-space-border/50 text-xs font-mono">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 border border-white/10 text-slate-200">
          <Shield size={14} className="text-red-400" />
          <span>Clearance: Level 5</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/30 border border-white/10 text-slate-200">
          <Cpu size={14} className="text-red-400" />
          <span>Architecture: Offensive Ops</span>
        </div>
      </div>
    </div>
  );
}