import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaComments,
  FaChartBar,
  FaDatabase,
  FaGlobe,
  FaPlug,
  FaCheck,
  FaRobot,
} from "react-icons/fa";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Differentiators from "../../components/differentiators/Differentiators";
import { useInView } from "../../hooks/useInView";
import "./servicos.css";

interface ServiceDetail {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: { name: string; ai?: boolean }[];
}

const serviceDetails: ServiceDetail[] = [
  {
    icon: <FaCog />,
    title: "Automação de Processos",
    tagline:
      "Integração de sistemas e eliminação de tarefas repetitivas. Ideal para fluxos operacionais complexos.",
    description:
      "Seu pessoal gasta horas todos os dias fazendo tarefas chatas e repetitivas. Com automação, isso acontece sozinho. Sua equipe fica livre para trabalhos que realmente importam — menos gasto, mais lucro.",
    features: [
      { name: "Agendamento automático de tarefas" },
      { name: "Notificações e alertas personalizados" },
      { name: "Dashboard de monitoramento em tempo real" },
      { name: "Exportação de dados em múltiplos formatos" },
      { name: "Relatórios automáticos por e-mail" },
      { name: "Detecção inteligente de gargalos no fluxo", ai: true },
      { name: "Otimização automática de rotas de processo", ai: true },
      { name: "Previsão de falhas e manutenção preventiva", ai: true },
    ],
  },
  {
    icon: <FaComments />,
    title: "Chatbot com IA",
    tagline:
      "Atendimento ao cliente 24/7 com respostas inteligentes e personalizadas.",
    description:
      "Ofertas, pedidos e mensagens chegam fora do horário. A automação trabalha 24 horas — pedidos são processados à noite, clientes recebem respostas sempre, seu dinheiro não para.",
    features: [
      { name: "Histórico de conversas e análise de sentimento" },
      { name: "Integração com WhatsApp, Telegram ou Facebook" },
      { name: "Respostas personalizadas por perfil de cliente" },
      { name: "Transferência inteligente para atendente humano" },
      { name: "Análise de sentimento em tempo real", ai: true },
      { name: "Geração automática de respostas contextuais", ai: true },
      { name: "Aprendizado contínuo com base nas interações", ai: true },
      { name: "Classificação automática de intenções do cliente", ai: true },
    ],
  },
  {
    icon: <FaChartBar />,
    title: "Análise de Dados & Relatórios",
    tagline:
      "Transforme seus dados em insights. Relatórios automáticos e previsões precisas.",
    description:
      "Difícil saber se a empresa está crescendo, onde está o dinheiro, o que está vendendo mais ou menos. Relatórios automáticos mostram tudo claro e simples — você toma decisões com confiança.",
    features: [
      { name: "Dashboard de monitoramento em tempo real" },
      { name: "Exportação de dados em múltiplos formatos" },
      { name: "Relatórios automáticos por e-mail" },
      { name: "Notificações e alertas personalizados" },
      { name: "Previsão de tendências e sazonalidade", ai: true },
      { name: "Detecção automática de anomalias nos dados", ai: true },
      { name: "Recomendações inteligentes baseadas em padrões", ai: true },
      { name: "Geração automática de resumos e insights", ai: true },
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Extração de Dados",
    tagline:
      "Colete dados automaticamente de fontes múltiplas e centralize informações.",
    description:
      "Dados espalhados em planilhas, e-mails e sistemas diferentes geram retrabalho e erros. Centralize tudo automaticamente e tenha uma visão única e confiável do seu negócio.",
    features: [
      { name: "Agendamento automático de coletas" },
      { name: "Exportação de dados em múltiplos formatos" },
      { name: "Dashboard de monitoramento em tempo real" },
      { name: "Notificações e alertas personalizados" },
      { name: "Classificação automática de dados coletados", ai: true },
      { name: "Limpeza inteligente e deduplicação de dados", ai: true },
      {
        name: "Reconhecimento de padrões em fontes não estruturadas",
        ai: true,
      },
      { name: "Extração semântica de informações de documentos", ai: true },
    ],
  },
  {
    icon: <FaGlobe />,
    title: "Website Automatizado",
    tagline:
      "Site profissional com funcionalidades inteligentes e automações integradas.",
    description:
      "Mais do que um site bonito — um sistema que trabalha por você. Atenda visitantes, colete leads e converta clientes automaticamente, sem intervenção manual.",
    features: [
      { name: "Integração com WhatsApp, Telegram ou Facebook" },
      { name: "Dashboard de monitoramento de acessos" },
      { name: "Notificações e alertas personalizados" },
      { name: "Relatórios automáticos por e-mail" },
      { name: "Chatbot integrado para atendimento ao visitante", ai: true },
      { name: "Personalização dinâmica de conteúdo por perfil", ai: true },
      { name: "Otimização automática de SEO e performance", ai: true },
      { name: "Geração de textos e descrições com IA", ai: true },
    ],
  },
  {
    icon: <FaPlug />,
    title: "Integração com Ferramentas",
    tagline:
      "Conecte seus sistemas favoritos (CRM, e-mail, redes sociais, etc).",
    description:
      "Seus sistemas não conversam entre si? Isso gera retrabalho e informações desatualizadas. Conectamos tudo para que seus dados fluam livremente entre plataformas.",
    features: [
      { name: "Agendamento automático de sincronizações" },
      { name: "Dashboard de monitoramento em tempo real" },
      { name: "Notificações e alertas personalizados" },
      { name: "Exportação de dados em múltiplos formatos" },
      { name: "Mapeamento inteligente de campos entre sistemas", ai: true },
      { name: "Resolução automática de conflitos de dados", ai: true },
      {
        name: "Detecção de falhas de integração com autocorreção",
        ai: true,
      },
      { name: "Classificação e roteamento inteligente de dados", ai: true },
    ],
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quanto tempo antes de ver resultados?",
    answer:
      "Você começa a ver impacto em 30-60 dias. Os primeiros resultados (redução de erros, economia de horas) aparecem em 2-3 semanas. ROI completo é medido em 2-3 meses.",
  },
  {
    question: "Preciso conhecer programação ou IT?",
    answer:
      "Não. Você não precisa conhecer nada de tecnologia. Nós cuidamos de tudo: design, implementação, integração e suporte. Sua equipe apenas usa o sistema.",
  },
  {
    question: "Qual é o investimento?",
    answer:
      "Depende da complexidade da sua automação. Conversamos para entender seu case, fazemos uma proposta customizada e você sabe exatamente quanto vai custar. Sem mistérios, sem taxas escondidas.",
  },
  {
    question: "Posso integrar com meus sistemas atuais?",
    answer:
      "Sim, com qualquer sistema. Seja ERP, CRM, e-commerce, banco de dados ou qualquer software que você use. Se tem uma API, a gente conecta.",
  },
  {
    question: "E se precisar fazer mudanças depois de implementado?",
    answer:
      "Sem problema. Você tem suporte dedicado. Novos processos, mudanças de regra, novas integrações — tudo pode ser ajustado. Sua automação cresce junto com seu negócio.",
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

export default function Servicos() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div className="servicos-page">
        {/* Hero */}
        <section className="servicos-hero">
          <FadeSection>
            <h1>
              Nossas Soluções de{" "}
              <span className="servicos-accent">IA & Automação</span>
            </h1>
            <p className="servicos-hero-lead">
              Transforme processos manuais em automações inteligentes que crescem
              com seu negócio. Conheça cada solução em detalhe.
            </p>
            <Link to="/orcamento" className="servicos-btn-primary">
              Solicitar Proposta
            </Link>
          </FadeSection>
        </section>

        {/* Service Detail Cards */}
        <section className="servicos-grid-section">
          <div className="container">
            <div className="servicos-grid">
              {serviceDetails.map((service, index) => (
                <FadeSection key={index} delay={index * 0.1}>
                  <div className="servicos-card">
                    <div className="servicos-card-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p className="servicos-card-tagline">{service.tagline}</p>
                    <p className="servicos-card-desc">{service.description}</p>

                    <div className="servicos-card-features">
                      <h4>Funcionalidades incluídas:</h4>
                      <ul>
                        {service.features.map((feat, fi) => (
                          <li key={fi}>
                            <FaCheck className="feature-check-icon" />
                            <span>{feat.name}</span>
                            {feat.ai && (
                              <span className="servicos-ai-tag">
                                <FaRobot /> IA
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/orcamento" className="servicos-card-cta">
                      Solicitar Proposta
                    </Link>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works (reuse existing component) */}
        <HowItWorks />

        {/* Differentiators (reuse existing component) */}
        <Differentiators />

        {/* FAQ */}
        <section className="servicos-faq">
          <div className="container">
            <FadeSection>
              <div className="servicos-faq-header">
                <h2>Perguntas Frequentes</h2>
                <p>
                  Tire suas dúvidas sobre nossos serviços antes de solicitar uma
                  proposta.
                </p>
              </div>
            </FadeSection>

            <div className="servicos-faq-list">
              {faqs.map((faq, index) => (
                <FadeSection key={index} delay={index * 0.05}>
                  <div
                    className={`servicos-faq-item ${openFaq === index ? "open" : ""}`}
                  >
                    <button
                      className="servicos-faq-question"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <span className="servicos-faq-icon">+</span>
                    </button>
                    <div className="servicos-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="servicos-cta">
          <FadeSection>
            <div className="container">
              <div className="servicos-cta-card">
                <h2>Pronto para automatizar seu negócio?</h2>
                <p>
                  Converse com nosso time e descubra qual solução é ideal para
                  o seu caso. Sem compromisso.
                </p>
                <div className="servicos-cta-buttons">
                  <Link to="/orcamento" className="servicos-btn-primary">
                    Solicitar Proposta
                  </Link>
                  <Link to="/contato" className="servicos-btn-ghost">
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </div>
          </FadeSection>
        </section>
      </div>
      <Footer />
    </>
  );
}
