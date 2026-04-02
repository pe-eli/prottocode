import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

const Team: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { git: "https://github.com/Marco320235", instagram: "https://www.instagram.com/a.marco3/", linkedin: "https://www.linkedin.com/in/mcprado/", img: "/marco.jpeg" },
    { git: "https://github.com/pe-eli", instagram: "https://www.instagram.com/_plmoura/", linkedin: "https://www.linkedin.com/in/pedro-moura-plse/", img: "/image.png" },
  ];

  return (
    <section id="team" className="team container">
      <h2>{t.team.title}</h2>
      <p className="section-sub">{t.team.subtitle}</p>
      <div className="cards">
        {t.team.members.map((member, index) => (
          <article key={member.name} className="card team-card" style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", textAlign:"center"}}>
            <div className="team-photo">
              <img src={socialLinks[index].img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.bio}</p>
            <div style={{display:"flex",gap: "30px"}}>
              <a href={socialLinks[index].git} target="_blank" rel="noopener noreferrer"><FaGithub color="white" size={24} /></a>
              <a href={socialLinks[index].instagram} target="_blank" rel="noopener noreferrer"><FaInstagram color="white" size={24} /></a>
              <a href={socialLinks[index].linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin color="white" size={24} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
