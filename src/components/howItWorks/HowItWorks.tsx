import React from "react";
import { FiClipboard, FiEdit3, FiSettings, FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";
import "./howItWorks.css";

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const stepIcons = [FiClipboard, FiEdit3, FiSettings, FiTrendingUp];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2>{t.howItWorks.title}</h2>
          <p className="section-lead">{t.howItWorks.lead}</p>
        </div>
        <div className="timeline">
          {t.howItWorks.steps.map((step, index) => {
            const StepIcon = stepIcons[index] ?? FiClipboard;
            return (
              <div key={index} className="timeline-item">
                <div className="step-card">
                  <div className="step-icon" aria-hidden="true">
                    <StepIcon />
                  </div>
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="timeline-connector">
                    <div className="connector-line"></div>
                    <div className="connector-arrow">→</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="how-it-works-cta">
          <h3>{t.howItWorks.ctaTitle}</h3>
          <p>{t.howItWorks.ctaText}</p>
          <a href="/orcamento" className="btn-primary">{t.howItWorks.ctaButton}</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
