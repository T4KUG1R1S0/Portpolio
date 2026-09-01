import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, GitBranch } from 'lucide-react';

const projectsData = [
  {
    id: '01',
    title: 'Cosmic Security Scanner',
    category: 'CYBERSECURITY / AI',
    description: 'Real-time threat detection system with cosmic visual dashboard and automated response protocols.',
    tags: ['Python', 'React', 'Tailwind'],
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '02',
    title: 'Galactic Commerce Hub',
    category: 'FULLSTACK / E-COMMERCE',
    description: 'High-performance decentralized trading interface built for seamless interplanetary transactions.',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    status: 'IN DEVELOPMENT',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '03',
    title: 'Nebula Analytics Dashboard',
    category: 'DATA VISUALIZATION',
    description: 'Interactive telemetry data renderer powered by HTML5 Canvas and WebGL shaders.',
    tags: ['React', 'Three.js', 'Tailwind'],
    status: 'COMPLETED',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectOrbit() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  return (
    <div className="w-full space-y-6">
      {/* 1. Orbit Visual Interactive */}
      <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex items-center justify-center min-h-[320px]">
        <div className="absolute w-20 h-20 rounded-full bg-cosmic-cyan/10 blur-xl animate-pulse" />
        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-cosmic-purple/30 border-dashed animate-[spin_60s_linear_infinite]" />

        {/* Inti Pusat */}
        <div className="relative z-10 w-16 h-16 rounded-2xl glass-panel border border-cosmic-cyan/50 flex items-center justify-center shadow-glow-cyan bg-space-bg/80">
          <Code2 className="text-cosmic-cyan animate-pulse" size={28} />
        </div>

        {/* Planet Node Mengorbit (01, 02, 03) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {projectsData.map((project, index) => {
            const isSelected = selectedProject.id === project.id;
            const angles = [-60, 180, 60];
            const angle = angles[index];
            const radius = 130;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute w-12 h-12 rounded-full font-mono text-xs font-bold transition-all duration-300 flex items-center justify-center z-20 ${
                  isSelected
                    ? 'bg-cosmic-cyan text-space-bg shadow-glow-cyan ring-4 ring-cosmic-cyan/30'
                    : 'glass-panel text-cosmic-muted hover:text-white hover:border-cosmic-cyan/50'
                }`}
              >
                {project.id}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 2. Kartu Detail Project Terpilih */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="glass-panel rounded-xl p-5 border border-cosmic-purple/30 space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-cosmic-cyan uppercase px-2 py-0.5 rounded bg-cosmic-cyan/10 border border-cosmic-cyan/20">
              {selectedProject.category}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              {selectedProject.status}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {selectedProject.title}
            </h3>
            <p className="text-xs text-cosmic-muted mt-1 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="flex gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-card text-cosmic-muted border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-cosmic-muted">
              <a
                href={selectedProject.githubUrl}
                className="hover:text-cosmic-cyan transition-colors"
                title="Repository Source"
              >
                <GitBranch size={16} />
              </a>
              <a
                href={selectedProject.liveUrl}
                className="hover:text-cosmic-cyan transition-colors"
                title="Live Preview"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}