import React from 'react';
import { usePerformanceTier } from '../../hooks/usePerformanceTier';
import ParticleCanvas from './ParticleCanvas';

export default function GalaxyBackground() {
  const performanceTier = usePerformanceTier();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-space-bg">
      {/* Background Radial Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cosmic-purple/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cosmic-cyan/10 rounded-full blur-[120px]" />
      
      {/* Tampilkan ParticleCanvas hanya untuk perangkat medium & high */}
      {performanceTier !== 'low' && <ParticleCanvas />}
    </div>
  );
}