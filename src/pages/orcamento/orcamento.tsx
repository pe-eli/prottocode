import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaCheck } from "react-icons/fa";
import "./orcamento.css";

interface Servico {
  id: number;
  nome: string;
  descricao: string;
}

interface Extra {
  id: number;
  nome: string;
  ai?: boolean;
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
    descricao:
      "Atendimento ao cliente 24/7 com respostas inteligentes e personalizadas.",
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
    descricao:
      "Colete dados automaticamente de fontes múltiplas e centralize informações.",
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
    descricao:
      "Conecte seus sistemas favoritos (CRM, e-mail, redes sociais, etc).",
  },
];

const extrasPerService: Record<number, Extra[]> = {
  // Automação de Processos
  1: [
    { id: 101, nome: "Agendamento automático de tarefas" },
    { id: 102, nome: "Notificações e alertas personalizados" },
    { id: 103, nome: "Dashboard de monitoramento em tempo real" },
    { id: 104, nome: "Exportação de dados em múltiplos formatos" },
    { id: 105, nome: "Relatórios automáticos por e-mail" },
    { id: 106, nome: "Detecção inteligente de gargalos no fluxo", ai: true },
    { id: 107, nome: "Otimização automática de rotas de processo", ai: true },
    { id: 108, nome: "Previsão de falhas e manutenção preventiva", ai: true },
    { id: 109, nome: "Treinamento da equipe para usar o sistema" },
    { id: 110, nome: "Suporte técnico prioritário mensal" },
  ],
  // Chatbot com IA
  2: [
    { id: 201, nome: "Histórico de conversas e análise de sentimento" },
    { id: 202, nome: "Integração com WhatsApp, Telegram ou Facebook" },
    { id: 203, nome: "Respostas personalizadas por perfil de cliente" },
    { id: 204, nome: "Transferência inteligente para atendente humano" },
    { id: 205, nome: "Análise de sentimento em tempo real", ai: true },
    { id: 206, nome: "Geração automática de respostas contextuais", ai: true },
    { id: 207, nome: "Aprendizado contínuo com base nas interações", ai: true },
    { id: 208, nome: "Classificação automática de intenções do cliente", ai: true },
    { id: 209, nome: "Treinamento da equipe para usar o sistema" },
    { id: 210, nome: "Suporte técnico prioritário mensal" },
  ],
  // Análise de Dados & Relatórios
  3: [
    { id: 301, nome: "Dashboard de monitoramento em tempo real" },
    { id: 302, nome: "Exportação de dados em múltiplos formatos" },
    { id: 303, nome: "Relatórios automáticos por e-mail" },
    { id: 304, nome: "Notificações e alertas personalizados" },
    { id: 305, nome: "Previsão de tendências e sazonalidade", ai: true },
    { id: 306, nome: "Detecção automática de anomalias nos dados", ai: true },
    { id: 307, nome: "Recomendações inteligentes baseadas em padrões", ai: true },
    { id: 308, nome: "Geração automática de resumos e insights", ai: true },
    { id: 309, nome: "Treinamento da equipe para usar o sistema" },
    { id: 310, nome: "Suporte técnico prioritário mensal" },
  ],
  // Extração de Dados
  4: [
    { id: 401, nome: "Agendamento automático de coletas" },
    { id: 402, nome: "Exportação de dados em múltiplos formatos" },
    { id: 403, nome: "Dashboard de monitoramento em tempo real" },
    { id: 404, nome: "Notificações e alertas personalizados" },
    { id: 405, nome: "Classificação automática de dados coletados", ai: true },
    { id: 406, nome: "Limpeza inteligente e deduplicação de dados", ai: true },
    { id: 407, nome: "Reconhecimento de padrões em fontes não estruturadas", ai: true },
    { id: 408, nome: "Extração semântica de informações de documentos", ai: true },
    { id: 409, nome: "Treinamento da equipe para usar o sistema" },
    { id: 410, nome: "Suporte técnico prioritário mensal" },
  ],
  // Website Automatizado
  5: [
    { id: 501, nome: "Integração com WhatsApp, Telegram ou Facebook" },
    { id: 502, nome: "Dashboard de monitoramento de acessos" },
    { id: 503, nome: "Notificações e alertas personalizados" },
    { id: 504, nome: "Relatórios automáticos por e-mail" },
    { id: 505, nome: "Chatbot integrado para atendimento ao visitante", ai: true },
    { id: 506, nome: "Personalização dinâmica de conteúdo por perfil", ai: true },
    { id: 507, nome: "Otimização automática de SEO e performance", ai: true },
    { id: 508, nome: "Geração de textos e descrições com IA", ai: true },
    { id: 509, nome: "Treinamento da equipe para usar o sistema" },
    { id: 510, nome: "Suporte técnico prioritário mensal" },
  ],
  // Integração com Ferramentas
  6: [
    { id: 601, nome: "Agendamento automático de sincronizações" },
    { id: 602, nome: "Dashboard de monitoramento em tempo real" },
    { id: 603, nome: "Notificações e alertas personalizados" },
    { id: 604, nome: "Exportação de dados em múltiplos formatos" },
    { id: 605, nome: "Mapeamento inteligente de campos entre sistemas", ai: true },
    { id: 606, nome: "Resolução automática de conflitos de dados", ai: true },
    { id: 607, nome: "Detecção de falhas de integração com autocorreção", ai: true },
    { id: 608, nome: "Classificação e roteamento inteligente de dados", ai: true },
    { id: 609, nome: "Treinamento da equipe para usar o sistema" },
    { id: 610, nome: "Suporte técnico prioritário mensal" },
  ],
};

