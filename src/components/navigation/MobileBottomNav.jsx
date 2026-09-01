import React from 'react';
import { Home, Layers, Terminal, Cpu, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, href: '#hero' },
  { id: 'projects', icon: Layers, href: '#projects' },
  { id: 'mission', icon: Terminal, href: '#mission' },
  { id: 'skills', icon: Cpu, href: '#skills' },
  { id: 'contact', icon: Mail, href: '#contact' },
];

export default function MobileBottomNav({ activeSection = 'hero' }) {
  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="glass-panel rounded-full px-3 py-2 flex items-center justify-center gap-2 border border-cosmic-purple/30 shadow-glow-purple backdrop-blur-xl bg-space-card/90">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center justify-center">
              <a
                href={item.href}
                className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  isActive
                    ? 'text-cosmic-cyan bg-cosmic-cyan/10 border-cosmic-cyan/30 shadow-glow-cyan'
                    : 'text-cosmic-muted hover:text-white border-transparent'
                }`}
              >
                <Icon size={18} />
              </a>

              {/* Indicator Dot Presisi Tengah */}
              {isActive && (
                <div className="absolute -bottom-1 inset-x-0 flex justify-center items-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan shadow-glow-cyan" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}