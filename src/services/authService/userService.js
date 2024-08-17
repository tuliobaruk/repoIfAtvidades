const setUser = (user) => {
  try {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return "Usuário salvo com sucesso.";
    } else {
      throw new Error("Usuário inválido.");
    }
  } catch (error) {
    console.error("Erro ao salvar o usuário:", error);
    return "Erro ao salvar o usuário.";
  }
};

const getUser = () => {
  try {
    const user = localStorage.getItem("user");

    if (!user) {
      console.warn("Nenhum usuário encontrado.");
      return null;
    }

    return JSON.parse(user);
  } catch (error) {
    console.error("Erro ao recuperar o usuário:", error);
    return null;
  }
};

export { getUser, setUser };
