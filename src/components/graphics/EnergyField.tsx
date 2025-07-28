
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// energy field - MIKU MIKU BEA...depression
const EnergyField: React.FC<{
  waveCount?: number;
  className?: string;
  intensity?: number;
}> = ({ waveCount = 8, className = '', intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<EnergyWave[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const createWave = useCallback((): EnergyWave => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, radius: 0, maxRadius: 0, opacity: 0, speed: 0, color: '' };

    const colors = ['#fbbf24', '#fde047', '#f59e0b'];

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 0,
      maxRadius: Math.random() * 200 + 100,
      opacity: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }, []);

  const drawWave = useCallback((ctx: CanvasRenderingContext2D, wave: EnergyWave) => {
    const progress = wave.radius / wave.maxRadius;
    const alpha = wave.opacity * (1 - progress) * intensity;

    if (alpha <= 0) return;

    ctx.save();
    ctx.globalAlpha = alpha;

    // Create gradient
    const gradient = ctx.createRadialGradient(
      wave.x, wave.y, 0,
      wave.x, wave.y, wave.radius
    );
    gradient.addColorStop(0, wave.color);
    gradient.addColorStop(0.7, wave.color + '40');
    gradient.addColorStop(1, 'transparent');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
    ctx.stroke();

    // Add inner glow
    ctx.globalAlpha = alpha * 0.5;
    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  }, [intensity]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw waves
    wavesRef.current = wavesRef.current.filter(wave => {
      wave.radius += wave.speed;

      // Mouse interaction - create waves near mouse
      const dx = mouseRef.current.x - wave.x;
      const dy = mouseRef.current.y - wave.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        wave.speed *= 1.1;
        wave.opacity *= 1.1;
      }

      if (wave.radius < wave.maxRadius) {
        drawWave(ctx, wave);
        return true;
      }
      return false;
    });

    // Add new waves
    while (wavesRef.current.length < waveCount) {
      wavesRef.current.push(createWave());
    }

    // Occasionally create mouse-triggered waves
    if (Math.random() < 0.05 * intensity) {
      const mouseWave = createWave();
      mouseWave.x = mouseRef.current.x + (Math.random() - 0.5) * 200;
      mouseWave.y = mouseRef.current.y + (Math.random() - 0.5) * 200;
      mouseWave.maxRadius *= 0.7;
      mouseWave.opacity *= 1.5;
      wavesRef.current.push(mouseWave);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [waveCount, createWave, drawWave, intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize waves
    wavesRef.current = Array.from({ length: waveCount }, () => createWave());

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, createWave, waveCount]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default EnergyField;
