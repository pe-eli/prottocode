import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaCheck } from "react-icons/fa";
import precosData from "./precos.json";
import { gerarPdfOrcamento } from "./gerarPdf";
import type { PdfOrcamentoData } from "./gerarPdf";
import "./orcamento.css";

const { servicos, extras, pacotes, mensalidade } = precosData;

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

const stepLabels = ["Serviço", "Pacote & Extras", "Confirmação"];

export default function Orcamento() {
  const [step, setStep] = useState(1);
  const [servicoId, setServicoId] = useState<string | null>(null);
  const [pacoteId, setPacoteId] = useState<string | null>(null);
  const [extrasIds, setExtrasIds] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [error, setError] = useState("");
  const [popupMsg, setPopupMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const servico = servicos.find((s) => s.id === servicoId) ?? null;
  const pacote = pacotes.find((p) => p.id === pacoteId) ?? null;
  const pacoteExtrasIds = pacote?.extrasInclusos ?? [];
  const allSelectedExtraIds = [...new Set([...pacoteExtrasIds, ...extrasIds])];
  const selectedExtrasData = extras.filter((e) => allSelectedExtraIds.includes(e.id));

  const precoBase = servico?.precoBase ?? 0;
  const totalExtras = selectedExtrasData.reduce((sum, e) => sum + e.preco, 0);
  const desconto = pacote?.descontoExtras ?? 0;
  const totalExtrasComDesconto = Math.round(totalExtras * (1 - desconto));
  const totalProjeto = precoBase + totalExtrasComDesconto;
  const mensalidadeValor = Math.round(totalProjeto * mensalidade.manutencaoPercentualProjeto);

  const toggleExtra = (extraId: string) => {
    if (pacoteExtrasIds.includes(extraId)) return;
    setExtrasIds((prev) =>
      prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]
    );
  };

  const handleSelectPacote = (id: string | null) => {
    setPacoteId(id);
    if (id) {
      const newPacote = pacotes.find((p) => p.id === id);
      if (newPacote) {
        setExtrasIds((prev) => prev.filter((eid) => !newPacote.extrasInclusos.includes(eid)));
      }
    }
  };

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
    if (step === 1 && !servicoId) {
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
      servico: servico?.nome || "Não informado",
      pacote: pacote?.nome || "Personalizado",
      extras: selectedExtrasData.map((e) => `${e.nome} (${formatPrice(e.preco)})`).join(", ") || "Nenhum",
      totalProjeto: formatPrice(totalProjeto),
      mensalidade: formatPrice(mensalidadeValor),
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
                  className={`servico-item ${servicoId === s.id ? "selected" : ""}`}
                  onClick={() => {
                    if (servicoId !== s.id) {
                      setServicoId(s.id);
                      setPacoteId(null);
                      setExtrasIds([]);
                    }
                  }}
                >
                  <div className="servico-info">
                    <h3>{s.nome}</h3>
                    <p>{s.descricao}</p>
                    <div className="servico-preco">A partir de {formatPrice(s.precoBase)}</div>
                  </div>
                  <div
                    className={`servico-check ${servicoId === s.id ? "checked" : ""}`}
                  >
                    {servicoId === s.id && <FaCheck />}
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

        {/* Step 2 - Pacote & Extras */}
        {step === 2 && (
          <div className="step-content">
            <h2>Escolha seu pacote</h2>
            <p className="step-subtitle">
              Selecione um pacote ou personalize seus extras
            </p>

            <div className="pacotes-grid">
              <div
                className={`pacote-card ${pacoteId === null ? "selected" : ""}`}
                onClick={() => handleSelectPacote(null)}
              >
                <div className="pacote-header">
                  <h3>Personalizado</h3>
                  <div className={`pacote-radio ${pacoteId === null ? "checked" : ""}`}>
                    {pacoteId === null && <FaCheck />}
                  </div>
                </div>
                <p>Escolha extras individualmente sem pacote</p>
              </div>
              {pacotes.map((p) => (
                <div
                  key={p.id}
                  className={`pacote-card ${pacoteId === p.id ? "selected" : ""}`}
                  onClick={() => handleSelectPacote(p.id)}
                >
                  <div className="pacote-header">
                    <h3>{p.nome}</h3>
                    <div className={`pacote-radio ${pacoteId === p.id ? "checked" : ""}`}>
                      {pacoteId === p.id && <FaCheck />}
                    </div>
                  </div>
                  <p>{p.descricao}</p>
                  {p.descontoExtras > 0 && (
                    <span className="pacote-desconto-badge">
                      {(p.descontoExtras * 100).toFixed(0)}% desconto nos extras
                    </span>
                  )}
                  <div className="pacote-extras-inclusos">
                    <span className="pacote-extras-title">Incluso:</span>
                    {p.extrasInclusos.map((eid) => {
                      const extra = extras.find((e) => e.id === eid);
                      return extra ? (
                        <span key={eid} className="pacote-extra-item">
                          {extra.nome}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="extras-heading">Extras adicionais</h3>
            <div className="extras-list">
              {extras.map((extra) => {
                const isInPackage = pacoteExtrasIds.includes(extra.id);
                const isSelected = allSelectedExtraIds.includes(extra.id);
                return (
                  <div
                    key={extra.id}
                    className={`extra-item ${isSelected ? "selected" : ""} ${isInPackage ? "locked" : ""}`}
                    onClick={() => toggleExtra(extra.id)}
                  >
                    <span className="extra-label">
                      {extra.nome}
                      {extra.ai && <span className="ai-tag">IA</span>}
                      {isInPackage && <span className="included-tag">Incluso</span>}
                    </span>
                    <span className="extra-preco">{formatPrice(extra.preco)}</span>
                    <div className={`extra-check ${isSelected ? "checked" : ""}`}>
                      {isSelected && <FaCheck />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="preco-resumo-step2">
              <div className="preco-line">
                <span>Serviço base</span>
                <span>{formatPrice(precoBase)}</span>
              </div>
              <div className="preco-line">
                <span>Extras ({selectedExtrasData.length})</span>
                <span>{formatPrice(totalExtras)}</span>
              </div>
              {desconto > 0 && (
                <div className="preco-line desconto-line">
                  <span>Desconto pacote ({(desconto * 100).toFixed(0)}%)</span>
                  <span>- {formatPrice(totalExtras - totalExtrasComDesconto)}</span>
                </div>
              )}
              <div className="preco-divider" />
              <div className="preco-line preco-destaque">
                <span>Pagamento único</span>
                <span>{formatPrice(totalProjeto)}</span>
              </div>
              <div className="preco-line preco-mensal">
                <span>Mensal (manutenção)</span>
                <span>{formatPrice(mensalidadeValor)}/mês</span>
              </div>
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
                <h4>Serviço</h4>
                <div className="resumo-servico">
                  <span>{servico?.nome}</span>
                  {servico && (
                    <span className="resumo-preco-base">{formatPrice(servico.precoBase)}</span>
                  )}
                </div>
              </div>

              {pacote && (
                <div className="resumo-section">
                  <h4>Pacote</h4>
                  <div className="resumo-pacote">
                    <span>{pacote.nome}</span>
                    {pacote.descontoExtras > 0 && (
                      <span className="resumo-desconto-badge">
                        {(pacote.descontoExtras * 100).toFixed(0)}% desconto
                      </span>
                    )}
                  </div>
                </div>
              )}

              {selectedExtrasData.length > 0 && (
                <div className="resumo-section">
                  <h4>Extras</h4>
                  <ul className="resumo-extras-list">
                    {selectedExtrasData.map((e) => (
                      <li key={e.id}>
                        <span>
                          {e.nome}
                          {pacoteExtrasIds.includes(e.id) && (
                            <span className="resumo-incluso-tag"> (incluso)</span>
                          )}
                        </span>
                        <span className="resumo-extra-preco">{formatPrice(e.preco)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="resumo-financeiro">
                <h4>Resumo financeiro</h4>
                <div className="resumo-fin-line">
                  <span>Serviço base</span>
                  <span>{formatPrice(precoBase)}</span>
                </div>
                <div className="resumo-fin-line">
                  <span>Total extras</span>
                  <span>{formatPrice(totalExtras)}</span>
                </div>
                {desconto > 0 && (
                  <div className="resumo-fin-line desconto-line">
                    <span>Desconto ({(desconto * 100).toFixed(0)}%)</span>
                    <span>- {formatPrice(totalExtras - totalExtrasComDesconto)}</span>
                  </div>
                )}
                <div className="resumo-fin-divider" />
                <div className="resumo-fin-line resumo-fin-destaque">
                  <span>Pagamento único</span>
                  <span>{formatPrice(totalProjeto)}</span>
                </div>
                <div className="resumo-fin-line resumo-fin-mensal">
                  <span>Mensal (manutenção)</span>
                  <span>{formatPrice(mensalidadeValor)}/mês</span>
                </div>
              </div>

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

              <div className="disclaimer-msg">
                <strong>Nenhum pagamento é realizado nesta página.</strong> Após o envio, sua solicitação será analisada pela nossa equipe e entraremos em contato para apresentar uma proposta personalizada.
              </div>

              <div className="resumo-actions">
                <button className="btn-ghost" onClick={handleBack}>
                  Voltar
                </button>
                <button
                  className="btn-secondary"
                  onClick={async () => {
                    if (!servico || !nome || !telefone) {
                      setError("Preencha nome e WhatsApp para gerar o PDF.");
                      return;
                    }
                    const pdfData: PdfOrcamentoData = {
                      nomeCliente: nome,
                      telefone,
                      servico: { nome: servico.nome, precoBase: servico.precoBase },
                      pacote: pacote ? { nome: pacote.nome, desconto: pacote.descontoExtras } : null,
                      extras: selectedExtrasData.map((e) => ({
                        nome: e.nome,
                        preco: e.preco,
                        incluso: pacoteExtrasIds.includes(e.id),
                      })),
                      totalExtras,
                      totalExtrasComDesconto,
                      totalProjeto,
                      mensalidade: mensalidadeValor,
                    };
                    await gerarPdfOrcamento(pdfData);
                  }}
                >
                  Baixar PDF
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
                    setServicoId(null);
                    setPacoteId(null);
                    setExtrasIds([]);
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
