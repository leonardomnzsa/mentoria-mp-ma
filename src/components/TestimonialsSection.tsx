import React from 'react';
import Image from 'next/image'; // If using images for testimonials

// Placeholder data - replace when user provides content
const testimonials = [
  {
    quote: "A mentoria foi um divisor de águas na minha preparação. O acompanhamento individualizado e o foco nas questões certas fizeram toda a diferença.",
    name: "Aluno Aprovado 1",
    // image: "/path/to/aluno1.jpg", // Optional image path
    title: "Aprovado MP-XX"
  },
  {
    quote: "Com a rotina corrida, achei que não conseguiria. Mas a organização e as ferramentas da mentoria otimizaram meu tempo de forma incrível.",
    name: "Aluna Aprovada 2",
    // image: "/path/to/aluno2.jpg",
    title: "Aprovada MP-YY"
  },
  {
    quote: "O Prof. Leonardo tem uma didática excelente e a IA Result me salvou inúmeras vezes. Recomendo demais!",
    name: "Aluno Satisfeito 3",
    // image: "/path/to/aluno3.jpg",
    title: "Concurseiro Dedicado"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testemunhos" className="bg-background text-text-light py-16 md:py-24 px-6 md:px-10 lg:px-16 border-t border-border">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          O Que Dizem Nossos Alunos
        </h2>
        {/* Placeholder message if no testimonials are provided yet */}
        {testimonials.length === 0 ? (
          <p className="text-center text-text-medium">Em breve, depoimentos de alunos que transformaram seus estudos com a Mentoria de Resultado.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 p-6 rounded-lg border border-border shadow-lg flex flex-col"
              >
                <p className="text-text-medium italic mb-4 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  {/* Optional Image */}
                  {/* {testimonial.image && (
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={50} 
                      height={50} 
                      className="rounded-full mr-4"
                    />
                  )} */}
                  <div>
                    <p className="font-semibold text-text-light">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
         <p className="text-center text-text-medium mt-8">* Aguardando conteúdo final dos testemunhos a ser fornecido pelo cliente.</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
