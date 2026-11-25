import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
}

export const FloatingPetalsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const petals: Petal[] = [];
    const petalColors = ['#881D2A', '#A3283B', '#D4384E', '#E5A024', '#C5A15B', '#F3BC3B'];
    const count = window.innerWidth < 768 ? 24 : 45;

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // depth factor
        size: Math.random() * 12 + 8,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: Math.random() * 0.9 + 0.6,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY * p.z;
        p.x += Math.sin(p.y * 0.005) * 0.7 + p.speedX;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(Math.sin(p.flip) * p.z, p.z);

        // Draw curved rose/marigold petal shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, -p.size / 4, p.size, p.size / 2);
        ctx.bezierCurveTo(p.size, p.size * 1.2, p.size / 3, p.size * 1.4, 0, p.size);
        ctx.bezierCurveTo(-p.size / 3, p.size * 1.4, -p.size, p.size * 1.2, -p.size, p.size / 2);
        ctx.bezierCurveTo(-p.size, -p.size / 4, -p.size / 2, -p.size / 2, 0, 0);
        ctx.closePath();

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.55 * p.z;
        ctx.shadowColor = 'rgba(0,0,0,0.3)';
        ctx.shadowBlur = 4;
        ctx.fill();

        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
};
