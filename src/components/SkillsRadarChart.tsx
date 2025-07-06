
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface SkillsRadarChartProps {
  data: Array<{
    category: string;
    score: number;
  }>;
  title: string;
}

const SkillsRadarChart: React.FC<SkillsRadarChartProps> = ({ data, title }) => {
  return (
    <div className="glass-morphism p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-cosmic-gold mb-6 text-center">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255, 215, 0, 0.2)" />
          <PolarAngleAxis tick={{ fill: '#E5E7EB', fontSize: 12 }} />
          <PolarRadiusAxis 
            tick={{ fill: '#E5E7EB', fontSize: 10 }} 
            domain={[0, 100]}
          />
          <Radar 
            name="Skills" 
            dataKey="score" 
            stroke="#FFD700" 
            fill="#FFD700" 
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadarChart;
