
import React from 'react';
import { Button } from '@/components/ui/button';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: 'blue' | 'teal' | 'purple' | 'green' | 'orange';
  status: 'available' | 'locked' | 'in-progress';
  progress: number;
  password: string;
  unlocked: boolean;
}

interface ModuleCardProps {
  module: Module;
  onUnlock: (moduleId: string) => void;
  onStart: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onUnlock, onStart }) => {
  const getIconBackground = (color: string) => {
    const gradients = {
      blue: 'linear-gradient(135deg, #1e40af, #3b82f6)',
      teal: 'linear-gradient(135deg, #0891b2, #06b6d4)',
      purple: 'linear-gradient(135deg, #7c3aed, #a855f7)',
      green: 'linear-gradient(135deg, #059669, #10b981)',
      orange: 'linear-gradient(135deg, #ea580c, #f97316)'
    };
    return gradients[color as keyof typeof gradients];
  };

  const getButtonConfig = () => {
    if (module.status === 'locked' && !module.unlocked) {
      return {
        text: '🔓 Desbloquear Módulo',
        onClick: () => onUnlock(module.id),
        className: 'bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(245,158,11,0.4)] relative overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-[shine_2s_infinite] before:[transform:skewX(-45deg)]'
      };
    } else if (module.status === 'in-progress') {
      return {
        text: 'Continuar Estudos',
        onClick: () => onStart(module.id),
        className: 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(5,150,105,0.3)]'
      };
    } else {
      return {
        text: 'Iniciar Estudos',
        onClick: () => onStart(module.id),
        className: 'bg-gradient-to-r from-blue-700 to-blue-600 text-white hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(30,64,175,0.3)]'
      };
    }
  };

  const buttonConfig = getButtonConfig();
  const cardClassName = (module.status === 'locked' && !module.unlocked)
    ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-amber-400 animate-[shimmer_2s_infinite]' 
    : 'bg-white';

  return (
    <div className={`${cardClassName} rounded-[20px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden transition-all duration-300`}>
      {/* Header do Módulo */}
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-15 h-15 rounded-[15px] flex items-center justify-center text-2xl text-white"
          style={{ background: getIconBackground(module.iconColor) }}
        >
          {module.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-gray-600 text-sm mb-6">{module.description}</p>

      {/* Progresso */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-800">Progresso</span>
          <span className="font-bold text-green-600">{module.progress}%</span>
        </div>
        <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-[800ms] ease-out"
            style={{ 
              width: `${module.progress}%`,
              background: 'linear-gradient(90deg, #059669, #10b981)'
            }}
          />
        </div>
      </div>

      {/* Indicador de conteúdo disponível para módulos 1 e 2 */}
      {(module.id === 'modulo-1' || module.id === 'modulo-2') && (
        <div className="mb-4 flex items-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg">
          <span>📖</span>
          <span>Conteúdo completo disponível</span>
        </div>
      )}

      {/* Botão */}
      <Button
        onClick={buttonConfig.onClick}
        className={`w-full p-4 border-none rounded-[10px] text-base font-semibold cursor-pointer transition-all duration-300 ${buttonConfig.className}`}
      >
        {buttonConfig.text}
      </Button>
    </div>
  );
};

export default ModuleCard;
