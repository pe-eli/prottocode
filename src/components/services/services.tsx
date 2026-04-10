import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal from "../Reveal";
import "./services.css";

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="services-section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.subtitle}</p>
          </div>
        </Reveal>
        <div className="benefits-list">
          {t.services.benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
              <div className={`benefit-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p className="situation"><strong>{t.services.before}</strong> {benefit.situation}</p>
                  <p className="result"><strong>{t.services.after}</strong> {benefit.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="benefits-cta">
            <p>{t.services.ctaText}</p>
            <a href="/orcamento" className="btn-primary">{t.services.ctaButton}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
