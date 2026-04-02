import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useLanguage } from "../../i18n/LanguageContext";
import "./privacidade.css";

const Privacidade: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="priv-page">
        <div className="priv-container">
          <div className="priv-header">
            <div className="priv-badge">{t.privacidadePage.badge}</div>
            <h1>{t.privacidadePage.title}<span className="priv-accent">{t.privacidadePage.titleAccent}</span></h1>
            <p className="priv-subtitle">{t.privacidadePage.subtitle}</p>
            <span className="priv-date">{t.privacidadePage.date}</span>
          </div>
          <div className="priv-content">
            {t.privacidadePage.sections.map((section) => (
              <div className="priv-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.list && (
                  <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacidade;
