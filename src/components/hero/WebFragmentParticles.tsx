import React, { useEffect, useRef } from 'react';

interface WebFragmentParticlesProps {
  progress: number; // 0 to 1
  prefersReducedMotion?: boolean;
}

interface Fragment {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  vAngle: number;
  opacity: number;
  color: string;
}

export const WebFragmentParticles: React.FC<WebFragmentParticlesProps> = ({
  progress,
  prefersReducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || progress < 0.15 || progress > 0.9) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height * 0.42;

    const colors = ['#E64A24', '#B82024', '#F27A32', '#F3EDE3'];

    // Spawn fragments proportional to progress velocity (reduced on mobile)
    const baseCount = Math.floor(18 * Math.sin(progress * Math.PI));
    const numFragments = width < 768 ? Math.floor(baseCount * 0.4) : baseCount;

    const fragments: Fragment[] = Array.from({ length: numFragments }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      return {
        x: centerX + Math.cos(angle) * (20 + Math.random() * 50),
        y: centerY + Math.sin(angle) * (20 + Math.random() * 50),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        size: Math.random() * 4 + 1.5,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      fragments.forEach((f) => {
        f.x += f.vx;
        f.y += f.vy;
        f.angle += f.vAngle;
        f.opacity -= 0.015;

        if (f.opacity > 0) {
          ctx.save();
          ctx.translate(f.x, f.y);
          ctx.rotate(f.angle);
          ctx.globalAlpha = Math.max(0, f.opacity);
          ctx.fillStyle = f.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = f.color;

          // Draw small web-shard polygon
          ctx.beginPath();
          ctx.moveTo(0, -f.size);
          ctx.lineTo(f.size * 0.8, f.size * 0.8);
          ctx.lineTo(-f.size * 0.8, f.size * 0.6);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [progress, prefersReducedMotion]);

  if (progress < 0.15 || progress > 0.9 || prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 55,
      }}
    />
  );
};
