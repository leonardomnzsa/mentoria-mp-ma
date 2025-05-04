import React from 'react';
import { Target, BookOpenText, BrainCircuit, Users, SlidersHorizontal, CheckCircle } from 'lucide-react'; // Using lucide-react icons

const differentials = [
  {
    icon: <Target className="w-10 h-10 text-primary mb-4" />,
    title: "Treinamento Cirúrgico em Questões",
    description: "Foco exclusivo em 2000 a 3000 questões criteriosamente selecionadas para o MP-MA, maximizando seu tempo e direcionando seu esforço."
  },
  {
    icon: <BookOpenText className="w-10 h-10 text-primary mb-4" />,
    title: "Leitura Interativa e Guiada",
    description: "Estudo otimizado da lei seca, doutrina e jurisprudência essenciais através de nossa plataforma digital, com marcações e insights."
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary mb-4" />,
    title: "IA 'Result' ao seu Dispor",
    description: "Esclareça dúvidas jurídicas instantaneamente com nossa inteligência artificial, ganhando velocidade e construindo raciocínio."
  },
  {
    icon: <Users className="w-10 h-10 text-primary mb-4" />,
    title: "4 Encontros Individuais ao Vivo",
    description: "Acompanhamento personalizado com o Prof. Leonardo Aquino para ajustes finos na sua estratégia, análise de desempenho e motivação."
  },
  {
    icon: <SlidersHorizontal className="w-10 h-10 text-primary mb-4" />,
    title: "Ferramentas Exclusivas de Gestão",
    description: "Plataforma completa com programação de metas, sistema de revisão inteligente e gestão total do seu processo de estudos."
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary mb-4" />,
    title: "Foco na Retenção e Inteligência Emocional",
    description: "Desenvolva a capacidade de reter o conteúdo aprendido e a inteligência emocional para resgatar informações sob pressão na hora da prova."
  }
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="bg-gray-900/50 text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Diferenciais da Mentoria de Resultado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors duration-300 shadow-lg flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 text-text-light">{item.title}</h3>
              <p className="text-text-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
