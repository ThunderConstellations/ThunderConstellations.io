
import React from 'react';
import StarField3D from './StarField3D';
import LightningEffects from './LightningEffects';
import ParticleSystem from './ParticleSystem';
import InteractiveConstellation from './InteractiveConstellation';
import EnergyField from './EnergyField';
import { useVisualEffects } from '../../hooks/useVisualEffects';

interface BackgroundLayersProps {
  variant?: 'full' | 'minimal' | 'homepage';
  className?: string;
}

const BackgroundLayers: React.FC<BackgroundLayersProps> = ({ 
  variant = 'full',
  className = '' 
}) => {
  const { isActive, effectConfig } = useVisualEffects({
    intensity: variant === 'minimal' ? 0.3 : variant === 'homepage' ? 1 : 0.7
  });

  if (!isActive) return null;

  const renderLayers = () => {
    switch (variant) {
      case 'homepage':
        return (
          <>
            <StarField3D className="opacity-40" />
            <InteractiveConstellation starCount={30} className="opacity-60" />
            <ParticleSystem particleCount={80} className="opacity-50" />
            <LightningEffects 
              isActive={effectConfig.enableLightning} 
              intensity={effectConfig.intensity} 
              className="opacity-70" 
            />
            <EnergyField 
              waveCount={8} 
              intensity={effectConfig.intensity} 
              className="opacity-40" 
            />
          </>
        );
      
      case 'minimal':
        return (
          <>
            <StarField3D className="opacity-20" />
            <ParticleSystem particleCount={30} className="opacity-30" />
            <EnergyField 
              waveCount={4} 
              intensity={effectConfig.intensity} 
              className="opacity-20" 
            />
          </>
        );
      
      case 'full':
      default:
        return (
          <>
            <StarField3D className="opacity-30" />
            <InteractiveConstellation starCount={20} className="opacity-40" />
            <ParticleSystem particleCount={50} className="opacity-40" />
            <LightningEffects 
              isActive={effectConfig.enableLightning} 
              intensity={effectConfig.intensity * 0.6} 
              className="opacity-50" 
            />
            <EnergyField 
              waveCount={6} 
              intensity={effectConfig.intensity} 
              className="opacity-30" 
            />
          </>
        );
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {renderLayers()}
    </div>
  );
};

export default BackgroundLayers;
