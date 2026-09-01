import React, { useState, useEffect } from 'react';
import { Activity, Cpu, HardDrive, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SystemMetrics() {
  const [cpuUsage, setCpuUsage] = useState(42);
  const [memUsage, setMemUsage] = useState(68);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 25) + 35);
      setMemUsage(Math.floor(Math.random() * 15) + 60);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-2xl p-5 border border-cosmic-purple/40 space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <h3 className="text-xs font-heading font-bold text-white tracking-widest flex items-center gap-2">
          <Activity size={15} className="text-cosmic-purple animate-pulse" /> SYSTEM METRICS
        </h3>
        <span className="text-[9px] font-mono text-emerald-400">STABLE</span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        {/* CPU Load */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-cosmic-muted">
            <span className="flex items-center gap-1"><Cpu size={12} className="text-cosmic-cyan" /> CPU CORE LOAD</span>
            <span className="text-white font-bold">{cpuUsage}%</span>
          </div>
          <div className="h-1.5 w-full bg-space-bg rounded-full overflow-hidden border border-white/5">
            <motion.div 
              animate={{ width: `${cpuUsage}%` }} 
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-cosmic-cyan to-blue-500 rounded-full" 
            />
          </div>
        </div>

        {/* Memory Allocation */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-cosmic-muted">
            <span className="flex items-center gap-1"><HardDrive size={12} className="text-cosmic-purple" /> MEMORY VAULT</span>
            <span className="text-white font-bold">{memUsage}%</span>
          </div>
          <div className="h-1.5 w-full bg-space-bg rounded-full overflow-hidden border border-white/5">
            <motion.div 
              animate={{ width: `${memUsage}%` }} 
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-cosmic-purple to-pink-500 rounded-full" 
            />
          </div>
        </div>

        {/* Core Temperature */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
          <span className="text-cosmic-muted flex items-center gap-1"><Zap size={12} className="text-amber-400" /> CORE TEMP</span>
          <span className="text-amber-400 font-bold">34.2°C // OPTIMAL</span>
        </div>
      </div>
    </div>
  );
}