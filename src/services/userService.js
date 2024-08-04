import axios from "axios";

export function createUser(name, email, password) {
  if (!name || !email || !password) {
    return Promise.reject(
      new Error("Todos os campos precisam estar preenchidos")
    );
  }

  return axios
    .post("http://localhost:3333/users", { name, email, password })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Houve um erro ao tentar criar o usuário:", error);
      throw error;
    });
}
