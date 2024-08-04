import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContact } from "../services/contactsService";
import styles from "./AddContact.module.css";
import image from "../assets/images/Image.png";

const AddContact = ({ userId, onContactAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddContact = (event) => {
    event.preventDefault();
    if (!name) {
      setError("Nome é obrigatório");
      return;
    }

    createContact(userId, name, email, phone)
      .then((newContact) => {
        onContactAdded(newContact);
        setName("");
        setEmail("");
        setPhone("");
        setError(null);
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Erro ao criar contato:", error);
        setError("Erro ao criar contato");
      });
  };

  return (
    <div className={styles.addContactContainer}>
      <div className={styles.addContactImage}>
        <img src={image} alt="imagem contato" />
      </div>
      <div className={styles.addContactFormContainer}>
        <h1>Cadastro</h1>
        <form onSubmit={handleAddContact}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Telefone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <button className={styles.saveButton} type="submit">
            Salvar
          </button>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
};

export default AddContact;
