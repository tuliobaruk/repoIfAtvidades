import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getContactsByUserId } from "../services/contactsService";
import styles from "./Contacts.module.css";
import { format } from "date-fns";
import image from "../assets/images/Image.png";
import userAvatar from "../assets/images/lista-de-usuarios.png";
import contato from "../assets/images/contato.png";

const Contacts = ({ userId, userName, contacts, setContacts }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getContactsByUserId(userId)
        .then((data) => setContacts(data))
        .catch((error) => {
          console.error("Erro ao buscar contatos:", error);
        });
    }
  }, [userId, setContacts]);

  const handleContactClick = (contactId) => {
    navigate(`/edit-contact/${contactId}`);
  };

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsImage}>
        <img src={image} alt="ImagemContatos" />
      </div>
      <div className={styles.contactsListContainer}>
        <div className={styles.navbar}>
          <div className={styles.userInfo}>
            <img src={userAvatar} alt="Avatar" className={styles.userAvatar} />
            <span className={styles.userName}>{userName}</span>
          </div>
          <button
            className={styles.addButton}
            onClick={() => navigate("/add-contact")}
          >
            +
          </button>
        </div>
        <ul className={styles.contactsList}>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className={styles.contactItem}
              onClick={() => handleContactClick(contact.id)}
            >
              <img
                src={contato}
                alt="Avatar"
                className={styles.contactAvatar}
              />
              <div className={styles.contactInfo}>
                <span className={styles.contactName}>{contact.name}</span>
                <span className={styles.contactStatus}>
                  New | Registered:{" "}
                  {format(new Date(contact.createdDate), "MMM d, yyyy")}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
