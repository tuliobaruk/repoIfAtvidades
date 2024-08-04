import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Register from "./pages/Register";
import EditContact from "./pages/EditContact";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleLogin = (id, name) => {
    setUserId(id);
    setUserName(name);
  };

  const handleContactAdded = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/contacts"
          element={
            <Contacts
              userId={userId}
              userName={userName}
              contacts={contacts}
              setContacts={setContacts}
            />
          }
        />
        <Route
          path="/add-contact"
          element={
            <AddContact userId={userId} onContactAdded={handleContactAdded} />
          }
        />
        <Route
          path="/edit-contact/:contactId"
          element={
            <EditContact
              userId={userId}
              contacts={contacts}
              setContacts={setContacts}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
