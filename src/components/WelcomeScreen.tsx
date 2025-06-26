
import React from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  username: string;
  onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ username, onContinue }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)' }}>
      <div className="animate-fade-in">
        <div className="bg-white p-12 rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.15)] max-w-[800px] w-full text-center animate-scale-in">
          {/* Título de Boas-vindas */}
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Olá, <span className="text-blue-700">{username}</span>! 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8">Prepare-se para destravar seu potencial.</p>

          {/* Seção da Mentora */}
          <div className="mb-8">
            {/* Avatar da Mentora */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl text-white"
                 style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
              👩‍🏫
            </div>

            {/* Nome da Mentora */}
            <h2 className="text-2xl font-semibold text-blue-700 mb-1">Professora Ana</h2>
            <p className="text-gray-500 italic mb-6">Sua mentora nesta jornada</p>

            {/* Mensagem da Mentora */}
            <div className="bg-gray-50 p-6 rounded-[15px] border-l-4 border-green-600 italic text-gray-700 text-left">
              "Estou muito feliz em ter você aqui! Esta jornada foi cuidadosamente planejada para transformar sua vida. 
              Cada módulo foi desenvolvido com carinho e baseado em anos de experiência. Vamos juntos nessa transformação?"
            </div>
          </div>

          {/* Botão Iniciar Jornada */}
          <Button
            onClick={onContinue}
            className="px-8 py-4 text-white border-none rounded-[10px] text-lg font-semibold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(5,150,105,0.3)]"
            style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
          >
            Iniciar Jornada
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
