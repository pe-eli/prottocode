import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal from "../Reveal";
import "./hero.css";

const STAR_COUNT = 40;

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 2,
      })),
    [],
  );

  const productIcons = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" ry="2" /><path d="M12 18h.01" /><path d="M9 6h6" /><path d="M5 8c1.2-1.4 3-2 5-2" /><path d="M19 8c-1.2-1.4-3-2-5-2" /></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  ];

  return (
    <section className="hero">
      {/* ---- Background Effects ---- */}
      <div className="hero-bg" aria-hidden="true">
        {/* Stars */}
        {stars.map((s) => (
          <span
            key={s.id}
            className="hero-star"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
        {/* Glow arcs */}
        <div className="hero-glow hero-glow--center" />
        <div className="hero-glow hero-glow--left" />
        <div className="hero-glow hero-glow--right" />
        {/* Horizon line */}
        <div className="hero-horizon" />
      </div>

      {/* ---- Content ---- */}
      <div className="hero-inner">
        <Reveal delay={0.1}>
          <h1>
            <span className="hero-headline">{t.hero.headlinePrimary}</span>
            {t.hero.headlineAccent ? (
              <>
                <br />
                <span className="accent">{t.hero.headlineAccent}</span>
              </>
            ) : null}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lead">{t.hero.lead}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-ctas">
            <Link to="/site-orcamento" className="btn-primary">{t.hero.ctaPrimary}</Link>
            <Link to="/whatsapp-automatico" className="btn-secondary">{t.hero.ctaGhost}</Link>
          </div>
          {t.hero.guarantee ? <p className="hero-guarantee">{t.hero.guarantee}</p> : null}
        </Reveal>
      </div>

      {/* ---- Product Cards ---- */}
      <div className="container">
        <Reveal>
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>{t.hero.solutionsTitle}</h2>
        </Reveal>
        <div className="hero-products">
          {t.hero.products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-icon">{productIcons[index] ?? productIcons[0]}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {product.benefits?.length ? (
                <ul className="product-benefits">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
                  ))}
                </ul>
              ) : null}
              <span className="product-badge available">{product.badge}</span>
              <Link to={product.href ?? "/orcamento"} className="product-cta">{product.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
