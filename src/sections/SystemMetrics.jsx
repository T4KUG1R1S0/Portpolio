import React from 'react';
import { Activity, Clock, Flame, BookOpen } from 'lucide-react';

export default function SystemMetrics() {
  return (
    <div className="glass-panel rounded-2xl p-6 space-y-5">
      {/* Module Title */}
      <div className="flex items-center justify-between border-b border-space-border pb-3">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-cosmic-magenta" />
          <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-cosmic-text">
            System Status
          </h3>
        </div>
        <span className="text-[10px] font-mono text-emerald-400">NOMINAL</span>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-space-bg/60 border border-space-border rounded-xl p-3">
          <p className="text-[10px] font-mono text-cosmic-muted uppercase">Projects Built</p>
          <p className="text-xl font-heading font-bold text-cosmic-cyan mt-1">12+</p>
        </div>
        <div className="bg-space-bg/60 border border-space-border rounded-xl p-3">
          <p className="text-[10px] font-mono text-cosmic-muted uppercase">Experience</p>
          <p className="text-xl font-heading font-bold text-cosmic-purple mt-1">3rd Year</p>
        </div>
      </div>

      {/* Currently Learning Section */}
      <div className="bg-space-card/60 border border-space-border rounded-xl p-3 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-cosmic-magenta/10 text-cosmic-magenta mt-0.5">
          <BookOpen size={16} />
        </div>
        <div>
          <p className="text-[10px] font-mono text-cosmic-muted uppercase">Currently Exploring</p>
          <p className="text-xs font-semibold text-cosmic-text mt-0.5">
            Cloud Architecture & Cyber Defense
          </p>
        </div>
      </div>
    </div>
  );
}