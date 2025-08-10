import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/footer";
import Team from "./components/team/team";
import Contact from "./components/contact/contact";
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
              <a href="#contact" className="service-link">
                Solicitar Proposta
              </a>
            </div>
          </div>
        </section>

        <Contact /> {/* substituindo o formulário inline */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
