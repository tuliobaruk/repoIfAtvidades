import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/login";
import image from "../assets/images/Image.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(email, password)
      .then((user) => {
        setError(null);
        onLogin(user.id, user.name);
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setError("Invalid email or password");
      });
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={image} alt="Login illustration" />
      </div>
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <button className="login-button" type="submit">
            Acessar
          </button>
          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
