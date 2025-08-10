import React, { useState } from "react";
import { db } from "../../../firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../../App.css";
import "./contact.css"


const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        company,
        message,
        createdAt: Timestamp.now(),
      });

      setStatus("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="contact-form container">
      <h2>Fale com a Prottocode</h2>
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
          placeholder="Email"
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

      {status && <p className="status-message">{status}</p>}

      {/* Frase introdutória */}
      <p className="direct-contact-text">
        Prefere um atendimento mais rápido e direto? Fale conosco também por:
      </p>

      {/* Botões extras de contato */}
      <div className="extra-contact">
        <a
          href="https://wa.me/5524999348783"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          💬 WhatsApp
        </a>
        <a
          href="https://www.instagram.com/prottocode?igsh=MWFkdGczajN0dGJpOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn instagram"
        >
          📸 Instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;