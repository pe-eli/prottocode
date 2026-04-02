import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="testimonials container">
      <h2>{t.testimonials.title}</h2>
      <div className="test-list">
        {t.testimonials.items.map((v) => (
          <blockquote key={v.titulo} className="test-card">
            <p><strong>{v.titulo}:</strong> {v.descricao}</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
