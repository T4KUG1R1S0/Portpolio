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

    // Partikel Bintang / Light Dust
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    // Sumbu Titik Sudut Tesseract 4D
    const tesseractVertices = [
      [-1, -1, -1, -1], [1, -1, -1, -1], [1, 1, -1, -1], [-1, 1, -1, -1],
      [-1, -1, 1, -1], [1, -1, 1, -1], [1, 1, 1, -1], [-1, 1, 1, -1],
      [-1, -1, -1, 1], [1, -1, -1, 1], [1, 1, -1, 1], [-1, 1, -1, 1],
      [-1, -1, 1, 1], [1, -1, 1, 1], [1, 1, 1, 1], [-1, 1, 1, 1],
    ];

    // Koneksi Antar Titik Tesseract 4D
    const edges = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) {
          if (tesseractVertices[i][k] !== tesseractVertices[j][k]) diff++;
        }
        if (diff === 1) edges.push([i, j]);
      }
    }

    let angleX = 0;
    let angleY = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. DYNAMIC NEBULA LIGHTING (Pencahayaan Terang Cyan & Purple)
      const gradient1 = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 50,
        width * 0.2, height * 0.3, width * 0.6
      );
      gradient1.addColorStop(0, 'rgba(6, 182, 212, 0.28)'); // Cyan Neon Glow
      gradient1.addColorStop(1, 'transparent');

      const gradient2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 50,
        width * 0.8, height * 0.7, width * 0.6
      );
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.25)'); // Cosmic Purple Glow
      gradient2.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // 2. ANIMASI PARTIKEL BINTANG
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 243, 252, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. PROYEKSI & ROTASI TESSERACT 4D GEOMETRY
      angleX += 0.006;
      angleY += 0.004;

      const projected = tesseractVertices.map((v) => {
        // Rotasi Sumbu 4D (ZW & XW)
        let x = v[0], y = v[1], z = v[2], w = v[3];

        // Rotasi ZW
        let cos = Math.cos(angleX), sin = Math.sin(angleX);
        let z1 = z * cos - w * sin;
        let w1 = z * sin + w * cos;

        // Rotasi XW
        cos = Math.cos(angleY); sin = Math.sin(angleY);
        let x1 = x * cos - w1 * sin;
        let w2 = x * sin + w1 * cos;

        // Proyeksi 4D ke 3D
        const distance4D = 2.5;
        const wFactor = 1 / (distance4D - w2);
        x1 *= wFactor;
        y *= wFactor;
        z1 *= wFactor;

        // Proyeksi 3D ke 2D Layar
        const scale = Math.min(width, height) * 0.28;
        return {
          x: width / 2 + x1 * scale,
          y: height / 2 + y * scale,
        };
      });

      // Render Garis Wireframe 4D dengan Glow Effect
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)'; // Line Cyan Vibrant
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#06b6d4';
        ctx.stroke();
      });
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-[#080d1a]"
    />
  );
}