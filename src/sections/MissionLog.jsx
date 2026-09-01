import React, { useState } from 'react';
import { Terminal, ShieldAlert, ChevronDown, CheckCircle2 } from 'lucide-react';

const redTeamMissions = [
  {
    id: 'LOG-01',
    title: 'Adversary Simulation & C2 Infrastructure',
    status: 'SUCCESS',
    date: '2025.Q4',
    description: 'Deployed resilient Command and Control (C2) servers behind multi-layered redirectors to execute red team engagements with zero attribution.'
  },
  {
    id: 'LOG-02',
    title: 'External Perimeter Infiltration & Exploitation',
    status: 'SUCCESS',
    date: '2025.Q3',
    description: 'Successfully bypassed perimeter firewalls via custom payload delivery, performing lateral movement and privilege escalation inside target domain.'
  },
  {
    id: 'LOG-03',
    title: 'Advanced Social Engineering & OSINT Recon',
    status: 'IN PROGRESS',
    date: '2026.Q1',
    description: 'Executing comprehensive threat intelligence gathering, spear-phishing campaigns, and credential harvesting simulations for enterprise security audit.'
  }
];

export default function MissionLog() {
  const [expandedId, setExpandedId] = useState('LOG-03');

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div 
      id="mission"
      className="glass-panel rounded-2xl p-5 border border-red-500/35 bg-space-card/25 backdrop-blur-md shadow-glow-red/10 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-space-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-red-400 animate-pulse" />
          <h3 className="font-heading font-bold text-xs md:text-sm tracking-wider text-white">
            MISSION LOGS // OFFENSIVE ARCHIVE
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400">
          CLASSIFIED
        </span>
      </div>

      {/* Mission Items */}
      <div className="space-y-2.5 font-mono text-xs">
        {redTeamMissions.map((mission) => {
          const isExpanded = expandedId === mission.id;
          const isSuccess = mission.status === 'SUCCESS';

          return (
            <div 
              key={mission.id} 
              className="bg-black/20 rounded-xl border border-white/5 overflow-hidden transition-all hover:border-red-500/30"
            >
              <button
                onClick={() => toggleExpand(mission.id)}
                className="w-full p-3 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-red-400 font-bold">{mission.id}</span>
                  <span className="text-slate-200 font-semibold text-[11px] truncate max-w-[200px] md:max-w-xs">
                    {mission.title}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] px-2 py-0.5 rounded border font-bold ${
                    isSuccess 
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' 
                      : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                  }`}>
                    {mission.status}
                  </span>
                  <ChevronDown 
                    size={14} 
                    className={`text-cosmic-muted transition-transform duration-200 ${isExpanded ? 'rotate-180 text-red-400' : ''}`} 
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="px-3 pb-3 pt-1 border-t border-white/5 text-slate-300 space-y-2 text-[11px]">
                  <div className="flex justify-between text-[10px] text-cosmic-muted">
                    <span>TIMELINE: {mission.date}</span>
                    <span className="text-red-400">OPERATIONAL CLEARANCE</span>
                  </div>
                  <p className="leading-relaxed">{mission.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-space-border/50 flex justify-between items-center text-[10px] font-mono text-cosmic-muted">
        <span>TOTAL ENGAGEMENTS: 3 ACTIVE</span>
        <span className="text-red-400 font-bold">SECURE ENCRYPTION</span>
      </div>
    </div>
  );
}