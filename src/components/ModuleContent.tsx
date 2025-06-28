
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

interface ModuleContentProps {
  moduleId: string;
  onClose: () => void;
}

const moduleContents: Record<string, { title: string; pages: Array<{ title: string; content: string }> }> = {
  "modulo-1": {
    title: "Fundamentos da Transformação",
    pages: [
      {
        title: "Introdução aos Fundamentos",
        content: `
          <h2>Bem-vindo ao Módulo 1: Fundamentos da Transformação</h2>
          
          <p>Este é o primeiro passo da sua jornada de transformação pessoal. Aqui você descobrirá os pilares essenciais que irão guiar todo o seu processo de crescimento.</p>
          
          <h3>O que você aprenderá:</h3>
          <ul>
            <li>Os 3 pilares da transformação autêntica</li>
            <li>Como identificar suas crenças limitantes</li>
            <li>Técnicas de autoconhecimento profundo</li>
            <li>Estratégias para manter a motivação</li>
          </ul>
          
          <p>Prepare-se para uma jornada transformadora!</p>
        `
      },
      {
        title: "Os 3 Pilares da Transformação",
        content: `
          <h2>Os 3 Pilares Fundamentais</h2>
          
          <h3>1. Autoconhecimento</h3>
          <p>O primeiro pilar é conhecer verdadeiramente quem você é, seus valores, crenças e padrões de comportamento.</p>
          
          <h3>2. Aceitação</h3>
          <p>Aceitar onde você está agora, sem julgamentos, é essencial para começar qualquer mudança real.</p>
          
          <h3>3. Ação Consistente</h3>
          <p>Conhecimento sem ação não gera transformação. É preciso aplicar o que se aprende de forma consistente.</p>
          
          <div style="background: #f0f0f0; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <strong>Exercício Prático:</strong>
            <p>Reflita sobre cada pilar e anote como cada um se manifesta em sua vida atual.</p>
          </div>
        `
      },
      {
        title: "Identificando Crenças Limitantes",
        content: `
          <h2>Crenças que Te Limitam</h2>
          
          <p>Nossas crenças moldam nossa realidade. Crenças limitantes são aquelas que nos impedem de alcançar nosso potencial máximo.</p>
          
          <h3>Exemplos de Crenças Limitantes Comuns:</h3>
          <ul>
            <li>"Não sou bom o suficiente"</li>
            <li>"Não mereço ser feliz"</li>
            <li>"É muito tarde para mudar"</li>
            <li>"Pessoas como eu não conseguem isso"</li>
          </ul>
          
          <h3>Como Identificar Suas Crenças:</h3>
          <ol>
            <li>Observe seus pensamentos automáticos</li>
            <li>Questione suas limitações autoimpostas</li>
            <li>Analise seus padrões de comportamento</li>
            <li>Pergunte-se: "O que eu acredito sobre mim mesmo?"</li>
          </ol>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <strong>Dica Importante:</strong>
            <p>Reconhecer uma crença limitante é o primeiro passo para transformá-la.</p>
          </div>
        `
      }
    ]
  },
  "modulo-2": {
    title: "Técnicas de Autoconhecimento",
    pages: [
      {
        title: "Introdução ao Autoconhecimento",
        content: `
          <h2>Módulo 2: Técnicas de Autoconhecimento</h2>
          
          <p>O autoconhecimento é a base de toda transformação genuína. Neste módulo, você aprenderá ferramentas práticas para desenvolver uma consciência profunda sobre si mesmo.</p>
          
          <h3>Por que o Autoconhecimento é Fundamental?</h3>
          <ul>
            <li>Permite tomar decisões mais alinhadas com seus valores</li>
            <li>Ajuda a identificar padrões sabotadores</li>
            <li>Desenvolve inteligência emocional</li>
            <li>Melhora relacionamentos interpessoais</li>
          </ul>
          
          <p>Vamos começar esta jornada interior!</p>
        `
      },
      {
        title: "Técnica do Espelho Interior",
        content: `
          <h2>A Técnica do Espelho Interior</h2>
          
          <p>Esta é uma das técnicas mais poderosas para o autoconhecimento profundo.</p>
          
          <h3>Como Praticar:</h3>
          <ol>
            <li>Reserve 10 minutos diários em um local silencioso</li>
            <li>Sente-se confortavelmente e feche os olhos</li>
            <li>Faça algumas respirações profundas</li>
            <li>Visualize-se em frente a um espelho</li>
            <li>Observe sem julgamentos o que vê</li>
            <li>Faça perguntas a si mesmo: "Quem sou eu?" "O que sinto?" "Do que preciso?"</li>
          </ol>
          
          <h3>Perguntas para Reflexão:</h3>
          <ul>
            <li>Que emoções surgem quando me observo?</li>
            <li>Que padrões noto em meus pensamentos?</li>
            <li>O que meu eu interior está tentando me dizer?</li>
          </ul>
          
          <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <strong>Importante:</strong>
            <p>Pratique com compaixão. O objetivo não é se julgar, mas se conhecer.</p>
          </div>
        `
      },
      {
        title: "Mapeamento Emocional",
        content: `
          <h2>Mapeamento das Suas Emoções</h2>
          
          <p>Compreender e mapear suas emoções é essencial para o autoconhecimento.</p>
          
          <h3>Exercício: Diário Emocional</h3>
          <p>Durante uma semana, anote diariamente:</p>
          <ul>
            <li>Principais emoções sentidas</li>
            <li>Situações que as desencadearam</li>
            <li>Intensidade (escala de 1-10)</li>
            <li>Como você reagiu</li>
            <li>O que aprendeu sobre si</li>
          </ul>
          
          <h3>Categorias Emocionais Principais:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #ffe6e6; padding: 15px; border-radius: 8px;">
              <h4>Emoções Básicas</h4>
              <p>Alegria, Tristeza, Medo, Raiva, Surpresa, Nojo</p>
            </div>
            <div style="background: #e6f3ff; padding: 15px; border-radius: 8px;">
              <h4>Emoções Complexas</h4>
              <p>Gratidão, Culpa, Vergonha, Orgulho, Inveja, Compaixão</p>
            </div>
          </div>
          
          <p>Ao final da semana, analise os padrões identificados.</p>
        `
      }
    ]
  },
  "modulo-3": {
    title: "Desarmando as Armadilhas",
    pages: [
      {
        title: "Identificando as Armadilhas Mentais",
        content: `
          <h2>Módulo 3: Desarmando as Armadilhas</h2>
          
          <p>Nossas mentes criam armadilhas que nos mantêm presos em padrões limitantes. Este módulo ensina como identificar e neutralizar essas travas internas.</p>
          
          <h3>As 5 Principais Armadilhas Mentais:</h3>
          <ol>
            <li><strong>Catastrofização:</strong> Imaginar sempre o pior cenário</li>
            <li><strong>Pensamento Tudo-ou-Nada:</strong> Ver apenas extremos</li>
            <li><strong>Leitura Mental:</strong> Assumir o que outros pensam</li>
            <li><strong>Personalização:</strong> Culpar-se por tudo</li>
            <li><strong>Generalização:</strong> Uma experiência define todas</li>
          </ol>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px; border: 1px solid #ffeaa7;">
            <strong>Alerta:</strong>
            <p>Reconhecer estas armadilhas é o primeiro passo para se libertar delas.</p>
          </div>
        `
      },
      {
        title: "Técnicas de Neutralização",
        content: `
          <h2>Como Neutralizar as Armadilhas</h2>
          
          <h3>Técnica 1: O Questionamento Socrático</h3>
          <p>Quando identificar um pensamento limitante, faça estas perguntas:</p>
          <ul>
            <li>Esta é realmente a verdade?</li>
            <li>Que evidências tenho para este pensamento?</li>
            <li>Existe uma perspectiva alternativa?</li>
            <li>Como eu me sentiria sem este pensamento?</li>
            <li>Que conselho daria a um amigo nesta situação?</li>
          </ul>
          
          <h3>Técnica 2: A Reformulação Positiva</h3>
          <p>Transforme pensamentos limitantes em pensamentos capacitadores:</p>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>❌ Limitante:</strong> "Sempre estrago tudo"</p>
            <p><strong>✅ Capacitador:</strong> "Estou aprendendo e melhorando a cada experiência"</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>❌ Limitante:</strong> "Nunca vou conseguir"</p>
            <p><strong>✅ Capacitador:</strong> "Com persistência e estratégia, posso alcançar meus objetivos"</p>
          </div>
        `
      },
      {
        title: "Liberando Seu Potencial de Comunicação",
        content: `
          <h2>Comunicação Autêntica e Poderosa</h2>
          
          <p>Quando neutralizamos nossas armadilhas mentais, liberamos nosso verdadeiro potencial de comunicação.</p>
          
          <h3>Os 4 Pilares da Comunicação Autêntica:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>1. Clareza</h4>
              <p>Expresse suas ideias de forma simples e direta</p>
            </div>
            <div style="background: #e8f0ff; padding: 20px; border-radius: 8px;">
              <h4>2. Congruência</h4>
              <p>Alinhe suas palavras com seus valores e emoções</p>
            </div>
            <div style="background: #fff0e8; padding: 20px; border-radius: 8px;">
              <h4>3. Coragem</h4>
              <p>Tenha coragem de ser vulnerável e genuíno</p>
            </div>
            <div style="background: #f0e8ff; padding: 20px; border-radius: 8px;">
              <h4>4. Conexão</h4>
              <p>Busque criar pontes, não muros</p>
            </div>
          </div>
          
          <h3>Exercício Prático:</h3>
          <p>Esta semana, pratique estes pilares em suas conversas diárias. Note as diferenças na qualidade das suas interações.</p>
        `
      }
    ]
  },
  "modulo-4": {
    title: "A Distinção que Liberta",
    pages: [
      {
        title: "Compreendendo as Diferenças",
        content: `
          <h2>Módulo 4: A Distinção que Liberta</h2>
          
          <p>Muitas pessoas confundem introversão, timidez e ansiedade social. Esta confusão gera sofrimento desnecessário e impede o desenvolvimento autêntico.</p>
          
          <h3>As Três Dimensões Distintas:</h3>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🧠 Introversão (Personalidade)</h4>
            <p><strong>O que é:</strong> Preferência por estímulos internos e ambientes menos intensos</p>
            <p><strong>Características:</strong> Energia vem da solidão, prefere conversas profundas, processa internamente</p>
            <p><strong>Não é:</strong> Timidez, ansiedade ou problema a ser resolvido</p>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>😳 Timidez (Comportamento)</h4>
            <p><strong>O que é:</strong> Hesitação em situações sociais por falta de confiança</p>
            <p><strong>Características:</strong> Pode ser superada com prática, varia conforme situação</p>
            <p><strong>Tratamento:</strong> Desenvolvimento de habilidades sociais e autoconfiança</p>
          </div>
          
          <div style="background: #ffe6e6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>😰 Ansiedade Social (Condição Clínica)</h4>
            <p><strong>O que é:</strong> Medo intenso e persistente de julgamento social</p>
            <p><strong>Características:</strong> Sintomas físicos, evitação extrema, sofrimento significativo</p>
            <p><strong>Tratamento:</strong> Pode requerer ajuda profissional</p>
          </div>
        `
      },
      {
        title: "Desmistificando a Introversão",
        content: `
          <h2>A Beleza da Introversão</h2>
          
          <p>A introversão é uma característica neurológica, não um defeito. Aproximadamente 30-50% da população é introvertida.</p>
          
          <h3>Mitos vs. Realidades:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #ffebee; padding: 20px; border-radius: 8px;">
              <h4>❌ MITOS</h4>
              <ul>
                <li>Introvertidos são antissociais</li>
                <li>Não gostam de pessoas</li>
                <li>São menos capazes de liderar</li>
                <li>Precisam "se abrir mais"</li>
                <li>São menos felizes</li>
              </ul>
            </div>
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>✅ REALIDADES</h4>
              <ul>
                <li>Valorizam relacionamentos profundos</li>
                <li>São excelentes ouvintes</li>
                <li>Lideram de forma reflexiva</li>
                <li>Têm comunicação autêntica</li>
                <li>Encontram felicidade na profundidade</li>
              </ul>
            </div>
          </div>
          
          <h3>Superpoderes do Introvertido:</h3>
          <ul>
            <li><strong>Reflexão Profunda:</strong> Pensam antes de falar</li>
            <li><strong>Escuta Ativa:</strong> Genuinamente interessados nos outros</li>
            <li><strong>Criatividade:</strong> Tempo sozinho estimula inovação</li>
            <li><strong>Foco Intenso:</strong> Capacidade de concentração prolongada</li>
            <li><strong>Autenticidade:</strong> Comunicação genuína e significativa</li>
          </ul>
        `
      },
      {
        title: "Estratégias para Cada Situação",
        content: `
          <h2>Abordagens Específicas para Cada Condição</h2>
          
          <h3>Se Você é Introvertido (e quer abraçar isso):</h3>
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <ul>
              <li>Planeje momentos de recarga entre interações sociais</li>
              <li>Valorize a qualidade sobre quantidade nos relacionamentos</li>
              <li>Use sua capacidade de escuta como superpoder</li>
              <li>Prepare-se mentalmente para eventos sociais importantes</li>
              <li>Comunique suas necessidades aos outros</li>
            </ul>
          </div>
          
          <h3>Se Você Enfrenta Timidez:</h3>
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <ul>
              <li>Pratique pequenas interações sociais diariamente</li>
              <li>Desenvolva suas habilidades sociais gradualmente</li>
              <li>Trabalhe na construção da autoconfiança</li>
              <li>Use técnicas de respiração para se acalmar</li>
              <li>Celebre pequenos progressos</li>
            </ul>
          </div>
          
          <h3>Se Você Tem Ansiedade Social:</h3>
          <div style="background: #ffe6e6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <ul>
              <li>Considere buscar ajuda profissional</li>
              <li>Pratique técnicas de relaxamento</li>
              <li>Questione pensamentos catastróficos</li>
              <li>Exponha-se gradualmente aos medos</li>
              <li>Desenvolva uma rede de apoio</li>
            </ul>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>💡 Insight Transformador:</h4>
            <p>Quando você entende exatamente o que está enfrentando, pode escolher as estratégias certas. Não há problema em ser introvertido - o problema está em tentar ser alguém que você não é.</p>
          </div>
        `
      }
    ]
  },
  "modulo-5": {
    title: "Pilar I - Clareza Interna Absoluta",
    pages: [
      {
        title: "O Poder da Clareza Interna",
        content: `
          <h2>Módulo 5: Pilar I - Clareza Interna Absoluta</h2>
          
          <p>A clareza interna é o primeiro e mais fundamental pilar da comunicação autêntica. Quando você tem clareza sobre seus pensamentos, sentimentos e valores, sua comunicação se torna naturalmente poderosa.</p>
          
          <h3>O que é Clareza Interna Absoluta?</h3>
          <p>É a capacidade de:</p>
          <ul>
            <li>Compreender completamente seus próprios pensamentos</li>
            <li>Identificar e nomear suas emoções com precisão</li>
            <li>Conhecer seus valores e princípios fundamentais</li>
            <li>Organizar ideias complexas de forma simples</li>
            <li>Comunicar-se de forma autêntica e impactante</li>
          </ul>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🎯 Por que a Clareza é Fundamental?</h4>
            <p>Você não pode comunicar claramente aquilo que não está claro em sua própria mente. A confusão interna sempre resulta em comunicação confusa.</p>
          </div>
          
          <h3>O Modelo dos 4 Níveis de Clareza:</h3>
          <ol>
            <li><strong>Clareza Cognitiva</strong> - O que você pensa</li>
            <li><strong>Clareza Emocional</strong> - O que você sente</li>
            <li><strong>Clareza de Valores</strong> - No que você acredita</li>
            <li><strong>Clareza de Propósito</strong> - O que você quer alcançar</li>
          </ol>
        `
      },
      {
        title: "Organizando Seu Tesouro Interior",
        content: `
          <h2>Técnicas para Organizar Seus Pensamentos</h2>
          
          <p>Sua mente é um tesouro repleto de ideias, experiências e insights. O problema é quando esse tesouro está bagunçado. Vamos organizá-lo!</p>
          
          <h3>Técnica 1: O Mapa Mental Emocional</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <ol>
              <li>No centro de uma folha, escreva a situação/tema</li>
              <li>Ao redor, adicione todas as emoções relacionadas</li>
              <li>Para cada emoção, anote os pensamentos associados</li>
              <li>Identifique padrões e conexões</li>
              <li>Sintetize em uma mensagem clara</li>
            </ol>
          </div>
          
          <h3>Técnica 2: A Arqueologia dos Valores</h3>
          <p>Escave profundamente para descobrir seus valores autênticos:</p>
          <ul>
            <li><strong>Pergunte "Por quê?" 5 vezes</strong> para qualquer decisão importante</li>
            <li><strong>Analise seus momentos de orgulho</strong> - que valores estavam presentes?</li>
            <li><strong>Identifique suas irritações</strong> - que valores estão sendo violados?</li>
            <li><strong>Observe suas escolhas espontâneas</strong> - que valores as guiam?</li>
          </ul>
          
          <h3>Técnica 3: O Processo de Destilação</h3>
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Como transformar pensamentos complexos em comunicação simples:</strong></p>
            <ol>
              <li><strong>Despeje tudo:</strong> Escreva todos os pensamentos sem filtro</li>
              <li><strong>Identifique o núcleo:</strong> Qual é a mensagem essencial?</li>
              <li><strong>Simplifique:</strong> Use palavras que uma criança entenderia</li>
              <li><strong>Teste:</strong> A mensagem reflete sua verdade interior?</li>
              <li><strong>Refine:</strong> Ajuste até ficar cristalino</li>
            </ol>
          </div>
        `
      },
      {
        title: "Da Confusão à Comunicação Clara",
        content: `
          <h2>Transformando Clareza em Comunicação Poderosa</h2>
          
          <p>Agora que você organizou seu mundo interior, é hora de transformar essa clareza em comunicação impactante.</p>
          
          <h3>A Fórmula da Comunicação Clara:</h3>
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4caf50;">
            <h4>CONTEXTO + CONTEÚDO + CONEXÃO = CLAREZA</h4>
            <ul>
              <li><strong>Contexto:</strong> Por que isso importa?</li>
              <li><strong>Conteúdo:</strong> O que exatamente você quer dizer?</li>
              <li><strong>Conexão:</strong> Como isso se relaciona com o ouvinte?</li>
            </ul>
          </div>
          
          <h3>Exemplos Práticos de Transformação:</h3>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>Situação: Feedback no Trabalho</h4>
            <p><strong>❌ Confuso:</strong> "Eu meio que... bem, acho que talvez o projeto poderia ser... você sabe, um pouco diferente?"</p>
            <p><strong>✅ Claro:</strong> "Identifiquei três pontos específicos que podem melhorar a eficiência do projeto em 30%. Posso compartilhar minhas observações?"</p>
          </div>
          
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>Situação: Conflito Pessoal</h4>
            <p><strong>❌ Confuso:</strong> "Você sempre... eu me sinto... é que... não sei explicar..."</p>
            <p><strong>✅ Claro:</strong> "Quando [situação específica] acontece, eu sinto [emoção precisa] porque valorizo [valor específico]. Podemos conversar sobre isso?"</p>
          </div>
          
          <h3>Exercício de Integração:</h3>
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Para esta semana:</strong></p>
            <ol>
              <li>Escolha uma situação onde você precisa se comunicar</li>
              <li>Aplique as técnicas de clareza interna</li>
              <li>Use a fórmula da comunicação clara</li>
              <li>Observe os resultados</li>
              <li>Refine o processo</li>
            </ol>
          </div>
        `
      }
    ]
  },
  "modulo-6": {
    title: "Pilar II - Estratégia do Momento Certo",
    pages: [
      {
        title: "A Arte do Timing Perfeito",
        content: `
          <h2>Módulo 6: Pilar II - Estratégia do Momento Certo</h2>
          
          <p>Ter clareza interna é fundamental, mas não é suficiente. O segundo pilar da comunicação autêntica é saber QUANDO comunicar. O timing pode fazer a diferença entre ser ouvido ou ignorado, entre gerar impacto ou causar resistência.</p>
          
          <h3>Por que o Timing é Crucial?</h3>
          <ul>
            <li>A mesma mensagem pode ter impactos completamente diferentes</li>
            <li>O momento certo multiplica sua influência</li>
            <li>O momento errado pode desperdiçar até a melhor comunicação</li>
            <li>Timing adequado demonstra inteligência emocional</li>
          </ul>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>⏰ A Regra de Ouro do Timing</h4>
            <p>"A mensagem certa no momento errado se torna a mensagem errada. A mensagem imperfeita no momento certo pode ser transformadora."</p>
          </div>
          
          <h3>Os 3 Níveis de Timing:</h3>
          <ol>
            <li><strong>Timing Situacional:</strong> O contexto da conversa</li>
            <li><strong>Timing Emocional:</strong> O estado emocional dos envolvidos</li>
            <li><strong>Timing Estratégico:</strong> O momento ideal para máximo impacto</li>
          </ol>
        `
      },
      {
        title: "Lendo os Sinais do Momento Certo",
        content: `
          <h2>Como Identificar o Momento Perfeito</h2>
          
          <p>Desenvolver a sensibilidade para reconhecer o momento certo é uma habilidade que pode ser aprendida e aperfeiçoada.</p>
          
          <h3>Sinais do Momento CERTO:</h3>
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>✅ SINAIS POSITIVOS</h4>
            <ul>
              <li>A pessoa está calma e receptiva</li>
              <li>Há tempo suficiente para uma conversa completa</li>
              <li>O ambiente é privado e confortável</li>
              <li>Você também está em um bom estado emocional</li>
              <li>A pessoa demonstra interesse ou abertura</li>
              <li>Não há distrações ou pressões externas</li>
            </ul>
          </div>
          
          <h3>Sinais do Momento ERRADO:</h3>
          <div style="background: #ffe6e6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>❌ SINAIS DE ALERTA</h4>
            <ul>
              <li>A pessoa está estressada ou irritada</li>
              <li>Há pressa ou pressão de tempo</li>
              <li>O ambiente é público ou inadequado</li>
              <li>Você está emocionalmente alterado</li>
              <li>A pessoa demonstra desinteresse ou defensividade</li>
              <li>Há muitas distrações ao redor</li>
            </ul>
          </div>
          
          <h3>A Técnica do "Teste da Temperatura":</h3>
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p>Antes de abordar um assunto importante:</p>
            <ol>
              <li><strong>Observe:</strong> Como a pessoa está se comportando?</li>
              <li><strong>Teste:</strong> Faça um comentário leve sobre o tema</li>
              <li><strong>Avalie:</strong> Qual foi a reação?</li>
              <li><strong>Decida:</strong> Prosseguir, esperar ou mudar de estratégia?</li>
            </ol>
          </div>
        `
      },
      {
        title: "Maximizando o Impacto das Suas Intervenções",
        content: `
          <h2>Estratégias Avançadas de Timing</h2>
          
          <p>Agora vamos para as técnicas avançadas que separam comunicadores medianos dos excepcionais.</p>
          
          <h3>A Matriz do Timing Estratégico:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>🚀 ALTA URGÊNCIA + ALTA IMPORTÂNCIA</h4>
              <p><strong>Ação:</strong> Abordar imediatamente, mas com preparação cuidadosa</p>
              <p><strong>Exemplo:</strong> Conflito que está escalando</p>
            </div>
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px;">
              <h4>⏳ BAIXA URGÊNCIA + ALTA IMPORTÂNCIA</h4>
              <p><strong>Ação:</strong> Planejar o momento perfeito</p>
              <p><strong>Exemplo:</strong> Conversa sobre relacionamento</p>
            </div>
            <div style="background: #e8f0ff; padding: 20px; border-radius: 8px;">
              <h4>⚡ ALTA URGÊNCIA + BAIXA IMPORTÂNCIA</h4>
              <p><strong>Ação:</strong> Resolver rapidamente ou delegar</p>
              <p><strong>Exemplo:</strong> Questões administrativas</p>
            </div>
            <div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">
              <h4>🗑️ BAIXA URGÊNCIA + BAIXA IMPORTÂNCIA</h4>
              <p><strong>Ação:</strong> Considerar se vale a pena abordar</p>
              <p><strong>Exemplo:</strong> Reclamações menores</p>
            </div>
          </div>
          
          <h3>Técnicas de Criação do Momento Certo:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>1. A Técnica da Preparação do Terreno</h4>
            <p>Crie as condições ideais antes de abordar o tema principal:</p>
            <ul>
              <li>Escolha o ambiente certo</li>
              <li>Estabeleça um clima positivo</li>
              <li>Garanta privacidade e tempo adequado</li>
              <li>Conecte-se emocionalmente primeiro</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>2. A Técnica do Momentum</h4>
            <p>Aproveite momentos de abertura natural:</p>
            <ul>
              <li>Após uma experiência compartilhada positiva</li>
              <li>Quando a pessoa pede sua opinião</li>
              <li>Durante conversas espontâneas e fluidas</li>
              <li>Em momentos de vulnerabilidade mútua</li>
            </ul>
          </div>
          
          <h3>Exercício Prático:</h3>
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Desafio da Semana:</strong></p>
            <p>Identifique uma conversa importante que você precisa ter. Aplique a estratégia do momento certo:</p>
            <ol>
              <li>Analise a urgência e importância</li>
              <li>Observe os sinais da pessoa</li>
              <li>Prepare o terreno adequadamente</li>
              <li>Escolha o momento estratégico</li>
              <li>Documente os resultados</li>
            </ol>
          </div>
        `
      }
    ]
  },
  "modulo-7": {
    title: "Pilar III - Gestão Inteligente da Energia",
    pages: [
      {
        title: "Compreendendo Sua Energia Social",
        content: `
          <h2>Módulo 7: Pilar III - Gestão Inteligente da Energia</h2>
          
          <p>O terceiro pilar da comunicação autêntica é aprender a gerir sua energia social de forma inteligente. Para introvertidos, isso é especialmente crucial, pois a energia é um recurso finito que precisa ser administrado estrategicamente.</p>
          
          <h3>O que é Energia Social?</h3>
          <p>É a capacidade mental e emocional que você tem para:</p>
          <ul>
            <li>Participar ativamente de interações sociais</li>
            <li>Processar informações sociais complexas</li>
            <li>Manter foco e presença durante conversas</li>
            <li>Responder de forma adequada aos estímulos sociais</li>
            <li>Demonstrar empatia e conexão genuína</li>
          </ul>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🔋 A Bateria Social do Introvertido</h4>
            <p>Imagine sua energia social como uma bateria. Interações sociais a consomem, enquanto momentos de solitude a recarregam. A chave está em otimizar tanto o consumo quanto a recarga.</p>
          </div>
          
          <h3>Os 4 Estados Energéticos:</h3>
          <ol>
            <li><strong>Estado Ideal (80-100%):</strong> Pico de performance social</li>
            <li><strong>Estado Produtivo (60-80%):</strong> Boa capacidade de interação</li>
            <li><strong>Estado de Alerta (40-60%):</strong> Energia limitada, seja seletivo</li>
            <li><strong>Estado Crítico (0-40%):</strong> Necessidade urgente de recarga</li>
          </ol>
        `
      },
      {
        title: "Otimizando Seu Consumo Energético",
        content: `
          <h2>Estratégias para Usar Sua Energia de Forma Inteligente</h2>
          
          <p>Não se trata de economizar energia, mas de investí-la onde ela gera maior retorno e impacto.</p>
          
          <h3>Mapeamento Energético das Interações:</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>🟢 BAIXO CONSUMO</h4>
              <ul>
                <li>Conversas um-a-um com pessoas próximas</li>
                <li>Discussões sobre temas de interesse</li>
                <li>Ambientes familiares e confortáveis</li>
                <li>Interações com propósito claro</li>
              </ul>
            </div>
            <div style="background: #ffe6e6; padding: 20px; border-radius: 8px;">
              <h4>🔴 ALTO CONSUMO</h4>
              <ul>
                <li>Grandes grupos e multidões</li>
                <li>Small talk prolongado</li>
                <li>Ambientes barulhentos e caóticos</li>
                <li>Interações sem propósito definido</li>
              </ul>
            </div>
          </div>
          
          <h3>A Técnica do Orçamento Energético:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>Como Planejar Seu Dia Social:</h4>
            <ol>
              <li><strong>Avalie sua energia atual</strong> (escala 1-10)</li>
              <li><strong>Liste suas interações do dia</strong> e classifique por consumo</li>
              <li><strong>Priorize</strong> as interações mais importantes</li>
              <li><strong>Programe momentos de recarga</strong> entre atividades intensas</li>
              <li><strong>Reserve energia</strong> para o que realmente importa</li>
            </ol>
          </div>
          
          <h3>Estratégias de Otimização:</h3>
          
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>1. Preparação Estratégica</h4>
            <ul>
              <li>Pesquise sobre os participantes e temas</li>
              <li>Prepare perguntas interessantes</li>
              <li>Defina objetivos claros para cada interação</li>
              <li>Visualize cenários e possíveis respostas</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>2. Gestão Durante a Interação</h4>
            <ul>
              <li>Direcione conversas para temas substanciais</li>
              <li>Use perguntas abertas para ouvir mais</li>
              <li>Faça pausas estratégicas</li>
              <li>Monitore seus níveis de energia</li>
            </ul>
          </div>
        `
      },
      {
        title: "Técnicas de Recarga Energética",
        content: `
          <h2>Como Recarregar Sua Energia Social</h2>
          
          <p>A recarga não é apenas sobre estar sozinho. É sobre criar condições ideais para restaurar sua capacidade de conexão autêntica.</p>
          
          <h3>O Espectro da Recarga:</h3>
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>⚡ Recarga Rápida (5-15 minutos)</h4>
            <ul>
              <li>Respiração profunda e consciente</li>
              <li>Caminhada curta sozinho</li>
              <li>Meditação ou momento de silêncio</li>
              <li>Leitura de algumas páginas</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🔋 Recarga Média (30-60 minutos)</h4>
            <ul>
              <li>Exercício físico individual</li>
              <li>Hobby criativo (desenho, música, escrita)</li>
              <li>Banho relaxante</li>
              <li>Tempo na natureza</li>
            </ul>
          </div>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🏠 Recarga Profunda (2+ horas)</h4>
            <ul>
              <li>Tempo prolongado sozinho em casa</li>
              <li>Imersão em projetos pessoais</li>
              <li>Leitura ou estudo aprofundado</li>
              <li>Práticas espirituais ou filosóficas</li>
            </ul>
          </div>
          
          <h3>A Técnica da Recarga Preventiva:</h3>
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Em vez de esperar o esgotamento:</strong></p>
            <ol>
              <li>Programe micro-recargas ao longo do dia</li>
              <li>Crie rituais de transição entre atividades</li>
              <li>Use intervalos para momentos de introspecção</li>
              <li>Transforme deslocamentos em tempo de recarga</li>
            </ol>
          </div>
          
          <h3>Mantendo Seu Pico de Performance:</h3>
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4caf50;">
            <h4>🎯 A Fórmula do Estado Ideal</h4>
            <p><strong>ENERGIA OTIMIZADA = Recarga Preventiva + Consumo Inteligente + Propósito Claro</strong></p>
            <ul>
              <li><strong>Recarga Preventiva:</strong> Não espere o esgotamento</li>
              <li><strong>Consumo Inteligente:</strong> Invista energia onde há maior retorno</li>
              <li><strong>Propósito Claro:</strong> Conexões autênticas energizam em vez de drenar</li>
            </ul>
          </div>
          
          <h3>Plano de Ação Semanal:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <p><strong>Para implementar esta semana:</strong></p>
            <ol>
              <li>Monitore seus níveis de energia por 3 dias</li>
              <li>Identifique seus principais "ladrões de energia"</li>
              <li>Teste 2 técnicas de recarga diferentes</li>
              <li>Programe micro-recargas em sua agenda</li>
              <li>Observe a diferença na qualidade de suas interações</li>
            </ol>
          </div>
        `
      }
    ]
  },
  "modulo-8": {
    title: "Comunicação Autêntica em Ação",
    pages: [
      {
        title: "Aplicando os 3 Pilares em Cenários Reais",
        content: `
          <h2>Módulo 8: Comunicação Autêntica em Ação</h2>
          
          <p>Agora é hora de integrar tudo que você aprendeu. Os três pilares - Clareza Interna, Timing Estratégico e Gestão Energética - trabalham juntos para criar uma comunicação verdadeiramente transformadora.</p>
          
          <h3>A Sinergia dos Três Pilares:</h3>
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>🎯 CLAREZA + ⏰ TIMING + 🔋 ENERGIA = 🌟 IMPACTO AUTÊNTICO</h4>
            <p>Quando os três pilares se alinham, sua comunicação se torna:</p>
            <ul>
              <li><strong>Poderosa</strong> - Você sabe exatamente o que quer dizer</li>
              <li><strong>Estratégica</strong> - Você escolhe o momento certo</li>
              <li><strong>Sustentável</strong> - Você mantém sua energia e presença</li>
            </ul>
          </div>
          
          <h3>Cenários de Alto Impacto:</h3>
          <p>Vamos aplicar o método em situações que realmente importam:</p>
          <ol>
            <li><strong>Gestão de Conflitos</strong> - Transformar tensão em conexão</li>
            <li><strong>Liderança Autêntica</strong> - Influenciar sem manipular</li>
            <li><strong>Negociações Importantes</strong> - Alcançar resultados win-win</li>
            <li><strong>Conversas Difíceis</strong> - Abordar temas sensíveis</li>
            <li><strong>Apresentações Impactantes</strong> - Conectar com audiências</li>
          </ol>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>💡 Insight Fundamental</h4>
            <p>A comunicação autêntica não é sobre ser perfeito. É sobre ser genuíno, estratégico e sustentável. Quando você para de tentar impressionar e começa a tentar conectar, tudo muda.</p>
          </div>
        `
      },
      {
        title: "Masterclass: Gestão de Conflitos",
        content: `
          <h2>Transformando Conflitos em Conexões</h2>
          
          <p>Conflitos são oportunidades disfarçadas de conexão mais profunda. Para introvertidos, a chave não está em evitar o conflito, mas em abordá-lo de forma autêntica e estratégica.</p>
          
          <h3>A Metodologia C.A.L.M.A para Conflitos:</h3>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>C - CLAREZA sobre a situação</h4>
            <ul>
              <li>Identifique o problema real (não os sintomas)</li>
              <li>Separe fatos de interpretações</li>
              <li>Reconheça suas emoções e gatilhos</li>
              <li>Defina o resultado desejado</li>
            </ul>
          </div>
          
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>A - AVALIE o momento certo</h4>
            <ul>
              <li>A pessoa está receptiva?</li>
              <li>Há privacidade adequada?</li>
              <li>Você está em um bom estado emocional?</li>
              <li>Há tempo suficiente para resolver?</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>L - LIDE com sua energia</h4>
            <ul>
              <li>Prepare-se mentalmente antes</li>
              <li>Monitore sua energia durante</li>
              <li>Faça pausas se necessário</li>
              <li>Planeje recuperação depois</li>
            </ul>
          </div>
          
          <div style="background: #f0e8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>M - MANTENHA o foco na solução</h4>
            <ul>
              <li>Use linguagem "eu" em vez de "você"</li>
              <li>Busque entender antes de ser entendido</li>
              <li>Procure pontos de concordância</li>
              <li>Proponha soluções win-win</li>
            </ul>
          </div>
          
          <div style="background: #ffe6e6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>A - ACOMPANHE e ajuste</h4>
            <ul>
              <li>Verifique se a resolução está funcionando</li>
              <li>Esteja aberto a fazer ajustes</li>
              <li>Mantenha a comunicação aberta</li>
              <li>Celebre o progresso alcançado</li>
            </ul>
          </div>
          
          <h3>Exemplo Prático:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>Situação: Conflito com colega de trabalho</h4>
            <p><strong>❌ Abordagem reativa:</strong> "Você sempre interrompe nossas reuniões e isso me irrita!"</p>
            <p><strong>✅ Abordagem C.A.L.M.A:</strong> "Notei que temos estilos diferentes de comunicação em reuniões. Quando sou interrompido, perco o fio da meada e isso afeta minha contribuição. Podemos encontrar uma forma de ambos participarmos efetivamente?"</p>
          </div>
        `
      },
      {
        title: "Liderança Autêntica para Introvertidos",
        content: `
          <h2>Liderar Sendo Verdadeiramente Você</h2>
          
          <p>A liderança autêntica não é sobre se tornar extrovertido. É sobre usar seus pontos fortes naturais para influenciar e inspirar outros de forma genuína.</p>
          
          <h3>Os Superpoderes do Líder Introvertido:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>🎯 FOCO PROFUNDO</h4>
              <p>Você consegue se concentrar intensamente em problemas complexos e encontrar soluções inovadoras.</p>
            </div>
            <div style="background: #e8f0ff; padding: 20px; border-radius: 8px;">
              <h4>👂 ESCUTA ATIVA</h4>
              <p>Sua capacidade de ouvir genuinamente faz as pessoas se sentirem valorizadas e compreendidas.</p>
            </div>
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px;">
              <h4>🤔 REFLEXÃO ESTRATÉGICA</h4>
              <p>Você pensa antes de agir, resultando em decisões mais ponderadas e eficazes.</p>
            </div>
            <div style="background: #f0e8ff; padding: 20px; border-radius: 8px;">
              <h4>🎭 AUTENTICIDADE</h4>
              <p>Sua comunicação genuína inspira confiança e cria conexões reais.</p>
            </div>
          </div>
          
          <h3>O Modelo de Liderança Silenciosa:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>1. Lidere pela Preparação</h4>
            <ul>
              <li>Chegue às reuniões mais preparado que todos</li>
              <li>Antecipe perguntas e desafios</li>
              <li>Tenha dados e insights relevantes</li>
              <li>Prepare perguntas que estimulem reflexão</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>2. Lidere pela Qualidade</h4>
            <ul>
              <li>Fale menos, mas com mais substância</li>
              <li>Faça perguntas que ninguém mais fez</li>
              <li>Ofereça perspectivas únicas e valiosas</li>
              <li>Seja conhecido pela qualidade, não quantidade</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>3. Lidere pelo Exemplo</h4>
            <ul>
              <li>Demonstre consistência entre valores e ações</li>
              <li>Seja confiável e cumpra seus compromissos</li>
              <li>Mostre vulnerabilidade apropriada</li>
              <li>Pratique o que prega sem alarde</li>
            </ul>
          </div>
          
          <h3>Estratégias para Reuniões e Apresentações:</h3>
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>📋 Antes (Preparação Energética)</h4>
            <ul>
              <li>Reserve tempo para se preparar mentalmente</li>
              <li>Defina 1-3 pontos-chave que quer comunicar</li>
              <li>Visualize cenários e prepare respostas</li>
              <li>Chegue alguns minutos antes para se ambientar</li>
            </ul>
          </div>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>⚡ Durante (Participação Estratégica)</h4>
            <ul>
              <li>Escolha momentos estratégicos para falar</li>
              <li>Use pausas para formular respostas reflexivas</li>
              <li>Faça perguntas que aprofundem a discussão</li>
              <li>Monitore sua energia e faça pausas se necessário</li>
            </ul>
          </div>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🔋 Depois (Recuperação e Follow-up)</h4>
            <ul>
              <li>Reserve tempo para processar o que aconteceu</li>
              <li>Faça follow-ups por escrito quando apropriado</li>
              <li>Recarregue sua energia antes da próxima atividade</li>
              <li>Reflita sobre lições aprendidas</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4caf50;">
            <h4>💎 Lembrete Poderoso</h4>
            <p>Você não precisa ser o mais falante da sala para ser o mais influente. Algumas das palavras mais poderosas do mundo foram ditas por pessoas que falavam pouco, mas quando falavam, todos escutavam.</p>
          </div>
        `
      }
    ]
  },
  "modulo-9": {
    title: "O Fim da Invisibilidade",
    pages: [
      {
        title: "Histórias de Transformação Real",
        content: `
          <h2>Módulo 9: O Fim da Invisibilidade</h2>
          
          <p>Este é o momento de celebrar o fim da sua invisibilidade. Não porque você se tornou outra pessoa, mas porque finalmente aprendeu a ser autenticamente você mesmo no mundo.</p>
          
          <h3>A Jornada até Aqui:</h3>
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>🎯 Você Descobriu:</h4>
            <ul>
              <li><strong>Sua clareza interna absoluta</strong> - Você sabe quem é e o que quer comunicar</li>
              <li><strong>O poder do timing estratégico</strong> - Você escolhe quando e como se expressar</li>
              <li><strong>A gestão inteligente da energia</strong> - Você otimiza sua presença social</li>
              <li><strong>Técnicas práticas</strong> - Você tem ferramentas concretas para cada situação</li>
            </ul>
          </div>
          
          <h3>Histórias Reais de Transformação:</h3>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>📈 Maria, Executiva de Marketing</h4>
            <p><strong>Antes:</strong> "Eu evitava reuniões importantes e raramente expressava minhas ideias. Me sentia invisível no escritório."</p>
            <p><strong>Depois:</strong> "Agora eu me preparo estrategicamente para reuniões e minhas contribuições são sempre relevantes. Fui promovida a gerente porque minha comunicação se tornou um diferencial."</p>
            <p><strong>Chave:</strong> Aplicou a clareza interna para preparar contribuições valiosas e o timing estratégico para escolher os momentos certos de falar.</p>
          </div>
          
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>💑 Carlos, Relacionamentos</h4>
            <p><strong>Antes:</strong> "Tinha dificuldade para expressar meus sentimentos. Meus relacionamentos eram superficiais."</p>
            <p><strong>Depois:</strong> "Aprendi a comunicar meus sentimentos de forma clara e no momento certo. Meu casamento se transformou e tenho amizades mais profundas."</p>
            <p><strong>Chave:</strong> Usou a gestão energética para ter conversas mais intensas quando estava em seu melhor estado, e o timing para abordar assuntos sensíveis.</p>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🎤 Ana, Empreendedora</h4>
            <p><strong>Antes:</strong> "Evitava apresentações e networking. Meu negócio não crescia porque eu não conseguia me comunicar."</p>
            <p><strong>Depois:</strong> "Desenvolvi minha própria forma de fazer networking e apresentações. Meu negócio triplicou de tamanho porque agora eu comunico meu valor de forma autêntica."</p>
            <p><strong>Chave:</strong> Adaptou as técnicas para seu estilo introvertido, focando em conexões de qualidade e preparação estratégica.</p>
          </div>
        `
      },
      {
        title: "O Impacto da Comunicação Autêntica",
        content: `
          <h2>Como Sua Transformação Afeta o Mundo</h2>
          
          <p>Quando você se comunica autenticamente, não muda apenas sua vida - você se torna um catalisador de autenticidade nos outros.</p>
          
          <h3>O Efeito Ondulação da Autenticidade:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
              <h4>🏠 PESSOAL</h4>
              <p>Relacionamentos mais profundos e significativos</p>
            </div>
            <div style="background: #e8f0ff; padding: 15px; border-radius: 8px; text-align: center;">
              <h4>💼 PROFISSIONAL</h4>
              <p>Reconhecimento e oportunidades de crescimento</p>
            </div>
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; text-align: center;">
              <h4>🌍 SOCIAL</h4>
              <p>Contribuição única para sua comunidade</p>
            </div>
          </div>
          
          <h3>Os 5 Níveis de Impacto:</h3>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>1. Impacto em Você Mesmo</h4>
            <ul>
              <li>Maior autoconfiança e autoaceitação</li>
              <li>Redução do estresse social</li>
              <li>Sensação de alinhamento entre valores e ações</li>
              <li>Energia preservada para o que realmente importa</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>2. Impacto nas Pessoas Próximas</h4>
            <ul>
              <li>Relacionamentos mais honestos e profundos</li>
              <li>Modela autenticidade para família e amigos</li>
              <li>Criação de espaços seguros para vulnerabilidade</li>
              <li>Conexões baseadas em valores compartilhados</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>3. Impacto no Ambiente de Trabalho</h4>
            <ul>
              <li>Contribuições mais valiosas e únicas</li>
              <li>Liderança silenciosa mas poderosa</li>
              <li>Melhoria na qualidade das discussões</li>
              <li>Inspiração para outros introvertidos</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>4. Impacto na Comunidade</h4>
            <ul>
              <li>Participação mais significativa em causas importantes</li>
              <li>Mentoria natural para outros introvertidos</li>
              <li>Contribuição única baseada em seus talentos</li>
              <li>Quebra de estereótipos sobre introversão</li>
            </ul>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>5. Impacto no Mundo</h4>
            <ul>
              <li>Representação da diversidade de estilos de comunicação</li>
              <li>Contribuição para um mundo mais inclusivo</li>
              <li>Preservação de valores como reflexão e profundidade</li>
              <li>Inspiração para futuras gerações de introvertidos</li>
            </ul>
          </div>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>🌟 Seu Legado de Autenticidade</h4>
            <p>Cada vez que você se comunica autenticamente, você:</p>
            <ul>
              <li>Dá permissão para outros serem eles mesmos</li>
              <li>Eleva o nível das conversas ao seu redor</li>
              <li>Contribui para um mundo menos superficial</li>
              <li>Prova que não existe uma única forma "certa" de se comunicar</li>
            </ul>
          </div>
        `
      },
      {
        title: "Celebrando Sua Nova Identidade",
        content: `
          <h2>Você Não é Mais Invisível</h2>
          
          <p>Este é o momento de reconhecer e celebrar a transformação que você conquistou. Você desenvolveu uma nova identidade: a do comunicador autêntico.</p>
          
          <h3>Antes vs. Agora - Sua Evolução:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #ffebee; padding: 20px; border-radius: 8px;">
              <h4>❌ ANTES - O Invisível</h4>
              <ul>
                <li>Evitava situações sociais importantes</li>
                <li>Guardava ideias valiosas para si</li>
                <li>Sentia-se drenado após interações</li>
                <li>Comunicava-se por obrigação</li>
                <li>Tentava imitar outros estilos</li>
              </ul>
            </div>
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>✅ AGORA - O Autêntico</h4>
              <ul>
                <li>Participa estrategicamente de forma impactante</li>
                <li>Compartilha insights valiosos no momento certo</li>
                <li>Gerencia energia para manter qualidade</li>
                <li>Comunica-se com propósito e paixão</li>
                <li>Desenvolveu seu estilo único</li>
              </ul>
            </div>
          </div>
          
          <h3>Seus Novos Superpoderes:</h3>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>💎 O Dom da Profundidade</h4>
            <p>Você não precisa falar muito para ser ouvido. Quando você fala, as pessoas param para escutar porque sabem que será algo valioso.</p>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🎯 O Poder da Precisão</h4>
            <p>Você vai direto ao ponto com clareza e propósito. Suas palavras têm peso porque são escolhidas cuidadosamente.</p>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>⚡ A Energia Inteligente</h4>
            <p>Você não desperdiça energia em conversas vazias. Investindo strategicamente, você tem mais qualidade nas interações que importam.</p>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🧭 A Autenticidade Magnética</h4>
            <p>Você atrai pessoas que valorizam substância e profundidade. Seus relacionamentos são baseados em conexões reais.</p>
          </div>
          
          <h3>Rituais de Celebração:</h3>
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🎉 Celebre Sua Jornada</h4>
            <ol>
              <li><strong>Escreva uma carta para seu "eu do passado"</strong> agradecendo pela coragem de começar esta jornada</li>
              <li><strong>Liste 10 momentos</strong> onde você se comunicou autenticamente desde que começou o método</li>
              <li><strong>Identifique 3 pessoas</strong> que foram impactadas positivamente pela sua nova forma de se comunicar</li>
              <li><strong>Defina um símbolo</strong> que represente sua transformação (uma pedra, joia, etc.)</li>
              <li><strong>Compartilhe sua história</strong> com alguém que ainda está lutando com os mesmos desafios</li>
            </ol>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4caf50;">
            <h4>🏆 Certificado de Autenticidade</h4>
            <p><strong>Você oficialmente se graduou da invisibilidade para a autenticidade.</strong></p>
            <p>Você não é mais alguém que:</p>
            <ul>
              <li>❌ Se esconde por medo de julgamento</li>
              <li>❌ Desperdiça energia tentando ser outra pessoa</li>
              <li>❌ Guarda suas melhores ideias para si mesmo</li>
            </ul>
            <p>Você é agora alguém que:</p>
            <ul>
              <li>✅ Se expressa com confiança e propósito</li>
              <li>✅ Usa sua energia strategicamente para máximo impacto</li>
              <li>✅ Contribui com o mundo sendo autenticamente você mesmo</li>
            </ul>
          </div>
        `
      }
    ]
  },
  "modulo-10": {
    title: "A Jornada Contínua",
    pages: [
      {
        title: "Integrando o Método para Toda a Vida",
        content: `
          <h2>Módulo 10: A Jornada Contínua</h2>
          
          <p>Parabéns por chegar até aqui! Mas lembre-se: este não é o fim, é o início de uma vida plena e autêntica como introvertido. O método que você aprendeu não é apenas para situações específicas - é um estilo de vida.</p>
          
          <h3>A Filosofia da Jornada Contínua:</h3>
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>🌱 Crescimento, Não Perfeição</h4>
            <p>A comunicação autêntica é uma habilidade que se desenvolve continuamente. Cada interação é uma oportunidade de crescimento, não uma prova de perfeição.</p>
          </div>
          
          <h3>Os 4 Pilares da Vida Autêntica:</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
              <h4>1. 🎯 CLAREZA CONTÍNUA</h4>
              <p>Continue desenvolvendo autoconhecimento através de:</p>
              <ul>
                <li>Reflexão diária</li>
                <li>Journaling regular</li>
                <li>Feedback consciente</li>
                <li>Evolução de valores</li>
              </ul>
            </div>
            <div style="background: #e8f0ff; padding: 20px; border-radius: 8px;">
              <h4>2. ⏰ TIMING APURADO</h4>
              <p>Refine sua sensibilidade para:</p>
              <ul>
                <li>Momentos de oportunidade</li>
                <li>Estados emocionais</li>
                <li>Contextos favoráveis</li>
                <li>Sinais não-verbais</li>
              </ul>
            </div>
            <div style="background: #fff3cd; padding: 20px; border-radius: 8px;">
              <h4>3. 🔋 ENERGIA SUSTENTÁVEL</h4>
              <p>Otimize constantemente:</p>
              <ul>
                <li>Rotinas de recarga</li>
                <li>Investimento energético</li>
                <li>Limites saudáveis</li>
                <li>Ritmo pessoal</li>
              </ul>
            </div>
            <div style="background: #f0e8ff; padding: 20px; border-radius: 8px;">
              <h4>4. 🌟 IMPACTO CRESCENTE</h4>
              <p>Expanda gradualmente:</p>
              <ul>
                <li>Zona de conforto</li>
                <li>Círculo de influência</li>
                <li>Contribuição única</li>
                <li>Legado autêntico</li>
              </ul>
            </div>
          </div>
          
          <h3>O Ciclo de Melhoria Contínua:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🔄 AGIR → OBSERVAR → REFLETIR → AJUSTAR</h4>
            <ol>
              <li><strong>AGIR:</strong> Aplique o método em situações reais</li>
              <li><strong>OBSERVAR:</strong> Note os resultados e reações</li>
              <li><strong>REFLETIR:</strong> Analise o que funcionou e o que pode melhorar</li>
              <li><strong>AJUSTAR:</strong> Refine sua abordagem para a próxima situação</li>
            </ol>
          </div>
        `
      },
      {
        title: "Mantendo-se no Caminho da Autenticidade",
        content: `
          <h2>Estratégias para Manter o Momentum</h2>
          
          <p>A vida vai testar sua nova forma de ser. Haverá momentos de recaída, dúvida e desafios. Isso é normal e faz parte da jornada. O importante é ter estratégias para se manter no caminho.</p>
          
          <h3>Sinais de Alerta - Quando Você Está Saindo do Caminho:</h3>
          <div style="background: #ffe6e6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🚨 ATENÇÃO SE VOCÊ NOTAR:</h4>
            <ul>
              <li>Voltando a evitar situações importantes</li>
              <li>Sentindo-se constantemente drenado socialmente</li>
              <li>Guardando ideias valiosas para si novamente</li>
              <li>Tentando imitar outros estilos de comunicação</li>
              <li>Perdendo a conexão com seus valores</li>
            </ul>
          </div>
          
          <h3>Kit de Emergência para Momentos Difíceis:</h3>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🩹 QUANDO A AUTOCONFIANÇA BALANÇAR:</h4>
            <ul>
              <li>Releia suas conquistas documentadas</li>
              <li>Lembre-se de 3 momentos de sucesso autêntico</li>
              <li>Reconecte-se com seus valores fundamentais</li>
              <li>Pratique a técnica do espelho interior</li>
            </ul>
          </div>
          
          <div style="background: #e8f0ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>⚡ QUANDO A ENERGIA ESTIVER BAIXA:</h4>
            <ul>
              <li>Aplique técnicas de recarga imediata</li>
              <li>Reavalie suas prioridades energéticas</li>
              <li>Ajuste temporariamente suas expectativas</li>
              <li>Foque em interações de alta qualidade</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🧭 QUANDO PERDER A DIREÇÃO:</h4>
            <ul>
              <li>Revisite o módulo 1 (Fundamentos)</li>
              <li>Faça um check-up dos 3 pilares</li>
              <li>Converse com alguém que conhece sua jornada</li>
              <li>Simplifique: volte ao básico</li>
            </ul>
          </div>
          
          <h3>Rituais de Manutenção - Práticas para Toda Vida:</h3>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>📅 DIÁRIO (5 minutos)</h4>
            <ul>
              <li>Check-in energético (escala 1-10)</li>
              <li>Uma situação social do dia</li>
              <li>Como você aplicou o método</li>
              <li>Uma lição aprendida</li>
            </ul>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>📅 SEMANAL (30 minutos)</h4>
            <ul>
              <li>Revisão das interações importantes</li>
              <li>Análise dos padrões energéticos</li>
              <li>Planejamento da próxima semana</li>
              <li>Celebração dos progressos</li>
            </ul>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>📅 MENSAL (2 horas)</h4>
            <ul>
              <li>Revisão profunda dos 3 pilares</li>
              <li>Ajuste de estratégias e metas</li>
              <li>Reflexão sobre crescimento</li>
              <li>Renovação de compromissos</li>
            </ul>
          </div>
        `
      },
      {
        title: "Seu Plano de Vida Autêntica",
        content: `
          <h2>Construindo Seu Futuro Como um Comunicador Autêntico</h2>
          
          <p>Agora é hora de olhar para frente e criar um plano para viver autenticamente pelos próximos anos. Este não é um plano rígido, mas uma direção clara.</p>
          
          <h3>Visão de Longo Prazo - Onde Você Quer Estar:</h3>
          
          <div style="background: #e8f4f8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4a90e2;">
            <h4>🎯 EM 1 ANO:</h4>
            <ul>
              <li>O método está completamente integrado à sua rotina</li>
              <li>Você é conhecido como alguém que agrega valor às conversas</li>
              <li>Suas opiniões são procuradas e respeitadas</li>
              <li>Você se sente confortável sendo você mesmo em qualquer situação</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🚀 EM 3 ANOS:</h4>
            <ul>
              <li>Você é uma referência de autenticidade em seu círculo</li>
              <li>Sua forma única de liderar inspira outros</li>
              <li>Você mentoreia naturalmente outros introvertidos</li>
              <li>Sua contribuição para o mundo reflete seus valores mais profundos</li>
            </ul>
          </div>
          
          <div style="background: #f0e8ff; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🌟 EM 5 ANOS:</h4>
            <ul>
              <li>Você criou um legado de comunicação autêntica</li>
              <li>Suas palavras e ações impactaram positivamente muitas vidas</li>
              <li>Você é um exemplo vivo de que introversão é um superpoder</li>
              <li>Sua vida é um reflexo perfeito de quem você realmente é</li>
            </ul>
          </div>
          
          <h3>Seu Manifesto Pessoal:</h3>
          <div style="background: #fff3cd; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>✍️ Complete estas frases (escreva suas respostas):</h4>
            <ol>
              <li>"Eu me comprometo a ser autêntico mesmo quando..."</li>
              <li>"Minha comunicação será guiada pelos valores de..."</li>
              <li>"Eu usarei minha energia social para..."</li>
              <li>"Quando enfrentar desafios, eu lembrarei que..."</li>
              <li>"Minha contribuição única para o mundo é..."</li>
            </ol>
          </div>
          
          <h3>Metas Trimestrais - Próximos 90 Dias:</h3>
          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h4>🎯 ESCOLHA 1 META PARA CADA PILAR:</h4>
            
            <div style="margin: 15px 0;">
              <h5>Clareza Interna:</h5>
              <p>Exemplo: "Vou manter um diário semanal de reflexão sobre meus valores e como eles se manifestam na minha comunicação."</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h5>Timing Estratégico:</h5>
              <p>Exemplo: "Vou praticar a técnica do 'teste da temperatura' antes de 3 conversas importantes por semana."</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h5>Gestão Energética:</h5>
              <p>Exemplo: "Vou implementar 2 técnicas de recarga rápida na minha rotina diária."</p>
            </div>
          </div>
          
          <h3>Seu Compromisso Final:</h3>
          <div style="background: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #4caf50;">
            <h4>🤝 EU ME COMPROMETO A:</h4>
            <ul>
              <li>Honrar minha natureza introvertida como um dom, não um defeito</li>
              <li>Comunicar-me autenticamente, mesmo quando for desafiador</li>
              <li>Gerenciar minha energia como o recurso valioso que ela é</li>
              <li>Escolher qualidade sobre quantidade em todas as minhas interações</li>
              <li>Continuar crescendo mantendo-me fiel aos meus valores</li>
              <li>Ser um exemplo de que existe mais de uma forma de ser poderoso no mundo</li>
            </ul>
          </div>
          
          <div style="background: #f0f8ff; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center;">
            <h4>🎉 PARABÉNS!</h4>
            <p><strong>Você completou sua transformação de invisível para autêntico.</strong></p>
            <p>O mundo precisa da sua voz única, das suas perspectivas profundas e da sua forma especial de se conectar com outros.</p>
            <p><em>Agora vá e brilhe sendo exatamente quem você é!</em></p>
          </div>
        `
      }
    ]
  }
};

const ModuleContent: React.FC<ModuleContentProps> = ({ moduleId, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const module = moduleContents[moduleId];

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Módulo não encontrado</h2>
          <Button onClick={onClose}>Voltar ao Dashboard</Button>
        </div>
      </div>
    );
  }

  const handleNextPage = () => {
    if (currentPage < module.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentPageData = module.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">{module.title}</h1>
            <p className="text-sm text-gray-600">
              Página {currentPage + 1} de {module.pages.length}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              {Math.round(((currentPage + 1) / module.pages.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-full bg-gray-200 h-1">
            <div 
              className="bg-blue-600 h-1 transition-all duration-300"
              style={{ width: `${((currentPage + 1) / module.pages.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        <Card className="min-h-[600px]">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-gray-800">
              {currentPageData.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: currentPageData.content }}
              className="text-gray-700 leading-relaxed"
            />
          </CardContent>
        </Card>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Página Anterior
          </Button>
          
          <span className="text-sm text-gray-600">
            {currentPage + 1} / {module.pages.length}
          </span>
          
          <Button 
            onClick={handleNextPage}
            disabled={currentPage === module.pages.length - 1}
            className="flex items-center gap-2"
          >
            Próxima Página
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleContent;
