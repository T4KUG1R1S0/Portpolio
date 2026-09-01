import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Radio, CheckCircle } from 'lucide-react';

export default function TransmissionCenter() {
  const [formState, setFormState] = useState({ frequency: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, TRANSMITTING, SENT

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.message) return;

    setStatus('TRANSMITTING');
    setTimeout(() => {
      setStatus('SENT');
      setFormState({ frequency: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-cosmic-purple/30 space-y-4 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <h3 className="text-sm font-heading font-bold text-white tracking-widest flex items-center gap-2">
          <Radio size={16} className="text-cosmic-cyan animate-pulse" /> TRANSMISSION CENTER
        </h3>
        <span className="text-[10px] font-mono text-emerald-400">SECURE FREQUENCY</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-[10px] font-mono text-cosmic-muted uppercase mb-1">
            Sender Frequency / Email
          </label>
          <input
            type="text"
            required
            value={formState.frequency}
            onChange={(e) => setFormState({ ...formState, frequency: e.target.value })}
            placeholder="commander@galaxy.org"
            className="w-full bg-space-bg/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cosmic-cyan transition-colors font-mono"
          />
        </div>

        <div>
          <label className="block text-[10px] font-mono text-cosmic-muted uppercase mb-1">
            Transmission Message
          </label>
          <textarea
            rows="3"
            required
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            placeholder="Instate mission parameters or inquiries here..."
            className="w-full bg-space-bg/80 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cosmic-cyan transition-colors font-mono resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === 'TRANSMITTING' || status === 'SENT'}
          type="submit"
          className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all ${
            status === 'SENT'
              ? 'bg-emerald-500 text-space-bg shadow-lg'
              : 'bg-cosmic-cyan text-space-bg hover:shadow-glow-cyan'
          }`}
        >
          {status === 'IDLE' && (
            <>
              <Send size={14} /> TRANSMIT SIGNAL
            </>
          )}
          {status === 'TRANSMITTING' && (
            <>
              <div className="w-3 h-3 border-2 border-space-bg border-t-transparent rounded-full animate-spin" />
              BROADCASTING...
            </>
          )}
          {status === 'SENT' && (
            <>
              <CheckCircle size={14} /> TRANSMISSION RECEIVED
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}