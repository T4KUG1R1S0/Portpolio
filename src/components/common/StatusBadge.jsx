import React from 'react';

export default function StatusBadge({ status = 'ONLINE', type = 'cyan' }) {
  const styles = {
    cyan: 'border-cosmic-cyan/30 text-cosmic-cyan bg-cosmic-cyan/10',
    purple: 'border-cosmic-purple/30 text-cosmic-purple bg-cosmic-purple/10',
    emerald: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    magenta: 'border-cosmic-magenta/30 text-cosmic-magenta bg-cosmic-magenta/10',
  };

  return (
    <span
      className={`px-2 py-0.5 rounded text-[10px] font-mono border tracking-wider uppercase inline-flex items-center gap-1.5 ${
        styles[type] || styles.cyan
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}