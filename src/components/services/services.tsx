import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./services.css";

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>
        <div className="benefits-list">
          {t.services.benefits.map((benefit, index) => (
            <div key={index} className={`benefit-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p className="situation"><strong>{t.services.before}</strong> {benefit.situation}</p>
                <p className="result"><strong>{t.services.after}</strong> {benefit.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="benefits-cta">
          <p>{t.services.ctaText}</p>
          <a href="/orcamento" className="btn-primary">{t.services.ctaButton}</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
