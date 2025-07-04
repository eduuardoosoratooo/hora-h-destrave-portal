
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProgressOverview from './ProgressOverview';
import ModuleCard, { Module } from './ModuleCard';
import PasswordModal from './PasswordModal';
import ModuleContent from './ModuleContent';
import { toast } from '@/hooks/use-toast';

const initialModules: Module[] = [
  {
    id: "modulo-1",
    title: "Fundamentos da Transformação",
    description: "Descubra os pilares essenciais para sua jornada de crescimento pessoal.",
    icon: "🎯",
    iconColor: "blue",
    status: "available",
    progress: 0,
    password: "destrave123",
    unlocked: true
  },
  {
    id: "modulo-2", 
    title: "Técnicas de Autoconhecimento",
    description: "Ferramentas práticas para desenvolver consciência sobre si mesmo.", 
    icon: "🧠",
    iconColor: "teal",
    status: "locked",
    progress: 0,
    password: "transforme456", 
    unlocked: false
  },
  {
    id: "modulo-3",
    title: "Desarmando as Armadilhas",
    description: "Neutralize suas travas internas e liberte seu potencial de comunicação.",
    icon: "🔓",
    iconColor: "purple",
    status: "locked", 
    progress: 0,
    password: "liberte789",
    unlocked: false
  },
  {
    id: "modulo-4",
    title: "A Distinção que Liberta",
    description: "Compreenda as diferenças entre introversão, timidez e ansiedade social.",
    icon: "🧭",
    iconColor: "blue",
    status: "locked", 
    progress: 0,
    password: "clareza321",
    unlocked: false
  },
  {
    id: "modulo-5",
    title: "Pilar I - Clareza Interna Absoluta",
    description: "Organize seu tesouro interior e transforme pensamentos complexos em comunicação clara.",
    icon: "🎯",
    iconColor: "teal",
    status: "locked", 
    progress: 0,
    password: "clareza555",
    unlocked: false
  },
  {
    id: "modulo-6",
    title: "Pilar II - Estratégia do Momento Certo",
    description: "Domine a arte do timing perfeito e maximize o impacto das suas intervenções.",
    icon: "⏰",
    iconColor: "purple",
    status: "locked", 
    progress: 0,
    password: "timing666",
    unlocked: false
  },
  {
    id: "modulo-7",
    title: "Pilar III - Gestão Inteligente da Energia",
    description: "Aprenda a gerir sua energia social para estar sempre no seu pico de performance.",
    icon: "🔋",
    iconColor: "green",
    status: "locked", 
    progress: 0,
    password: "energia777",
    unlocked: false
  },
  {
    id: "modulo-8",
    title: "Comunicação Autêntica em Ação",
    description: "Aplique tudo que aprendeu em cenários de alto impacto como conflitos e liderança.",
    icon: "🎪",
    iconColor: "orange",
    status: "locked", 
    progress: 0,
    password: "acao888",
    unlocked: false
  },
  {
    id: "modulo-9",
    title: "O Fim da Invisibilidade",
    description: "Histórias de sucesso e o impacto real da comunicação autêntica no mundo.",
    icon: "🌟",
    iconColor: "blue",
    status: "locked", 
    progress: 0,
    password: "sucesso999",
    unlocked: false
  },
  {
    id: "modulo-10",
    title: "A Jornada Contínua",
    description: "Integre o método para uma vida plena e autêntica como introvertido.",
    icon: "🏆",
    iconColor: "green",
    status: "locked", 
    progress: 0,
    password: "jornada000",
    unlocked: false
  }
];

const Dashboard: React.FC = () => {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentModuleContent, setCurrentModuleContent] = useState<string | null>(null);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedModules = localStorage.getItem('destrave_modules');
    if (savedModules) {
      setModules(JSON.parse(savedModules));
    }
  }, []);

  // Salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem('destrave_modules', JSON.stringify(modules));
  }, [modules]);

  const calculateStats = () => {
    const totalModules = modules.length;
    const completedModules = modules.filter(m => m.progress === 100).length;
    const totalProgress = Math.round(modules.reduce((acc, m) => acc + m.progress, 0) / totalModules);
    const studyTime = completedModules * 2; // Simulação de 2h por módulo

    return { completedModules, totalProgress, studyTime };
  };

  const handleUnlockModule = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      setSelectedModule(module);
      setIsPasswordModalOpen(true);
    }
  };

  const handlePasswordSubmit = (password: string) => {
    if (selectedModule && password === selectedModule.password) {
      setModules(prev => prev.map(m => 
        m.id === selectedModule.id 
          ? { ...m, unlocked: true, status: 'available' as const }
          : m
      ));
      setIsPasswordModalOpen(false);
      setSelectedModule(null);
      toast({
        title: "Módulo Desbloqueado!",
        description: `Parabéns! Você desbloqueou o módulo "${selectedModule.title}".`
      });
    } else {
      toast({
        title: "Senha Incorreta",
        description: "A senha digitada está incorreta. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  const handleStartModule = (moduleId: string) => {
    const module = modules.find(m => m.id === moduleId);
    if (module && (module.status === 'available' || module.unlocked)) {
      // Atualizar progresso e status
      setModules(prev => prev.map(m => 
        m.id === moduleId 
          ? { ...m, status: 'in-progress' as const, progress: Math.min(m.progress + 25, 100) }
          : m
      ));
      
      // Abrir conteúdo do módulo
      setCurrentModuleContent(moduleId);
      
      toast({
        title: "Módulo Iniciado!",
        description: `Você começou o módulo "${module?.title}". Boa leitura!`
      });
    }
  };

  const handleCloseModuleContent = () => {
    setCurrentModuleContent(null);
  };

  // Se estiver visualizando conteúdo de módulo, mostrar apenas o conteúdo
  if (currentModuleContent) {
    return (
      <ModuleContent 
        moduleId={currentModuleContent} 
        onClose={handleCloseModuleContent} 
      />
    );
  }

  const stats = calculateStats();

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)' }}>
      <Header 
        completedModules={stats.completedModules}
        totalProgress={stats.totalProgress}
        studyTime={stats.studyTime}
      />
      
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <ProgressOverview totalProgress={stats.totalProgress} />
        
        {/* Seção de Módulos */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            📚 Módulos de Transformação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(module => (
              <ModuleCard
                key={module.id}
                module={module}
                onUnlock={handleUnlockModule}
                onStart={handleStartModule}
              />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center py-8 text-white/70 text-sm mt-12">
          © 2025 Portal Destrave na Hora H. Todos os direitos reservados.
        </footer>
      </div>

      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => {
          setIsPasswordModalOpen(false);
          setSelectedModule(null);
        }}
        onSubmit={handlePasswordSubmit}
        moduleTitle={selectedModule?.title || ''}
      />
    </div>
  );
};

export default Dashboard;
