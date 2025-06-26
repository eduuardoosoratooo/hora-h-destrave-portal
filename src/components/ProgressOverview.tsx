
import React from 'react';

interface ProgressOverviewProps {
  totalProgress: number;
}

const ProgressOverview: React.FC<ProgressOverviewProps> = ({ totalProgress }) => {
  return (
    <div className="bg-white p-8 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Seu Progresso na Jornada</h2>
      
      {/* Barra de Progresso */}
      <div className="bg-gray-200 h-3 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full rounded-full transition-all duration-[800ms] ease-out"
          style={{ 
            width: `${totalProgress}%`,
            background: 'linear-gradient(90deg, #059669, #10b981)'
          }}
        />
      </div>
      
      <p className="text-gray-500 text-sm">{totalProgress}% Concluído</p>
    </div>
  );
};

export default ProgressOverview;
