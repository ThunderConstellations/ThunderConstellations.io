
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

// particle system - we do this because we hate ourselves
const ParticleSystem: React.FC<{
  particleCount?: number;
  className?: string;
  mouseInteraction?: boolean;
}> = ({ particleCount = 100, className = '', mouseInteraction = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const createParticle = useCallback((): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, vx: 0, vy: 0, size: 0, life: 0, maxLife: 0, color: '', type: 'star' };

    const types: Particle['type'][] = ['star', 'spark', 'glow'];
    const colors = ['#fbbf24', '#fde047', '#f59e0b', '#d97706'];
    
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 1,
      life: 0,
      maxLife: Math.random() * 300 + 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)]
    };
  }, []);

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    const alpha = 1 - particle.life / particle.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha * 0.8;

    switch (particle.type) {
      case 'star':
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5;
          const x = particle.x + Math.cos(angle) * particle.size;
          const y = particle.y + Math.sin(angle) * particle.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        break;
        
      case 'spark':
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x - particle.size, particle.y);
        ctx.lineTo(particle.x + particle.size, particle.y);
        ctx.moveTo(particle.x, particle.y - particle.size);
        ctx.lineTo(particle.x, particle.y + particle.size);
        ctx.stroke();
        break;
        
      case 'glow':
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        break;
    }

    ctx.restore();
  }, []);

  const updateParticle = useCallback((particle: Particle, mouseX: number, mouseY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse interaction
    if (mouseInteraction) {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += (dx / distance) * force * 0.5;
        particle.vy += (dy / distance) * force * 0.5;
      }
    }

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // Apply friction
    particle.vx *= 0.99;
    particle.vy *= 0.99;
    
    // Wrap around edges
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;
    
    // Update life
    particle.life++;
  }, [mouseInteraction]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      updateParticle(particle, mouseRef.current.x, mouseRef.current.y);
      
      if (particle.life < particle.maxLife) {
        drawParticle(ctx, particle);
        return true;
      }
      return false;
    });

    // Add new particles if needed
    while (particlesRef.current.length < particleCount) {
      particlesRef.current.push(createParticle());
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [particleCount, createParticle, updateParticle, drawParticle]);

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

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, createParticle, particleCount]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleSystem;
