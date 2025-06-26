
import React, { useState, useEffect } from 'react';
import LoginScreen from '../components/LoginScreen';
import WelcomeScreen from '../components/WelcomeScreen';
import Dashboard from '../components/Dashboard';

type Screen = 'login' | 'welcome' | 'dashboard';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Verificar se há uma sessão ativa
    const savedSession = localStorage.getItem('destrave_session');
    if (savedSession) {
      const session = JSON.parse(savedSession);
      setUsername(session.username);
      setCurrentScreen('dashboard');
    }
  }, []);

  const handleLogin = (user: string) => {
    setUsername(user);
    localStorage.setItem('destrave_session', JSON.stringify({
      username: user,
      loginTime: new Date().toISOString()
    }));
    setCurrentScreen('welcome');
  };

  const handleContinue = () => {
    setCurrentScreen('dashboard');
  };

  return (
    <div className="min-h-screen">
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'welcome' && (
        <WelcomeScreen username={username} onContinue={handleContinue} />
      )}
      
      {currentScreen === 'dashboard' && (
        <Dashboard />
      )}
    </div>
  );
};

export default Index;
