import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
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

    // Konfigurasi Bintang & Partikel Kosmik Red Team
    const starsCount = Math.floor((width * height) / 6000);
    const stars = Array.from({ length: starsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8,
      alpha: Math.random(),
      speed: Math.random() * 0.015 + 0.003,
      // Kombinasi warna merah menyala, amber, dan putih dingin
      color: Math.random() > 0.75 
        ? 'rgba(239, 68, 68, ' 
        : Math.random() > 0.5 
        ? 'rgba(245, 158, 11, ' 
        : 'rgba(255, 255, 255, '
    }));

    // Konfigurasi Debu Kosmik / Nebula Melayang
    const dustParticles = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 120 + 60,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.05 + 0.02
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Gambar Nebula Radial di Latar Belakang (Nuansa Red Team / Cyber)
      const primaryGlow = ctx.createRadialGradient(width * 0.8, height * 0.2, 100, width * 0.8, height * 0.2, width * 0.7);
      primaryGlow.addColorStop(0, 'rgba(220, 38, 38, 0.15)'); // Red glow utama
      primaryGlow.addColorStop(0.5, 'rgba(126, 34, 206, 0.08)'); // Ungu kosmik
      primaryGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = primaryGlow;
      ctx.fillRect(0, 0, width, height);

      const secondaryGlow = ctx.createRadialGradient(width * 0.2, height * 0.8, 50, width * 0.2, height * 0.8, width * 0.6);
      secondaryGlow.addColorStop(0, 'rgba(245, 158, 11, 0.08)'); // Amber glow sekunder
      secondaryGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = secondaryGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Debu Kosmik / Awan Nebula Bergerak Perlahan
      dustParticles.forEach((dust) => {
        dust.x += dust.vx;
        dust.y += dust.vy;

        if (dust.x < -100) dust.x = width + 100;
        if (dust.x > width + 100) dust.x = -100;
        if (dust.y < -100) dust.y = height + 100;
        if (dust.y > height + 100) dust.y = -100;

        const dustGrad = ctx.createRadialGradient(dust.x, dust.y, 0, dust.x, dust.y, dust.radius);
        dustGrad.addColorStop(0, `rgba(239, 68, 68, ${dust.alpha})`);
        dustGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = dustGrad;
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Render Bintang & Efek Kedipan (Twinkle)
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${Math.abs(star.alpha)})`;
        
        // Berikan efek glow/shadow pada bintang berukuran lebih besar
        if (star.radius > 1.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = star.color.includes('239') ? '#ef4444' : star.color.includes('245') ? '#f59e0b' : '#ffffff';
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Canvas Utama Galaksi & Nebula */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* Cyber Grid Overlay (Efek Hologram Grid Tipis di atas background) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444408_1px,transparent_1px),linear-gradient(to_bottom,#ef444408_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
}