import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaBolt, FaLock, FaFileContract, FaShieldAlt } from "react-icons/fa";
import logoImg from "../../assets/meu-logo.png";
import { useLanguage } from "../../i18n/LanguageContext";
import Reveal from "../Reveal";
import "./footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <Reveal>
            <div className="footer-grid">
              <div className="footer-column">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <img src={logoImg} alt="Prottocode Logo" />
                  </div>
                  <div>
                    <h3>Prottocode</h3>
                    <p>{t.footer.brandSubtitle}</p>
                  </div>
                </div>
                <p className="footer-description">{t.footer.description}</p>
              </div>
              <div className="footer-column">
                <h4>{t.footer.solutionsTitle}</h4>
                <ul>
                  <li><Link to="/servicos" className="link-hover">{t.footer.links.services}</Link></li>
                  <li><Link to="/orcamento" className="link-hover">{t.footer.links.requestProposal}</Link></li>
                  <li><Link to="/contato" className="link-hover">{t.footer.links.contact}</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>{t.footer.companyTitle}</h4>
                <ul>
                  <li><Link to="/" className="link-hover">{t.footer.links.home}</Link></li>
                  <li><Link to="/servicos" className="link-hover">{t.footer.links.whyProttocode}</Link></li>
                  <li><Link to="/contato" className="link-hover">{t.footer.links.contact}</Link></li>
                  <li><Link to="/privacidade" className="link-hover">{t.footer.links.privacyPolicy}</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>{t.footer.contactTitle}</h4>
                <ul className="contact-list">
                  <li><a href="https://wa.me/5537998409691" className="contact-link"><FaWhatsapp /> WhatsApp</a></li>
                  <li><a href="mailto:contato@prottocode.com" className="contact-link"><FaEnvelope /> Email</a></li>
                  <li><a href="https://instagram.com/prottocode" className="contact-link"><FaInstagram /> Instagram</a></li>
                </ul>
                <p className="response-time"><FaBolt /> {t.footer.responseTime}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© {currentYear} Prottocode. {t.footer.copyright}</p>
            <div className="trust-badges">
              <span className="badge"><FaLock /> {t.footer.badges.secure}</span>
              <span className="badge"><FaFileContract /> {t.footer.badges.lgpd}</span>
              <span className="badge"><FaShieldAlt /> {t.footer.badges.dataProtected}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
