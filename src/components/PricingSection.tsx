import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="preco" className="bg-gray-900/50 text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Invista na Sua Aprovação no MP-MA
        </h2>
        <p className="text-lg text-text-medium mb-10">
          Acesso completo à Mentoria de Resultado, com acompanhamento personalizado até a prova, por um investimento que se traduz em eficiência e aceleração do seu aprendizado.
        </p>

        <div className="bg-background border border-primary rounded-lg p-8 md:p-10 shadow-xl max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-2 text-text-light">Mentoria Completa MP-MA</h3>
          <p className="text-text-medium mb-6">Plano único com acesso a todos os recursos.</p>
          
          <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
            12x <span className="text-6xl md:text-7xl">R$397</span>
          </div>
          <p className="text-text-medium mb-8">ou R$ 4.764,00 à vista</p>

          <ul className="text-left space-y-3 mb-8 text-text-medium">
            <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              Acompanhamento até 20/07/2025
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              Plataforma Exclusiva + IA Result
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              4 Reuniões Individuais Ao Vivo
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              Treinamento Focado em Questões
            </li>
             <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              Ferramentas de Revisão e Metas
            </li>
             <li className="flex items-center">
              <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              Leitura Interativa Guiada
            </li>
          </ul>

          <a 
            href="#cta" // Link placeholder, será atualizado depois
            className="block w-full bg-primary hover:bg-primary-light text-background font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Quero Garantir Minha Vaga
          </a>
        </div>
         <p className="text-sm text-text-medium mt-6">
            Vagas limitadas para garantir a qualidade do acompanhamento individual.
          </p>
      </div>
    </section>
  );
};

export default PricingSection;
