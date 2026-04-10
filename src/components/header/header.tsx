import React, { useState, useEffect } from "react";
import logoImg from "../../assets/meu-logo.png";
import "./header.css"
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../../i18n/LanguageToggle";
import { useLanguage } from "../../i18n/LanguageContext";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <div className="brand">
          <div className="logo">
            <Link to="/">
              <img src={logoImg} alt="Prottocode Logo" />
            </Link>
          </div>
          <div className="brand-text">
            <strong>Prottocode</strong>
          </div>
        </div>
        <nav className="nav">
          <Link to="/servicos">{t.header.services}</Link>
          <Link to="/contato">{t.header.contact}</Link>
          <Link to="/portfolio" className="btn btn-outline">
            {t.header.portfolio}
          </Link>
          <ThemeToggle />
          <LanguageToggle />
        </nav>

        <div className="mobile-actions">
          <ThemeToggle />
          <LanguageToggle />
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && <div className="side-overlay" onClick={() => setMenuOpen(false)} />}
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <nav className="side-nav">
          <Link to="/servicos" onClick={() => setMenuOpen(false)}>{t.header.services}</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>{t.header.contact}</Link>
          <Link to="/portfolio" className="btn btn-outline" onClick={() => setMenuOpen(false)}>
            {t.header.portfolio}
          </Link>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
