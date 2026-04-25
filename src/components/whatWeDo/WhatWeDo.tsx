import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./whatWeDo.css";

const pillarIcons = [
  // Quote form on mobile + WhatsApp
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="6.5" y="2" width="11" height="20" rx="2" ry="2" /><path d="M10 6h4" /><path d="M9 10h6" /><path d="M9 13h4" /><path d="M11.8 18h.01" /></svg>,
  // 5-second clock response
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  // 15-day delivery calendar
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /><path d="m9 15 2 2 4-4" /></svg>,
];

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
            <Link to="/diagnostico-gratuito" className="btn-secondary">{t.whatWeDo.ctaText}</Link>
          </div>
          <div className="pillars-container">
            {t.whatWeDo.pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{pillarIcons[index]}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="what-we-do-cta-duplicate">
          <Link to="/diagnostico-gratuito" className="btn-secondary">{t.whatWeDo.ctaText}</Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
