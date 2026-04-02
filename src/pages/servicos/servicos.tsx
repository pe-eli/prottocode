import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCog, FaComments, FaChartBar, FaDatabase, FaGlobe, FaPlug, FaCheck, FaRobot } from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Differentiators from "../../components/differentiators/Differentiators";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import "./servicos.css";

const serviceIcons = [<FaGlobe />, <FaComments />, <FaCog />, <FaChartBar />, <FaDatabase />, <FaPlug />];

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div ref={ref} className={`fade-section ${isVisible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Servicos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <div className="servicos-page">
        <section className="servicos-hero">
          <FadeSection>
            <h1>{t.servicosPage.heroTitle}<span className="servicos-accent">{t.servicosPage.heroAccent}</span></h1>
            <p className="servicos-hero-lead">{t.servicosPage.heroLead}</p>
            <Link to="/orcamento" className="servicos-btn-primary">{t.servicosPage.heroButton}</Link>
          </FadeSection>
        </section>

        <section className="servicos-grid-section">
          <div className="container">
            <div className="servicos-grid">
              {t.servicosPage.serviceDetails.map((service, index) => (
                <FadeSection key={index} delay={index * 0.1}>
                  <div className="servicos-card">
                    <div className="servicos-card-icon">{serviceIcons[index]}</div>
                    <h3>{service.title}</h3>
                    <p className="servicos-card-tagline">{service.tagline}</p>
                    <p className="servicos-card-desc">{service.description}</p>
                    <div className="servicos-card-features">
                      <h4>{t.servicosPage.featuresIncluded}</h4>
                      <ul>
                        {service.features.map((feat, fi) => (
                          <li key={fi}>
                            <FaCheck className="feature-check-icon" />
                            <span>{feat.name}</span>
                            {feat.ai && <span className="servicos-ai-tag"><FaRobot /> IA</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/orcamento" className="servicos-card-cta">{t.servicosPage.requestProposal}</Link>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <Differentiators />

        <section className="servicos-faq">
          <div className="container">
            <FadeSection>
              <div className="servicos-faq-header">
                <h2>{t.servicosPage.faqTitle}</h2>
                <p>{t.servicosPage.faqSubtitle}</p>
              </div>
            </FadeSection>
            <div className="servicos-faq-list">
              {t.servicosPage.faqs.map((faq, index) => (
                <FadeSection key={index} delay={index * 0.05}>
                  <div className={`servicos-faq-item ${openFaq === index ? "open" : ""}`}>
                    <button className="servicos-faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <span>{faq.question}</span>
                      <span className="servicos-faq-icon">+</span>
                    </button>
                    <div className="servicos-faq-answer"><p>{faq.answer}</p></div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        <section className="servicos-cta">
          <FadeSection>
            <div className="container">
              <div className="servicos-cta-card">
                <h2>{t.servicosPage.ctaTitle}</h2>
                <p>{t.servicosPage.ctaText}</p>
                <div className="servicos-cta-buttons">
                  <Link to="/orcamento" className="servicos-btn-primary">{t.servicosPage.ctaBtnPrimary}</Link>
                  <Link to="/contato" className="servicos-btn-ghost">{t.servicosPage.ctaBtnGhost}</Link>
                </div>
              </div>
            </div>
          </FadeSection>
        </section>
      </div>
      <Footer />
    </>
  );
}
