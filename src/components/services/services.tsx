import React from "react";

const services = [
  {
    title: "Redução de Custos",
    desc: "Eliminate tarefas manuais e repetitivas, reduzindo custos operacionais significativamente.",
    points: ["Menos horas de trabalho manual", "Diminui erros e retrabalho", "ROI mensurável"],
  },
  {
    title: "Eficiência Operacional",
    desc: "Accelerate seus processos com workflows inteligentes que trabalham 24/7.",
    points: ["Processos até 10x mais rápidos", "Sem pausa ou erros humanos", "Escalabilidade imediata"],
  },
  {
    title: "Tomada de Decisão",
    desc: "Dados em tempo real para decisões estratégicas mais inteligentes e baseadas em fatos.",
    points: ["Relatórios automáticos", "Insights em tempo real", "Previsões precisas"],
  },
  {
    title: "Experiência do Cliente",
    desc: "Atendimento disponível sempre que o cliente precisa, com respostas instantâneas.",
    points: ["Suporte 24/7 com IA", "Personalização automática", "Satisfação aumentada"],
  },
  {
    title: "Escalabilidade Simples",
    desc: "Cresça seu negócio sem multiplicar sua equipe ou infraestrutura.",
    points: ["Sem limitações operacionais", "Cresce com sua empresa", "Sem novos investimentos"],
  },
  {
    title: "Segurança e Conformidade",
    desc: "Proteja dados com sistemas seguros que atendem normas de segurança internacional.",
    points: ["Criptografia de dados", "Backup automático", "Conformidade garantida"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services container">
      <h2>Vantagens de Automatizar com a Prottocode</h2>
      <p className="section-sub">Transforme seu negócio com soluções de IA que geram resultados concretos.</p>
      <div className="cards">
        {services.map((s) => (
          <article key={s.title} className="card">
            <h3>{s.title}</h3>
          <p style={{textAlign:"center"}}>{s.desc}</p>
            <ul>
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a href="/orcamento" className="service-link">Saiba mais →</a>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;