import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaBolt, FaLock, FaFileContract, FaShieldAlt } from "react-icons/fa";
import logoImg from "../../assets/meu-logo.png";
import "./footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-column">
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src={logoImg} alt="Prottocode Logo" />
                </div>
                <div>
                  <h3>Prottocode</h3>
                  <p>Automação Inteligente com IA</p>
                </div>
              </div>
              <p className="footer-description">
                Transformando processos manuais em automações inteligentes que crescem com seu negócio.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Soluções</h4>
              <ul>
                <li>
                  <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link to="/orcamento">Solicitar Proposta</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>

            {/* Legal & Info */}
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/servicos">Por Que Prottocode?</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="footer-column">
              <h4>Contato</h4>
              <ul className="contact-list">
                <li>
                  <a href="https://wa.me/5524999348783" className="contact-link">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@prottocode.com" className="contact-link">
                    <FaEnvelope /> Email
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/prottocode" className="contact-link">
                    <FaInstagram /> Instagram
                  </a>
                </li>
              </ul>
              <p className="response-time">
                <FaBolt /> Resposta em até 24h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Prottocode. Todos os direitos reservados.
            </p>
            <div className="trust-badges">
              <span className="badge"><FaLock /> HTTPS Seguro</span>
              <span className="badge"><FaFileContract /> LGPD Compliant</span>
              <span className="badge"><FaShieldAlt /> Dados Protegidos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
