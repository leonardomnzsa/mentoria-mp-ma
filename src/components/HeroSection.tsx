import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="bg-background text-text-light py-20 md:py-32 px-6 md:px-10 lg:px-16 flex items-center justify-center text-center"
      // Adicionar uma imagem de fundo sutil ou gradiente aqui se desejado
      // style={{ backgroundImage: 'linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.9)), url(/path/to/background.jpg)' }}
    >
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-primary">Mentoria Especializada</span> para o Concurso do MP-MA: <br className="hidden md:block" />
          Otimize seu Tempo e Maximize Seus Acertos.
        </h1>
        <p className="text-lg md:text-xl text-text-medium mb-10">
          Prepare-se de forma inteligente e eficaz para o MP-MA, mesmo com uma rotina intensa. Alcance a aprovação com acompanhamento personalizado e foco total no resultado.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#cta" // Link placeholder, será atualizado depois
            className="bg-primary hover:bg-primary-light text-background font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Garanta já sua vaga
          </a>
          <a 
            href="#diferenciais" 
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Conheça os Diferenciais
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
