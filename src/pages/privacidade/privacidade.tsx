import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./privacidade.css";

const sections = [
  {
    title: "1. Quem Somos",
    content: `A Prottocode é uma empresa especializada em desenvolvimento de websites profissionais e automações inteligentes com Inteligência Artificial. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos as informações pessoais dos visitantes e clientes do nosso site.`,
  },
  {
    title: "2. Dados que Coletamos",
    content: `Podemos coletar as seguintes informações quando você interage com nosso site ou serviços:`,
    list: [
      "Nome completo e e-mail, fornecidos nos formulários de contato ou orçamento;",
      "Número de telefone/WhatsApp, quando informado voluntariamente;",
      "Nome da empresa e descrição do projeto, para fins de atendimento;",
      "Dados de navegação (páginas visitadas, tempo de sessão) via cookies analíticos.",
    ],
  },
  {
    title: "3. Como Usamos Seus Dados",
    content: `As informações coletadas são utilizadas exclusivamente para:`,
    list: [
      "Responder às suas solicitações de contato ou orçamento;",
      "Enviar propostas e informações sobre nossos serviços;",
      "Melhorar a experiência de navegação no site;",
      "Cumprir obrigações legais e contratuais.",
    ],
  },
  {
    title: "4. Compartilhamento de Dados",
    content: `A Prottocode não vende, aluga ou compartilha suas informações pessoais com terceiros, exceto nas seguintes situações: (a) com prestadores de serviço essenciais ao nosso funcionamento (ex.: plataforma de e-mail, Firebase), sob contrato de confidencialidade; (b) quando exigido por lei ou autoridade competente.`,
  },
  {
    title: "5. Cookies",
    content: `Utilizamos cookies para analisar o tráfego do site e melhorar nossos serviços. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.`,
  },
  {
    title: "6. Armazenamento e Segurança",
    content: `Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e organizacionais adequadas, incluindo criptografia e controle de acesso. Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.`,
  },
  {
    title: "7. Seus Direitos (LGPD)",
    content: `Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:`,
    list: [
      "Confirmar a existência de tratamento dos seus dados;",
      "Acessar, corrigir ou atualizar seus dados;",
      "Solicitar a exclusão dos seus dados pessoais;",
      "Revogar o consentimento a qualquer momento;",
      "Receber informações sobre com quem seus dados foram compartilhados.",
    ],
  },
  {
    title: "8. Contato",
    content: `Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato conosco pelo e-mail prottocode@gmail.com ou pelo WhatsApp (37) 9840-9691.`,
  },
  {
    title: "9. Alterações nesta Política",
    content: `Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a revise com regularidade.`,
  },
];

const Privacidade: React.FC = () => {
  return (
    <>
      <Header />
      <main className="priv-page">
        <div className="priv-container">
          <div className="priv-header">
            <div className="priv-badge">Legal</div>
            <h1>Política de <span className="priv-accent">Privacidade</span></h1>
            <p className="priv-subtitle">
              Levamos a sério a proteção dos seus dados. Saiba como tratamos suas informações com transparência e responsabilidade.
            </p>
            <span className="priv-date">Última atualização: março de 2026</span>
          </div>

          <div className="priv-content">
            {sections.map((section) => (
              <div className="priv-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacidade;
