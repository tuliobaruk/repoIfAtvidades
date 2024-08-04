import React, { useState, useEffect } from "react";
import { getContactsByUserId } from "./services/contacts";

const Contacts = ({ userId }) => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      getContactsByUserId(userId)
        .then((data) => setContacts(data))
        .catch((error) => {
          console.error("Error fetching contacts:", error);
          setError("Error fetching contacts");
        });
    }
  }, [userId]);

  return (
    <div>
      <h2>Contacts for User {userId}</h2>
      {error && <p>{error}</p>}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
