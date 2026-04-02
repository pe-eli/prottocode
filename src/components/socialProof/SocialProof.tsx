import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./socialProof.css";

const SocialProof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="social-proof">
      <div className="container">
        <div className="proof-section">
          <h2>{t.socialProof.statsTitle}</h2>
          <div className="stats-grid">
            {t.socialProof.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="proof-section">
          <h2>{t.socialProof.testimonialsTitle}</h2>
          <div className="testimonials-grid">
            {t.socialProof.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="proof-section">
          <p className="logo-section-title">{t.socialProof.logosTitle}</p>
          <div className="logos-grid">
            <div className="logo-placeholder">[Logo Empresa 1]</div>
            <div className="logo-placeholder">[Logo Empresa 2]</div>
            <div className="logo-placeholder">[Logo Empresa 3]</div>
            <div className="logo-placeholder">[Logo Empresa 4]</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
