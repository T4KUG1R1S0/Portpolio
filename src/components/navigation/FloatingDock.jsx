import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Terminal, Cpu, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'HOME', icon: Home, href: '#' },
  { id: 'projects', label: 'PROJECTS', icon: Layers, href: '#projects' },
  { id: 'mission', label: 'LOGS', icon: Terminal, href: '#mission' },
  { id: 'skills', label: 'SKILLS', icon: Cpu, href: '#skills' },
  { id: 'contact', label: 'TRANSMIT', icon: Mail, href: '#contact' },
];

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('hero');

  // Auto-detect active section saat user scroll (ScrollSpy)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="glass-panel rounded-full p-2 flex items-center justify-center gap-1 md:gap-2 border border-cosmic-purple/40 shadow-glow-purple backdrop-blur-2xl bg-space-card/85">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center justify-center">
              <motion.a
                href={item.href}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-3 md:px-4 py-2 rounded-full flex items-center justify-center gap-2 text-xs font-mono transition-colors duration-200 border ${
                  isActive
                    ? 'text-cosmic-cyan bg-cosmic-cyan/15 border-cosmic-cyan/40 shadow-glow-cyan'
                    : 'text-cosmic-muted hover:text-white hover:bg-white/5 border-transparent'
                }`}
              >
                <Icon size={18} className={isActive ? 'animate-pulse' : ''} />
                <span className="hidden md:inline-block tracking-wider font-semibold">
                  {item.label}
                </span>
              </motion.a>

              {/* Smooth Animated Active Dot */}
              {isActive && (
                <div className="absolute -bottom-1.5 inset-x-0 flex justify-center items-center pointer-events-none">
                  <motion.span
                    layoutId="activeDockDot"
                    className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan shadow-glow-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}