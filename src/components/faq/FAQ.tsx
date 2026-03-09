import React, { useState } from "react";
import "./faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Quanto tempo antes de ver resultados?",
      answer:
        "Você começa a ver impacto em 30-60 dias. Os primeiros resultados (redução de erros, economia de horas) aparecem em 2-3 semanas. ROI completo é medido em 2-3 meses. Cada caso é único, mas temos histórico de implementação rápida.",
    },
    {
      question: "Preciso conhecer programação ou IT?",
      answer:
        "Não. Você não precisa conhecer nada de tecnologia. Nós cuidamos de tudo: design, implementação, integração e suporte. Sua equipe precisa apenas usar o sistema e fornecer informações sobre como seu processo funciona.",
    },
    {
      question: "Qual é o investimento?",
      answer:
        "Depende da complexidade da sua automação. Conversamos para entender seu case, fazemos uma proposta customizada e você sabe exatamente quanto vai custar. Sem mistérios, sem taxas escondidas. O ROI geralmente compensa o investimento em poucos meses.",
    },
    {
      question: "Como funciona a segurança dos dados?",
      answer:
        "Levamos muito a sério. Usamos criptografia de ponta a ponta, backups automáticos, compliance com LGPD, e infraestrutura enterprise. Seus dados ficam seguros. Oferecemos também auditorias de segurança periódicas.",
    },
    {
      question: "Posso integrar com meus sistemas atuais?",
      answer:
        "Sim, com qualquer sistema. Seja ERP, CRM, e-commerce, banco de dados ou qualquer software que você use. Se tem uma API, a gente conecta. Se não tem, a gente cria a integração para funcionar.",
    },
    {
      question: "E se precisar fazer mudanças depois de implementado?",
      answer:
        "Sem problema. Você tem suporte dedicado. Novos processos, mudanças de regra, novas integrações — tudo pode ser ajustado. Sua automação cresce junto com seu negócio.",
    },
    {
      question: "Qual é exatamente o diferencial da Prottocode?",
      answer:
        "Somos especialistas em IA aplicada a automação. Não somos uma agência genérica que faz tudo. IA é o core do que fazemos. Você tem um especialista dedicado, implementação rápida, preço fixo, e ROI comprovado. Outras soluções automatizam processos dumb. A gente coloca inteligência em cada etapa.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Perguntas Frequentes</h2>
          <p className="section-lead">
            Tire suas dúvidas antes de começar. Se não encontrar o que procura, fale conosco.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <h3>Ainda tem dúvidas?</h3>
          <p>Fale direto com nosso time. Estamos aqui para responder tudo.</p>
          <a href="https://wa.me/5537998409691" className="btn-secondary">
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
