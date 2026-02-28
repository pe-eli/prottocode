import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";

import "./orcamento.css";

interface Servico {
  id: number;
  nome: string;
  descricao: string;
}
interface Extra {
  id: number;
  nome: string;
}
const servicos: Servico[] = [
  {
    id: 1,
    nome: "Automação de Processos",
    descricao:
      "Integração de sistemas e eliminação de tarefas repetitivas. Ideal para fluxos operacionais complexos.",
  },
  {
    id: 2,
    nome: "Chatbot com IA",
    descricao: "Atendimento ao cliente 24/7 com respostas inteligentes e personalizadas.",
  },
  {
    id: 3,
    nome: "Análise de Dados & Relatórios",
    descricao:
      "Transforme seus dados em insights. Relatórios automáticos e previsões precisas.",
  },
  {
    id: 4,
    nome: "Extração de Dados",
    descricao: "Colete dados automaticamente de fontes múltiplas e centralize informações.",
  },
  {
    id: 5,
    nome: "Website Automatizado",
    descricao:
      "Site profissional com funcionalidades inteligentes e automações integradas.",
  },
  {
    id: 6,
    nome: "Integração com Ferramentas",
    descricao: "Conecte seus sistemas favoritos (CRM, e-mail, redes sociais, etc).",
  },
];

const extras: Extra[] = [
  {
    id: 1,
    nome: "Histórico de conversas e análise de sentimento",
  },
  {
    id: 2,
    nome: "Integração com WhatsApp, Telegram ou Facebook"
  },
  {
    id: 3,
    nome: "Dashboard de monitoramento em tempo real"
  },
  {
    id: 4,
    nome: "Agendamento automático de tarefas"
  },
  {
    id: 5,
    nome: "Notificações e alertas personalizados"
  },
  {
    id: 6,
    nome: "Exportação de dados em múltiplos formatos"
  },
  {
    id: 7,
    nome: "Treinamento da equipe para usar o sistema"
  },
  {
    id: 8,
    nome: "Suporte técnico prioritário mensal"
  },
  {
    id: 9,
    nome: "Relatórios automáticos por e-mail"
  }
];


