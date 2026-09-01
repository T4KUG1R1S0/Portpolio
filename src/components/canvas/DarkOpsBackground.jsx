import React, { useEffect, useRef } from 'react';

export default function DarkOpsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Partikel Data Streams / Binary Matrix effect tipis
    const dropsCount = Math.floor(width / 30);
    const drops = Array.from({ length: dropsCount }, () => ({
      x: Math.floor(Math.random() * (width / 20)) * 20,
      y: (Math.random() - 1) * height,
      speed: Math.random() * 2 + 1,
      length: Math.floor(Math.random() * 20 + 10)
    }));

    const render = () => {
      // Background gelap pekat ala bunker siber
      ctx.fillStyle = 'rgba(2, 6, 23, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Efek cahaya merah redup (vignette / ambient glow)
      const ambientGlow = ctx.createRadialGradient(width * 0.5, height * 0.5, 100, width * 0.5, height * 0.5, width * 0.8);
      ambientGlow.addColorStop(0, 'rgba(220, 38, 38, 0.05)');
      ambientGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Render aliran data matriks merah tipis
      ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
      ctx.font = '10px monospace';
      drops.forEach((drop) => {
        drop.y += drop.speed * 10;
        if (drop.y > height) {
          drop.y = -20;
          drop.x = Math.floor(Math.random() * (width / 20)) * 20;
        }
        const char = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(char, drop.x, drop.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-60" />
      
      {/* Cyber Grid Lines (Garis-garis kotak taktis khas militer/hacker) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef44440a_1px,transparent_1px),linear-gradient(to_bottom,#ef44440a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Vignette gelap di pinggir layar */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#020617_90%)]" />
    </div>
  );
}