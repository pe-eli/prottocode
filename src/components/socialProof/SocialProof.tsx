import React from "react";
import "./socialProof.css";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const SocialProof: React.FC = () => {
  const stats = [
    {
      number: "150+",
      label: "Empresas automatizadas",
      description: "[PLACEHOLDER: Substitua com número real]",
    },
    {
      number: "40%",
      label: "Redução de custos",
      description: "Economia média em tarefas operacionais",
    },
    {
      number: "300k+",
      label: "Horas economizadas",
      description: "Em processamento manual anualmente",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote:
        "[PLACEHOLDER: Substituir com depoimento real do cliente. Exemplo: 'Reduzimos o tempo de processamento de pedidos de 2 horas para 10 minutos. Agora nossa equipe foca em crescimento.']",
      author: "[Nome do Cliente]",
      role: "CEO / Diretor",
      company: "[Nome da Empresa]",
    },
    {
      quote:
        "[PLACEHOLDER: Adicionar segundo depoimento real. Foco em resultado específico alcançado.]",
      author: "[Nome do Cliente 2]",
      role: "Gerente Operacional",
      company: "[Empresa Parceira]",
    },
    {
      quote:
        "[PLACEHOLDER: Terceiro depoimento com métrica convincente sobre economia ou eficiência.]",
      author: "[Nome do Cliente 3]",
      role: "Diretor de Operações",
      company: "[Cliente Implementado]",
    },
  ];

  return (
    <section className="social-proof">
      <div className="container">
        {/* Stats Section */}
        <div className="proof-section">
          <h2>Confiança comprovada com numeros</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="proof-section">
          <h2>O que nossos clientes dizem</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Section */}
        <div className="proof-section">
          <p className="logo-section-title">
            Empresas que confiam na Prottocode:
          </p>
          <div className="logos-grid">
            <div className="logo-placeholder">
              [Logo Empresa 1]
            </div>
            <div className="logo-placeholder">
              [Logo Empresa 2]
            </div>
            <div className="logo-placeholder">
              [Logo Empresa 3]
            </div>
            <div className="logo-placeholder">
              [Logo Empresa 4]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
