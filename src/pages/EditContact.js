import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateContact,
  deleteContact,
  getContactsByUserId,
} from "../services/contactsService";
import styles from "./EditContact.module.css";
import image from "../assets/images/Image.png";

const EditContact = ({ userId, contacts, setContacts }) => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentContact = contacts.find((c) => c.id === contactId);
    if (currentContact) {
      setContact(currentContact);
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
      setCreatedDate(currentContact.createdDate);
    } else {
      getContactsByUserId(userId).then((data) => {
        const contact = data.find((c) => c.id === contactId);
        setContact(contact);
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
        setCreatedDate(contact.createdDate);
      });
    }
  }, [contactId, contacts, userId]);

  const handleUpdateContact = (event) => {
    event.preventDefault();
    updateContact(contactId, userId, name, email, phone, createdDate)
      .then((updatedContact) => {
        const updatedContacts = contacts.map((c) =>
          c.id === contactId ? updatedContact : c
        );
        setContacts(updatedContacts);
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
        setError("Error updating contact");
      });
  };

  const handleDeleteContact = () => {
    deleteContact(contactId)
      .then(() => {
        const updatedContacts = contacts.filter((c) => c.id !== contactId);
        setContacts(updatedContacts);
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
        setError("Error deleting contact");
      });
  };

  return (
    <div className={styles.editContactContainer}>
      <div className={styles.editContactImage}>
        <img src={image} alt="Edit Contact illustration" />
      </div>
      <div className={styles.editContactFormContainer}>
        <h1>Cadastro</h1>
        <form onSubmit={handleUpdateContact}>
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
          <button className={styles.updateButton} type="submit">
            Alterar
          </button>
          <button className={styles.deleteButton} onClick={handleDeleteContact}>
            Excluir
          </button>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
};

export default EditContact;