const stepLabels = ["Serviço", "Extras", "Confirmação"];

export default function Orcamento() {
  const [step, setStep] = useState(1);
  const [selecionado, setSelecionado] = useState<Servico | null>(null);
  const [extrasSelecionados, setExtrasSelecionados] = useState<Extra[]>([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [popupMsg, setPopupMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (step === 1 && !selecionado) {
      setError("Selecione um serviço para continuar.");
      return;
    }
    if (step === 3) {
      handleSend();
    } else {
      setError("");
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    setPopupMsg("Enviando sua proposta...");

    emailjs
      .send(
        "service_7dz39lq",
        "template_o8kzazt",
        templateParams,
        "Zx_ej2NKTM3Xb0rlr"
      )
      .then(
        () => {
          setLoading(false);
          setPopupMsg("Proposta enviada com sucesso!");
        },
        () => {
          setLoading(false);
          setPopupMsg("Erro ao enviar. Tente novamente.");
        }
      );
  };

  return (
    <>
      <Header />
      <div className="orcamento-page">
        {/* Progress Bar */}
        <div className="progress-bar">
          {stepLabels.map((label, index) => {
            const stepNum = index + 1;
            const isCompleted = step > stepNum;
            const isActive = step === stepNum;
            return (
              <Fragment key={stepNum}>
                {index > 0 && (
                  <div
                    className={`progress-line ${step >= stepNum ? "filled" : ""}`}
                  />
                )}
                <div className="progress-step">
                  <div
                    className={`step-circle ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                  >
                    {isCompleted ? <FaCheck /> : stepNum}
                  </div>
                  <span
                    className={`step-label ${isActive || isCompleted ? "active" : ""}`}
                  >
                    {label}
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Step 1 - Service Selection */}
        {step === 1 && (
          <div className="step-content">
            <h1>Qual automação você precisa?</h1>
            <p className="step-subtitle">
              Escolha a solução ideal para o seu negócio
            </p>
            {error && <p className="error-msg">{error}</p>}

            <div className="servicos-list">
              {servicos.map((s) => (
                <div
                  key={s.id}
                  className={`servico-item ${selecionado?.id === s.id ? "selected" : ""}`}
                  onClick={() => {
                    if (selecionado?.id !== s.id) {
                      setSelecionado(s);
                      setExtrasSelecionados([]);
                    }
                  }}
                >
                  <div className="servico-info">
                    <h3>{s.nome}</h3>
                    <p>{s.descricao}</p>
                  </div>
                  <div
                    className={`servico-check ${selecionado?.id === s.id ? "checked" : ""}`}
                  >
                    {selecionado?.id === s.id && <FaCheck />}
                  </div>
                </div>
              ))}
            </div>

            <div className="step-actions">
              <button className="btn-primary" onClick={handleNext}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Step 2 - Extras */}
        {step === 2 && (
          <div className="step-content">
            <h2>Potencialize sua automação</h2>
            <p className="step-subtitle">
              Adicione funcionalidades extras para ampliar o impacto (opcional)
            </p>

            <div className="extras-list">
              {(selecionado ? extrasPerService[selecionado.id] || [] : []).map(
                (extra) => {
                  const sel = extrasSelecionados.some(
                    (e) => e.id === extra.id
                  );
                  return (
                    <div
                      key={extra.id}
                      className={`extra-item ${sel ? "selected" : ""}`}
                      onClick={() => {
                        if (sel) {
                          setExtrasSelecionados(
                            extrasSelecionados.filter((e) => e.id !== extra.id)
                          );
                        } else {
                          setExtrasSelecionados([...extrasSelecionados, extra]);
                        }
                      }}
                    >
                      <span className="extra-label">
                        {extra.nome}
                        {extra.ai && <span className="ai-tag">IA</span>}
                      </span>
                      <div className={`extra-check ${sel ? "checked" : ""}`}>
                        {sel && <FaCheck />}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="step-actions">
              <button className="btn-ghost" onClick={handleBack}>
                Voltar
              </button>
              <button className="btn-primary" onClick={handleNext}>
                Próximo
              </button>
            </div>
          </div>
        )}

        {/* Step 3 - Confirmation */}
        {step === 3 && (
          <div className="step-content">
            <h2>Confirme sua solicitação</h2>
            <p className="step-subtitle">
              Revise os detalhes e envie sua proposta
            </p>

            <div className="resumo-card">
              <div className="resumo-section">
                <h4>Solução escolhida</h4>
                <div className="resumo-servico">{selecionado?.nome}</div>
              </div>

              {extrasSelecionados.length > 0 && (
                <div className="resumo-section">
                  <h4>Funcionalidades extras</h4>
                  <ul className="resumo-extras-list">
                    {extrasSelecionados.map((e) => (
                      <li key={e.id}>{e.nome}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="resumo-section">
                <h4>Seus dados</h4>
                <div className="resumo-form">
                  <div className="form-field">
                    <label>Nome *</label>
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>WhatsApp *</label>
                    <input
                      type="text"
                      placeholder="(00) 00000-0000"
                      value={telefone}
                      onChange={(e) =>
                        setTelefone(formatarTelefone(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>

              {error && <p className="error-msg">{error}</p>}

              <div className="resumo-actions">
                <button className="btn-ghost" onClick={handleBack}>
                  Voltar
                </button>
                <button className="btn-primary" onClick={handleSend}>
                  Solicitar Proposta
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup */}
        {popupMsg && (
          <div className="popup-overlay">
            <div className="popup-card">
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
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
