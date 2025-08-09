import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/footer";
import Team from "./components/team/team";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="pc-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <section className="contact-cta">
          <div className="container">
            <div className="cta-card">
              <div>
                <h3>Pronto para transformar sua presença online?</h3>
                <p>
                  Conte-nos seu projeto — oferecemos análise técnica gratuita
                  e proposta personalizada em 48h.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary">
                Solicitar Proposta
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-form container">
          <h2>Fale com a Prottocode</h2>
          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Empresa (opcional)" />
            <textarea placeholder="Descreva seu projeto" rows={6} required />
            <button className="btn btn-primary" type="submit">
              Enviar Mensagem
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
