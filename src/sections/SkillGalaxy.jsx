import React from 'react';
import { Terminal, ShieldAlert, Cpu, Lock, Flame } from 'lucide-react';

const redTeamSkills = [
  { name: 'Penetration Testing & Recon', level: '95%', icon: ShieldAlert, color: 'text-red-400' },
  { name: 'Exploit Development & C2', level: '90%', icon: Terminal, color: 'text-red-400' },
  { name: 'Network Infiltration & Pivoting', level: '88%', icon: Flame, color: 'text-amber-400' },
  { name: 'Vulnerability Assessment', level: '92%', icon: Lock, color: 'text-red-400' },
  { name: 'OSINT & Social Engineering', level: '85%', icon: Cpu, color: 'text-amber-400' },
];

export default function SkillGalaxy() {
  return (
    <div 
      id="skills"
      className="glass-panel rounded-2xl p-5 border border-red-500/35 bg-space-card/25 backdrop-blur-md shadow-glow-red/10 space-y-4"
    >
      {/* Header Matrix */}
      <div className="flex items-center justify-between border-b border-space-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-red-400 animate-pulse" />
          <h3 className="font-heading font-bold text-xs md:text-sm tracking-wider text-white">
            OFFENSIVE MATRIX // SKILLS
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400">
          RED_TEAM
        </span>
      </div>

      {/* Skills List */}
      <div className="space-y-3 font-mono text-xs">
        {redTeamSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="space-y-1 bg-black/20 p-2.5 rounded-xl border border-white/5 hover:border-red-500/30 transition-all">
              <div className="flex justify-between items-center text-slate-200">
                <span className="flex items-center gap-2">
                  <Icon size={14} className={skill.color} />
                  <span className="font-semibold text-[11px]">{skill.name}</span>
                </span>
                <span className={`text-[10px] font-bold ${skill.color}`}>{skill.level}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-space-card rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full" 
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="pt-2 border-t border-space-border/50 flex justify-between items-center text-[10px] font-mono text-cosmic-muted">
        <span>STATUS: SYSTEM BREACH READY</span>
        <span className="text-red-400 font-bold">AUTHORIZED ONLY</span>
      </div>
    </div>
  );
}