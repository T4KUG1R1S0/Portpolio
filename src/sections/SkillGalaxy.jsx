import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code, Database, Globe } from 'lucide-react';

const skillsData = [
  { name: 'React / Next.js', category: 'Frontend', level: '95%', icon: Code, desc: 'Advanced component architecture, state management, and SSR optimization.' },
  { name: 'Tailwind CSS', category: 'Styling', level: '92%', icon: Globe, desc: 'Responsive design, custom themes, glassmorphism, and fluid animations.' },
  { name: 'HTML5 Canvas / WebGL', category: 'Visuals', level: '85%', icon: Cpu, desc: 'Custom particle systems, 3D transformations, and real-time graphics rendering.' },
  { name: 'Node.js / Databases', category: 'Backend', level: '80%', icon: Database, desc: 'RESTful APIs, database schema design, and secure backend operations.' },
];

export default function SkillGalaxy() {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <div className="glass-panel rounded-2xl p-5 border border-cosmic-purple/30 space-y-4 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <h3 className="text-sm font-heading font-bold text-white tracking-widest flex items-center gap-2">
          <Cpu size={16} className="text-cosmic-cyan" /> SKILL GALAXY
        </h3>
        <span className="text-[10px] font-mono text-cosmic-muted">SYSTEM SPECS</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skillsData.map((skill) => {
          const IconComponent = skill.icon;
          const isSelected = activeSkill.name === skill.name;

          return (
            <motion.button
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                isSelected
                  ? 'bg-cosmic-cyan/15 border-cosmic-cyan/50 shadow-glow-cyan text-white'
                  : 'bg-space-card/40 border-white/5 text-cosmic-muted hover:border-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <IconComponent size={16} className={isSelected ? 'text-cosmic-cyan' : 'text-cosmic-muted'} />
                <span className="text-[10px] font-mono text-cosmic-cyan">{skill.level}</span>
              </div>
              <span className="text-xs font-bold tracking-wide">{skill.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Panel Detail Skill Terpilih */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSkill.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="p-3 rounded-lg bg-space-bg/60 border border-cosmic-cyan/20 space-y-1 font-mono text-xs"
        >
          <div className="flex justify-between text-[10px] text-cosmic-cyan">
            <span>DOMAIN: {activeSkill.category.toUpperCase()}</span>
            <span>PROFICIENCY: {activeSkill.level}</span>
          </div>
          <p className="text-cosmic-text text-[11px] leading-relaxed pt-1">{activeSkill.desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}