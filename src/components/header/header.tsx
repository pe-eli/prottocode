import React, { useState, useEffect } from "react";
import logoImg from "../../assets/meu-logo.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "../../i18n/LanguageToggle";
import { useLanguage } from "../../i18n/LanguageContext";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <div className="brand">
            <div className="logo">
              <Link to="/" aria-label="Prottocode Home">
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
            <LanguageToggle />
          </nav>

          <div className="mobile-actions">
            <LanguageToggle />
            <button
              type="button"
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="side-overlay" onClick={() => setMenuOpen(false)} />}
      <aside
        id="mobile-menu"
        className={`side-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="side-nav">
          <Link to="/servicos" onClick={() => setMenuOpen(false)}>
            {t.header.services}
          </Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>
            {t.header.contact}
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Header;
