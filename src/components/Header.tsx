
import React from 'react';

interface HeaderProps {
  completedModules: number;
  totalProgress: number;
  studyTime: number;
}

const Header: React.FC<HeaderProps> = ({ completedModules, totalProgress, studyTime }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-[10px] p-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] gap-4 lg:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
             style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
          💡
        </div>
        <h1 className="text-2xl font-bold text-blue-700">Destrave na Hora H</h1>
      </div>

      {/* Estatísticas do Usuário */}
      <div className="flex gap-8 items-center w-full lg:w-auto justify-around lg:justify-end">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-700">{totalProgress}%</div>
          <div className="text-sm text-gray-500">Progresso Geral</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-700">{completedModules}</div>
          <div className="text-sm text-gray-500">Módulos Concluídos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-700">{studyTime}h</div>
          <div className="text-sm text-gray-500">Tempo de Estudo</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
