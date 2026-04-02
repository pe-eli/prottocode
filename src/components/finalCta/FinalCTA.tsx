import React from "react";
import { FaTrophy, FaBolt, FaChartLine, FaHandshake } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";
import "./finalCta.css";

const signalIcons = [<FaTrophy />, <FaBolt />, <FaChartLine />, <FaHandshake />];

const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-card-wrapper">
          <div className="cta-background"></div>
          <div className="cta-content">
            <h2>{t.finalCta.title}<span className="accent-text">{t.finalCta.titleAccent}</span></h2>
            <p className="cta-lead">{t.finalCta.lead}</p>
            <p className="cta-highlight" dangerouslySetInnerHTML={{ __html: t.finalCta.highlight }} />
            <div className="cta-buttons">
              <a href="/orcamento" className="btn-primary">{t.finalCta.btnPrimary}</a>
              <a href="https://wa.me/5537998409691" className="btn-secondary">{t.finalCta.btnSecondary}</a>
            </div>
            <p className="cta-footer" dangerouslySetInnerHTML={{ __html: t.finalCta.footer }} />
          </div>
        </div>
        <div className="trust-signals">
          {t.finalCta.signals.map((signal, index) => (
            <div key={index} className="signal">
              <span className="signal-icon">{signalIcons[index]}</span>
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
