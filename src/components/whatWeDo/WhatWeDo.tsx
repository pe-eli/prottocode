import React from "react";
import { Link } from "react-router-dom";
import "./whatWeDo.css";

const WhatWeDo: React.FC = () => {
  const pillars = [
    {
      title: "Automação",
      description:
        "Eliminamos tarefas manuais repetitivas. Pedidos, notas fiscais, e-mails, pagamentos — tudo processado automaticamente 24/7.",
      icon: "⚙️",
    },
    {
      title: "Inteligência Artificial",
      description:
        "A IA toma decisões por você. Analisa padrões, identifica problemas, gera insights. Não é só execução, é inteligência.",
      icon: "🧠",
    },
    {
      title: "Integração",
      description:
        "Conectamos todos seus sistemas. CRM, ERP, e-commerce, banco de dados. Seus dados fluem livremente entre plataformas.",
      icon: "🔗",
    },
  ];

  return (
    <section className="what-we-do" id="como-funciona">
      <div className="container">
        <div className="what-we-do-header">
          <h2>O que é Automação com IA Prottocode?</h2>
          <p className="section-lead">
            Não é RPA simples. Não é integração genérica. É automação inteligente que cresce com seu negócio.
          </p>
        </div>

        <div className="what-we-do-content">
          <div className="what-we-do-text">
            <p>
              Enquanto a maioria das empresas ainda processa dados manualmente, você terá uma equipe de "robôs" trabalhando para você.
            </p>
            <p>
              Nossa solução combina <strong>automação de processos</strong>, <strong>inteligência artificial</strong> e <strong>integração de sistemas</strong> para transformar completamente como seu negócio funciona.
            </p>
            <p>
              Você não precisa ser tech. Nós tornamos simples. Você vê os resultados em dias, não meses.
            </p>

            <Link to="/servicos" className="btn-secondary">
              Ver nossos serviços →
            </Link>
          </div>

          <div className="pillars-container">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
