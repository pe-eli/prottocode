import React from "react";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1>
            Aumente sua receita
            <span className="accent"> sem aumentar sua equipe</span>
          </h1>
          <p className="lead">
            A inteligência artificial está transformando negócios. Processe pedidos, atenda clientes e gere insights automaticamente. Enquanto sua concorrência passa dias em tarefas manuais, você já virou noite gerando receita.
          </p>

          <div className="hero-ctas">
            <a href="/orcamento" className="btn-primary">
              Quero começar!
            </a>
            <a href="#como-funciona" className="btn-ghost">
              Ver como funciona
            </a>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>

      {/* Seção de Soluções Principais - Redesenhada */}
      <div className="container">
        <h2 style={{textAlign: "center", marginBottom: "3rem"}}>Nossas principais soluções de IA</h2>
        <div className="hero-products">
          <div className="product-card">
            <div className="product-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3>Website Profissional</h3>
            <p>Site completo e personalizado com automações integradas. Design moderno que converte visitantes em clientes.</p>
            <span className="product-badge available">Sob medida</span>
            <a href="/orcamento" className="product-cta">Saiba mais →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
            </div>
            <h3>Chatbot com IA</h3>
            <p>Atenda clientes 24/7. Inteligência que aprende com cada conversa.</p>
            <span className="product-badge available">24/7</span>
            <a href="/orcamento" className="product-cta">Saiba mais →</a>
          </div>
          <div className="product-card">
            <div className="product-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>
            </div>
            <h3>Automação Inteligente</h3>
            <p>Processe pedidos, notas fiscais e pagamentos automaticamente. Reduza erros em 99%.</p>
            <span className="product-badge available">Mais popular</span>
            <a href="/orcamento" className="product-cta">Saiba mais →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;