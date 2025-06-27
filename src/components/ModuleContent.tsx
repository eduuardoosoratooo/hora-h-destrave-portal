import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Target, Brain, Unlock, Compass, Lightbulb, Clock, Battery, Users } from 'lucide-react';

interface ModuleContentProps {
  moduleId: string;
  onClose: () => void;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ moduleId, onClose }) => {
  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'modulo-1': return <Target className="w-8 h-8" />;
      case 'modulo-2': return <Brain className="w-8 h-8" />;
      case 'modulo-3': return <Unlock className="w-8 h-8" />;
      case 'modulo-4': return <Compass className="w-8 h-8" />;
      case 'modulo-5': return <Lightbulb className="w-8 h-8" />;
      case 'modulo-6': return <Clock className="w-8 h-8" />;
      case 'modulo-7': return <Battery className="w-8 h-8" />;
      case 'modulo-8': return <Users className="w-8 h-8" />;
      default: return <BookOpen className="w-8 h-8" />;
    }
  };

  const getModuleContent = (id: string) => {
    switch (id) {
      case 'modulo-1':
        return (
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">🎯 Fundamentos da Transformação</h2>
              <p className="text-blue-800 mb-4">
                Bem-vindo ao primeiro módulo da sua jornada de transformação! Aqui você descobrirá os pilares essenciais que irão sustentar todo o seu crescimento pessoal.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">1.1 O Mito do Ideal Extrovertido</h3>
                <p className="text-gray-700 mb-4">
                  Nossa sociedade criou um mito perigoso: que para ter sucesso, você precisa ser extrovertido, falante e estar sempre "on". Este módulo desmistifica essa crença limitante.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 font-medium">💡 Insight Principal:</p>
                  <p className="text-yellow-700">Introversão não é uma limitação - é um superpoder que precisa ser compreendido e utilizado estrategicamente.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">1.2 Seus Superpoderes Ocultos</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🧠 Pensamento Profundo</h4>
                    <p className="text-purple-700 text-sm">Sua capacidade de análise e reflexão é superior à média.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">👂 Escuta Ativa</h4>
                    <p className="text-green-700 text-sm">Você naturalmente percebe nuances que outros perdem.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🎯 Foco Intenso</h4>
                    <p className="text-blue-700 text-sm">Sua concentração é uma vantagem competitiva valiosa.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">🤝 Conexões Autênticas</h4>
                    <p className="text-orange-700 text-sm">Você cria relacionamentos mais profundos e significativos.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">1.3 Exercício Prático: Inventário de Forças</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">📝 Sua Tarefa:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Liste 5 situações onde sua introversão foi uma vantagem</li>
                    <li>Identifique 3 pessoas que valorizam sua forma de ser</li>
                    <li>Reconheça 2 conquistas que só foram possíveis devido ao seu perfil introspectivo</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Este exercício ajuda a reconhecer e valorizar suas características naturais.
                  </p>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-2':
        return (
          <div className="space-y-8">
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">🧠 Técnicas de Autoconhecimento</h2>
              <p className="text-teal-800 mb-4">
                Desenvolva uma consciência profunda sobre si mesmo através de ferramentas práticas e científicas.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">2.1 Mapeamento Emocional</h3>
                <p className="text-gray-700 mb-4">
                  O primeiro passo para o autoconhecimento é desenvolver inteligência emocional. Muitos introvertidos têm uma rica vida interior, mas podem ter dificuldade em nomear e processar suas emoções.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🎯 Técnica: Diário Emocional de 5 Minutos</h4>
                  <p className="text-blue-700 text-sm mb-2">Reserve 5 minutos diários para registrar:</p>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li>Qual emoção predominou hoje?</li>
                    <li>O que a causou?</li>
                    <li>Como ela afetou suas ações?</li>
                    <li>O que você aprendeu sobre si mesmo?</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">2.2 Identificação de Padrões</h3>
                <p className="text-gray-700 mb-4">
                  Introvertidos são naturalmente bons em reconhecer padrões. Vamos aplicar essa habilidade ao autoconhecimento.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🔍 Padrões de Energia</h4>
                    <p className="text-purple-700 text-sm">Quando você se sente mais energizado? Quando se sente drenado?</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🎭 Padrões Sociais</h4>
                    <p className="text-green-700 text-sm">Em que contextos você se expressa melhor? Onde se retrai?</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">2.3 Exercício: Análise de Valores Pessoais</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">🌟 Descobrindo Seus Valores Fundamentais:</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">1. <strong>Liste 10 momentos</strong> em que você se sentiu mais realizado</p>
                    <p className="text-gray-700">2. <strong>Identifique os valores</strong> presentes em cada momento</p>
                    <p className="text-gray-700">3. <strong>Encontre os 5 valores</strong> que mais se repetem</p>
                    <p className="text-gray-700">4. <strong>Priorize-os</strong> do mais importante para o menos importante</p>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded">
                    <p className="text-yellow-800 text-sm"><strong>Resultado:</strong> Seus 5 valores fundamentais serão sua bússola para decisões importantes.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-3':
        return (
          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">🔓 Desarmando as Armadilhas</h2>
              <p className="text-purple-800 mb-4">
                Neutralize suas travas internas e liberte seu potencial de comunicação através de técnicas comprovadas.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">3.1 Domando o Crítico Interno</h3>
                <p className="text-gray-700 mb-4">
                  O perfeccionismo pode ser uma força, mas quando se torna mal-adaptativo, vira uma armadilha que paralisa sua comunicação.
                </p>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Sinais do Perfeccionismo Tóxico:</h4>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    <li>Hesitar em falar por medo de não ser "perfeito"</li>
                    <li>Procrastinar por buscar a resposta "ideal"</li>
                    <li>Sentir que suas ideias nunca estão "prontas"</li>
                    <li>Evitar situações onde pode ser avaliado</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ Exercício: Análise Custo-Benefício</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-green-700 mb-2">Benefícios do Perfeccionismo:</p>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Trabalho de alta qualidade</li>
                        <li>Evita algumas críticas</li>
                        <li>Mantém padrões elevados</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-700 mb-2">Custos do Perfeccionismo:</p>
                      <ul className="list-disc list-inside text-green-600 space-y-1">
                        <li>Ansiedade constante</li>
                        <li>Procrastinação paralisante</li>
                        <li>Perda de oportunidades</li>
                        <li>Exaustão mental</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">3.2 Expondo o "Monstrinho do 'E Se?'"</h3>
                <p className="text-gray-700 mb-4">
                  O medo do julgamento alimenta cenários catastróficos na sua mente. Vamos desarmá-los com lógica e evidência.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">⚖️ O Tribunal do Pensamento</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-blue-700">1. A Acusação:</p>
                      <p className="text-blue-600 italic">"Se eu falar, todos vão pensar que sou incompetente"</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">2. Evidências A Favor:</p>
                      <p className="text-blue-600">Liste as "provas" (geralmente poucas e fracas)</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">3. Evidências Contra:</p>
                      <p className="text-blue-600">Liste evidências de que isso é falso ou exagerado</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">4. Veredito Equilibrado:</p>
                      <p className="text-blue-600">Conclusão baseada em evidências, não em medo</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">3.3 Desativando a Síndrome do Impostor</h3>
                <p className="text-gray-700 mb-4">
                  A sensação de ser uma fraude é combatida com fatos, não com sentimentos. Vamos construir um arquivo de evidências.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">📊 Diário de Fatos (7 dias)</h4>
                  <p className="text-yellow-700 text-sm mb-3">Todos os dias, registre 3 fatos objetivos sobre suas realizações:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-yellow-700">"Completei o relatório mensal"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-yellow-700">"Ajudei um colega com sua apresentação"</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✅</span>
                      <span className="text-yellow-700">"Sugeri uma melhoria no processo"</span>
                    </div>
                  </div>
                  <p className="text-yellow-600 text-xs mt-3 italic">Ao final de 7 dias, você terá 21 evidências concretas do seu valor.</p>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-4':
        return (
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">🧭 A Distinção que Liberta</h2>
              <p className="text-blue-800 mb-4">
                Compreenda as diferenças fundamentais entre introversão, timidez e ansiedade social para aplicar as estratégias certas.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">4.1 Introversão: Uma Questão de Energia</h3>
                <p className="text-gray-700 mb-4">
                  A introversão é uma característica de personalidade inata, relacionada a como seu cérebro processa estímulos e gerencia energia.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🔋 Características da Introversão:</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li><strong>Fonte de Energia:</strong> Recarrega sozinho, em ambientes calmos</li>
                    <li><strong>Foco Principal:</strong> Gestão inteligente de energia social</li>
                    <li><strong>Preferências:</strong> Conversas profundas, pequenos grupos</li>
                    <li><strong>Não é:</strong> Medo, ansiedade ou falta de habilidade social</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">4.2 Timidez: O Medo do Julgamento</h3>
                <p className="text-gray-700 mb-4">
                  A timidez é comportamental e baseada no medo da avaliação social negativa. Pode afetar introvertidos e extrovertidos.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">😰 Características da Timidez:</h4>
                  <ul className="list-disc list-inside text-orange-700 text-sm space-y-1">
                    <li><strong>Fonte:</strong> Medo do julgamento, crítica ou rejeição</li>
                    <li><strong>Foco Principal:</strong> Preocupação com a opinião dos outros</li>
                    <li><strong>Boa Notícia:</strong> Pode ser superada com prática e confiança</li>
                    <li><strong>Estratégias:</strong> Exposição gradual, reestruturação cognitiva</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">4.3 Ansiedade Social: Quando o Medo Paralisa</h3>
                <p className="text-gray-700 mb-4">
                  O Transtorno de Ansiedade Social é uma condição de saúde mental que pode requerer ajuda profissional.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">🚨 Sinais de Ansiedade Social:</h4>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    <li><strong>Sintomas Físicos:</strong> Palpitações, sudorese, tremores</li>
                    <li><strong>Evitação:</strong> Falta a eventos, recusa oportunidades</li>
                    <li><strong>Impacto:</strong> Prejudica significativamente a vida diária</li>
                    <li><strong>Tratamento:</strong> Terapia cognitivo-comportamental, medicação</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">4.4 Quadro Comparativo</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">Característica</th>
                        <th className="border border-gray-300 p-3 text-left">Introversão</th>
                        <th className="border border-gray-300 p-3 text-left">Timidez</th>
                        <th className="border border-gray-300 p-3 text-left">Ansiedade Social</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Fonte</td>
                        <td className="border border-gray-300 p-3">Traço inato de temperamento</td>
                        <td className="border border-gray-300 p-3">Comportamento aprendido</td>
                        <td className="border border-gray-300 p-3">Condição de saúde mental</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Foco</td>
                        <td className="border border-gray-300 p-3">Gestão de energia</td>
                        <td className="border border-gray-300 p-3">Medo do julgamento</td>
                        <td className="border border-gray-300 p-3">Medo incapacitante</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Solução</td>
                        <td className="border border-gray-300 p-3">Aceitar e gerenciar</td>
                        <td className="border border-gray-300 p-3">Desenvolver confiança</td>
                        <td className="border border-gray-300 p-3">Ajuda profissional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-5':
        return (
          <div className="space-y-8">
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">🎯 Pilar I - Clareza Interna Absoluta</h2>
              <p className="text-teal-800 mb-4">
                Organize seu tesouro interior e transforme pensamentos complexos em comunicação clara e eficaz.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">5.1 Organizando o Tesouro Interior</h3>
                <p className="text-gray-700 mb-4">
                  Sua mente é como uma Ferrari - processa informações com velocidade e profundidade. O desafio é organizar esse rico processamento para uma saída clara e linear.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🧠 Benefícios da Clareza Mental:</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li><strong>Combate o "branco":</strong> Nunca mais esqueça o que ia dizer</li>
                    <li><strong>Aumenta a confiança:</strong> Segurança no seu ponto de vista</li>
                    <li><strong>Evita prolixidade:</strong> Comunicação direta e poderosa</li>
                    <li><strong>Maximiza impacto:</strong> Suas palavras ganham peso e relevância</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">5.2 A Regra dos 3 Pontos</h3>
                <p className="text-gray-700 mb-4">
                  Esta ferramenta é um filtro poderoso para sua mente. Antes de qualquer intervenção importante, identifique seus 3 pontos principais.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 Como Aplicar:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">1</span>
                      <div>
                        <p className="font-medium text-green-700">Diagnóstico</p>
                        <p className="text-green-600">Qual é o problema principal?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">2</span>
                      <div>
                        <p className="font-medium text-green-700">Solução</p>
                        <p className="text-green-600">Qual é sua proposta de ação?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                      <div>
                        <p className="font-medium text-green-700">Benefício</p>
                        <p className="text-green-600">Qual é o resultado esperado?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">5.3 O "Post-it Mental" Salva-Vidas</h3>
                <p className="text-gray-700 mb-4">
                  Técnica para capturar insights durante conversas e mantê-los acessíveis quando for sua vez de falar.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">📝 Passo a Passo:</h4>
                  <ol className="list-decimal list-inside text-yellow-700 text-sm space-y-1">
                    <li>Quando tiver um insight, pause mentalmente</li>
                    <li>Crie uma imagem visual da ideia (post-it amarelo fluorescente)</li>
                    <li>Associe uma palavra-chave à imagem</li>
                    <li>Quando houver uma brecha, acesse o "post-it" mental</li>
                    <li>Expresse a ideia de forma clara e concisa</li>
                  </ol>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">5.4 Escrita Expressiva para Clareza</h3>
                <p className="text-gray-700 mb-4">
                  Para situações de alta pressão, use esta técnica baseada em psicologia para alcançar clareza mental profunda.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">✍️ Exercício: Despejo Mental de 15 Minutos</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-purple-700"><strong>1. Reserve 15 minutos</strong> antes de uma reunião importante</p>
                    <p className="text-purple-700"><strong>2. Configure um timer</strong> para manter o foco</p>
                    <p className="text-purple-700"><strong>3. Escreva sem parar</strong> sobre o evento que se aproxima</p>
                    <p className="text-purple-700"><strong>4. Não se censure</strong> - escreva tudo que vier à mente</p>
                    <p className="text-purple-700"><strong>5. Reveja e extraia</strong> os pontos principais</p>
                  </div>
                  <div className="mt-3 p-2 bg-purple-100 rounded">
                    <p className="text-purple-600 text-xs"><strong>Resultado:</strong> Clareza mental, redução da ansiedade e mensagem organizada.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-6':
        return (
          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">⏰ Pilar II - Estratégia do Momento Certo</h2>
              <p className="text-purple-800 mb-4">
                Domine a arte do timing perfeito e maximize o impacto das suas intervenções como um jogador de xadrez da comunicação.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">6.1 O Jogador de Xadrez da Comunicação</h3>
                <p className="text-gray-700 mb-4">
                  Transforme sua observação natural em vantagem estratégica. Não seja o mais rápido, seja o mais preciso e eficaz.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">♟️ Estratégias do Jogador de Xadrez:</h4>
                  <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                    <li><strong>Observe o tabuleiro:</strong> Identifique os jogadores-chave e dinâmicas</li>
                    <li><strong>Encontre as janelas:</strong> Pausas de 2-3 segundos são suas oportunidades</li>
                    <li><strong>Planeje o movimento:</strong> Saiba exatamente o que vai dizer</li>
                    <li><strong>Execute com precisão:</strong> Intervenção focada e impactante</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">6.2 Dominando Reuniões (Sem Dominar a Conversa)</h3>
                <p className="text-gray-700 mb-4">
                  Plano de ação dividido em três fases para navegar reuniões com confiança e eficácia.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">📋 Antes da Reunião</h4>
                    <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                      <li>Estude a pauta antecipadamente</li>
                      <li>Prepare seus 3 pontos principais</li>
                      <li>Identifique possíveis aliados</li>
                      <li>Defina seus objetivos específicos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎯 Durante a Reunião</h4>
                    <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                      <li>Posicione-se estrategicamente</li>
                      <li>Use "entradas suaves" conectando ideias</li>
                      <li>Faça perguntas para criar espaço</li>
                      <li>Mantenha engajamento não-verbal</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">📧 Após a Reunião</h4>
                    <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                      <li>Envie e-mail de seguimento</li>
                      <li>Reforce pontos importantes</li>
                      <li>Adicione ideias não expressas</li>
                      <li>Mantenha o momentum</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">6.3 Brainstorming Inclusivo</h3>
                <p className="text-gray-700 mb-4">
                  Métodos de brainstorming que favorecem pensadores profundos e introvertidos, baseados em práticas de empresas inovadoras.
                </p>
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">🤫 Brainstorming Silencioso</h4>
                    <p className="text-orange-700 text-sm mb-2">Cada participante escreve ideias em post-its por 5-10 minutos antes da discussão verbal.</p>
                    <p className="text-orange-600 text-xs italic">Garante que todas as ideias, incluindo dos mais quietos, estejam na mesa.</p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">🔄 Método Round-Robin</h4>
                    <p className="text-teal-700 text-sm mb-2">Participantes falam um de cada vez, em círculo, com opção de "passar a vez".</p>
                    <p className="text-teal-600 text-xs italic">Cria estrutura ordenada que impede monopolização da conversa.</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">6.4 A Arte da Conversa Profunda</h3>
                <p className="text-gray-700 mb-4">
                  Transforme small talk em conversas significativas usando sua curiosidade natural e escuta profunda.
                </p>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">🗣️ Perguntas que Aprofundam:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <div>
                        <p className="text-indigo-700">"Seu fim de semana foi bom?"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <div>
                        <p className="text-indigo-700">"O que foi mais interessante no seu fim de semana?"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <div>
                        <p className="text-indigo-700">"Você gosta do que faz?"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✅</span>
                      <div>
                        <p className="text-indigo-700">"O que atraiu você para essa área?"</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-indigo-600 text-xs mt-3 italic">Foque na qualidade, não na quantidade de conversas.</p>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-7':
        return (
          <div className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-green-900 mb-4">🔋 Pilar III - Gestão Inteligente da Energia</h2>
              <p className="text-green-800 mb-4">
                A base que sustenta tudo: aprenda a gerir sua energia social de forma estratégica para estar sempre no seu pico de performance quando realmente importa.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">7.1 Decodificando Sua Bateria Social</h3>
                <p className="text-gray-700 mb-4">
                  Para um introvertido, a energia social não é um recurso infinito. É uma bateria que se esgota com a interação e se recarrega com a solidão. O primeiro passo é tornar-se um perito na sua própria energia.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">⚡ Drenos de Energia</h4>
                    <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                      <li>Ambientes com muita gente</li>
                      <li>Barulho excessivo</li>
                      <li>Conversas superficiais prolongadas</li>
                      <li>Pressão para "estar ligado"</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Sinais de Bateria Fraca</h4>
                    <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                      <li>"Névoa" cerebral</li>
                      <li>Dificuldade de concentração</li>
                      <li>Irritabilidade</li>
                      <li>Desejo de ficar sozinho</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🔋 Carregadores</h4>
                    <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                      <li>Tempo em solidão</li>
                      <li>Leitura ou hobbies</li>
                      <li>Música ou natureza</li>
                      <li>Silêncio contemplativo</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">7.2 O Plano de Energia para a "Hora H"</h3>
                <p className="text-gray-700 mb-4">
                  Ir para um evento socialmente exigente sem um plano de energia é como fazer uma viagem sem saber onde ficam as estações de serviço.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left">Fase do Evento</th>
                        <th className="border border-gray-300 p-3 text-left">Estratégia</th>
                        <th className="border border-gray-300 p-3 text-left">Ação Específica</th>
                        <th className="border border-gray-300 p-3 text-left">Objetivo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Pré-Evento (24h antes)</td>
                        <td className="border border-gray-300 p-3">Carregamento Proativo</td>
                        <td className="border border-gray-300 p-3">30-60 min de tempo silencioso, revisar objetivos, dormir bem</td>
                        <td className="border border-gray-300 p-3">Chegar com bateria a 100%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Início (Primeiros 30 min)</td>
                        <td className="border border-gray-300 p-3">Ancoragem e Aclimatação</td>
                        <td className="border border-gray-300 p-3">Chegar cedo, encontrar aliado, observar dinâmica</td>
                        <td className="border border-gray-300 p-3">Aclimatação gradual</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Durante (A cada 60 min)</td>
                        <td className="border border-gray-300 p-3">Gestão Ativa</td>
                        <td className="border border-gray-300 p-3">Pausas de 5 min em locais calmos</td>
                        <td className="border border-gray-300 p-3">Evitar esgotamento total</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Fim do Evento</td>
                        <td className="border border-gray-300 p-3">Saída Elegante</td>
                        <td className="border border-gray-300 p-3">Reconhecer sinais, ter frase de saída pronta</td>
                        <td className="border border-gray-300 p-3">Sair antes do esgotamento</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Pós-Evento (1-3h)</td>
                        <td className="border border-gray-300 p-3">Recuperação</td>
                        <td className="border border-gray-300 p-3">Detox social, banho, música calma</td>
                        <td className="border border-gray-300 p-3">Iniciar recarga eficaz</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">7.3 Estilo de Vida Energeticamente Sustentável</h3>
                <p className="text-gray-700 mb-4">
                  O objetivo é construir uma vida em harmonia com seus ritmos energéticos naturais.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">💼 No Trabalho</h4>
                    <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                      <li>Procure funções que permitam trabalho focado e autônomo</li>
                      <li>Defenda seu tempo para trabalho profundo</li>
                      <li>Use fones de ouvido como sinal de "não perturbe"</li>
                      <li>Utilize trabalho remoto estrategicamente</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🤝 Na Vida Social</h4>
                    <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                      <li>Seja seletivo com compromissos - qualidade &gt; quantidade</li>
                      <li>Escolha eventos que tragam alegria e conexão</li>
                      <li>Organize encontros que funcionem para você</li>
                      <li>Prefira jantares pequenos a festas barulhentas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">📅 Na Agenda Semanal</h4>
                    <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                      <li>Planeje intencionalmente "espaços em branco"</li>
                      <li>Não preencha cada momento livre</li>
                      <li>Trate tempo de recarga como compromisso inadiável</li>
                      <li>Seja o arquiteto do seu próprio bem-estar</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );

      case 'modulo-8':
        return (
          <div className="space-y-8">
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">🎪 Comunicação Autêntica em Ação</h2>
              <p className="text-orange-800 mb-4">
                Aplique os três pilares do método nos cenários mais desafiadores: conflitos, networking e liderança, usando processos que se alinham com seus pontos fortes naturais.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">8.1 Navegando por Conflitos (Sem Guerra)</h3>
                <p className="text-gray-700 mb-4">
                  Evitar conflitos permite que o ressentimento cresça. A solução é encontrar uma forma de abordar o desacordo que minimize o drama e maximize a clareza.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-4">🗣️ Técnica: A "Declaração-Eu" (I-Statement)</h4>
                  <p className="text-blue-700 mb-4">Uma ferramenta de comunicação não-violenta com quatro partes:</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                      <div>
                        <p className="font-medium text-blue-800">Eu sinto... [EMOÇÃO]</p>
                        <p className="text-blue-700 text-sm">Use uma palavra de emoção específica (frustrado, preocupado, triste)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                      <div>
                        <p className="font-medium text-blue-800">quando... [COMPORTAMENTO]</p>
                        <p className="text-blue-700 text-sm">Descreva o comportamento específico de forma factual e neutra</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                      <div>
                        <p className="font-medium text-blue-800">porque... [IMPACTO]</p>
                        <p className="text-blue-700 text-sm">Explique o impacto concreto que o comportamento tem em você</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                      <div>
                        <p className="font-medium text-blue-800">Eu gostaria que... [PEDIDO]</p>
                        <p className="text-blue-700 text-sm">Faça um pedido específico e acionável</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-blue-800 text-sm font-medium">Exemplo Completo:</p>
                    <p className="text-blue-700 text-sm italic">"Eu sinto-me frustrado quando sou interrompido a meio de uma frase na reunião, porque sinto que a minha contribuição não é valorizada e perco a minha linha de raciocínio. Eu gostaria que me deixasse terminar o meu ponto antes de partilhar a sua opinião."</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">8.2 Networking que Conecta (Sem Falsidade)</h3>
                <p className="text-gray-700 mb-4">
                  O verdadeiro objetivo do networking é construir relacionamentos profissionais autênticos. A estratégia: qualidade em vez de quantidade.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Estratégias Eficazes</h4>
                    <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                      <li><strong>Prepare-se:</strong> Pesquise 1-2 pessoas específicas</li>
                      <li><strong>Seja o anfitrião:</strong> Procure quem parece desconfortável</li>
                      <li><strong>Use superpoderes:</strong> Ative sua "superaudição"</li>
                      <li><strong>Saída elegante:</strong> Saiba como terminar conversas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Evite</h4>
                    <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                      <li>Tentar "trabalhar a sala toda"</li>
                      <li>Conversas superficiais forçadas</li>
                      <li>Trocar cartões sem conexão real</li>
                      <li>Focar em "vender-se" vs. conhecer outros</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Pergunta Poderosa para Iniciar</h4>
                  <p className="text-yellow-700 text-sm">"O que o traz a este evento?" - Uma forma natural e não invasiva de começar uma conversa significativa.</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">8.3 A Liderança Silenciosa: Influência Sem Holofotes</h3>
                <p className="text-gray-700 mb-4">
                  Existe um estilo de liderança igualmente poderoso: a liderança silenciosa. Líderes como Bill Gates e Tim Cook lideram através da profundidade do pensamento e capacidade de capacitar outros.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">🎯 Forças do Líder Introvertido</h4>
                    <ul className="list-disc list-inside text-purple-700 text-sm space-y-1">
                      <li><strong>Escuta Ativa:</strong> Mais receptivo a ideias da equipe</li>
                      <li><strong>Decisões Ponderadas:</strong> Analisa dados e consequências</li>
                      <li><strong>Capacitação:</strong> Cria espaço para outros brilharem</li>
                      <li><strong>Preparação:</strong> Lidera através da competência</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">🌟 Características da Liderança Silenciosa</h4>
                    <ul className="list-disc list-inside text-indigo-700 text-sm space-y-1">
                      <li>Influência através da substância, não do volume</li>
                      <li>Fomenta inovação e segurança psicológica</li>
                      <li>Calma sob pressão em tempos de crise</li>
                      <li>Aumenta motivação e proatividade da equipe</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💪 Conselho para Líderes Introvertidos</h4>
                  <p className="text-gray-700 text-sm">Não tente imitar um estilo extrovertido. Abrace suas forças naturais: lidere a partir da sua calma, preparação e capacidade de ouvir. Sua influência virá da substância, não do volume.</p>
                </div>
              </section>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Conteúdo em Desenvolvimento</h2>
            <p className="text-gray-500">Este módulo será disponibilizado em breve.</p>
          </div>
        );
    }
  };

  const getModuleTitle = (id: string) => {
    switch (id) {
      case 'modulo-1': return 'Fundamentos da Transformação';
      case 'modulo-2': return 'Técnicas de Autoconhecimento';
      case 'modulo-3': return 'Desarmando as Armadilhas';
      case 'modulo-4': return 'A Distinção que Liberta';
      case 'modulo-5': return 'Pilar I - Clareza Interna Absoluta';
      case 'modulo-6': return 'Pilar II - Estratégia do Momento Certo';
      case 'modulo-7': return 'Pilar III - Gestão Inteligente da Energia';
      case 'modulo-8': return 'Comunicação Autêntica em Ação';
      default: return 'Módulo';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Dashboard
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              {getModuleIcon(moduleId)}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{getModuleTitle(moduleId)}</h1>
              <p className="text-sm text-gray-600">Portal Destrave na Hora H</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {getModuleContent(moduleId)}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Portal Destrave na Hora H. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
