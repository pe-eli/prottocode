import React from "react";

const vantagens = [
  {
    titulo: "Site vitalício",
    descricao:
      "Após a compra, o site é totalmente seu, com acesso completo e sem taxas extras para mantê-lo no ar.",
  },
  {
    titulo: "Contrato de manutenção",
    descricao:
      "Se quiser adicionar ou alterar algo depois, realizamos o serviço com custo adicional.",
  },
  {
    titulo: "Personalização profissional",
    descricao:
      "Site exclusivo, com domínio próprio e privado, adaptado ao seu gosto.",
  },
  {
    titulo: "Websegurança",
    descricao:
      "Proteção e segurança para seus dados e de seus clientes.",
  },
  {
    titulo: "Design moderno e customizável",
    descricao:
      "Visual atrativo e adaptado à identidade do seu negócio.",
  },
  {
    titulo: "Tecnologia atual",
    descricao:
      "Utilizamos a linguagem de programação mais moderna do mercado.",
  },
  {
    titulo: "Atendimento rápido",
    descricao:
      "Contato direto com os desenvolvedores e suporte ágil.",
  },
  {
    titulo: "Organização eficiente",
    descricao:
      "Seu negócio estruturado de forma clara e funcional.",
  },
  {
    titulo: "Preço acessível",
    descricao:
      "Qualidade e custo-benefício que cabem no seu bolso.",
  },
  {
    titulo: "Escalabilidade",
    descricao:
      "Seu site preparado para crescer junto com o seu negócio.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials container">
      <h2>Quais são as vantagens de desenvolver sua aplicação com a Prottocode?</h2>
      <div className="test-list">
        {vantagens.map((v) => (
          <blockquote key={v.titulo} className="test-card">
            <p>
              <strong>{v.titulo}:</strong> {v.descricao}
            </p>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
