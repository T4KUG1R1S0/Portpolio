import React from 'react';
import GlassCard from '../components/common/GlassCard';
import { Mail, ShieldCheck } from 'lucide-react';

export default function ProfilePanel() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <GlassCard className="flex flex-col gap-6">
      {/* Header Badge */}
      <div className="flex items-center justify-between text-xs font-mono text-cosmic-muted border-b border-space-border pb-3">
        <span>ID: TAKU-2026</span>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">ONLINE</span>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="relative mx-auto group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-magenta rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500" />
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cosmic-purple/50 bg-space-card flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-space-card to-cosmic-purple/20 flex items-center justify-center text-cosmic-cyan font-heading text-3xl font-bold">
            TK
          </div>
        </div>
      </div>

      {/* Identity Info */}
      <div className="text-center space-y-1.5">
        <h1 className="font-heading font-bold text-2xl tracking-wide text-cosmic-text">
          TAKUGIRISO
        </h1>
        <p className="text-xs font-mono text-cosmic-cyan tracking-wider">
          INFORMATICS STUDENT / DEVELOPER
        </p>
        <p className="text-xs text-cosmic-muted pt-2 leading-relaxed">
          Building digital experiences, interactive interfaces, and intelligent systems.
        </p>
      </div>

      {/* Status Badge */}
      <div className="bg-space-bg/80 border border-space-border rounded-xl p-3 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-cosmic-purple/10 text-cosmic-purple">
          <ShieldCheck size={18} />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-cosmic-muted uppercase font-mono">Status</p>
          <p className="text-xs font-medium text-cosmic-text">Available for Projects</p>
        </div>
      </div>

      {/* Action Button */}
      <a
        href="#contact"
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow-purple hover:brightness-110 transition duration-200"
      >
        <Mail size={16} />
        <span>Send Transmission</span>
      </a>

      {/* Social Links */}
      <div className="pt-2 border-t border-space-border">
        <p className="text-[10px] font-mono text-cosmic-muted uppercase mb-3">Frequencies</p>
        <div className="grid grid-cols-3 gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-space-card/60 hover:bg-space-hover border border-space-border hover:border-cosmic-cyan/40 transition duration-200 text-cosmic-muted hover:text-cosmic-cyan text-xs"
            >
              {social.icon}
              <span className="text-[10px] font-mono">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}