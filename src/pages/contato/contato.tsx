import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useInView } from "../../hooks/useInView";
import "./contato.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qual é exatamente o diferencial da Prottocode?",
    answer:
      "Somos especialistas em IA aplicada a automação. Não somos uma agência genérica. IA é o core do que fazemos. Você tem um especialista dedicado, implementação rápida, preço fixo, e ROI comprovado.",
  },
  {
    question: "Como funciona a segurança dos dados?",
    answer:
      "Levamos muito a sério. Usamos criptografia de ponta a ponta, backups automáticos, compliance com LGPD, e infraestrutura enterprise. Seus dados ficam seguros.",
  },
];

function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`fade-section ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSending(true);
    try {
      await emailjs.send(
        "service_7dz39lq",
        "template_wxfinwi",
        {
          from_name: name,
          from_email: email,
          company,
          message: `${message}\n\nWhatsApp: ${whatsapp || "Não informado"}`,
        },
        "Zx_ej2NKTM3Xb0rlr"
      );

      setName("");
      setEmail("");
      setWhatsapp("");
      setCompany("");
      setMessage("");
      setModalOpen(true);
      setTimeout(() => setModalOpen(false), 10000);
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <div className="contato-page">
        {/* Hero */}
        <section className="contato-hero">
          <FadeSection>
            <h1>
              Entre em{" "}
              <span className="contato-accent">Contato</span>
            </h1>
            <p className="contato-hero-lead">
              Estamos prontos para ajudar a transformar seu negócio. Escolha a
              melhor forma de falar conosco.
            </p>
          </FadeSection>
        </section>

        {/* Main content: form + info */}
        <section className="contato-main">
          <div className="container">
            <div className="contato-grid">
              {/* Left: form */}
              <FadeSection>
                <div className="contato-form-card">
                  <h2>Envie sua mensagem</h2>
                  <p className="contato-form-subtitle">
                    Preencha o formulário e responderemos em até 24h.
                  </p>
                  <form onSubmit={handleSubmit} className="contato-form">
                    <div className="contato-field">
                      <label htmlFor="name">Nome *</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="email">E-mail *</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="whatsapp">WhatsApp</label>
                      <input
                        id="whatsapp"
                        type="text"
                        placeholder="(00) 00000-0000"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                      />
                    </div>
                    <div className="contato-field">
                      <label htmlFor="company">Empresa</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Nome da sua empresa (opcional)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                    <div className="contato-field full">
                      <label htmlFor="message">Mensagem *</label>
                      <textarea
                        id="message"
                        placeholder="Descreva seu projeto ou dúvida..."
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="contato-submit"
                      disabled={sending}
                    >
                      {sending ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </form>
                </div>
              </FadeSection>

              {/* Right: contact info */}
              <FadeSection delay={0.15}>
                <div className="contato-info">
                  <div className="contato-info-card">
                    <div className="contato-info-icon whatsapp-icon">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4>WhatsApp</h4>
                      <p>Atendimento rápido e direto</p>
                      <a
                        href="https://wa.me/5537998409691"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-info-link"
                      >
                        (37) 9840-9691
                      </a>
                    </div>
                  </div>

                  <div className="contato-info-card">
                    <div className="contato-info-icon instagram-icon">
                      <FaInstagram />
                    </div>
                    <div>
                      <h4>Instagram</h4>
                      <p>Siga nosso trabalho</p>
                      <a
                        href="https://www.instagram.com/prottocode?igsh=MWFkdGczajN0dGJpOQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contato-info-link"
                      >
                        @prottocode
                      </a>
                    </div>
                  </div>

                  <div className="contato-info-card">
                    <div className="contato-info-icon email-icon">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4>E-mail</h4>
                      <p>Para propostas e parcerias</p>
                      <a
                        href="mailto:contato@prottocode.com"
                        className="contato-info-link"
                      >
                        prottocode@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contato-info-card">
                    <div className="contato-info-icon time-icon">
                      <FaClock />
                    </div>
                    <div>
                      <h4>Tempo de resposta</h4>
                      <p>Respondemos todas as mensagens</p>
                      <span className="contato-response-badge">
                        Em até 24h
                      </span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="contato-faq">
          <div className="container">
            <FadeSection>
              <div className="contato-faq-header">
                <h2>Dúvidas Frequentes</h2>
              </div>
            </FadeSection>

            <div className="contato-faq-list">
              {faqs.map((faq, index) => (
                <FadeSection key={index} delay={index * 0.05}>
                  <div
                    className={`contato-faq-item ${openFaq === index ? "open" : ""}`}
                  >
                    <button
                      className="contato-faq-question"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span className="contato-faq-icon">+</span>
                    </button>
                    <div className="contato-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contato-cta">
          <FadeSection>
            <div className="container">
              <div className="contato-cta-card">
                <h2>Prefere falar agora?</h2>
                <p>
                  Chame no WhatsApp e converse diretamente com nosso time.
                  Estamos prontos para atender você.
                </p>
                <a
                  href="https://wa.me/5537998409691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contato-whatsapp-btn"
                >
                  <FaWhatsapp /> Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </FadeSection>
        </section>
      </div>
      <Footer />

      {/* Success Modal */}
      {modalOpen && (
        <div className="contato-modal" onClick={() => setModalOpen(false)}>
          <div className="contato-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="contato-modal-icon">✔</div>
            <h3>Mensagem enviada!</h3>
            <p>
              Recebemos sua solicitação. Nossa equipe entrará em contato em até
              24h para dar andamento.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
