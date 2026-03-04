import React from "react";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import WhatWeDo from "../../components/whatWeDo/WhatWeDo";
import FinalCTA from "../../components/finalCta/FinalCTA";
import Footer from "../../components/footer/footer";
import "./home.css";

const App: React.FC = () => {
  return (
    <div className="pc-root">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
