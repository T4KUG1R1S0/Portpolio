import React from 'react';
import GalaxyBackground from './components/canvas/GalaxyBackground';
import ProfilePanel from './sections/ProfilePanel';
import HeroSection from './sections/HeroSection';
import ProjectOrbit from './sections/ProjectOrbit';
import SkillGalaxy from './sections/SkillGalaxy';
import SystemMetrics from './sections/SystemMetrics';
import MissionLog from './sections/MissionLog';
import TransmissionCenter from './sections/TransmissionCenter';
import FloatingDock from './components/navigation/FloatingDock';
import MobileBottomNav from './components/navigation/MobileBottomNav';
import './styles/globals.css';


export default function App() {
  return (
    <div className="relative min-h-screen text-cosmic-text font-body overflow-x-hidden selection:bg-cosmic-purple selection:text-white pb-24 md:pb-12">
      {/* Layer 1: Background Canvas */}
      <GalaxyBackground />

      {/* Layer 2: Main Interface */}
      <div className="relative z-10 max-w-[1440px] mx-auto p-4 md:p-6 lg:p-8">
        <header className="mb-6 flex justify-between items-center border-b border-space-border pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cosmic-cyan animate-pulse" />
            <span className="font-heading font-bold text-xs md:text-sm tracking-widest text-cosmic-cyan">
              GALAXY CONTROL CENTER
            </span>
          </div>
          <span className="text-[10px] md:text-xs text-cosmic-muted font-mono">
            SYS.VER 1.0 // ONLINE
          </span>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (3 cols) */}
          <section className="lg:col-span-3">
            <ProfilePanel />
          </section>

          {/* Center Column (6 cols) */}
          <section className="lg:col-span-6 space-y-6">
            <HeroSection />
            <ProjectOrbit />
            <MissionLog />
            <TransmissionCenter />
          </section>

          {/* Right Column (3 cols) */}
          <section className="lg:col-span-3 space-y-6">
            <SkillGalaxy />
            <SystemMetrics />
          </section>
        </main>
      </div>

      {/* Layer 3: Navigation */}
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <FloatingDock />
      </div>

      {/* Mobile Navigation */}
      <MobileBottomNav />
    </div>
  );
}