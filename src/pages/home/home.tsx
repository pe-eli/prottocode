import React from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Services from "../../components/services/services";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/footer";
// import Team from "../../components/team/team";
import "./home.css";
import "../../components/contact/contact.css"

const App: React.FC = () => {
  return (
    <div className="pc-root">
      <Header />
      <main>
        <Hero />
        <Services />

        {/* <Team /> */}
        <Testimonials />

        <section className="contact-cta">
          <div className="container">
            <div className="cta-card">
              <div>
                <h3>Pronto para automatizar seu negócio?</h3>
                <p>
                  Reduza custos, aumente a eficiência e libere sua equipe para o que realmente importa.
                  Converse com nossos especialistas sobre sua automação ideal.
                </p>
              </div>
              <a href="/orcamento" className="service-link">
                Solicitar proposta
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
