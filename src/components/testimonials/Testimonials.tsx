import React from "react";

const testimonials = [
  {
    name: "Mariana - CEO, Loja X",
    text: "Projeto entregue antes do prazo, com resultados de SEO reais.",
  },
  {
    name: "Roberto - Marketing",
    text: "Equipe técnica muito alinhada, suporte excelente.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials container">
      <h2>O que clientes dizem</h2>
      <div className="test-list">
        {testimonials.map((t) => (
          <blockquote key={t.name} className="test-card">
            <p>“{t.text}”</p>
            <footer>- {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;