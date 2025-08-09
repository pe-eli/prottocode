import React, { useState } from "react";
import { db } from "../../../firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "../../App.css";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: Timestamp.now(),
      });

      setStatus("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="container">
      <h2>Solicite seu orçamento</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Enviar mensagem</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
};

export default Contact;
