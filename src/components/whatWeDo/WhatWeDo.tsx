import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import "./whatWeDo.css";

const pillarIcons = [
  // Cog / Automation
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655 1.113 2.706L4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098L18 20l2-2-1.484-1.736 1.105-2.708L22 13v-2l-2.378-.605Z"/></svg>,
  // Brain / AI
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h1a4 4 0 0 0 6 0h1a3 3 0 0 0 3-3v-1a3 3 0 0 0 0-6v-1a3 3 0 0 0-3-3V6a4 4 0 0 0-4-4Z"/><path d="M12 2v20"/><path d="M5 12h14"/></svg>,
  // Link / Integration
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
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
            <Link to="/servicos" className="btn-secondary">{t.whatWeDo.ctaText}</Link>
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
          <Link to="/servicos" className="btn-secondary">{t.whatWeDo.ctaText}</Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
