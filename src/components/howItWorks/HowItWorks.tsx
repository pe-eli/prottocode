import React from "react";
import "./howItWorks.css";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Diagnóstico",
      description:
        "Entendemos seus processos, desafios e objetivos. Identificamos oportunidades rápidas e impacto potencial.",
      icon: "📋",
    },
    {
      number: 2,
      title: "Design",
      description:
        "Criamos o fluxo automático customizado. Definimos integrações, regras de IA e configurações específicas do seu negócio.",
      icon: "🎨",
    },
    {
      number: 3,
      title: "Implementação",
      description:
        "Colocamos em produção com testes rigorosos. Garantimos zero downtime e treinamento da sua equipe.",
      icon: "🚀",
    },
    {
      number: 4,
      title: "Otimização",
      description:
        "Monitoramos performance, ajustamos regras e escalamos. Você vê ROI em 30-60 dias.",
      icon: "📈",
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2>Como Funciona</h2>
          <p className="section-lead">
            De zero a automação em 4 passos. Rápido, eficiente, resultado comprovado.
          </p>
        </div>

        {/* Timeline Horizontal */}
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={step.number} className="timeline-item">
              {/* Step Card */}
              <div className="step-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="timeline-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="how-it-works-cta">
          <h3>Quer começar agora?</h3>
          <p>
            Agende uma conversa de 20 minutos com nosso especialista. Vamos avaliar seu caso e mostrar o impacto possível.
          </p>
          <a href="/orcamento" className="btn-primary">
            Agendar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
