import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const teamMembers = [
  {
    name: "Marco Antônio",
    role: "Back-end Developer",
    bio: "Técnico em mecatrônica e estudante de engenharia de software. É quem organiza a lógica por trás das aplicações, assegurando que cada recurso funcione como deve.",
    img: "/marco.jpeg", 
    linkedin: "https://www.linkedin.com/in/mcprado/",
    instagram: "https://www.instagram.com/a.marco3/",
    git: "https://github.com/Marco320235"

  },
  {
    name: "Pedro Lucas",
    role: "Front-end Developer",
    bio: "Técnico em mecatrônica também, atua na criação da parte visual dos projetos, conectando a tecnologia às pessoas de forma simples e eficiente. É responsável pela experiência de quem utiliza nossos sistemas",
    img: "/image.jpg", 
    linkedin: "https://www.linkedin.com/in/pedro-moura-plse/",
    instagram: "https://www.instagram.com/_plmoura/",
    git: "https://github.com/pe-eli"
  },
];

const Team: React.FC = () => {
  return (
        <section id="team" className="team container">
      <h2>Conheça a equipe</h2>
      <p className="section-sub">Somos uma empresa jovem e inovadora, dedicada a criar soluções tecnológicas de qualidade. 
        Estamos começando nossa jornada com muita dedicação e 
        paixão por desenvolvimento de software, buscando sempre entregar o melhor para nossos clientes.</p>

      <div className="cards">
        {teamMembers.map((member) => (
          <article key={member.name} className="card team-card" style={{display: "flex", flexDirection:"column", 
                                                                        alignItems: "center", justifyContent:"center", textAlign:"center"}}>
            <div className="team-photo">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.bio}</p>

            <div style={{display:"flex",gap: "30px"}}>
                    <a
                      href={member.git}
                      target="_blank"
                      rel="noopener noreferrer"      
                    >
                      <FaGithub color="white" size={24} />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    
                    >
                      <FaInstagram color="white" size={24} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin color="white" size={24} />
                    </a>
                    </div>
          </article>
          
        ))}
        
      </div>
    </section>
  );
};

export default Team;
