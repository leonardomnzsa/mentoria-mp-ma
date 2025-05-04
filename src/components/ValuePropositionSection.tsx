import React from 'react';
import { Brain, Zap } from 'lucide-react'; // Icons related to mind and efficiency

const ValuePropositionSection = () => {
  return (
    <section id="proposta-valor" className="bg-background text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Mais que Aprovação: Domínio e Resiliência
        </h2>
        <p className="text-lg md:text-xl text-text-medium mb-12">
          A Mentoria de Resultado vai além do conteúdo. Preparamos você não apenas para passar, mas para <strong className="text-text-light">dominar a prova</strong> com confiança e tranquilidade, mesmo sob pressão.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1: Retenção Eficiente */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-border text-left">
            <Brain className="w-12 h-12 text-primary mb-5" />
            <h3 className="text-2xl font-semibold mb-4 text-text-light">Retenção Eficiente de Conteúdo</h3>
            <p className="text-text-medium">
              Nossa metodologia, aliada às ferramentas exclusivas e à IA Result, garante que você não apenas aprenda, mas <strong className="text-text-light">retenha o conhecimento</strong> de forma duradoura. Chega de esquecer o que estudou na véspera da prova.
            </p>
          </div>

          {/* Card 2: Inteligência Emocional */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-border text-left">
            <Zap className="w-12 h-12 text-primary mb-5" /> {/* Icon suggesting quick response/resilience */}
            <h3 className="text-2xl font-semibold mb-4 text-text-light">Inteligência Emocional para a Prova</h3>
            <p className="text-text-medium">
              Desenvolvemos sua capacidade de <strong className="text-text-light">resgatar informações sob pressão</strong>. O acompanhamento individual e as estratégias focadas preparam sua mente para o dia D, controlando a ansiedade e maximizando seu desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
