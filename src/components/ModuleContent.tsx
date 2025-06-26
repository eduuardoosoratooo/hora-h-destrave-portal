import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, BookOpen, Target, Brain } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ModulePage {
  id: string;
  title: string;
  content: React.ReactNode;
  illustration?: React.ReactNode;
}

interface ModuleContentProps {
  moduleId: string;
  onClose: () => void;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ moduleId, onClose }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const getModuleData = (id: string) => {
    switch (id) {
      case 'modulo-1':
        return {
          title: 'Módulo 1: A Revolução Silenciosa',
          subtitle: 'Redefinindo o Poder da Introversão',
          pages: module1Pages
        };
      case 'modulo-2':
        return {
          title: 'Módulo 2: O Mapa da Sua Mente',
          subtitle: 'Desvendando Seus Superpoderes Introvertidos',
          pages: module2Pages
        };
      case 'modulo-3':
        return {
          title: 'Módulo 3: Desarmando as Armadilhas',
          subtitle: 'Neutralizando Suas Travas Internas',
          pages: module3Pages
        };
      case 'modulo-4':
        return {
          title: 'Módulo 4: A Distinção que Liberta',
          subtitle: 'Introversão, Timidez e Ansiedade Social',
          pages: module4Pages
        };
      default:
        return null;
    }
  };

  const moduleData = getModuleData(moduleId);
  
  if (!moduleData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-800 to-cyan-400 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-[20px] shadow-xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Módulo não encontrado</h2>
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const currentPage = moduleData.pages[currentPageIndex];
  const totalPages = moduleData.pages.length;
  const isLastPage = currentPageIndex === totalPages - 1;

  console.log('ModuleContent Debug:', {
    moduleId,
    currentPageIndex,
    totalPages,
    isLastPage,
    pageId: currentPage.id
  });

  const nextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleFinishModule = () => {
    console.log('Finishing module:', moduleId);
    
    // Atualizar progresso do módulo no localStorage
    const savedModules = localStorage.getItem('destrave_modules');
    if (savedModules) {
      const modules = JSON.parse(savedModules);
      const updatedModules = modules.map((module: any) => 
        module.id === moduleId 
          ? { ...module, progress: 100, status: 'completed' }
          : module
      );
      localStorage.setItem('destrave_modules', JSON.stringify(updatedModules));
    }

    toast({
      title: "Módulo Concluído! 🎉",
      description: `Parabéns! Você finalizou o módulo "${moduleData.title}".`
    });

    // Voltar ao dashboard
    onClose();
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)' }}>
      {/* Header do Módulo */}
      <header className="bg-white/95 backdrop-blur-sm p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">{moduleData.title}</h1>
            <p className="text-blue-600">{moduleData.subtitle}</p>
          </div>
          <Button 
            onClick={onClose}
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            Voltar ao Dashboard
          </Button>
        </div>
      </header>

      {/* Conteúdo da Página */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
          {/* Indicador de Progresso */}
          <div className="bg-blue-50 p-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-blue-700">
                Página {currentPageIndex + 1} de {totalPages}
              </span>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <BookOpen size={16} />
                Leitura: ~5 min
              </div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentPageIndex + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="p-8">
            {/* Ilustração */}
            {currentPage.illustration && (
              <div className="mb-6 text-center">
                {currentPage.illustration}
              </div>
            )}

            {/* Título da Página */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
              {currentPage.title}
            </h2>

            {/* Conteúdo */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {currentPage.content}
            </div>
          </div>

          {/* Navegação */}
          <div className="bg-gray-50 p-6 flex justify-between items-center">
            <Button
              onClick={prevPage}
              disabled={currentPageIndex === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Página Anterior
            </Button>

            <div className="text-sm text-gray-600">
              {currentPageIndex + 1} / {totalPages}
            </div>

            {isLastPage ? (
              <Button
                onClick={handleFinishModule}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
              >
                <Target size={16} />
                Finalizar Módulo
              </Button>
            ) : (
              <Button
                onClick={nextPage}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                Próxima Página
                <ChevronRight size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Páginas do Módulo 1
const module1Pages: ModulePage[] = [
  {
    id: 'intro',
    title: 'A Revolução Silenciosa',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white shadow-lg">
        🎯
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-xl text-blue-700 font-medium italic">
          "O poder não está em falar alto, mas em falar certo."
        </p>
        <p>
          Bem-vindo ao primeiro módulo da sua jornada de transformação. Aqui, vamos desmantelar 
          o maior mito que impede introvertidos de reconhecerem seu verdadeiro potencial: 
          a ideia de que comunicação eficaz significa ser barulhento e dominante.
        </p>
        <p>
          Esta não é apenas uma lição sobre comunicação — é uma revolução pessoal que vai 
          redefinir como você vê a si mesmo e como usa seus talentos naturais.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
          <p className="font-medium text-blue-800">
            💡 Objetivo deste módulo: Libertar você do "Ideal Extrovertido" e mostrar 
            que sua natureza introvertida é uma vantagem, não uma limitação.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'mito-extrovertido',
    title: 'Desconstruindo o "Ideal Extrovertido"',
    illustration: (
      <div className="flex justify-center items-center space-x-4">
        <div className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center text-2xl opacity-50">📢</div>
        <div className="text-2xl">→</div>
        <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-2xl">🧘</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Nossa jornada começa por desmantelar uma ideia que se tornou uma "verdade" 
          incontestável: <strong>o mito do "Ideal Extrovertido"</strong>. Este ideal sustenta 
          que o bom comunicador é sempre expansivo, dominante e pronto para tomar o centro do palco.
        </p>
        
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">⚠️ O Problema Cultural</h4>
          <p className="text-amber-700">
            Como aponta Susan Cain, saímos de uma "Cultura do Caráter" (que valorizava 
            integridade e disciplina) para uma "Cultura da Personalidade" (onde carisma 
            e capacidade de "se vender" se tornaram primordiais).
          </p>
        </div>

        <h4 className="font-bold text-lg">Como isso se manifesta:</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🏫</span>
            <div>
              <strong>Nas escolas:</strong> Professores preferem alunos extrovertidos, 
              salas são projetadas para trabalho em grupo constante.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">🏢</span>
            <div>
              <strong>No trabalho:</strong> Escritórios abertos, reuniões dominadas 
              por quem pensa em voz alta, visibilidade confundida com competência.
            </div>
          </li>
        </ul>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-medium text-blue-800">
            Vivemos na "Sociedade do Barulho", onde quietude é mal interpretada 
            como desinteresse ou incompetência.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'custo-invisibilidade',
    title: 'A Vantagem Subestimada: O Custo da Invisibilidade',
    illustration: (
      <div className="relative w-40 h-24 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 rounded-lg opacity-30"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">💎</span>
        </div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          A imposição do "Ideal Extrovertido" tem um custo alto para todos, 
          não apenas para os introvertidos. Quando uma cultura subestima 
          sistematicamente de um terço à metade de sua população, 
          ela desperdiça um reservatório imenso de talento.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-3">❌ Perdas Individuais</h4>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Contribuições perdidas em reuniões</li>
              <li>• Preferência por trabalho focado vista como falta de espírito de equipe</li>
              <li>• Comportamento quieto confundido com falta de confiança</li>
              <li>• Profissionais competentes preteridos para promoções</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3">✅ Perdas Coletivas</h4>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Líderes introvertidos podem ser mais eficazes</li>
              <li>• Criatividade surge da solidão e pensamento profundo</li>
              <li>• Inovações perdidas por falta de ambientes adequados</li>
              <li>• Equipes perdem diversidade de estilos de liderança</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h4 className="font-bold text-purple-800 mb-2">🔬 Pesquisa de Adam Grant</h4>
          <p className="text-purple-700">
            Líderes introvertidos podem ser mais eficazes que extrovertidos, 
            especialmente ao liderar equipes proativas. Eles ouvem mais, 
            permitem que boas ideias floresçam e empoderam suas equipes.
          </p>
        </div>

        <p className="text-lg font-medium text-center text-gray-700 bg-gray-50 p-4 rounded-lg">
          A perda não é apenas sua — é da equipe, da empresa e da sociedade.
        </p>
      </div>
    )
  },
  {
    id: 'voce-nao-esta-quebrado',
    title: 'Você Não Está Quebrado: Abraçando Sua Natureza',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg animate-pulse">
        ✨
      </div>
    ),
    content: (
      <div className="space-y-6">
        <div className="text-center bg-green-50 p-6 rounded-xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-green-800 mb-3">
            🌟 A Mensagem Mais Importante
          </h3>
          <p className="text-xl text-green-700 font-medium">
            Não há nada de errado com você. Você não está quebrado. 
            Você não precisa ser consertado.
          </p>
        </div>

        <p>
          Se você se reconheceu nas descrições anteriores — sentindo-se cansado 
          em ambientes sociais, preferindo conversas profundas, precisando de 
          tempo sozinho para recarregar — saiba que isso é completamente natural.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-3">🧠 A Ciência da Introversão</h4>
          <p className="text-blue-700">
            A introversão é uma característica de temperamento inata, tão 
            fundamental quanto a cor dos seus olhos. A principal diferença 
            está em como seus sistemas nervosos respondem à estimulação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h5 className="font-bold text-orange-800 mb-2">⚡ Extrovertidos</h5>
            <p className="text-orange-700 text-sm">
              Energizados pela interação social e ambientes ricos em estímulos
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h5 className="font-bold text-teal-800 mb-2">🧘 Introvertidos</h5>
            <p className="text-teal-700 text-sm">
              Sistema nervoso mais sensível, se sentem mais vivos em ambientes calmos
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
          <h4 className="font-bold text-amber-800 mb-3">⚠️ O Perigo da "Fantasia de Extrovertido"</h4>
          <p className="text-amber-700">
            Tentar forçar comportamentos extrovertidos é incrivelmente desgastante 
            e inautêntico. Você não "não leva jeito" — você só estava lutando 
            contra sua própria natureza.
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🚀 Seu Primeiro Passo</h4>
          <p className="text-lg">
            Abandonar a culpa e aceitar sua natureza não é resignação — é libertação. 
            É o ponto de partida para se tornar a melhor versão de quem você realmente é.
          </p>
        </div>
      </div>
    )
  }
];

// Páginas do Módulo 2
const module2Pages: ModulePage[] = [
  {
    id: 'intro-superpoderes',
    title: 'Seus Superpoderes Introvertidos',
    illustration: (
      <div className="flex justify-center space-x-3">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl transform rotate-12">👂</div>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xl">🧠</div>
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xl transform -rotate-12">🎯</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-xl text-purple-700 font-medium italic text-center">
          "Seus superpoderes não são habilidades que você precisa adquirir — eles já residem em você."
        </p>
        
        <p>
          No módulo anterior, desconstruímos o mito do "Ideal Extrovertido". 
          Agora, vamos abrir seu "baú de tesouros" pessoal e revelar que as mesmas 
          características que a sociedade desvaloriza são seus maiores superpoderes.
        </p>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
          <h4 className="font-bold text-purple-800 mb-3">🔄 A Grande Virada</h4>
          <p className="text-purple-700">
            A mesma necessidade de processar antes de falar que te deixa em silêncio 
            numa reunião é a fonte do seu pensamento profundo. A mesma preferência 
            por ouvir é o que te torna um ouvinte excepcional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 border-2 border-dashed border-purple-300 rounded-lg">
            <h5 className="font-bold text-purple-800 mb-2">🎯 O que vamos descobrir:</h5>
            <ul className="text-purple-700 space-y-1 text-sm">
              <li>• Superaudição (Escuta Profunda)</li>
              <li>• Raio-X Mental (Pensamento Analítico)</li>
              <li>• Foco de Laser (Concentração)</li>
              <li>• Visão Periférica (Observação)</li>
              <li>• Bússola Interna (Integridade)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-4 rounded-lg">
            <h5 className="font-bold text-orange-800 mb-2">✨ Como isso muda tudo:</h5>
            <p className="text-orange-700 text-sm">
              Este módulo vai reframear sua perspectiva e ensinar você a ver, 
              valorizar e empunhar essas forças com intenção estratégica.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'superaudicao',
    title: 'A Superaudição: Escuta Profunda',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
        <div className="relative">
          <span className="text-4xl">👂</span>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Enquanto muitos em uma conversa estão apenas esperando sua vez de falar, 
          o introvertido tem a capacidade inata de praticar a <strong>escuta profunda</strong>. 
          Este não é um ato passivo — é um engajamento ativo para compreender 
          o que está por trás das palavras.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h4 className="font-bold text-purple-800 mb-3">🎯 O que é Superaudição?</h4>
          <p className="text-purple-700">
            É a habilidade de captar nuances, ler entrelinhas, perceber hesitação 
            na voz e entender a verdadeira preocupação ou desejo não verbalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">💼</div>
            <h5 className="font-bold text-blue-800 mb-1">Nos Negócios</h5>
            <p className="text-blue-700 text-sm">Entende necessidades reais dos clientes</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">👥</div>
            <h5 className="font-bold text-green-800 mb-1">Na Liderança</h5>
            <p className="text-green-700 text-sm">Cria equipes psicologicamente seguras</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">❤️</div>
            <h5 className="font-bold text-pink-800 mb-1">Nos Relacionamentos</h5>
            <p className="text-pink-700 text-sm">Conexões mais fortes e autênticas</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl">
          <h4 className="font-bold text-purple-800 mb-4">🕵️ Exercício: O Detetive da Conversa</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <strong>Ouça sem interrupções:</strong> Deixe a pessoa terminar completamente. 
                Resista ao impulso de formular sua resposta.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <strong>Observe o não-verbal:</strong> Linguagem corporal, tom de voz, contato visual.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <strong>Pergunte-se internamente:</strong> "Qual é o sentimento principal? 
                Qual a necessidade por trás das palavras?"
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <strong>Valide antes de responder:</strong> "Parece que isso foi frustrante..." 
                ou "Entendo sua preocupação com..."
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'raio-x-mental',
    title: 'O Raio-X Mental: Pensamento Profundo e Analítico',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">🧠</span>
        <div className="absolute inset-0 border-4 border-blue-300 rounded-full animate-pulse opacity-50"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          A mente introvertida não se contenta com o superficial. Ela tem tendência 
          natural para "cavar fundo", conectar ideias díspares, analisar causas-raízes, 
          prever consequências de longo prazo e enxergar o sistema completo.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h4 className="font-bold text-blue-800 mb-3">🔍 O Poder do Raio-X Mental</h4>
          <p className="text-blue-700">
            Enquanto outros reagem rapidamente, você dá um passo atrás para refletir. 
            Seus argumentos são bem fundamentados, lógicos e estratégicos. 
            Você é quem pergunta: "Já consideramos o impacto em X daqui a seis meses?"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">⚡ Pensamento Rápido vs 🧠 Pensamento Profundo</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h5 className="font-bold text-red-800 mb-2">⚡ Reação Rápida</h5>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Primeira solução que vem à mente</li>
                <li>• Baseado em achismos</li>
                <li>• Foco no problema imediato</li>
                <li>• Pode gerar retrabalho</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-bold text-green-800 mb-2">🧠 Análise Profunda</h5>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Análise cuidadosa de opções</li>
                <li>• Baseado em dados e lógica</li>
                <li>• Considera impactos sistêmicos</li>
                <li>• Soluções mais sustentáveis</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-6 rounded-xl">
            <h4 className="font-bold text-teal-800 mb-4">🔧 Exercício: Os 5 Porquês</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded-lg">
                <strong>Problema:</strong> "O relatório está sempre atrasado"
              </div>
              <div className="space-y-2">
                <div><strong>Por quê 1?</strong> Os dados chegam tarde</div>
                <div><strong>Por quê 2?</strong> A equipe Z tem outras prioridades</div>
                <div><strong>Por quê 3?</strong> O prazo não é formalizado</div>
                <div><strong>Por quê 4?</strong> O gerente não vê como prioridade</div>
                <div><strong>Por quê 5?</strong> Ele não entende o impacto estratégico</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <strong>Causa-raiz:</strong> Falta de alinhamento estratégico, 
                não "atraso no relatório"
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-xl">
          <p className="text-lg font-medium">
            🎯 Seu Raio-X Mental diferencia boas ideias de ideias geniais e sustentáveis
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'foco-laser',
    title: 'O Foco de Laser: Concentração Profunda',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">🎯</span>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-2 h-8 bg-red-400 rounded-full opacity-75"></div>
        </div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Em um mundo de notificações constantes, multitarefa e interrupções intermináveis, 
          a capacidade de se concentrar profundamente é cada vez mais rara e valiosa. 
          Este é um superpoder natural para muitos introvertidos.
        </p>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
          <h4 className="font-bold text-green-800 mb-3">⚡ O Poder do "Deep Work"</h4>
          <p className="text-green-700">
            Você não apenas prefere, mas prospera em ambientes que permitem trabalho profundo. 
            Pode mergulhar em problemas complexos, produzir trabalho de alta qualidade 
            e manter uma linha de raciocínio clara e coesa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">📊</div>
            <h5 className="font-bold text-blue-800 mb-1">Produtividade</h5>
            <p className="text-blue-700 text-sm">Mais qualidade em menos tempo</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">💡</div>
            <h5 className="font-bold text-purple-800 mb-1">Criatividade</h5>
            <p className="text-purple-700 text-sm">Soluções inovadoras emergem</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h5 className="font-bold text-orange-800 mb-1">Comunicação</h5>
            <p className="text-orange-700 text-sm">Mensagens objetivas e impactantes</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl">
          <h4 className="font-bold text-green-800 mb-4">🛡️ Exercício: O Bloco de Tempo Protegido</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div className="text-sm">
                  <strong>Identifique sua tarefa mais importante:</strong> 
                  Qual trará maior progresso aos seus objetivos?
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div className="text-sm">
                  <strong>Agende 90 minutos:</strong> 
                  Trate como reunião com seu chefe
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div className="text-sm">
                  <strong>Crie uma fortaleza:</strong> 
                  E-mail fechado, celular longe, porta fechada
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div className="text-sm">
                  <strong>Mergulhe sem interrupções:</strong> 
                  Anote distrações para depois
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-xl">
          <p className="text-lg font-medium">
            🚀 Enquanto outros têm atenção fragmentada, você direciona toda energia mental 
            para o que realmente importa
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'visao-periferica',
    title: 'A Visão Periférica: Observação Aguçada',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">👁️</span>
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-75"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-75"></div>
        <div className="absolute top-0 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-75"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Enquanto a Superaudição capta o que é dito e não dito, a Visão Periférica 
          capta todo o contexto ao redor da comunicação. É como ter um "mapa do terreno" 
          em tempo real.
        </p>

        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
          <h4 className="font-bold text-indigo-800 mb-3">🔍 O que você percebe:</h4>
          <ul className="text-indigo-700 space-y-2">
            <li>• Linguagem corporal tensa quando certos tópicos são mencionados</li>
            <li>• Dinâmica de poder sutil em grupos</li>
            <li>• Mudança no "clima" da sala quando alguém entra</li>
            <li>• Padrões de comportamento que outros não notam</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-bold text-purple-800 mb-3">🎯 Vantagens Estratégicas</h5>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Adaptar abordagem ao contexto</li>
              <li>• Escolher momento certo para falar</li>
              <li>• Calibrar mensagem para ser mais eficaz</li>
              <li>• Ler situações antes que escalem</li>
            </ul>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h5 className="font-bold text-teal-800 mb-3">🧠 Base Científica</h5>
            <p className="text-teal-700 text-sm">
              Pessoas com alta sensibilidade de processamento (comum em introvertidos) 
              têm cérebros programados para perceber sutilezas no ambiente.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl">
          <h4 className="font-bold text-indigo-800 mb-4">🕵️ Exercício: O Antropólogo do Café</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div className="text-sm">
                  <strong>Vá a um local público:</strong> 
                  Café, praça ou lobby de prédio
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div className="text-sm">
                  <strong>Observe por 15 minutos:</strong> 
                  Foque nas interações não-verbais
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div className="text-sm">
                  <strong>Anote observações:</strong> 
                  Postura, gestos, contato visual, posicionamento
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div className="text-sm">
                  <strong>Reflita:</strong> 
                  O que essas observações sugerem sobre relacionamentos?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl">
          <p className="text-lg font-medium">
            🗺️ Sua Visão Periférica te dá informações que outros perdem, 
            criando vantagem estratégica em todas as interações
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'bussola-interna',
    title: 'A Bússola Interna: Integridade e Convicção',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">🧭</span>
        <div className="absolute inset-2 border-2 border-white rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          O mais potente dos superpoderes é a Bússola Interna. Quando um introvertido 
          supera suas travas e decide falar sobre algo em que realmente acredita, 
          suas palavras carregam um peso e autenticidade quase impossíveis de ignorar.
        </p>

        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
          <h4 className="font-bold text-amber-800 mb-3">✨ O Poder da Autenticidade</h4>
          <p className="text-amber-700">
            Não há artifício, não há performance. Há apenas a clareza de uma convicção profunda. 
            As pessoas podem não concordar, mas elas sentirão sua integridade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🎭</div>
            <h5 className="font-bold text-blue-800 mb-1">Carisma Superficial</h5>
            <p className="text-blue-700 text-sm">Performance temporária</p>
          </div>
          <div className="text-2xl text-center py-4">VS</div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🧭</div>
            <h5 className="font-bold text-green-800 mb-1">Convicção Autêntica</h5>
            <p className="text-green-700 text-sm">Confiança duradoura</p>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-3">🚨 A Diferença Crucial</h4>
          <p className="text-red-700">
            Você não fala para ser ouvido ou ganhar pontos — fala porque aquilo é importante. 
            Em um mundo cheio de ruído, uma voz calma, fundamentada e convicta 
            se destaca como um farol.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-amber-800 mb-4">📋 Exercício: O Inventário de Valores</h4>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  <strong>Liste seus valores</strong>
                </div>
                <p className="text-amber-700">
                  20 minutos listando tudo importante: honestidade, criatividade, 
                  justiça, segurança, crescimento...
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  <strong>Agrupe e priorize</strong>
                </div>
                <p className="text-amber-700">
                  Force-se a escolher os 5 valores mais importantes. 
                  Os inegociáveis que definem quem você é.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  <strong>Escreva declarações</strong>
                </div>
                <p className="text-amber-700">
                  Para cada um dos 5 valores, escreva 1-2 frases sobre 
                  o que significa e por que é importante.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border-2 border-amber-300">
              <p className="text-amber-800 font-medium text-center">
                💡 <strong>Pergunta-chave:</strong> "Qual dos meus valores principais está em jogo aqui?"
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-amber-500 to-red-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🎯 Sua Voz Autêntica</h4>
          <p className="text-lg">
            Quando você fala a partir da sua Bússola Interna, 
            sua voz não precisa ser alta para ser poderosa
          </p>
        </div>
      </div>
    )
  }
];

// Páginas do Módulo 3
const module3Pages: ModulePage[] = [
  {
    id: 'intro-travas',
    title: 'Desarmando as Armadilhas',
    illustration: (
      <div className="flex justify-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl transform rotate-12">🔒</div>
        <div className="text-3xl">→</div>
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl transform -rotate-12">🔓</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-xl text-purple-700 font-medium italic text-center">
          "Se eu tenho tudo isso, por que às vezes parece tão difícil falar?"
        </p>
        
        <p>
          Depois de reconhecer a força dos seus superpoderes, surge uma pergunta inevitável. 
          A resposta está nas "travas" internas — os bloqueios mentais e emocionais que nos 
          impedem de usar nosso potencial.
        </p>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
          <h4 className="font-bold text-red-800 mb-3">🔍 O Sistema Interligado</h4>
          <p className="text-red-700">
            Essas travas não são problemas isolados. Elas formam uma tríade tóxica que se retroalimenta: 
            Perfeccionismo estabelece o padrão impossível, Medo do Julgamento é a ansiedade de falhar 
            nesse padrão, e Síndrome do Impostor é a identidade de fraude que resulta desse conflito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
            <div className="text-3xl mb-2">🎯</div>
            <h5 className="font-bold text-amber-800">Perfeccionismo</h5>
            <p className="text-amber-700 text-sm">O padrão impossível</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
            <div className="text-3xl mb-2">😰</div>
            <h5 className="font-bold text-blue-800">Medo do Julgamento</h5>
            <p className="text-blue-700 text-sm">A ansiedade do fracasso</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
            <div className="text-3xl mb-2">👻</div>
            <h5 className="font-bold text-purple-800">Síndrome do Impostor</h5>
            <p className="text-purple-700 text-sm">A identidade de fraude</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">🗝️ A Boa Notícia</h4>
          <p className="text-green-700">
            Essas travas não são cadeados indestrutíveis. São portas que podem ser abertas 
            com as chaves certas. Ao entender essa dinâmica, podemos desmantelar o sistema 
            inteiro, em vez de apenas tratar os sintomas.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'domando-critico',
    title: 'Domando o Crítico Interno: O Fim do Perfeccionismo Mal-adaptativo',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">🎯</span>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">X</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          A primeira e mais fundamental trava é o "Crítico Interno Super Exigente". 
          Muitos introvertidos desenvolvem um padrão de qualidade altíssima para si mesmos. 
          Isso pode ser uma força, mas quando se torna perfeccionismo, vira uma armadilha.
        </p>

        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
          <h4 className="font-bold text-amber-800 mb-3">⚠️ O que é Perfeccionismo Mal-adaptativo?</h4>
          <p className="text-amber-700">
            Não é a busca saudável pela excelência; é a crença de que "se não for perfeito, 
            é um fracasso". É uma mentalidade de tudo ou nada que paralisa e desperdiça oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h5 className="font-bold text-green-800 mb-3">✅ Perfeccionismo Adaptativo</h5>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Motivação saudável para fazer o melhor</li>
              <li>• Foco no processo e melhoria</li>
              <li>• Aceita "bom o suficiente" quando apropriado</li>
              <li>• Gera satisfação e progresso</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h5 className="font-bold text-red-800 mb-3">❌ Perfeccionismo Mal-adaptativo</h5>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Obsessão com evitação de erros</li>
              <li>• Medo paralisante do fracasso</li>
              <li>• "Se não for perfeito, é inútil"</li>
              <li>• Gera ansiedade e procrastinação</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-amber-800 mb-4">📊 Exercício: Análise Custo-Benefício do Perfeccionismo</h4>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                <h5 className="font-bold text-green-800 mb-2">✅ Benefícios do Meu Perfeccionismo</h5>
                <p className="text-green-700 text-sm mb-2">Liste o que você ganha:</p>
                <ul className="text-green-600 text-sm space-y-1">
                  <li>• "Entrego trabalho de alta qualidade"</li>
                  <li>• "Evito críticas"</li>
                  <li>• "Sou reconhecido pela excelência"</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                <h5 className="font-bold text-red-800 mb-2">❌ Custos do Meu Perfeccionismo</h5>
                <p className="text-red-700 text-sm mb-2">Seja brutalmente honesto:</p>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• "Ansiedade constante"</li>
                  <li>• "Procrastino tarefas importantes"</li>
                  <li>• "Perco prazos"</li>
                  <li>• "Nunca me sinto satisfeito"</li>
                  <li>• "Perco oportunidades de falar"</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-blue-800 font-medium">
                💡 Ao visualizar os custos superando os benefícios, sua motivação para mudar aumenta
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🎯 Reestruturação Cognitiva</h4>
          <p className="text-lg">
            Transforme "Não posso dar essa sugestão porque não está 100% perfeita" 
            em "Vou contribuir com uma nova perspectiva que pode ajudar a equipe"
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'monstrinho-e-se',
    title: 'Expondo o "Monstrinho do E Se?": Reestruturação Cognitiva para o Medo do Julgamento',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">😰</span>
        <div className="absolute inset-0 border-4 border-blue-300 rounded-full animate-pulse opacity-50"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Alimentado diretamente pelo perfeccionismo, surge a segunda trava: o "Monstrinho do 'E Se?'". 
          É aquela voz ansiosa que pinta cenários catastróficos antes de qualquer interação social.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
          <h4 className="font-bold text-blue-800 mb-3">👻 Os Sussuros do Monstrinho</h4>
          <ul className="text-blue-700 space-y-2">
            <li>• "E se acharem minha ideia boba?"</li>
            <li>• "E se eu gaguejar?"</li>
            <li>• "E se ninguém se importar com o que eu digo?"</li>
            <li>• "E se me fizerem uma pergunta que não sei responder?"</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h4 className="font-bold text-purple-800 mb-3">🔍 A Realidade por Trás do Medo</h4>
          <p className="text-purple-700">
            Esse medo não é sobre uma ameaça real, mas sobre a antecipação de um julgamento negativo. 
            A ironia é que a maioria das pessoas está mais preocupada com seus próprios "monstrinhos" 
            do que em te julgar com tanto rigor.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-4">⚖️ Exercício: O Tribunal do Pensamento</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <h5 className="font-bold text-red-800 mb-2">🔍 A Acusação</h5>
              <p className="text-red-700 text-sm">
                Escreva o pensamento ansioso exato:<br/>
                <em>"Se eu falar na reunião, todos vão pensar que minha contribuição é irrelevante."</em>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-bold text-red-800 mb-2">📋 Promotoria (Evidências A Favor)</h5>
                <p className="text-red-700 text-sm">
                  "Uma vez, há dois anos, fiz um comentário e ninguém respondeu."
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-green-800 mb-2">🛡️ Defesa (Evidências Contra)</h5>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• "Meu chefe me elogiou na semana passada"</li>
                  <li>• "Ana me pediu minha opinião ontem"</li>
                  <li>• "É impossível saber o que 'todos' pensam"</li>
                  <li>• "Achar algo irrelevante ≠ me julgar como pessoa"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h5 className="font-bold text-blue-800 mb-2">⚖️ O Veredito do Juiz</h5>
              <p className="text-blue-700 text-sm">
                "Embora eu tenha medo de que minha contribuição não seja valorizada, 
                a evidência sugere que essa é uma preocupação exagerada. Meus colegas 
                geralmente me respeitam. O risco de parecer 'irrelevante' é pequeno 
                e vale a pena correr para compartilhar uma ideia útil."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🧠 Tratando Pensamentos como Hipóteses</h4>
          <p className="text-lg">
            Seus pensamentos ansiosos não são fatos — são hipóteses a serem testadas
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'sindrome-impostor',
    title: 'Desativando a Síndrome do Impostor: Separando Fatos de Ficção',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">👻</span>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-lg">✓</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Quando o Crítico Interno estabelece um padrão de perfeição e o Monstrinho do "E Se?" 
          te aterroriza com o medo de ser julgado, o resultado lógico é a terceira trava: 
          a Síndrome do Impostor.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
          <h4 className="font-bold text-purple-800 mb-3">🎭 O que é a Síndrome do Impostor?</h4>
          <p className="text-purple-700">
            É a sensação persistente de que você é uma fraude, que suas conquistas são 
            resultado de sorte ou de enganar os outros, e que a qualquer momento você será "descoberto".
          </p>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-3">😈 A Crueldade da Síndrome</h4>
          <p className="text-red-700">
            Ela ignora as evidências objetivas. Você pode ter diploma, anos de experiência 
            e uma lista de realizações, mas o sentimento interno é de inadequação. 
            Ela prospera na desconexão entre realidade externa (seu sucesso) e 
            interpretação interna (sua crença de que não o merece).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-bold text-gray-800 mb-3">📊 Realidade Externa</h5>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Diploma universitário</li>
              <li>• 5 anos de experiência</li>
              <li>• Projeto bem-sucedido no ano passado</li>
              <li>• Feedback positivo dos colegas</li>
              <li>• Promoção recente</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h5 className="font-bold text-red-800 mb-3">🧠 Interpretação Interna</h5>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• "Tive sorte na faculdade"</li>
              <li>• "Ainda não sei o suficiente"</li>
              <li>• "A equipe que fez o trabalho"</li>
              <li>• "Eles estão sendo educados"</li>
              <li>• "Foi por falta de opção melhor"</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl">
          <h4 className="font-bold text-purple-800 mb-4">📝 Exercício: O Diário de Fatos</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <h5 className="font-bold text-purple-800 mb-2">🎯 Comprometa-se por uma semana</h5>
              <p className="text-purple-700 text-sm">
                Por sete dias consecutivos, reserve cinco minutos no final do seu dia de trabalho.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-bold text-red-800 mb-2">❌ Ruim (história/julgamento)</h5>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• "Eu não fiz um bom trabalho na apresentação"</li>
                  <li>• "Acho que ninguém gostou da minha ideia"</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-bold text-green-800 mb-2">✅ Bom (fato observável)</h5>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• "Completei e entreguei a apresentação para a equipe"</li>
                  <li>• "Apresentei minha sugestão sobre o projeto X"</li>
                  <li>• "Ajudei o Carlos a encontrar os dados necessários"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h5 className="font-bold text-blue-800 mb-2">📋 Revise no final da semana</h5>
              <p className="text-blue-700 text-sm">
                Você terá uma lista de 21 realizações factuais. Leia em voz alta. 
                Este é seu "arquivo de provas". É a realidade. O sentimento de ser 
                uma fraude é apenas um sentimento, uma história.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🔍 A Chave para Desativar</h4>
          <p className="text-lg">
            Forçar uma reconexão com a realidade objetiva — separar fatos das histórias 
            que você conta a si mesmo
          </p>
        </div>
      </div>
    )
  }
];

// Páginas do Módulo 4
const module4Pages: ModulePage[] = [
  {
    id: 'intro-distincao',
    title: 'A Distinção que Liberta',
    illustration: (
      <div className="flex justify-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-2xl">🧘</div>
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-2xl">😊</div>
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-2xl">😰</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p className="text-xl text-blue-700 font-medium italic text-center">
          "A confusão de termos é perigosa — leva a soluções erradas para problemas mal diagnosticados."
        </p>
        
        <p>
          Um dos maiores obstáculos no caminho para a comunicação autêntica é a confusão de termos. 
          A cultura do "Ideal Extrovertido" frequentemente agrupa introversão, timidez e ansiedade 
          social em uma única categoria negativa.
        </p>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
          <h4 className="font-bold text-red-800 mb-3">⚠️ O Perigo da Confusão</h4>
          <p className="text-red-700">
            Tratar a introversão (uma característica de temperamento) com técnicas para 
            ansiedade social (uma condição de saúde mental) é como tentar consertar o 
            motor de um carro elétrico com as ferramentas de um motor a diesel. Não funciona 
            e causa ainda mais frustração.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
            <div className="text-3xl mb-2">🧘</div>
            <h5 className="font-bold text-blue-800">Introversão</h5>
            <p className="text-blue-700 text-sm">Característica de temperamento</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-200">
            <div className="text-3xl mb-2">😊</div>
            <h5 className="font-bold text-yellow-800">Timidez</h5>
            <p className="text-yellow-700 text-sm">Comportamento aprendido</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg text-center border border-red-200">
            <div className="text-3xl mb-2">😰</div>
            <h5 className="font-bold text-red-800">Ansiedade Social</h5>
            <p className="text-red-700 text-sm">Condição clínica</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl">
          <h4 className="font-bold text-green-800 mb-3">🎯 O Objetivo deste Módulo</h4>
          <p className="text-green-700">
            Fornecer clareza libertadora. Ao entender as diferenças fundamentais, você ganha 
            a linguagem para definir sua própria experiência com precisão, resistir a rótulos 
            incorretos e aplicar as estratégias certas para o seu desenvolvimento.
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🔍 Esta distinção não é apenas semântica</h4>
          <p className="text-lg">É um ato de autoafirmação psicológica</p>
        </div>
      </div>
    )
  },
  {
    id: 'introversao-energia',
    title: 'Introversão: Uma Questão de Energia, Não de Habilidade',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">🔋</span>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Como vimos no Módulo 1, a introversão é uma característica de personalidade inata, 
          uma parte fundamental de quem você é. Sua essência não está relacionada com medo 
          ou habilidade social, mas sim com a forma como seu cérebro processa a estimulação 
          e gerencia sua energia.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-800 mb-3">⚡ Fonte de Energia</h4>
            <p className="text-blue-700 text-sm">
              Introvertidos recarregam a "bateria social" através do tempo sozinhos, 
              em ambientes de baixa estimulação. Interações sociais, especialmente em 
              grandes grupos, consomem essa energia.
            </p>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
            <h4 className="font-bold text-teal-800 mb-3">🎯 Foco Principal</h4>
            <p className="text-teal-700 text-sm">
              A questão central é gestão de energia. A decisão de ir a uma festa ou 
              sair mais cedo é uma escolha consciente para preservar ou recarregar 
              energia, não um ato motivado pelo medo.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-800 mb-3">❤️ Desejo de Interação</h4>
            <p className="text-green-700 text-sm">
              Introvertidos não desgostam de pessoas; frequentemente desejam conexões 
              profundas e significativas. A preferência é por conversas um-a-um ou 
              em pequenos grupos.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-4">🧠 Como Funciona o Cérebro Introvertido</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-blue-800 mb-2">🔄 Processamento</h5>
              <p className="text-blue-700 text-sm">
                Preferem processar internamente antes de verbalizar. 
                Pensam para falar, não falam para pensar.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-teal-800 mb-2">🎚️ Sensibilidade</h5>
              <p className="text-teal-700 text-sm">
                Sistema nervoso mais sensível à estimulação. 
                Ambientes calmos são ideais para performance.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🔑 Ponto-chave</h4>
          <p className="text-lg">
            Introversão é sobre COMO você processa informação e gerencia energia, 
            não sobre medo ou falta de habilidade social
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'timidez-medo',
    title: 'Timidez: O Medo do Julgamento Social',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">😊</span>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white text-xs">?</div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          A timidez, por outro lado, não é sobre energia; é sobre medo. É a apreensão 
          e o desconforto sentidos em situações sociais, impulsionados pelo medo do 
          julgamento, da crítica ou da rejeição.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-bold text-yellow-800 mb-3">🌱 Fonte</h4>
            <p className="text-yellow-700 text-sm">
              A timidez não é necessariamente inata como a introversão. É um comportamento 
              que pode ser aprendido e, mais importante, desaprendido com prática e 
              aumento da autoconfiança.
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-bold text-orange-800 mb-3">🎯 Foco Principal</h4>
            <p className="text-orange-700 text-sm">
              O foco da timidez é o medo da avaliação social negativa. A pessoa tímida 
              se preocupa excessivamente com o que os outros vão pensar dela.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-800 mb-3">👥 Quem Afeta</h4>
            <p className="text-red-700 text-sm">
              A timidez pode afetar qualquer pessoa, tanto introvertidos quanto extrovertidos. 
              Existe o "extrovertido tímido" — alguém que anseia por interação mas tem medo 
              de ser rejeitado.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl">
          <h4 className="font-bold text-yellow-800 mb-4">🔍 Identificando a Timidez</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-yellow-800 mb-2">🤔 Pensamentos Típicos</h5>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• "O que vão pensar de mim?"</li>
                <li>• "E se eu disser algo errado?"</li>
                <li>• "Vou parecer bobo"</li>
                <li>• "Melhor não arriscar"</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-orange-800 mb-2">😰 Sintomas Físicos</h5>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Rubor facial</li>
                <li>• Voz trêmula</li>
                <li>• Evitação de contato visual</li>
                <li>• Tensão muscular</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-3">💡 A Boa Notícia sobre a Timidez</h4>
          <p className="text-green-700">
            Diferentemente da introversão (que é uma característica inata a ser abraçada), 
            a timidez é um padrão comportamental que pode ser modificado. Com exposição 
            gradual e técnicas de construção de confiança, a timidez pode ser significativamente reduzida.
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🎯 Ponto-chave</h4>
          <p className="text-lg">
            Timidez é sobre MEDO do julgamento social, não sobre como você processa energia
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'ansiedade-social-tas',
    title: 'Transtorno de Ansiedade Social (TAS): Quando o Medo se Torna Incapacitante',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
        <span className="text-4xl">😰</span>
        <div className="absolute inset-0 border-4 border-red-300 rounded-full animate-pulse opacity-50"></div>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          O Transtorno de Ansiedade Social (TAS), também conhecido como fobia social, 
          é uma condição de saúde mental diagnosticável. É a timidez levada a um extremo 
          incapacitante.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-800 mb-3">🧬 Fonte</h4>
            <p className="text-red-700 text-sm">
              O TAS é uma condição adquirida, muitas vezes resultante de uma combinação 
              de predisposição genética e experiências de vida negativas (como bullying 
              ou críticas severas).
            </p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
            <h4 className="font-bold text-pink-800 mb-3">🚨 Foco Principal</h4>
            <p className="text-pink-700 text-sm">
              O medo do julgamento é tão intenso e irracional que leva à evitação 
              sistemática de situações sociais. A pessoa experiencia uma resposta 
              de medo (luta ou fuga).
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-bold text-purple-800 mb-3">💔 Impacto na Vida</h4>
            <p className="text-purple-700 text-sm">
              O TAS interfere significativamente na vida diária, prejudicando 
              relacionamentos, carreira e bem-estar geral. A pessoa se isola não 
              por preferência, mas por medo avassalador.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl">
          <h4 className="font-bold text-red-800 mb-4">⚠️ Sinais de TAS</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-red-800 mb-2">🧠 Sintomas Cognitivos</h5>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Pensamentos catastróficos constantes</li>
                <li>• Preocupação excessiva por semanas antes de eventos</li>
                <li>• Autoavaliação extremamente negativa</li>
                <li>• Dificuldade de concentração</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h5 className="font-bold text-pink-800 mb-2">💥 Sintomas Físicos</h5>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Ataques de pânico</li>
                <li>• Palpitações, sudorese intensa</li>
                <li>• Tremores, náusea</li>
                <li>• Evitação total de situações sociais</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
          <h4 className="font-bold text-amber-800 mb-3">🩺 Busque Ajuda Profissional</h4>
          <p className="text-amber-700">
            Se você se identifica com os sintomas de TAS, é importante buscar ajuda de um 
            profissional de saúde mental. O TAS é uma condição tratável com terapia 
            cognitivo-comportamental e, quando necessário, medicação.
          </p>
        </div>

        <div className="text-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🏥 Ponto-chave</h4>
          <p className="text-lg">
            TAS é uma condição clínica que requer tratamento profissional, 
            não apenas técnicas de autoajuda
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'quadro-comparativo',
    title: 'Por que a Diferença Importa: Quadro Comparativo',
    illustration: (
      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
        <span className="text-4xl">📊</span>
      </div>
    ),
    content: (
      <div className="space-y-6">
        <p>
          Entender essas distinções é libertador. Se você é um introvertido não-tímido, 
          pode finalmente parar de se sentir culpado por precisar de tempo sozinho. 
          Se você é um introvertido que também lida com timidez, pode separar os dois 
          problemas e trabalhar estrategicamente em cada um.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 text-left font-bold text-gray-800 border-b">Característica</th>
                <th className="p-4 text-left font-bold text-blue-800 border-b">Introversão</th>
                <th className="p-4 text-left font-bold text-yellow-800 border-b">Timidez</th>
                <th className="p-4 text-left font-bold text-red-800 border-b">Ansiedade Social (TAS)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-4 font-semibold">Fonte Principal</td>
                <td className="p-4 text-blue-700">Traço inato de temperamento</td>
                <td className="p-4 text-yellow-700">Comportamento aprendido</td>
                <td className="p-4 text-red-700">Condição de saúde mental</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Foco Central</td>
                <td className="p-4 text-blue-700">Gestão de energia</td>
                <td className="p-4 text-yellow-700">Medo do julgamento</td>
                <td className="p-4 text-red-700">Medo extremo e incapacitante</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Eventos Sociais</td>
                <td className="p-4 text-blue-700">Pode gostar, mas precisa recarregar depois</td>
                <td className="p-4 text-yellow-700">Sente desconforto e ansiedade</td>
                <td className="p-4 text-red-700">Evita ativamente por medo intenso</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Desejo de Interação</td>
                <td className="p-4 text-blue-700">Prefere conexões profundas em pequenos grupos</td>
                <td className="p-4 text-yellow-700">Quer interagir, mas o medo impede</td>
                <td className="p-4 text-red-700">Desejo ofuscado pelo medo avassalador</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Impacto na Vida</td>
                <td className="p-4 text-blue-700">Estilo de vida que equilibra interação e solidão</td>
                <td className="p-4 text-yellow-700">Pode limitar oportunidades se não gerido</td>
                <td className="p-4 text-red-700">Incapacitante, prejudica funcionamento geral</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h5 className="font-bold text-blue-800 mb-2">🧘 Se você é Introvertido</h5>
            <p className="text-blue-700 text-sm">
              Abrace sua natureza. Não é patologia, é uma forma válida de ser. 
              Crie ambientes que honrem sua necessidade de quietude.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h5 className="font-bold text-yellow-800 mb-2">😊 Se você é Tímido</h5>
            <p className="text-yellow-700 text-sm">
              Trabalhe na construção de confiança. Pratique exposição gradual 
              a situações sociais. A timidez pode ser superada.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h5 className="font-bold text-red-800 mb-2">😰 Se você tem TAS</h5>
            <p className="text-red-700 text-sm">
              Busque ajuda profissional. TAS é tratável com terapia adequada. 
              Não há vergonha em pedir ajuda.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3">🎯 A Libertação da Clareza</h4>
          <p className="text-lg">
            Ao se localizar corretamente neste espectro, você pode parar de tentar "consertar" 
            sua introversão e começar a celebrá-la, enquanto aborda qualquer timidez com as ferramentas certas
          </p>
        </div>
      </div>
    )
  }
];

export default ModuleContent;
