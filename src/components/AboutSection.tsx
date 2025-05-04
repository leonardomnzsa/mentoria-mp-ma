import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-background text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Para Quem é a Mentoria de Resultado?
          </h2>
          <p className="text-lg text-text-medium mb-4">
            Esta mentoria foi desenhada especificamente para o <strong className="text-text-light">concurseiro de alto nível</strong> que busca aprovação no MP-MA, mas enfrenta os desafios de uma <strong className="text-text-light">rotina intensa</strong>.
          </p>
          <p className="text-lg text-text-medium mb-4">
            Se você dispõe de aproximadamente <strong className="text-text-light">3 horas diárias</strong> para estudar e exige <strong className="text-text-light">máxima eficiência e aproveitamento</strong> do seu tempo, esta é a preparação ideal.
          </p>
          <p className="text-lg text-text-medium mb-6">
            Chega de métodos genéricos e perda de tempo. Foco total em estudo inteligente, direcionado e com acompanhamento que gera <strong className="text-text-light">resultado</strong>.
          </p>
          <div className="bg-gray-800/50 border border-border p-4 rounded-lg">
             <p className="text-md text-text-medium font-semibold">
               <span className="text-primary">Duração da Mentoria:</span> Acompanhamento completo e personalizado <strong className="text-text-light">até a data da prova do MP-MA (20/07/2025)</strong>.
             </p>
          </div>
        </div>

        {/* Coluna de Imagem/Visual (Opcional) */}
        <div className="hidden md:flex justify-center items-center">
          {/* Pode-se adicionar uma imagem representativa do público-alvo ou do conceito de eficiência */}
          {/* Exemplo: <Image src="/path/to/image.jpg" alt="Estudo Eficiente" width={400} height={400} className="rounded-lg shadow-lg" /> */}
          <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-border">
            <p className="text-text-medium">(Espaço para imagem ilustrativa - Ex: Alguém estudando focado)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
