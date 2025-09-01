import React from "react";

const services = [
  {
    title: "Sites Institucionais",
    desc: "Landing pages e sites institucionais otimizados para conversão.",
    points: ["Design estratégico", "Responsivo", "SEO on-page"],
  },
  {
    title: "E‑commerce",
    desc: "Lojas online com checkout otimizado, integrações e segurança.",
    points: ["Pagamentos", "Gestão de estoque", "Performance"],
  },
  {
    title: "Apps e Painéis",
    desc: "Soluções web internas com autenticação e painéis administrativos.",
    points: ["Auth seguro", "APIs escaláveis", "UX intuitiva"],
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
            <p>{s.desc}</p>
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