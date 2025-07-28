
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

// skills comparison - UwU this took forever to debug
const SkillsComparison: React.FC<SkillsComparisonProps> = ({ title, data }) => {
  return (
    <div className="glass-morphism p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-cosmic-gold mb-6 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255, 215, 0, 0.2)" />
          <PolarAngleAxis tick={{ fill: '#E5E7EB', fontSize: 12 }} />
          <PolarRadiusAxis 
            tick={{ fill: '#E5E7EB', fontSize: 10 }} 
            domain={[0, 100]}
          />
          <Radar 
            name="Current Level" 
            dataKey="current" 
            stroke="#FFD700" 
            fill="#FFD700" 
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Radar 
            name="Target Level" 
            dataKey="target" 
            stroke="#3B82F6" 
            fill="#3B82F6" 
            fillOpacity={0.1}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Legend 
            wrapperStyle={{ color: '#E5E7EB' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsComparison;
