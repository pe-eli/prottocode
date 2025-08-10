import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand small">
          <div className="logo small">PC</div>
          <div>
            <strong>Prottocode</strong>
            <small> Desenvolvimento & Design</small>
          </div>
        </div>
        <div className="credits">© {new Date().getFullYear()} Prottocode. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;