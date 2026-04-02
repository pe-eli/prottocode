import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./whatWeDo.css";

const WhatWeDo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="what-we-do" id="como-funciona">
      <div className="container">
        <div className="what-we-do-header">
          <h2>{t.whatWeDo.title}</h2>
          <p className="section-lead">{t.whatWeDo.lead}</p>
        </div>
        <div className="what-we-do-content">
          <div className="what-we-do-text">
            {t.whatWeDo.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <Link to="/servicos" className="btn-secondary">{t.whatWeDo.ctaText}</Link>
          </div>
          <div className="pillars-container">
            {t.whatWeDo.pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
