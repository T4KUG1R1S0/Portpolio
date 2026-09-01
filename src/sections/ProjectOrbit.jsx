import React from 'react';
import { Layers, Terminal, ShieldAlert, ExternalLink, GitBranch } from 'lucide-react';

const redTeamProjects = [
  {
    title: 'Project Cerberus // C2 Framework',
    category: 'Command & Control',
    description: 'Custom resilient C2 architecture built with encrypted communication channels, modular payload delivery, and automated traffic obfuscation.',
    tech: ['Python', 'Go', 'WebSocket', 'AES-256'],
    status: 'DEPLOYED'
  },
  {
    title: 'Aegis Breach // Exploit Automation',
    category: 'Penetration Testing',
    description: 'Automated vulnerability scanner and exploit chain orchestrator designed for rapid internal network reconnaissance and privilege escalation validation.',
    tech: ['Rust', 'Bash', 'Docker', 'Metasploit API'],
    status: 'ACTIVE'
  },
  {
    title: 'PhishMatrix // Social Engineering Suite',
    category: 'Adversary Simulation',
    description: 'Advanced credential harvesting simulation platform featuring dynamic phishing templates, real-time tracking, and bypass for modern MFA tokens.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    status: 'COMPLETED'
  }
];

export default function ProjectOrbit() {
  return (
    <div 
      id="projects" 
      className="glass-panel rounded-2xl p-5 border border-red-500/35 bg-space-card/25 backdrop-blur-md shadow-glow-red/10 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-space-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-red-400 animate-pulse" />
          <h3 className="font-heading font-bold text-xs md:text-sm tracking-wider text-white">
            PROJECT ORBIT // OFFENSIVE TOOLS
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400">
          SECURE_VAULT
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-3 font-mono text-xs">
        {redTeamProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-black/20 p-3.5 rounded-xl border border-white/5 hover:border-red-500/40 transition-all space-y-2.5 group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[9px] text-red-400 font-bold uppercase tracking-wider">{project.category}</span>
                <h4 className="font-heading font-bold text-slate-100 text-[13px] group-hover:text-red-400 transition-colors">
                  {project.title}
                </h4>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                {project.status}
              </span>
            </div>

            <p className="text-slate-300 text-[11px] leading-relaxed">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-cosmic-muted border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-space-border/50 flex justify-between items-center text-[10px] font-mono text-cosmic-muted">
        <span>ORBIT STATUS: STABLE</span>
        <span className="text-red-400 font-bold">CLASSIFIED REPO</span>
      </div>
    </div>
  );
}