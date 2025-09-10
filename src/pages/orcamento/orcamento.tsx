import { useState } from "react";
import Header from "../../components/header/header";
import "./orcamento.css";

interface Servico {
  id: number;
  nome: string;
  descricao: string;
}

const servicos: Servico[] = [
  {
    id: 1,
    nome: "Desenvolvimento Web",
    descricao:
      "Site completo com design moderno e funcionalidades personalizadas",
  },
  {
    id: 2,
    nome: "Aplicativo Mobile",
    descricao: "App nativo ou híbrido para iOS e Android totalmente personalizado",
  },
  {
    id: 3,
    nome: "Loja Virtual",
    descricao:
      "E-commerce completo com sistema de pagamento e gestão de produtos",
  },
  {
    id: 4,
    nome: "Landing Page",
    descricao: "Página de conversão otimizada para campanhas de marketing",
  },
  {
    id: 5,
    nome: "Sistema Personalizado",
    descricao:
      "Desenvolvimento de sistema web sob medida para sua empresa",
  },
  {
    id: 6,
    nome: "Manutenção e Suporte",
    descricao: "Plano de manutenção, restauração e/ou suporte técnico para seu site ou app",
  },
];

export default function Orcamento() {
  const [selecionado, setSelecionado] = useState<Servico | null>(null);

  return (
    <>
    <Header/>
    <div className="orcamento-page">
      <h1 style={{color: "#e6eef8"}}>Solicite seu Orçamento</h1>
      <p style={{color: "#e6eef8", textAlign: "center", width: "70%"}}>Escolha o serviço desejado para iniciar seu projeto conosco:</p>
      <div className="servicos-grid">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className={`servico-card ${
              selecionado?.id === servico.id ? "selecionado" : ""
            }`}
            onClick={() => setSelecionado(servico)}
          >
            <h2>{servico.nome}</h2>
            <p>{servico.descricao}</p>

            <button className="btn btn-primary">
              {selecionado?.id === servico.id ? "Selecionado ✓" : "Selecionar"}
            </button>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className="resumo-orcamento">
          <h2>Resumo do Orçamento</h2>
          <p>
            Serviço selecionado: <strong>{selecionado.nome}</strong>
          </p>
          <button className="btn btn-primary">Solicitar Proposta</button>
        </div>
      )}
    </div>
    </>
  );
}
