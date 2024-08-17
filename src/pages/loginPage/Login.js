import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../services/authService/userService";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser({ email: user.email });
      navigate("/home");
    } catch (error) {
      console.error("Erro de login:", error);
      setError("Senha incorreta");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
          <h1 className={styles.title}>Login</h1>
          {error && <p className={styles.errorText}>{error}</p>}
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            className={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.primaryButton} onClick={handleLogin}>
            Acessar
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login };
