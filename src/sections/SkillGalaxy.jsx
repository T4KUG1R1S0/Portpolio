import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Database, Layout, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    icon: Layout,
    color: 'border-cosmic-cyan text-cosmic-cyan',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)'],
  },
  {
    id: 'backend',
    title: 'BACKEND & DB',
    icon: Database,
    color: 'border-cosmic-purple text-cosmic-purple',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'cyber',
    title: 'CYBERSECURITY',
    icon: Shield,
    color: 'border-cosmic-magenta text-cosmic-magenta',
    skills: ['Network Security', 'Linux SysAdmin', 'Penetration Testing'],
  },
];

export default function SkillGalaxy() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <div className="glass-panel rounded-2xl p-6 space-y-5">
      {/* Module Title */}
      <div className="flex items-center justify-between border-b border-space-border pb-3">
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-cosmic-purple" />
          <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-cosmic-text">
            Skill Galaxy Map
          </h3>
        </div>
        <span className="text-[10px] font-mono text-cosmic-muted">NODES: ACTIVE</span>
      </div>

      {/* Category Selectors */}
      <div className="grid grid-cols-3 gap-2">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border text-[10px] font-mono transition-all duration-200 ${
                isActive
                  ? `${cat.color} bg-space-card shadow-glow-purple`
                  : 'border-space-border bg-space-bg/50 text-cosmic-muted hover:border-cosmic-purple/50'
              }`}
            >
              <Icon size={16} />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Galaxy Map Skill Display */}
      <div className="bg-space-bg/60 border border-space-border/60 rounded-xl p-4 min-h-[160px] flex flex-col justify-center relative overflow-hidden">
        {/* Subtle Background Circuit Decorative Line */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7C5CFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="flex flex-wrap gap-2 relative z-10">
          {skillCategories
            .find((c) => c.id === activeCategory)
            ?.skills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-card/90 border border-cosmic-purple/30 text-xs font-mono text-cosmic-text hover:border-cosmic-cyan hover:shadow-glow-cyan transition duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan animate-pulse" />
                <span>{skill}</span>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}