import React, { useEffect, useRef } from 'react';

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 1. GENERATE PARTIKEL SPIRAL GALAXY (Diperbesar & Palet Banyak Warna)
    const galaxyStarsCount = 1500;
    const arms = 4; // Ditambah jadi 4 lengan agar lebih megah
    const galaxyRadius = Math.min(width, height) * 0.52; // Orbit diperbesar

    const colorPalette = [
      'rgba(255, 255, 255, ', // 0: White Core
      'rgba(251, 191, 36, ',  // 1: Warm Gold / Amber
      'rgba(236, 72, 153, ',  // 2: Vibrant Magenta
      'rgba(168, 85, 247, ',  // 3: Neon Purple
      'rgba(6, 182, 212, ',   // 4: Cyan Neon
      'rgba(20, 184, 166, ',  // 5: Teal
      'rgba(59, 130, 246, ',  // 6: Deep Electric Blue
    ];

    const galaxyStars = Array.from({ length: galaxyStarsCount }, () => {
      const r = Math.pow(Math.random(), 1.8) * galaxyRadius;
      const armIndex = Math.floor(Math.random() * arms);
      const armAngle = (armIndex * 2 * Math.PI) / arms;
      const spiralAngle = r * 0.006;
      const angle = armAngle + spiralAngle + (Math.random() - 0.5) * 0.5;
      const z = (Math.random() - 0.5) * (galaxyRadius * 0.25) * (1 - r / galaxyRadius);

      // Distribusi warna kaya (7 pilihan warna)
      const rand = Math.random();
      let color;
      if (rand > 0.85) color = colorPalette[0]; // White
      else if (rand > 0.70) color = colorPalette[1]; // Gold
      else if (rand > 0.52) color = colorPalette[2]; // Magenta
      else if (rand > 0.35) color = colorPalette[3]; // Purple
      else if (rand > 0.20) color = colorPalette[4]; // Cyan
      else if (rand > 0.10) color = colorPalette[5]; // Teal
      else color = colorPalette[6]; // Blue

      return {
        r,
        angle,
        z,
        size: Math.random() * 1.8 + 0.4,
        speed: (0.0015 + (1 - r / galaxyRadius) * 0.0025) * (Math.random() * 0.4 + 0.8),
        color,
        alpha: Math.random() * 0.8 + 0.2,
      };
    });

    // 2. BACKGROUND SPACE DUST
    const spaceDust = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // 3. SHOOTING STARS
    const shootingStars = Array.from({ length: 3 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height / 2),
      length: Math.random() * 90 + 50,
      speed: Math.random() * 12 + 8,
      angle: Math.PI / 4,
      opacity: 0,
      delay: Math.random() * 200 + 50,
      timer: 0,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // MAIN RENDER LOOP
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const tiltX = (mouse.y / height - 0.5) * 0.5;
      const tiltY = (mouse.x / width - 0.5) * 0.5;

      // BACKGROUND NEBULA CACHE (Multi-color Ambient Glow)
      const nebula1 = ctx.createRadialGradient(
        width * 0.25, height * 0.3, 50,
        width * 0.25, height * 0.3, width * 0.7
      );
      nebula1.addColorStop(0, 'rgba(59, 130, 246, 0.2)'); // Blue
      nebula1.addColorStop(1, 'transparent');

      const nebula2 = ctx.createRadialGradient(
        width * 0.75, height * 0.7, 50,
        width * 0.75, height * 0.7, width * 0.7
      );
      nebula2.addColorStop(0, 'rgba(236, 72, 153, 0.18)'); // Magenta
      nebula2.addColorStop(1, 'transparent');

      const cursorGlow = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 280
      );
      cursorGlow.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
      cursorGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      // SPACE DUST
      spaceDust.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${p.alpha})`;
        ctx.fill();
      });

      // SHOOTING STARS
      shootingStars.forEach((star) => {
        star.timer++;
        if (star.timer > star.delay) {
          star.x += Math.cos(star.angle) * star.speed;
          star.y += Math.sin(star.angle) * star.speed;
          star.opacity += 0.02;
          if (star.opacity >= 1) star.opacity = 1;

          const gradientTrail = ctx.createLinearGradient(
            star.x, star.y,
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          );
          gradientTrail.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          gradientTrail.addColorStop(0.5, 'rgba(236, 72, 153, 0.5)');
          gradientTrail.addColorStop(1, 'transparent');

          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(
            star.x - Math.cos(star.angle) * star.length,
            star.y - Math.sin(star.angle) * star.length
          );
          ctx.strokeStyle = gradientTrail;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#ec4899';
          ctx.stroke();
          ctx.shadowBlur = 0;

          if (star.x > width + 100 || star.y > height + 100) {
            star.x = Math.random() * width;
            star.y = -50;
            star.opacity = 0;
            star.timer = 0;
            star.delay = Math.random() * 150 + 50;
          }
        }
      });

      // INTI PUSAT GALAKSI (Supermassive Core - Diperbesar & Kaya Warna)
      const centerX = width / 2;
      const centerY = height / 2;

      const coreGlow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, 110
      );
      coreGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGlow.addColorStop(0.15, 'rgba(251, 191, 36, 0.9)'); // Gold Glow
      coreGlow.addColorStop(0.4, 'rgba(236, 72, 153, 0.6)');  // Magenta Ring
      coreGlow.addColorStop(0.7, 'rgba(168, 85, 247, 0.35)'); // Purple Ring
      coreGlow.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(centerX, centerY, 110, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // SPIRAL GALAXY STARS 3D
      galaxyStars.forEach((star) => {
        star.angle += star.speed;

        let x3d = Math.cos(star.angle) * star.r;
        let y3d = Math.sin(star.angle) * star.r;
        let z3d = star.z;

        const cosX = Math.cos(tiltX);
        const sinX = Math.sin(tiltX);
        const cosY = Math.cos(tiltY);
        const sinY = Math.sin(tiltY);

        let xRot = x3d * cosY - z3d * sinY;
        let zRot1 = x3d * sinY + z3d * cosY;

        let yRot = y3d * cosX - zRot1 * sinX;
        let zRot2 = y3d * sinX + zRot1 * cosX;

        const perspective = 650;
        const scale = perspective / (perspective + zRot2);
        const canvasX = centerX + xRot * scale;
        const canvasY = centerY + yRot * scale * 0.45;

        ctx.beginPath();
        ctx.arc(canvasX, canvasY, Math.max(0.2, star.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha * scale})`;

        if (star.r < galaxyRadius * 0.3) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ec4899';
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-[#05070e]"
    />
  );
}