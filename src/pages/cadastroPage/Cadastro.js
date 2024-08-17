import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUser } from "../../services/authService/userService";
import styles from "./Cadastro.module.css"; // Importando o módulo CSS

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const authRes = await createUserWithEmailAndPassword(auth, email, senha);
      const user = authRes.user;
      setUser({ nome, email: user.email });

      if (authRes) navigate("/home");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setError("Erro ao cadastrar, verifique os dados e tente novamente.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Cadastro</h1>
          {error && <p className={styles.errorText}>{error}</p>}
          <label htmlFor="nome" className={styles.formLabel}>
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            className={styles.formInput}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha" className={styles.formLabel}>
            Senha
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            className={styles.formInput}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" className={styles.primaryButton}>
            Cadastrar
          </button>

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export { Cadastro };
