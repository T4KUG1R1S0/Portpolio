import React, { useState } from 'react';
import { Send, Radio, CheckCircle2 } from 'lucide-react';
import MagneticButton from "../components/common/MagneticButton";

export default function TransmissionCenter() {
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmitted(true);
      setTimeout(() => setTransmitted(false), 4000);
    }, 1500);
  };

  return (
    <div id="contact" className="glass-panel rounded-2xl p-6 space-y-4 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-space-border pb-3">
        <div className="flex items-center gap-2">
          <Radio size={16} className="text-cosmic-magenta animate-pulse" />
          <h3 className="font-heading font-bold text-sm tracking-wider uppercase text-cosmic-text">
            Transmission Center
          </h3>
        </div>
        <span className="text-[10px] font-mono text-cosmic-muted">ENCRYPTED_SIGNAL</span>
      </div>

      {transmitted ? (
        <div className="bg-space-card/80 border border-emerald-500/40 rounded-xl p-6 text-center space-y-2 my-4">
          <CheckCircle2 size={32} className="text-emerald-400 mx-auto animate-bounce" />
          <h4 className="font-heading font-bold text-sm text-cosmic-text">
            TRANSMISSION RECEIVED
          </h4>
          <p className="text-xs text-cosmic-muted">
            Your signal has been successfully relayed into my orbit. I will establish contact soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-mono text-cosmic-muted uppercase mb-1 block">
                Sender Name
              </label>
              <input
                type="text"
                required
                placeholder="Takugiriso"
                className="w-full bg-space-bg/80 border border-space-border rounded-xl px-3 py-2 text-xs text-cosmic-text focus:outline-none focus:border-cosmic-cyan transition duration-200"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono text-cosmic-muted uppercase mb-1 block">
                Frequency (Email)
              </label>
              <input
                type="email"
                required
                placeholder="frequency@galaxy.dev"
                className="w-full bg-space-bg/80 border border-space-border rounded-xl px-3 py-2 text-xs text-cosmic-text focus:outline-none focus:border-cosmic-cyan transition duration-200"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-mono text-cosmic-muted uppercase mb-1 block">
              Signal Payload (Message)
            </label>
            <textarea
              rows={3}
              required
              placeholder="Write your transmission payload here..."
              className="w-full bg-space-bg/80 border border-space-border rounded-xl p-3 text-xs text-cosmic-text focus:outline-none focus:border-cosmic-cyan transition duration-200 resize-none"
            />
          </div>

          <MagneticButton
            onClick={() => {}}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan text-white font-mono font-semibold text-xs tracking-wider uppercase shadow-glow-purple hover:brightness-110"
          >
            {isTransmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                TRANSMITTING SIGNAL...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send size={14} />
                TRANSMIT MESSAGE →
              </span>
            )}
          </MagneticButton>
        </form>
      )}
    </div>
  );
}