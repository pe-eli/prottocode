import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaClock } from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import "./contato.css";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div ref={ref} className={`fade-section ${isVisible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const formatarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);
    if (numeros.length <= 10) {
      return numeros.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return numeros.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);
    try {
      await emailjs.send(
        "service_q2fbg57", "template_qzqdjyv",
        { to_email: "prottocode@gmail.com", from_name: name, from_email: email, company: company || t.contatoPage.notInformed, whatsapp: whatsapp || t.contatoPage.notInformed, message },
        "Zx_ej2NKTM3Xb0rlr"
      );
      setName(""); setEmail(""); setWhatsapp(""); setCompany(""); setMessage("");
      setModalOpen(true);
      setTimeout(() => setModalOpen(false), 10000);
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert(t.contatoPage.errorText);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <div className="contato-page">
        <section className="contato-hero">
          <FadeSection>
            <h1>{t.contatoPage.heroTitle}<span className="contato-accent">{t.contatoPage.heroAccent}</span></h1>
            <p className="contato-hero-lead">{t.contatoPage.heroLead}</p>
          </FadeSection>
        </section>

        <section className="contato-main">
          <div className="container">
            <div className="contato-grid">
              <FadeSection>
                <div className="contato-form-card">
                  <h2>{t.contatoPage.formTitle}</h2>
                  <p className="contato-form-subtitle">{t.contatoPage.formSubtitle}</p>
                  <form onSubmit={handleSubmit} className="contato-form">
                    <div className="contato-field">
                      <label htmlFor="name">{t.contatoPage.labels.name}</label>
                      <input id="name" type="text" placeholder={t.contatoPage.placeholders.name} value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="email">{t.contatoPage.labels.email}</label>
                      <input id="email" type="email" placeholder={t.contatoPage.placeholders.email} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="whatsapp">{t.contatoPage.labels.whatsapp}</label>
                      <input id="whatsapp" type="text" placeholder={t.contatoPage.placeholders.whatsapp} value={whatsapp} onChange={(e) => setWhatsapp(formatarTelefone(e.target.value))} />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="company">{t.contatoPage.labels.company}</label>
                      <input id="company" type="text" placeholder={t.contatoPage.placeholders.company} value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <div className="contato-field full">
                      <label htmlFor="message">{t.contatoPage.labels.message}</label>
                      <textarea id="message" placeholder={t.contatoPage.placeholders.message} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <button type="submit" className="contato-submit" disabled={sending}>
                      {sending ? t.contatoPage.sending : t.contatoPage.submitButton}
                    </button>
                  </form>
                </div>
              </FadeSection>

              <FadeSection delay={0.15}>
                <div className="contato-info">
                  <div className="contato-info-card">
                    <div className="contato-info-icon whatsapp-icon"><FaWhatsapp /></div>
                    <div>
                      <h4>{t.contatoPage.infoWhatsapp}</h4>
                      <p>{t.contatoPage.infoWhatsappDesc}</p>
                      <a href="https://wa.me/5537998409691" target="_blank" rel="noopener noreferrer" className="contato-info-link">(37) 9840-9691</a>
                    </div>
                  </div>
                  <div className="contato-info-card">
                    <div className="contato-info-icon instagram-icon"><FaInstagram /></div>
                    <div>
                      <h4>{t.contatoPage.infoInstagram}</h4>
                      <p>{t.contatoPage.infoInstagramDesc}</p>
                      <a href="https://www.instagram.com/prottocode?igsh=MWFkdGczajN0dGJpOQ==" target="_blank" rel="noopener noreferrer" className="contato-info-link">@prottocode</a>
                    </div>
                  </div>
                  <div className="contato-info-card">
                    <div className="contato-info-icon email-icon"><FaEnvelope /></div>
                    <div>
                      <h4>{t.contatoPage.infoEmail}</h4>
                      <p>{t.contatoPage.infoEmailDesc}</p>
                      <a href="mailto:contato@prottocode.com" className="contato-info-link">prottocode@gmail.com</a>
                    </div>
                  </div>
                  <div className="contato-info-card">
                    <div className="contato-info-icon time-icon"><FaClock /></div>
                    <div>
                      <h4>{t.contatoPage.infoResponseTime}</h4>
                      <p>{t.contatoPage.infoResponseTimeDesc}</p>
                      <span className="contato-response-badge">{t.contatoPage.infoResponseBadge}</span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        <section className="contato-faq">
          <div className="container">
            <FadeSection>
              <div className="contato-faq-header"><h2>{t.contatoPage.faqTitle}</h2></div>
            </FadeSection>
            <div className="contato-faq-list">
              {t.contatoPage.faqs.map((faq, index) => (
                <FadeSection key={index} delay={index * 0.05}>
                  <div className={`contato-faq-item ${openFaq === index ? "open" : ""}`}>
                    <button className="contato-faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <span>{faq.question}</span>
                      <span className="contato-faq-icon">+</span>
                    </button>
                    <div className="contato-faq-answer"><p>{faq.answer}</p></div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        <section className="contato-cta">
          <FadeSection>
            <div className="container">
              <div className="contato-cta-card">
                <h2>{t.contatoPage.ctaTitle}</h2>
                <p>{t.contatoPage.ctaText}</p>
                <a href="https://wa.me/5537998409691" target="_blank" rel="noopener noreferrer" className="contato-whatsapp-btn">
                  <FaWhatsapp /> {t.contatoPage.ctaButton}
                </a>
              </div>
            </div>
          </FadeSection>
        </section>
      </div>
      <Footer />

      {modalOpen && (
        <div className="contato-modal" onClick={() => setModalOpen(false)}>
          <div className="contato-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="contato-modal-icon">✔</div>
            <h3>{t.contatoPage.successTitle}</h3>
            <p>{t.contatoPage.successText}</p>
          </div>
        </div>
      )}
    </>
  );
}
