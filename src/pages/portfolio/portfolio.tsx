import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./portfolio.css";

const Portfolio: React.FC = () => {
  return (
    <>
      <Header />
      <main className="portfolio-page">
        <div className="portfolio-container">
          <div className="portfolio-badge">Em breve</div>
          <h1 className="portfolio-title">
            Nosso <span className="portfolio-accent">Portfólio</span> está a caminho
          </h1>
          <p className="portfolio-description">
            Estamos finalizando os detalhes dos nossos projetos para apresentá-los aqui.
            Em breve você poderá ver cases reais de sites, automações e soluções com IA
            que desenvolvemos para nossos clientes.
          </p>

          <div className="portfolio-cards">
            <div className="portfolio-card">
              <div className="portfolio-card-icon">⚙️</div>
              <h3>Automações com IA</h3>
              <p>Fluxos automatizados que economizam tempo e aumentam conversões.</p>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card-icon">🧠</div>
              <h3>Inteligência Artificial</h3>
              <p>Painéis de dados em tempo real para decisões mais inteligentes.</p>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card-icon">🔗</div>
              <h3>Websites & Integrações</h3>
              <p>Sites modernos com design responsivo e integrações inteligentes.</p>
            </div>
          </div>

          <div className="portfolio-cta">
            <p>Quer ver o que podemos fazer pelo seu negócio?</p>
            <Link to="/contato" className="btn-portfolio-primary">
              Fale com a gente
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
