import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-background text-text-light py-4 px-6 md:px-10 lg:px-16 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logotipo */}
        <div className="flex items-center">
          <Image 
            src="/assets/logo.png" 
            alt="Mentoria de Resultado Logo" 
            width={180} // Ajustar conforme necessário para bom visual
            height={40} // Ajustar proporção automaticamente
            className="h-auto" // Manter proporção
            priority // Carregar logo rapidamente
          />
        </div>

        {/* Navegação (opcional, pode ser adicionada depois se necessário) */}
        {/* 
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#preco" className="hover:text-primary transition-colors">Investimento</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>
        */}

        {/* Botão CTA (opcional no header) */}
        {/* 
        <a 
          href="#cta" 
          className="bg-primary hover:bg-primary-light text-background font-bold py-2 px-4 rounded transition-colors hidden md:inline-block"
        >
          Garanta sua Vaga
        </a>
        */}

        {/* Menu Mobile (placeholder) */}
        {/* <div className="md:hidden">...</div> */}
      </div>
    </header>
  );
};

export default Header;
