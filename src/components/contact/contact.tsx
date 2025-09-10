import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../../App.css";
import "./contact.css";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    try {
      const result = await emailjs.send(
        "service_7dz39lq",   
        "template_wxfinwi",  
        {
          from_name: name,
          from_email: email,
          company,
          message,
        },
        "Zx_ej2NKTM3Xb0rlr"   
      );

      console.log(result.text);

      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setModalOpen(true);

      setTimeout(() => setModalOpen(false), 10000);
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="contact-form container">
      <h2>Nós realizamos sua ideia, é só pedir!</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="WhatsApp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Empresa (opcional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <textarea
            style={{display: "flex", justifyContent: "center"}}
          placeholder="Descreva seu projeto"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button className="btn btn-primary" type="submit">
          Enviar Mensagem
        </button>
      </form>

      <p className="direct-contact-text">
        Prefere um atendimento mais rápido e direto? Fale conosco também por:
      </p>

      <div className="extra-contact">
        <a
          href="https://wa.me/5524999348783"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          <FaWhatsapp color="white" size={24} />
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/prottocode?igsh=MWFkdGczajN0dGJpOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn instagram"
        >
          <FaInstagram color="white" size={24} />
          Instagram
        </a>
      </div>
          {modalOpen && (
            <div className="success-modal" onClick={() => setModalOpen(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="success-icon">✔</div>
                <h3>Mensagem enviada!</h3>
                <p>
                  Recebemos sua solicitação.  
                  Nossa equipe entrará em contato por e-mail para dar andamento ao serviço.
                </p>
              </div>
            </div>
)}

    </section>
  );
};

export default Contact;
