import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CallToActionSection from '@/components/CallToActionSection';

// Simple Footer Component (can be expanded later)
const Footer = () => {
  return (
    <footer className="bg-background text-text-medium py-8 px-6 md:px-10 lg:px-16 border-t border-border text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Prof. Leonardo Aquino - Mentoria de Resultado. Todos os direitos reservados.
        </p>
        {/* Add social media links or other info if needed */}
      </div>
    </footer>
  );
};


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <ValuePropositionSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