export default function Orcamento() {
  const [step, setStep] = useState(1); // etapa atual
  const [selecionado, setSelecionado] = useState<Servico | null>(null);
  const [extrasSelecionados, setExtrasSelecionados] = useState<Extra[]>([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [popupMsg, setPopupMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // -----------------------------
  // FORMATAR TELEFONE
  // -----------------------------
  const formatarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);
    if (numeros.length <= 10) {
      return numeros
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return numeros
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  // -----------------------------
  // CONTROLE DE ETAPAS
  // -----------------------------

  
  const handleNext = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
    if (step === 1 && !selecionado) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("Selecione um serviço para continuar.");
      return;
    }
    if (step === 3) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      handleSend(); // última etapa → envia
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setError("");
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1)setStep((prev) => prev - 1);
  };

  // -----------------------------
  // ENVIAR EMAIL
  // -----------------------------
  const handleSend = () => {
    if (!nome || !telefone) {
      setError("Preencha nome e WhatsApp antes de enviar.");
      return;
    }
    setError("");

    const templateParams = {
      nome,
      telefone,
      servico: selecionado?.nome || "Não informado",
      extras: extrasSelecionados.map((e) => e.nome).join(", ") || "Nenhum",
    };

    setLoading(true);
    setPopupMsg("⏳ Enviando email...");

    emailjs
      .send(
        "service_7dz39lq", // seu service ID
        "template_o8kzazt", // seu template ID
        templateParams,
        "Zx_ej2NKTM3Xb0rlr" // sua public key
      )
      .then(
        () => {
          setLoading(false);
          setPopupMsg("✅ Email enviado com sucesso!");
        },
        () => {
          setLoading(false);
          setPopupMsg("❌ Erro ao enviar email. Tente novamente.");
        }
      );
  };


   return (
    <>
      <Header />
      <div className="orcamento-page">

        {/* Etapa 1 - Escolha serviço */}
        {step === 1 && (
          <>
           <h1 style={{ color: "#e6eef8" }}>Qual automação você precisa?</h1>
            <p style={{ color: "#e6eef8" }}>Escolha a solução que melhor se adequa ao seu negócio:</p>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="servicos-grid">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className={`servico-card ${
                    selecionado?.id === servico.id ? "card-selecionado" : ""
                  }`}
                >
                  <h2>{servico.nome}</h2>
                  <p>{servico.descricao}</p>
                  <button
                    className={
                      selecionado?.id === servico.id
                        ? "btn-selecionado"
                        : "btn-naoselecionado"
                    }
                    onClick={() => setSelecionado(servico)}
                  >
                    {selecionado?.id === servico.id ? "Selecionado" : "Selecionar"}
                  </button>
                </div>
              ))}
            </div>

            <button className="btn-proximo" onClick={handleNext}>
              Próximo
            </button>
          </>
        )}

        {/* Etapa 2 - Extras */}
        {step === 2 && (
          <>
            <h2>Potencialize sua automação</h2>
            <p>Adicione funcionalidades extras para ampliar o impacto (opcional):</p>

            <div className="extras-grid">
              {extras.map((extra) => (
                <div
                  key={extra.id}
                  className={`extra-card ${
                    extrasSelecionados.some((e) => e.id === extra.id)
                      ? "selecionado"
                      : "card-selecionar"
                  }`}
                  onClick={() => {
                    if (extrasSelecionados.some((e) => e.id === extra.id)) {
                      setExtrasSelecionados(
                        extrasSelecionados.filter((e) => e.id !== extra.id)
                      );
                    } else {
                      setExtrasSelecionados([...extrasSelecionados, extra]);
                    }
                  }}
                >
                  <p>{extra.nome}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "20px", display: "flex", gap: "1rem"}}>
              <button className="btn-voltar" onClick={handleBack}>
                ← Voltar
              </button>
              <button className="btn-proximo" onClick={handleNext}>
                Próximo →
              </button>
            </div>
          </>
        )}

        {/* Etapa 3 - Confirmação */}
        {step === 3 && (
          <>
          <div className="resumo-orcamento">
            <h2>Confirme sua solicitação</h2>
            <p style={{textAlign: "center", margin: "10px 0px 0px", fontWeight: "bold"}}>Solução escolhida:</p>
            <p className="res-servico">{selecionado?.nome}</p>
            {extrasSelecionados.length > 0 ? (
              <ul style={{margin: 0, padding: 0}}>
                <p style={{textAlign: "center", margin: "10px 0px 4px", fontWeight: "bold"}}>Funcionalidades extras:</p>
                {extrasSelecionados.map((e) => (
                  <li className="res-extra" key={e.id}>{e.nome}</li>
                ))}
              </ul>
            ) : (
              <p style={{textAlign: "center", margin: "10px 0px 0px"}}>Nenhuma funcionalidade extra selecionada.</p>
            )}

            <form className="form-orcamento">
              <div className="form-group">
                <label style={{textAlign: "center"}}htmlFor="nome">Seu nome *</label>
                <input
                  className="res-input"
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label style={{textAlign: "center"}}htmlFor="telefone">WhatsApp *</label>
                <input
                  className="res-input"
                  type="text"
                  value={telefone}
                  onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                  required
                />
              </div>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div style={{ marginTop: "20px" }}>
              <button className="btn-voltar" onClick={handleBack}>
                Voltar
              </button>
              <button className="btn btn-primary" onClick={handleSend}>
                Solicitar Proposta
              </button>
            </div>
            </div>
          </>

        )}

        {/* Popup */}
        {popupMsg && (
          <div className="popup">
            <p>{popupMsg}</p>
            {!loading && (
              <button
                onClick={() => {
                  setPopupMsg(null);
                  setNome("");
                  setTelefone("");
                  setSelecionado(null);
                  setExtrasSelecionados([]);
                  setStep(1);
                  navigate("/");
                }}
              >
                OK
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
