import React from "react";
import { FaBrain, FaWrench, FaChartBar, FaCrosshairs, FaBolt, FaHandshake, FaChartLine, FaDollarSign } from "react-icons/fa";
import "./differentiators.css";

interface Comparison {
  category: string;
  others: string;
  prottocode: string;
  icon: React.ReactNode;
}

const Differentiators: React.FC = () => {
  const comparisons: Comparison[] = [
    {
      category: "Tipo de Solução",
      others: "No-Code genérico (Zapier, Make, etc)",
      prottocode: "Automação customizada + IA proprietária",
      icon: <FaCrosshairs />,
    },
    {
      category: "Inteligência",
      others: "Integração simples (A → B)",
      prottocode: "IA que aprende e decide por você",
      icon: <FaBrain />,
    },
    {
      category: "Velocidade",
      others: "Implementação: 2-3 meses",
      prottocode: "Implementação: 30-60 dias",
      icon: <FaBolt />,
    },
    {
      category: "Suporte",
      others: "Documentação, comunidade",
      prottocode: "Especialista dedicado 24/7",
      icon: <FaHandshake />,
    },
    {
      category: "Escalabilidade",
      others: "Limitada a processos simples",
      prottocode: "Sem limites - cresce com você",
      icon: <FaChartLine />,
    },
    {
      category: "Custo",
      others: "Múltiplas assinaturas + taxa por uso",
      prottocode: "Preço fixo, sem surpresas",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <section className="differentiators">
      <div className="container">
        <div className="differentiators-header">
          <h2>Por Que Escolher a Prottocode?</h2>
          <p className="section-lead">
            Não somos uma agência genérica. Somos especialistas em automação inteligente para negócios.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table">
          <div className="table-header">
            <div className="header-cell header-category">Aspecto</div>
            <div className="header-cell header-others">Outras Soluções</div>
            <div className="header-cell header-prottocode">Prottocode</div>
          </div>

          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`table-row ${index % 2 === 0 ? "even" : "odd"}`}
            >
              <div className="table-cell category-cell">
                <span className="cell-icon">{comparison.icon}</span>
                <strong>{comparison.category}</strong>
              </div>
              <div className="table-cell others-cell">
                <p>{comparison.others}</p>
              </div>
              <div className="table-cell prottocode-cell">
                <p>
                  <strong>{comparison.prottocode}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Differentiators Cards */}
        <div className="differentiators-cards">
          <div className="diff-card">
            <div className="diff-icon"><FaBrain /></div>
            <h3>IA é o Core, Não um Addon</h3>
            <p>
              Outras soluções automatizam fluxos dumb (apenas copiam dados). Nós colocamos inteligência em cada etapa.
            </p>
            <ul>
              <li>Análise de dados em tempo real</li>
              <li>Detecção de anomalias automática</li>
              <li>Decisões baseadas em padrões</li>
            </ul>
          </div>

          <div className="diff-card">
            <div className="diff-icon"><FaWrench /></div>
            <h3>100% Customizado</h3>
            <p>
              Não ajustamos seu negócio a nossa plataforma. Construímos a solução exatamente como você precisa.
            </p>
            <ul>
              <li>APIs proprietárias</li>
              <li>Regras de negócio complexas</li>
              <li>Integrações sem limites</li>
            </ul>
          </div>

          <div className="diff-card">
            <div className="diff-icon"><FaChartBar /></div>
            <h3>ROI em 30-60 Dias</h3>
            <p>
              Você vê o retorno rapidamente. Implementação rápida + impacto imediato = economia comprovada.
            </p>
            <ul>
              <li>Horas economizadas: medidas</li>
              <li>Erros eliminados: 99%</li>
              <li>Projeção de lucro: clara</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="differentiators-cta">
          <h3>Quer entender melhor como funcionamos?</h3>
          <p>
            Fale com um especialista. Vamos mostrar como a Prottocode é diferente e qual é o impacto para seu negócio.
          </p>
          <a href="/orcamento" className="btn-primary">
            Conversar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
