
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (username === 'admin' && password === '123456') {
      onLogin(username);
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)' }}>
      <div className="animate-fade-in">
        <div className="bg-white p-12 rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.15)] max-w-[450px] w-full text-center animate-scale-in">
          {/* Ícone de Login */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl text-white"
               style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
            🔑
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo(a) de volta!</h1>
          <p className="text-gray-600 mb-8">Acesse sua jornada de transformação.</p>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-[10px] text-base transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
            />
            
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-[10px] text-base transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
            />

            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full p-4 text-white border-none rounded-[10px] text-lg font-semibold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(30,64,175,0.3)]"
              style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
            >
              Entrar
            </Button>
          </form>

          {/* Seção de Ajuda */}
          <div className="mt-6 bg-blue-50 p-4 rounded-[10px] border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">
              <strong>Acesso de demonstração:</strong><br />
              Usuário: admin<br />
              Senha: 123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
