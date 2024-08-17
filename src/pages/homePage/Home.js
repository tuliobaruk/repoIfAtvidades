import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { getUser, setUser } from "../../services/authService/userService";
import styles from "./Home.module.css";

const Home = () => {
  const [authUser, setAuthUser] = useState(getUser());
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao deslogar:", error);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <p className={styles.welcomeText}>
          Bem Vindo: {authUser?.nome || authUser?.email}!
        </p>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export { Home };
