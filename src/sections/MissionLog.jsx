import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ChevronDown, Rocket, Compass, Target } from 'lucide-react';

const logs = [
  {
    id: '01',
    title: 'WHO I AM',
    icon: Compass,
    content: 'Informatics Engineering student passionate about crafting sleek digital interfaces, interactive experiences, and robust back-end logic. I treat every project as an exploration into new technological frontiers.',
  },
  {
    id: '02',
    title: 'WHAT I DO',
    icon: Target,
    content: 'Specializing in Modern Web Development (React, Next.js, Tailwind CSS), API Architecture, and Cyber Defense fundamentals. Focused on clean code, micro-interactions, and visual precision.',
  },
  {
    id: '03',
    title: 'MISSION STATEMENT',
    icon: Rocket,
    content: 'To engineer immersive, high-performance web applications that bridge complex technical logic with intuitive, human-centered UI/UX.',
  },
];

export default function MissionLog() {
  const [openLog, setOpenLog] = useState('01');

  return (
    <div className="glass-panel rounded-2xl p-6 space-y-4">
      {/* Module Title */}
      <div className="flex items-center justify-between border-b border-space-border pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-cosmic-cyan" />
          <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-cosmic-text">
            Mission Log // About
          </h3>
        </div>
        <span className="text-[10px] font-mono text-cosmic-muted">ARCHIVE_ACCESS</span>
      </div>

      {/* Accordion List */}
      <div className="space-y-2">
        {logs.map((log) => {
          const Icon = log.icon;
          const isOpen = openLog === log.id;

          return (
            <div
              key={log.id}
              className="border border-space-border rounded-xl bg-space-bg/40 overflow-hidden transition-colors duration-200 hover:border-cosmic-purple/40"
            >
              <button
                onClick={() => setOpenLog(isOpen ? null : log.id)}
                className="w-full p-3.5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cosmic-cyan font-bold">
                    {log.id}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-heading font-semibold text-cosmic-text">
                    <Icon size={14} className="text-cosmic-purple" />
                    <span>{log.title}</span>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-cosmic-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-cosmic-cyan' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-3.5 pb-3.5 pt-1 text-xs text-cosmic-muted border-t border-space-border/40 leading-relaxed font-body"
                  >
                    {log.content}
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