import { Routes, Route } from "react-router-dom";
import Orcamento from "./pages/orcamento/orcamento"
import Home from "./pages/home/home"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>
  );
}

export default App;
