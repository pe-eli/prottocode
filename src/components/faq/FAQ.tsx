import React, { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./faq.css";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>{t.faq.title}</h2>
          <p className="section-lead">{t.faq.lead}</p>
        </div>
        <div className="faq-container">
          {t.faq.items.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleAccordion(index)} aria-expanded={openIndex === index}>
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <h3>{t.faq.ctaTitle}</h3>
          <p>{t.faq.ctaText}</p>
          <a href="https://wa.me/5537998409691" className="btn-secondary">{t.faq.ctaButton}</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
