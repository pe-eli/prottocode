import { Routes, Route } from "react-router-dom";
import Orcamento from "./pages/orcamento/orcamento";
import Home from "./pages/home/home";
import Servicos from "./pages/servicos/servicos";
import Contato from "./pages/contato/contato";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
