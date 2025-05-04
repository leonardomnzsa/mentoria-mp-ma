import React from 'react';
import { ChevronDown } from 'lucide-react';

// FAQs baseadas nas informações fornecidas e no site existente
// O usuário pode revisar e ajustar estas sugestões
const faqs = [
  {
    question: "Para quem é indicada a Mentoria MP-MA?",
    answer: "É ideal para concurseiros de alto nível focados no MP-MA, especialmente aqueles com rotinas intensas (aprox. 3h/dia para estudo) que buscam máxima eficiência, acompanhamento próximo e um método comprovado para superar dificuldades como falta de organização, constância e revisão eficaz."
  },
  {
    question: "Qual a duração da mentoria?",
    answer: "O acompanhamento é completo e vai até a data da prova do concurso do MP-MA, prevista para 20/07/2025. Você terá suporte durante toda a jornada final de preparação."
  },
  {
    question: "Como funciona a IA 'Result'?",
    answer: "A 'Result' é uma inteligência artificial exclusiva da mentoria. Ela funciona como um tutor disponível 24/7 para esclarecer suas dúvidas jurídicas de forma rápida e contextualizada, otimizando seu tempo e ajudando a construir uma linha de raciocínio sólida, útil inclusive para provas discursivas e orais."
  },
  {
    question: "Como são as reuniões individuais?",
    answer: "São 4 encontros ao vivo e individuais com o Prof. Leonardo Aquino. Nessas sessões, analisamos seu desempenho, ajustamos sua estratégia de estudo, definimos metas e trabalhamos pontos específicos para garantir que você esteja no caminho certo para a aprovação."
  },
  {
    question: "Preciso fazer resumos? Como funciona a revisão?",
    answer: "Não focamos em resumos tradicionais. A revisão é ativa e integrada ao processo de resolução de questões e leitura guiada na plataforma. A IA e o mentor identificam os pontos que precisam de reforço, garantindo uma revisão eficiente e direcionada, sem perda de tempo."
  },
  {
    question: "Qual o investimento para participar?",
    answer: "O investimento na sua aprovação é de 12x de R$397,00 (ou R$ 4.764,00 à vista). Este valor inclui acesso completo à plataforma, IA Result, encontros individuais, materiais direcionados e todo o suporte até a prova."
  },
  {
    question: "E se eu tiver pouco tempo para estudar?",
    answer: "A mentoria é desenhada justamente para quem tem pouco tempo (aprox. 3h/dia). O foco é na eficiência máxima, com planejamento direcionado, estudo ativo por questões e otimização do tempo de revisão, garantindo que cada minuto de estudo seja produtivo."
  }
];

// Componente Accordion Item reutilizável
const AccordionItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = React.useState(index === 0); // Open first item by default

  return (
    <div className="border-b border-border">
      <h2>
        <button 
          type="button" 
          className="flex justify-between items-center w-full py-5 px-1 font-medium text-left text-text-light hover:text-primary transition-colors duration-200" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
        >
          <span>{faq.question}</span>
          <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h2>
      <div 
        id={`faq-content-${index}`} 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        aria-labelledby={`faq-heading-${index}`}
      >
        <div className="py-5 px-1 border-t border-border/50">
          <p className="mb-2 text-text-medium">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section id="faq" className="bg-background text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Perguntas Frequentes
        </h2>
        <div className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq} index={index} />
          ))}
        </div>
        <p className="text-center text-text-medium mt-8">
          Ainda tem dúvidas? Entre em contato conosco! (Link será adicionado no CTA final)
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
