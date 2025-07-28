
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// lightning effects - daddy don't look at this code ///UwU///
const LightningEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const boltsRef = useRef<LightningBolt[]>([]);

  const generateLightningPath = (startX: number, startY: number, endX: number, endY: number): { x: number; y: number }[] => {
    const segments: { x: number; y: number }[] = [];
    const steps = 15;
    const roughness = 30 * intensity;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      let x = startX + (endX - startX) * t;
      let y = startY + (endY - startY) * t;

      if (i > 0 && i < steps) {
        x += (Math.random() - 0.5) * roughness;
        y += (Math.random() - 0.5) * roughness;
      }

      segments.push({ x, y });
    }

    return segments;
  };

  const createLightningBolt = (): LightningBolt => {
    const canvas = canvasRef.current;
    if (!canvas) return { id: 0, startX: 0, startY: 0, endX: 0, endY: 0, segments: [] };

    const startX = Math.random() * canvas.width;
    const startY = Math.random() * canvas.height * 0.3;
    const endX = Math.random() * canvas.width;
    const endY = canvas.height * 0.7 + Math.random() * canvas.height * 0.3;

    return {
      id: Date.now() + Math.random(),
      startX,
      startY,
      endX,
      endY,
      segments: generateLightningPath(startX, startY, endX, endY)
    };
  };

  const drawLightning = (ctx: CanvasRenderingContext2D, bolt: LightningBolt, opacity: number) => {
    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2 + Math.random() * 2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#fbbf24';

    ctx.beginPath();
    bolt.segments.forEach((segment, index) => {
      if (index === 0) {
        ctx.moveTo(segment.x, segment.y);
      } else {
        ctx.lineTo(segment.x, segment.y);
      }
    });
    ctx.stroke();

    // Add glow effect
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 1;
    ctx.shadowBlur = 25;
    ctx.stroke();

    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Randomly create new lightning bolts
    if (isActive && Math.random() < 0.02 * intensity && boltsRef.current.length < 3) {
      boltsRef.current.push(createLightningBolt());
    }

    // Draw and animate existing bolts
    boltsRef.current = boltsRef.current.filter((bolt, index) => {
      const age = Date.now() - bolt.id;
      const maxAge = 500;
      const opacity = Math.max(0, 1 - age / maxAge);

      if (opacity > 0) {
        drawLightning(ctx, bolt, opacity);
        return true;
      }
      return false;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (isActive) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-20 ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default LightningEffects;
