
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

// 3D constellation - this is going to be harder than being dragged through the Trail of Tears...GG
interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  pulseSpeed: number;
  connections: number[];
}

const InteractiveConstellation: React.FC<{
  starCount?: number;
  className?: string;
}> = ({ starCount = 50, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isHovered, setIsHovered] = useState(false);

  const createStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize empty array first
    const newStars: Star[] = [];
    
    // Create stars without connections first
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        brightness: Math.random() * 0.5 + 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        connections: []
      });
    }

    // Now add connections
    newStars.forEach((star, index) => {
      const maxConnections = 3;
      const connectionDistance = 150;
      
      for (let i = 0; i < index && star.connections.length < maxConnections; i++) {
        const otherStar = newStars[i];
        const distance = Math.sqrt(
          Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
        );
        
        if (distance < connectionDistance && Math.random() > 0.7) {
          star.connections.push(i);
        }
      }
    });

    starsRef.current = newStars;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const time = Date.now() * 0.001;
    const mouseInfluence = isHovered ? 50 : 20;

    starsRef.current.forEach((star, index) => {
      // Mouse interaction
      const dx = mouseRef.current.x - star.x;
      const dy = mouseRef.current.y - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      let adjustedX = star.x;
      let adjustedY = star.y;
      
      if (distance < mouseInfluence) {
        const force = (mouseInfluence - distance) / mouseInfluence;
        adjustedX += (dx / distance) * force * 10;
        adjustedY += (dy / distance) * force * 10;
      }

      // Draw connections
      star.connections.forEach(connectedIndex => {
        const connectedStar = starsRef.current[connectedIndex];
        if (!connectedStar) return;

        const connectedDx = mouseRef.current.x - connectedStar.x;
        const connectedDy = mouseRef.current.y - connectedStar.y;
        const connectedDistance = Math.sqrt(connectedDx * connectedDx + connectedDy * connectedDy);
        
        let connectedAdjustedX = connectedStar.x;
        let connectedAdjustedY = connectedStar.y;
        
        if (connectedDistance < mouseInfluence) {
          const connectedForce = (mouseInfluence - connectedDistance) / mouseInfluence;
          connectedAdjustedX += (connectedDx / connectedDistance) * connectedForce * 10;
          connectedAdjustedY += (connectedDy / connectedDistance) * connectedForce * 10;
        }

        const lineDistance = Math.sqrt(
          Math.pow(adjustedX - connectedAdjustedX, 2) + 
          Math.pow(adjustedY - connectedAdjustedY, 2)
        );
        
        const opacity = Math.max(0, 1 - lineDistance / 200) * 0.6;
        
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#fbbf24';
        
        ctx.beginPath();
        ctx.moveTo(adjustedX, adjustedY);
        ctx.lineTo(connectedAdjustedX, connectedAdjustedY);
        ctx.stroke();
        ctx.restore();
      });

      // Draw star
      const pulseBrightness = star.brightness + Math.sin(time * star.pulseSpeed) * 0.3;
      const starOpacity = Math.max(0.3, Math.min(1, pulseBrightness));
      
      ctx.save();
      ctx.globalAlpha = starOpacity;
      ctx.fillStyle = '#fde047';
      ctx.shadowBlur = star.size * 3;
      ctx.shadowColor = '#fbbf24';
      
      // Draw star shape
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        const outerRadius = star.size;
        const innerRadius = star.size * 0.4;
        
        const outerX = adjustedX + Math.cos(angle) * outerRadius;
        const outerY = adjustedY + Math.sin(angle) * outerRadius;
        
        const innerAngle = angle + Math.PI / 5;
        const innerX = adjustedX + Math.cos(innerAngle) * innerRadius;
        const innerY = adjustedY + Math.sin(innerAngle) * innerRadius;
        
        if (i === 0) {
          ctx.moveTo(outerX, outerY);
        } else {
          ctx.lineTo(outerX, outerY);
        }
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-auto z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveConstellation;
