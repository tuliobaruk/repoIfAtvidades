import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/userService";
import image from "../assets/images/Image.png";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    createUser(name, email, password)
      .then((user) => {
        setError(null);
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao criar usuário:", error);
        setError("Erro ao criar usuário");
      });
  };

  return (
    <div className="register-container">
      <div className="register-image">
        <img src={image} alt="Register illustration" />
      </div>
      <div className="register-form-container">
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleRegister}>
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
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="register-button-reg" type="submit">
            Cadastrar
          </button>
          <button className="back-button" onClick={() => navigate("/")}>
            Voltar
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
