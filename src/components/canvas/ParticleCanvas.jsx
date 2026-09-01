import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // 1. Definisikan Cincin Orbit Realistis (Perspektif 3D)
    const orbits = [
      { radius: canvas.width * 0.22, tiltX: 1.1, tiltY: 0.4, rotateZ: -0.3, speed: 0.008, color: 'rgba(77, 235, 255, 0.4)', nodeSize: 7, nodeColor: '#4DEBFF' },
      { radius: canvas.width * 0.38, tiltX: 1.2, tiltY: 0.35, rotateZ: 0.2, speed: 0.005, color: 'rgba(124, 92, 255, 0.35)', nodeSize: 9, nodeColor: '#7C5CFF' },
      { radius: canvas.width * 0.55, tiltX: 1.3, tiltY: 0.3, rotateZ: -0.5, speed: 0.003, color: 'rgba(255, 79, 216, 0.28)', nodeSize: 11, nodeColor: '#FF4FD8' },
    ];

    // Status Sudut Rotasi Planet
    const planetAngles = [0, Math.PI * 0.7, Math.PI * 1.4];

    // 2. Bintang Background 3D Depth
    const stars = Array.from({ length: 250 }, () => ({
      x: (Math.random() - 0.5) * canvas.width * 3,
      y: (Math.random() - 0.5) * canvas.height * 3,
      z: Math.random() * canvas.width,
      size: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.8 + 0.2,
    }));

    // 3. Shooting Stars Realistis
    const shootingStars = [];
    const createShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.025) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * (canvas.height * 0.3),
          length: Math.random() * 240 + 160,
          speed: Math.random() * 16 + 12,
          angle: Math.PI / 3.6,
          opacity: 1,
          size: Math.random() * 2.5 + 2,
        });
      }
    };

    let time = 0;

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Parallax Mouse Effect
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const offsetX = (mouse.x - canvas.width / 2) * 0.06;
      const offsetY = (mouse.y - canvas.height / 2) * 0.06;

      const centerX = canvas.width / 2 + offsetX;
      const centerY = canvas.height / 2 + offsetY;

      // --- A. Inti Galaksi Realistis (Glowing Spiral Core) ---
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, canvas.width * 0.45);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      coreGradient.addColorStop(0.15, 'rgba(77, 235, 255, 0.35)');
      coreGradient.addColorStop(0.4, 'rgba(124, 92, 255, 0.15)');
      coreGradient.addColorStop(0.7, 'rgba(255, 79, 216, 0.05)');
      coreGradient.addColorStop(1, 'rgba(8, 8, 18, 0)');

      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- B. Bintang Background 3D ---
      stars.forEach((star) => {
        star.z -= 0.6;
        if (star.z <= 0) star.z = canvas.width;

        const k = 300 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const alpha = star.alpha * (1 - star.z / canvas.width);
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.8, star.size * k), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(220, 240, 255, ${alpha})`;
          ctx.fill();
        }
      });

      // --- C. Gambar Orbit Realistis 3D & Planet Mengorbit ---
      orbits.forEach((orbit, index) => {
        planetAngles[index] += orbit.speed;
        const currentAngle = planetAngles[index];

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(orbit.rotateZ);
        ctx.scale(orbit.tiltX, orbit.tiltY);

        // Gambar Lintasan Cincin Orbit 3D Realistis
        ctx.beginPath();
        ctx.arc(0, 0, orbit.radius, 0, Math.PI * 2);
        ctx.strokeStyle = orbit.color;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = orbit.nodeColor;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Kalkulasi Posisi 3D Planet di Orbit
        const px = Math.cos(currentAngle) * orbit.radius;
        const py = Math.sin(currentAngle) * orbit.radius;

        // Kedalaman Z: jika sin(angle) < 0 berarti ada di belakang inti galaksi
        const depth = Math.sin(currentAngle);
        const scale = 0.8 + (depth + 1) * 0.3; // Membesar di depan, mengecil di belakang
        const alpha = 0.4 + (depth + 1) * 0.3;  // Lebih terang di depan

        // Gambar Planet Mengorbit
        ctx.beginPath();
        ctx.arc(px, py, orbit.nodeSize * scale, 0, Math.PI * 2);
        ctx.fillStyle = orbit.nodeColor;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = orbit.nodeColor;
        ctx.shadowBlur = depth > 0 ? 20 : 5; // Glow pekat jika berada di depan
        ctx.fill();

        ctx.restore();
      });

      // --- D. Bintang Jatuh (Shooting Stars) ---
      createShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.012;

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const ssGradient = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        ssGradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        ssGradient.addColorStop(0.2, `rgba(77, 235, 255, ${ss.opacity * 0.9})`);
        ssGradient.addColorStop(0.6, `rgba(255, 79, 216, ${ss.opacity * 0.4})`);
        ssGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = ssGradient;
        ctx.lineWidth = ss.size;
        ctx.shadowColor = '#4DEBFF';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;

        if (ss.opacity <= 0 || ss.x > canvas.width || ss.y > canvas.height) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}