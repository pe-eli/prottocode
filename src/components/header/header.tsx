import React from "react";
import logoImg from "../../assets/meu-logo.png"; 
import "./header.css"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
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
            <small>Desenvolvimento & Design</small>
          </div>
        </div>
        <nav className="nav">
          <Link to="/servicos">Serviços</Link>
          <Link to="/contato">Contato</Link>
          <a href="#" className="btn btn-outline">
            Portfólio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
