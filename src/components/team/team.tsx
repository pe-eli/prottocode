import React from "react";

const teamMembers = [
  {
    name: "Marco Antônio",
    role: "Backend Developer",
    bio: "Especialista em arquiteturas escaláveis, APIs seguras e integração com bancos de dados.",
    img: "/marco.jpeg", // caminho relativo à pasta public
  },
  {
    name: "Pedro Lucas",
    role: "Frontend Developer",
    bio: "Focado em criar interfaces modernas, responsivas e com excelente experiência do usuário.",
    img: "/image.png", // caminho relativo à pasta public
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="team container">
      <h2>Conheça a equipe</h2>
      <p className="section-sub">Os especialistas por trás da Prottocode</p>
      <div className="cards">
        {teamMembers.map((member) => (
          <article key={member.name} className="card team-card">
            <div className="team-photo">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
