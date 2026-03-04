import React from "react";
import { FaTrophy, FaBolt, FaChartLine, FaHandshake } from "react-icons/fa";
import "./finalCta.css";

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-card-wrapper">
          <div className="cta-background"></div>
          <div className="cta-content">
            <h2>
              Pronto para começar?
              <span className="accent-text"> Transforme seu negócio com IA</span>
            </h2>
            <p className="cta-lead">
              Você já viu como automação inteligente pode impactar seu negócio.
              Agora é hora de conversar com nosso time e construir sua solução.
            </p>

            <p className="cta-highlight">
              <strong>Sem compromisso.</strong> Vamos entender suas necessidades e
              mostrar exatamente como podemos ajudar.
            </p>

            <div className="cta-buttons">
              <a href="/orcamento" className="btn-primary">
                Solicitar Proposta Agora
              </a>
              <a href="https://wa.me/5524999348783" className="btn-secondary">
                Conversar pelo WhatsApp
              </a>
            </div>

            <p className="cta-footer">
              ✓ Já seremos grato a sua atenção <br />
              ✓ Sem compromisso <br />✓ Resposta em 24h
            </p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="trust-signals">
          <div className="signal">
            <span className="signal-icon"><FaTrophy /></span>
            <p>Especialistas em IA & Automação</p>
          </div>
          <div className="signal">
            <span className="signal-icon"><FaBolt /></span>
            <p>Implementação em 30-60 dias</p>
          </div>
          <div className="signal">
            <span className="signal-icon"><FaChartLine /></span>
            <p>ROI em 2-3 meses</p>
          </div>
          <div className="signal">
            <span className="signal-icon"><FaHandshake /></span>
            <p>Suporte dedicado 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
