import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Orcamento from "./pages/orcamento/orcamento";
import Home from "./pages/home/home";
import Servicos from "./pages/servicos/servicos";
import Contato from "./pages/contato/contato";
import Privacidade from "./pages/privacidade/privacidade";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

function App() {
  const location = useLocation();
  useSmoothScroll();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/orcamento" element={<PageTransition><Orcamento /></PageTransition>} />
          <Route path="/site-orcamento" element={<PageTransition><Orcamento /></PageTransition>} />
          <Route path="/diagnostico-gratuito" element={<PageTransition><Orcamento /></PageTransition>} />
          <Route path="/diagnostico" element={<PageTransition><Orcamento /></PageTransition>} />
          <Route path="/servicos" element={<PageTransition><Servicos /></PageTransition>} />
          <Route path="/contato" element={<PageTransition><Contato /></PageTransition>} />
          <Route path="/whatsapp-automatico" element={<PageTransition><Contato /></PageTransition>} />
          <Route path="/demo-whatsapp" element={<PageTransition><Contato /></PageTransition>} />
          <Route path="/cases-sites" element={<PageTransition><Orcamento /></PageTransition>} />
          <Route path="/privacidade" element={<PageTransition><Privacidade /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
