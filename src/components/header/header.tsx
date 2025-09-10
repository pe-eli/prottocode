import React from "react";
import logoImg from "../../assets/Semnome.png"; // ajuste o caminho se necessário
import "./header.css"

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">
            <img src={logoImg} alt="Prottocode Logo" />
          </div>
          <div className="brand-text">
            <strong>Prottocode</strong>
            <small>Desenvolvimento & Design</small>
          </div>
        </div>
        <nav className="nav">
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
          <a href="#" className="btn btn-outline">
            Portfólio
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
