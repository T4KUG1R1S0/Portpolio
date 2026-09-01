import React from 'react';
import { Mail, Globe, Code2, Terminal, Send, ShieldAlert } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Code2, url: 'https://github.com', handle: 'github.com/red-commander', color: 'hover:text-red-400 hover:border-red-500/40' },
  { name: 'Network / Web', icon: Globe, url: 'https://linkedin.com', handle: 'linkedin.com/in/cyber-operator', color: 'hover:text-red-400 hover:border-red-500/40' },
  { name: 'Secure Mail', icon: Mail, url: 'mailto:operator@galaxy-sec.io', handle: 'operator@galaxy-sec.io', color: 'hover:text-red-400 hover:border-red-500/40' },
];

export default function TransmissionCenter() {
  return (
    <div 
      id="contact"
      className="glass-panel rounded-2xl p-5 border border-red-500/35 bg-space-card/25 backdrop-blur-md shadow-glow-red/10 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-space-border/50 pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-red-400 animate-pulse" />
          <h3 className="font-heading font-bold text-xs md:text-sm tracking-wider text-white">
            TRANSMISSION CENTER // CONTACT
          </h3>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/15 border border-red-500/30 text-red-400">
          SECURE_COMMS
        </span>
      </div>

      {/* Social Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 font-mono">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-black/20 p-3 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-1.5 transition-all group ${link.color}`}
            >
              <Icon size={20} className="text-slate-300 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-bold text-slate-200">{link.name}</span>
              <span className="text-[9px] text-cosmic-muted truncate max-w-[120px]">{link.handle}</span>
            </a>
          );
        })}
      </div>

      {/* Quick Transmission Form */}
      <div className="space-y-3 pt-2 border-t border-space-border/50">
        <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
          <ShieldAlert size={14} className="text-red-400" />
          <span>ENCRYPTED DIRECT DISPATCH</span>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Secure transmission sent successfully.'); }} className="space-y-2.5 font-mono text-xs">
          <input 
            type="text" 
            placeholder="CODENAME // SENDER" 
            className="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-slate-200 placeholder:text-cosmic-muted focus:outline-none focus:border-red-500/50 transition-all text-[11px]"
            required
          />
          <textarea 
            rows="3"
            placeholder="ENTER ENCRYPTED MESSAGE..." 
            className="w-full bg-black/30 border border-white/10 rounded-xl px-3 py-2 text-slate-200 placeholder:text-cosmic-muted focus:outline-none focus:border-red-500/50 transition-all text-[11px] resize-none"
            required
          />
          <button 
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-400 hover:bg-red-500/25 transition-all font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow-red/20 text-[11px]"
          >
            <Send size={14} />
            <span>TRANSMIT SIGNAL</span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-space-border/50 flex justify-between items-center text-[10px] font-mono text-cosmic-muted">
        <span>ENCRYPTION: AES-256</span>
        <span className="text-red-400 font-bold">READY FOR HANDSHAKE</span>
      </div>
    </div>
  );
}