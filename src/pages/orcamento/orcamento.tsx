import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaCheck } from "react-icons/fa";
import precosData from "./precos.json";
import { gerarPdfOrcamento } from "./gerarPdf";
import type { PdfOrcamentoData } from "./gerarPdf";
import { useLanguage } from "../../i18n/LanguageContext";
import "./orcamento.css";

const { servicos, extras, pacotes, mensalidade } = precosData;

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
  const { t } = useLanguage();

  const navigate = useNavigate();

  const formatPrice = (value: number) =>
    value.toLocaleString(t.orcamentoPage.locale, {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

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
      return numeros.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return numeros.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  const getPackageName = (id: string) => {
    if (id === "starter") return t.orcamentoPage.packageNames.starter;
    if (id === "pro") return t.orcamentoPage.packageNames.pro;
    return t.orcamentoPage.packageNames.premium;
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (step === 1 && !servicoId) { setError(t.orcamentoPage.errorService); return; }
    if (step === 2 && !pacoteId) { setError(t.orcamentoPage.errorPackage); return; }
    if (step === 4) { handleSend(); } else { setError(""); setStep((prev) => prev + 1); }
  };

  const handleBack = () => {
    if (step > 1) { setStep((prev) => prev - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }
  };

  const handleSend = () => {
    if (!nome || !telefone) { setError(t.orcamentoPage.errorFields); return; }
    setError("");

    const extrasFormatted = selectedExtrasData.map((e) => `${e.nome} (${formatPrice(e.preco)})`).join(", ") || "Nenhum";

    const templateParams = {
      to_email: "contato@prottocode.com",
      from_name: nome,
      whatsapp: telefone,
      message: [
        `Serviço: ${servico?.nome || "N/A"}`,
        `Pacote: ${pacote ? getPackageName(pacote.id) : "N/A"}`,
        `Extras: ${extrasFormatted}`,
        `Total do projeto: ${formatPrice(totalProjeto)}`,
        `Mensalidade: ${formatPrice(mensalidadeValor)}/mês`,
      ].join("\n"),
    };

    setLoading(true);
    setPopupMsg(t.orcamentoPage.sendingProposal);

    emailjs.send("service_q2fbg57", "template_qzqdjyv", templateParams, "Zx_ej2NKTM3Xb0rlr").then(
      () => { setLoading(false); setPopupMsg(t.orcamentoPage.successProposal); },
      () => { setLoading(false); setPopupMsg(t.orcamentoPage.errorProposal); }
    );
  };

  return (
    <>
      <Header />
      <div className="orcamento-page">
        {/* Progress Bar */}
        <div className="progress-bar">
          {t.orcamentoPage.stepLabels.map((label, index) => {
            const stepNum = index + 1;
            const isCompleted = step > stepNum;
            const isActive = step === stepNum;
            return (
              <Fragment key={stepNum}>
                {index > 0 && <div className={`progress-line ${step >= stepNum ? "filled" : ""}`} />}
                <div className="progress-step">
                  <div className={`step-circle ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}>
                    {isCompleted ? <FaCheck /> : stepNum}
                  </div>
                  <span className={`step-label ${isActive || isCompleted ? "active" : ""}`}>{label}</span>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="step-content">
            <h1>{t.orcamentoPage.step1Title}</h1>
            <p className="step-subtitle">{t.orcamentoPage.step1Subtitle}</p>
            {error && <p className="error-msg">{error}</p>}
            <div className="servicos-list">
              {servicos.map((s) => (
                <div key={s.id} className={`servico-item ${servicoId === s.id ? "selected" : ""}`}
                  onClick={() => { if (servicoId !== s.id) { setServicoId(s.id); setPacoteId(null); setExtrasIds([]); } }}>
                  <div className="servico-info">
                    <h3>{s.nome}</h3>
                    <p>{s.descricao}</p>
                    <div className="servico-preco">{t.orcamentoPage.step1StartingAt} {formatPrice(s.precoBase)}</div>
                  </div>
                  <div className={`servico-check ${servicoId === s.id ? "checked" : ""}`}>
                    {servicoId === s.id && <FaCheck />}
                  </div>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-primary" onClick={handleNext}>{t.orcamentoPage.next}</button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="step-content">
            <h2>{t.orcamentoPage.step2Title}</h2>
            <p className="step-subtitle">{t.orcamentoPage.step2Subtitle}</p>
            <div className="pacotes-grid-horizontal">
              {pacotes.map((p) => (
                <div key={p.id} className={`pacote-card ${pacoteId === p.id ? "selected" : ""}`} onClick={() => handleSelectPacote(p.id)}>
                  <div className="pacote-header">
                    <h3>{getPackageName(p.id)}</h3>
                    <div className={`pacote-radio ${pacoteId === p.id ? "checked" : ""}`}>{pacoteId === p.id && <FaCheck />}</div>
                  </div>
                  <p>{p.descricao}</p>
                  {p.descontoExtras > 0 && (
                    <span className="pacote-desconto-badge">{(p.descontoExtras * 100).toFixed(0)}% {t.orcamentoPage.discountExtras}</span>
                  )}
                  <div className="pacote-extras-inclusos">
                    <span className="pacote-extras-title">{t.orcamentoPage.included}</span>
                    {p.extrasInclusos.map((eid) => {
                      const extra = extras.find((e) => e.id === eid);
                      return extra ? <span key={eid} className="pacote-extra-item">{extra.nome}</span> : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-ghost" onClick={handleBack}>{t.orcamentoPage.back}</button>
              <button className="btn-primary" onClick={handleNext}>{t.orcamentoPage.next}</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="step-content">
            <h2>{t.orcamentoPage.step3Title}</h2>
            <p className="step-subtitle">{t.orcamentoPage.step3Subtitle}</p>
            <div className="extras-list">
              {extras.map((extra) => {
                const isInPackage = pacoteExtrasIds.includes(extra.id);
                const isSelected = allSelectedExtraIds.includes(extra.id);
                return (
                  <div key={extra.id} className={`extra-item ${isSelected ? "selected" : ""} ${isInPackage ? "locked" : ""}`} onClick={() => toggleExtra(extra.id)}>
                    <span className="extra-label">
                      <span className="extra-titulo">{extra.nome}</span>
                      <span className="extra-badges">
                        {(extra as { ai?: boolean }).ai && <span className="ai-tag">{t.orcamentoPage.aiTag}</span>}
                        {isInPackage && <span className="included-tag">{t.orcamentoPage.includedTag}</span>}
                      </span>
                    </span>
                    <span className="extra-preco">{formatPrice(extra.preco)}</span>
                    <div className={`extra-check ${isSelected ? "checked" : ""}`}>{isSelected && <FaCheck />}</div>
                  </div>
                );
              })}
            </div>
            <div className="preco-resumo-step2">
              <div className="preco-line"><span>{t.orcamentoPage.baseService}</span><span>{formatPrice(precoBase)}</span></div>
              <div className="preco-line"><span>{t.orcamentoPage.extras} ({selectedExtrasData.length})</span><span>{formatPrice(totalExtras)}</span></div>
              {desconto > 0 && (
                <div className="preco-line desconto-line">
                  <span>{t.orcamentoPage.packageDiscount} ({(desconto * 100).toFixed(0)}%)</span>
                  <span>- {formatPrice(totalExtras - totalExtrasComDesconto)}</span>
                </div>
              )}
              <div className="preco-divider" />
              <div className="preco-line preco-destaque"><span>{t.orcamentoPage.oneTimePayment}</span><span>{formatPrice(totalProjeto)}</span></div>
              <div className="preco-line preco-mensal"><span>{t.orcamentoPage.monthly}</span><span>{formatPrice(mensalidadeValor)}/mês</span></div>
            </div>
            <div className="step-actions">
              <button className="btn-ghost" onClick={handleBack}>{t.orcamentoPage.back}</button>
              <button className="btn-primary" onClick={handleNext}>{t.orcamentoPage.next}</button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="step-content">
            <h2>{t.orcamentoPage.step4Title}</h2>
            <p className="step-subtitle">{t.orcamentoPage.step4Subtitle}</p>
            <div className="resumo-card">
              <div className="resumo-section">
                <h4>{t.orcamentoPage.serviceLabel}</h4>
                <div className="resumo-servico">
                  <span>{servico?.nome}</span>
                  {servico && <span className="resumo-preco-base">{formatPrice(servico.precoBase)}</span>}
                </div>
              </div>
              {pacote && (
                <div className="resumo-section">
                  <h4>{t.orcamentoPage.packageLabel}</h4>
                  <div className="resumo-pacote">
                    <span>{getPackageName(pacote.id)}</span>
                    {pacote.descontoExtras > 0 && (
                      <span className="resumo-desconto-badge">{(pacote.descontoExtras * 100).toFixed(0)}% {t.orcamentoPage.discount.toLowerCase()}</span>
                    )}
                  </div>
                </div>
              )}
              {selectedExtrasData.length > 0 && (
                <div className="resumo-section">
                  <h4>{t.orcamentoPage.extrasLabel}</h4>
                  <ul className="resumo-extras-list">
                    {selectedExtrasData.map((e) => (
                      <li key={e.id}>
                        <span>{e.nome}{pacoteExtrasIds.includes(e.id) && <span className="resumo-incluso-tag"> {t.orcamentoPage.includedInPackage}</span>}</span>
                        <span className="resumo-extra-preco">{formatPrice(e.preco)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="resumo-financeiro">
                <h4>{t.orcamentoPage.financialSummary}</h4>
                <div className="resumo-fin-line"><span>{t.orcamentoPage.baseService}</span><span>{formatPrice(precoBase)}</span></div>
                <div className="resumo-fin-line"><span>{t.orcamentoPage.totalExtras}</span><span>{formatPrice(totalExtras)}</span></div>
                {desconto > 0 && (
                  <div className="resumo-fin-line desconto-line">
                    <span>{t.orcamentoPage.discount} ({(desconto * 100).toFixed(0)}%)</span>
                    <span>- {formatPrice(totalExtras - totalExtrasComDesconto)}</span>
                  </div>
                )}
                <div className="resumo-fin-divider" />
                <div className="resumo-fin-line resumo-fin-destaque"><span>{t.orcamentoPage.oneTimePayment}</span><span>{formatPrice(totalProjeto)}</span></div>
                <div className="resumo-fin-line resumo-fin-mensal"><span>{t.orcamentoPage.monthly}</span><span>{formatPrice(mensalidadeValor)}/mês</span></div>
              </div>
              <div className="resumo-section">
                <h4>{t.orcamentoPage.yourData}</h4>
                <div className="resumo-form">
                  <div className="form-field">
                    <label>{t.orcamentoPage.nameLabel}</label>
                    <input type="text" placeholder={t.orcamentoPage.namePlaceholder} value={nome} onChange={(e) => setNome(e.target.value)} />
                  </div>
                  <div className="form-field">
                    <label>{t.orcamentoPage.whatsappLabel}</label>
                    <input type="text" placeholder={t.orcamentoPage.whatsappPlaceholder} value={telefone} onChange={(e) => setTelefone(formatarTelefone(e.target.value))} />
                  </div>
                </div>
              </div>
              {error && <p className="error-msg">{error}</p>}
              <div className="disclaimer-msg"><strong>{t.orcamentoPage.disclaimer}</strong></div>
              <div className="resumo-actions">
                <button className="btn-ghost" onClick={handleBack}>{t.orcamentoPage.back}</button>
                <button className="btn-secondary" onClick={async () => {
                  if (!servico || !nome || !telefone) { setError(t.orcamentoPage.errorPdfFields); return; }
                  const pdfData: PdfOrcamentoData = {
                    nomeCliente: nome, telefone,
                    servico: { nome: servico.nome, precoBase: servico.precoBase },
                    pacote: pacote ? { nome: getPackageName(pacote.id), desconto: pacote.descontoExtras } : null,
                    extras: selectedExtrasData.map((e) => ({ nome: e.nome, preco: e.preco, incluso: pacoteExtrasIds.includes(e.id) })),
                    totalExtras, totalExtrasComDesconto, totalProjeto, mensalidade: mensalidadeValor,
                  };
                  await gerarPdfOrcamento(pdfData, t.orcamentoPage.pdfLabels, t.orcamentoPage.locale);
                }}>{t.orcamentoPage.downloadPdf}</button>
                <button className="btn-primary" onClick={handleSend}>{t.orcamentoPage.requestProposal}</button>
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
                <button onClick={() => {
                  setPopupMsg(null); setNome(""); setTelefone(""); setServicoId(null); setPacoteId(null); setExtrasIds([]); setStep(1); navigate("/");
                }}>OK</button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
