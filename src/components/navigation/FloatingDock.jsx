import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Layers, Terminal, Cpu, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'HOME', icon: Home },
  { id: 'projects', label: 'VAULT', icon: Layers },
  { id: 'mission', label: 'LOGS', icon: Terminal },
  { id: 'skills', label: 'ARSENAL', icon: Cpu },
  { id: 'contact', label: 'COMMS', icon: Mail },
];

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 300;

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '0px',
        right: '0px',
        margin: '0 auto',
        width: 'fit-content',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        style={{ pointerEvents: 'auto' }}
        className="rounded-full p-2 flex items-center justify-center gap-1 md:gap-2 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)] backdrop-blur-md bg-black/60"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center justify-center">
              <button
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 md:px-4 py-2 rounded-full flex items-center justify-center gap-2 text-xs font-mono transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'text-red-400 bg-red-500/20 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)]'
                    : 'text-cosmic-muted hover:text-white hover:bg-white/10 border-transparent'
                }`}
              >
                <Icon size={18} className={isActive ? 'animate-pulse text-red-400' : ''} />
                <span className="hidden md:inline-block tracking-wider font-semibold">
                  {item.label}
                </span>
              </button>

              {isActive && (
                <div className="absolute -bottom-1.5 inset-x-0 flex justify-center items-center pointer-events-none">
                  <motion.span
                    layoutId="activeDockDot"
                    className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}