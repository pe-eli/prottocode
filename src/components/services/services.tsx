import React from "react";

const services = [
  {
    title: "Sites Profissionais",
    desc: "Páginas modernas e rápidas, feitas para atrair clientes e valorizar seu negócio.",
    points: ["Design que valoriza seu negócio", "Adaptado para todos os dispositivos", "Pronto para gerar resultados"],
  },
  {
    title: "E‑commerce",
    desc: "Lojas online com checkout otimizado, integrações e segurança.",
    points: ["Receba pagamentos com segurança", "Organize seus produtos e estoque", "Site rápido e confiável"],
  },
  {
    title: "Apps e Painéis",
    desc: "Soluções web internas com autenticação e painéis administrativos.",
    points: ["Segurança no acesso", "Conexão com diferentes serviços", "Uso prático para sua equipe e cliente"],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services container">
      <h2>Nossos Serviços</h2>
      <p className="section-sub">Soluções completas para projetos digitais.</p>
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
            <a href="#contact" className="service-link">Solicitar orçamento →</a>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;