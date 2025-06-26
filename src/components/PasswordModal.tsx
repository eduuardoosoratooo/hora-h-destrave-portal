
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
  moduleTitle: string;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSubmit, moduleTitle }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!password) {
      setError('Por favor, digite a senha.');
      return;
    }
    
    onSubmit(password);
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.25)] max-w-md w-full text-center animate-[modalSlideIn_0.3s_ease-out]">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Desbloqueio de Módulo</h3>
        <p className="text-gray-600 mb-6">Digite a senha para acessar: <strong>{moduleTitle}</strong></p>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="Digite a senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-[10px] text-base mb-6 transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
          />
          
          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200 mb-4">
              {error}
            </div>
          )}
          
          <div className="flex gap-4">
            <Button
              type="button"
              onClick={handleClose}
              className="flex-1 p-3 bg-gray-200 text-gray-600 border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-300"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 p-3 text-white border-none rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(30,64,175,0.3)]"
              style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
            >
              Confirmar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
