
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface SkillsBarChartProps {
  data: Array<{
    skill: string;
    level: number;
    years?: number;
  }>;
  title: string;
}

const SkillsBarChart: React.FC<SkillsBarChartProps> = ({ data, title }) => {
  return (
    <div className="glass-morphism p-6 rounded-xl">
      <h3 className="text-2xl font-bold text-cosmic-gold mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
          <XAxis 
            dataKey="skill" 
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fill: '#E5E7EB', fontSize: 12 }}
          />
          <YAxis tick={{ fill: '#E5E7EB' }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.8)', 
              border: '1px solid #FFD700',
              borderRadius: '8px',
              color: '#E5E7EB'
            }}
            formatter={(value, name) => [`${value}%`, 'Proficiency']}
          />
          <Bar dataKey="level" fill="#FFD700" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsBarChart;
