import jsPDF from "jspdf";

export interface PdfExtra {
  nome: string;
  preco: number;
  incluso: boolean;
}

export interface PdfOrcamentoData {
  nomeCliente: string;
  telefone: string;
  servico: { nome: string; precoBase: number };
  pacote: { nome: string; desconto: number } | null;
  extras: PdfExtra[];
  totalExtras: number;
  totalExtrasComDesconto: number;
  totalProjeto: number;
  mensalidade: number;
}

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

async function loadImageAsBase64(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function gerarPdfOrcamento(data: PdfOrcamentoData): Promise<void> {
  const doc = new jsPDF();
  const pw = doc.internal.pageSize.getWidth();
  const ph = doc.internal.pageSize.getHeight();
  const m = 20;
  const contentWidth = pw - 2 * m;
  let y = 20;

  const drawLine = () => {
    doc.setDrawColor(180);
    doc.setLineWidth(0.3);
    doc.line(m, y, pw - m, y);
    y += 8;
  };

  const checkPage = (needed: number) => {
    if (y + needed > ph - 25) {
      doc.addPage();
      y = 20;
    }
  };

  // --- Logo ---
  try {
    const logoBase64 = await loadImageAsBase64("/meu-logo.png");
    doc.addImage(logoBase64, "PNG", m, y, 35, 13);
    y += 22;
  } catch {
    y += 5;
  }

  // --- Title & Date ---
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Orçamento", m, y);
  y += 7;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100);
  doc.text(`Data: ${new Date().toLocaleDateString("pt-BR")}`, m, y);
  doc.setTextColor(0);
  y += 10;
  drawLine();

  // --- Dados do Cliente ---
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("DADOS DO CLIENTE", m, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Nome: ${data.nomeCliente}`, m, y);
  y += 6;
  doc.text(`WhatsApp: ${data.telefone}`, m, y);
  y += 8;
  drawLine();

  // --- Serviço ---
  checkPage(25);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("SERVIÇO", m, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(data.servico.nome, m, y);
  doc.text(fmt(data.servico.precoBase), pw - m, y, { align: "right" });
  y += 8;
  drawLine();

  // --- Pacote ---
  if (data.pacote) {
    checkPage(25);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("PACOTE", m, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Pacote ${data.pacote.nome}`, m, y);
    if (data.pacote.desconto > 0) {
      doc.setTextColor(100);
      doc.text(
        `(${(data.pacote.desconto * 100).toFixed(0)}% de desconto nos extras)`,
        m,
        y + 5
      );
      doc.setTextColor(0);
      y += 5;
    }
    y += 8;
    drawLine();
  }

  // --- Extras ---
  if (data.extras.length > 0) {
    checkPage(15);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("EXTRAS", m, y);
    y += 7;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    for (const extra of data.extras) {
      checkPage(8);
      const label = extra.incluso
        ? `${extra.nome}  (incluso no pacote)`
        : extra.nome;
      const lines = doc.splitTextToSize(label, contentWidth - 50);
      doc.text(lines, m, y);
      doc.text(fmt(extra.preco), pw - m, y, { align: "right" });
      y += lines.length * 5 + 2;
    }
    y += 3;
    drawLine();
  }

  // --- Resumo Financeiro ---
  checkPage(60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("RESUMO FINANCEIRO", m, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  doc.text("Serviço base", m, y);
  doc.text(fmt(data.servico.precoBase), pw - m, y, { align: "right" });
  y += 6;

  doc.text(`Total extras (${data.extras.length})`, m, y);
  doc.text(fmt(data.totalExtras), pw - m, y, { align: "right" });
  y += 6;

  if (data.pacote && data.pacote.desconto > 0) {
    const descontoValor = data.totalExtras - data.totalExtrasComDesconto;
    doc.text(
      `Desconto pacote (${(data.pacote.desconto * 100).toFixed(0)}%)`,
      m,
      y
    );
    doc.text(`- ${fmt(descontoValor)}`, pw - m, y, { align: "right" });
    y += 6;
  }

  // Small separator
  y += 2;
  doc.setDrawColor(200);
  doc.line(pw - m - 55, y, pw - m, y);
  y += 8;

  // Pagamento Único
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Pagamento único", m, y);
  doc.text(fmt(data.totalProjeto), pw - m, y, { align: "right" });
  y += 8;

  // Mensal
  doc.text("Mensal (manutenção)", m, y);
  doc.text(`${fmt(data.mensalidade)}/mês`, pw - m, y, { align: "right" });
  y += 12;
  drawLine();

  // --- Disclaimer ---
  checkPage(25);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(120);
  const disclaimer = doc.splitTextToSize(
    "Este orçamento é uma estimativa. Nenhum pagamento é realizado nesta página. " +
      "Sua solicitação será avaliada pela nossa equipe e entraremos em contato " +
      "para apresentar uma proposta personalizada.",
    contentWidth
  );
  doc.text(disclaimer, m, y);

  // --- Save ---
  const fileName = `orcamento-${data.nomeCliente
    .replace(/\s+/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")}.pdf`;
  doc.save(fileName);
}
