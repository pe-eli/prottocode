import React from "react";
import "./services.css";

interface Benefit {
  icon: string;
  title: string;
  situation: string;
  result: string;
}

const benefits: Benefit[] = [
  {
    icon: "💰",
    title: "Você economiza dinheiro real",
    situation: "Seu pessoal gasta horas todos os dias fazendo tarefas chatas e repetitivas (digitação, envio de documentos, conferência de dados).",
    result: "Com automação, isso acontece sozinho. Sua equipe fica livre para fazer trabalhos que realmente importam. Menos gasto, mais lucro.",
  },
  {
    icon: "⏰",
    title: "Seu negócio não dorme mais",
    situation: "Ofertas, pedidos e mensagens chegam fora do horário. Seus clientes esperam ou procuram concorrentes.",
    result: "A automação trabalha 24 horas. Pedidos são processados à noite, clientes recebem respostas sempre, seu dinheiro não para.",
  },
  {
    icon: "📊",
    title: "Você entende seus números",
    situation: "Difícil saber se a empresa está crescendo, onde está o dinheiro, o que está vendendo mais ou menos.",
    result: "Relatórios automáticos mostram tudo claro e simples. Você toma decisões com confiança, sem adivinhar.",
  },
  {
    icon: "😊",
    title: "Seus clientes ficam mais felizes",
    situation: "Clientes esperando resposta, pedidos com atraso, problemas não resolvidos. Ficam irritados e vão embora.",
    result: "Respostas rápidas, pedidos certos e na hora. Clientes voltam e indicam para outros. Negócio cresce naturalmente.",
  },
  {
    icon: "📈",
    title: "Você cresce sem complicação",
    situation: "Crescer significa contratar mais gente, treinar, gastar mais. Rápido fica caro e complicado.",
    result: "Automação cresce com você, sem custos extras. Se vende 10 ou 1000 pedidos por dia, o sistema executa tudo igual.",
  },
  {
    icon: "🔒",
    title: "Seus dados ficam seguros",
    situation: "Planilhas com senhas, informações de clientes soltas, risco de perder tudo em um problema técnico.",
    result: "Tudo guardado de forma segura. Backup automático. Seus dados estão garantidos, conforme a lei.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="beneficios" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>O que muda no seu negócio</h2>
          <p>
            Automação é simples: você deixa de fazer tarefas chatas à mão.
            Você se concentra em crescimento. A máquina cuida do resto.
          </p>
        </div>

        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p className="situation">
                  <strong>Antes:</strong> {benefit.situation}
                </p>
                <p className="result">
                  <strong>Depois:</strong> {benefit.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-cta">
          <p>Entendeu o impacto? Vamos conversar sobre seu negócio específico.</p>
          <a href="/orcamento" className="btn-primary">
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;