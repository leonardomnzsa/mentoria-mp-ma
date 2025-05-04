import React from 'react';

const CallToActionSection = () => {
  return (
    <section id="cta" className="bg-primary text-background py-16 md:py-24 px-6 md:px-10 lg:px-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Sua Aprovação no MP-MA Começa Agora!
        </h2>
        <p className="text-lg md:text-xl text-gray-900 mb-10">
          Não perca a chance de ter um acompanhamento focado e estratégico com o Prof. Leonardo Aquino. As vagas são <strong className="font-semibold">limitadas</strong> para garantir a qualidade individual.
        </p>
        <a 
          href="#" // Placeholder - será substituído pelo link do WhatsApp
          target="_blank" // Abrir link do WhatsApp em nova aba
          rel="noopener noreferrer"
          className="bg-background hover:bg-gray-800 text-primary font-bold py-4 px-10 rounded-lg text-xl transition-colors duration-300 shadow-lg inline-block"
        >
          Reserve Agora Seu Acesso Exclusivo
        </a>
        <p className="text-sm text-gray-800 mt-6">
          Clique no botão para iniciar a conversa e garantir sua vaga na mentoria.
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;
