import React from "react";
import logoImg from "../../assets/Semnome.png"; // ajuste o caminho se necessário

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand small">
          <div className="logo small">
            <img src={logoImg} alt="Prottocode Logo" />
          </div>
          <div>
            <strong>Prottocode</strong>
            <small> Desenvolvimento & Design</small>
          </div>
        </div>
        <div className="credits">
          © {new Date().getFullYear()} Prottocode. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
