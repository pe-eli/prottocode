import React, { useState, useEffect } from "react";
import logoImg from "../../assets/meu-logo.png";
import "./header.css"
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">
            <Link to="/">
              <img src={logoImg} alt="Prottocode Logo" />
            </Link>
          </div>
          <div className="brand-text">
            <strong>Prottocode</strong>
            <small>Soluções com IA</small>
          </div>
        </div>
        <nav className="nav">
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
          <a href="#" className="btn btn-outline">
            Portfólio
          </a>
          <ThemeToggle />
        </nav>

        <div className="mobile-actions">
          <ThemeToggle />
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
          <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          <a href="#" className="btn btn-outline" onClick={() => setMenuOpen(false)}>
            Portfólio
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
