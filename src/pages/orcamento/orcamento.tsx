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

const extras: Extra[] = [
  {
    id: 1,
    nome: "Sistema de login e cadastro de usuários",
  },
  {
    id: 2,
    nome: "Integração com pagamentos online"
  },
  {
    id: 3,
    nome: "Criação de painel administrativo"
  },
  {
    id: 4,
    nome: "Sistema de avaliações e comentários"
  },
  {
    id: 5,
    nome: "Agendamento online de serviços/consultas"
  },
  {
    id: 6,
    nome: "Galeria de fotos ou portfólio"
  },
  {
    id: 7,
    nome: "Agenda pessoal/Calendário de eventos"
  },
  {
    id: 8,
    nome: "Área de relatórios e estatísticas"
  },
  {
    id: 9,
    nome: "Suporte mensal para manutenção e atualizações"
  }
];


export default function Orcamento() {
  const [selecionado, setSelecionado] = useState<Servico | null>(null);
  const [extrasSelecionados, setExtrasSelecionados] = useState<Extra[]>([]);
  const [nome, setNome] = useState("");
   const [telefone, setTelefone] = useState('');
  const [error, setError] = useState(""); // para erros do formulário
  const [popupMsg, setPopupMsg] = useState<string | null>(null); // para popup
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const formatarTelefone = (valor: string) => {
    const numeros = valor.replace(/\D/g, '').slice(0, 11);
    if (numeros.length <= 10) {
      return numeros.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
    } else {
      return numeros.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
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
  setPopupMsg("⏳ Enviando email...");

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
        setPopupMsg("✅ Email enviado com sucesso!"); // mantém popup aberto
        // ⚠️ só limpa o form depois, quando clicar em OK
      },
      () => {
        setLoading(false);
        setPopupMsg("❌ Erro ao enviar email. Tente novamente.");
      }
    );
};


  return (
    <>
    <Header/>
    <div className="orcamento-page">
      <h1 style={{color: "#e6eef8"}}>Solicite seu orçamento gratuitamente:</h1>
      <p style={{color: "#e6eef8", textAlign: "center", width: "70%"}}>Escolha o serviço desejado para iniciar seu projeto conosco:</p>
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
                onClick={() => {
                  setSelecionado(servico);
                  document.getElementById("extras")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {selecionado?.id === servico.id ? "Selecionado" : "Selecionar"}
              </button>
            </div>
        ))}
      </div>
        <>

        <div className="linha "id="extras"></div>


        <h2 style={{textAlign:"center"}}>Não fique só no básico!</h2>
        <p style={{textAlign:"center"}}>Escolha alguns recursos adicionais. Leve seu projeto para o próximo nível e potencialize a experiência: (opcional)</p>
        <div className="extras-grid">
      {extras.map((extra) => (
      <div
          key={extra.id}
          className={`extra-card ${
            extrasSelecionados.some((e) => e.id === extra.id) ? "selecionado" : "card-selecionar"
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
        <div className="linha"></div>
        </>
           
           
     {selecionado && (
      <>
  <div className="resumo-orcamento">
    <h2>Confirmar orçamento</h2>
    <p style={{textAlign:"center", margin: "10px 0 4px 0", fontWeight: "bold"}}>
      Serviço selecionado: 
    </p>
    <p className="res-servico">{selecionado.nome}</p>
    {extrasSelecionados.length > 0 ? (
      <div style={{display:"flex", flexDirection:"column"}}>
        <p style={{textAlign:"center", margin: "10px 0 1px 0", fontWeight: "bold"}}>Extras escolhidos:</p>
      <ul style={{listStyle: "none", padding: 0, backgroundColor: "#677181ff;", margin:0}}>
          {extrasSelecionados.map((extra) => (
            <li className="res-extra" key={extra.id}>{extra.nome}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Nenhum extra selecionado.</p>
    )}
   
    <form className="form-orcamento">
        <div className="form-group">
          <label style={{ textAlign: "center" }} htmlFor="nome">
            Nome *
          </label>
          <input
            className="res-input"
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label style={{ textAlign: "center" }} htmlFor="whatsapp">
            WhatsApp *
          </label>
          <input
                className='res-input'
                type="text"
                placeholder="Digite seu telefone"
                value={formatarTelefone(telefone)}
                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, '').slice(0, 11))}
              />
        </div>
      </form>

      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

      <button className="btn btn-primary" onClick={handleSend}>
        Solicitar Proposta
      </button>

       {popupMsg && (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 1000,
      textAlign: "center",
    }}
  >
    <p>{popupMsg}</p>
    {!loading && (
      <button
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          border: "none",
          borderRadius: "8px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => {
          setPopupMsg(null);   
          setNome("");         
          setTelefone("");
          setSelecionado(null);
          setExtrasSelecionados([]);
          navigate("/"); 
        }}
      >
        OK
      </button>
    )}
  </div>
)}
    </div>

      <div style={{width:"100%", height: "15vh"}}></div>
  </>
)}
  

    </div>
    </>
  );
}
