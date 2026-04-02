import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useLanguage } from "../../i18n/LanguageContext";
import "./portfolio.css";

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="portfolio-page">
        <div className="portfolio-container">
          <div className="portfolio-badge">{t.portfolioPage.badge}</div>
          <h1 className="portfolio-title">
            {t.portfolioPage.title}<span className="portfolio-accent">{t.portfolioPage.titleAccent}</span>{t.portfolioPage.titleSuffix}
          </h1>
          <p className="portfolio-description">{t.portfolioPage.description}</p>
          <div className="portfolio-cards">
            {t.portfolioPage.cards.map((card, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
          <div className="portfolio-cta">
            <p>{t.portfolioPage.ctaText}</p>
            <Link to="/contato" className="btn-portfolio-primary">{t.portfolioPage.ctaButton}</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
