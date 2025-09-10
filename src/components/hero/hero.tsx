import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            O futuro digital do seu negócio
            <span className="accent"> começa aqui</span>
          </h1>
          <p className="lead">
            Prottocode cria sites e aplicativos modernos, rápidos e otimizados para negócios
            que querem crescer online. Aparência elegante, sistemas seguros e
            suporte contínuo.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              Solicitar Proposta
            </a>
            <a className="btn-ghost" href="#services">
              Nossos Serviços
            </a>
          </div>
          <ul className="trust-list">
            <li>Entrega no prazo</li>
            <li>Performance & SEO</li>
            <li>Suporte gratuito por 3 meses</li>
          </ul>
        </div>
        <div className="hero-right"></div>
      </div>
    </section>
  );
};

export default Hero;