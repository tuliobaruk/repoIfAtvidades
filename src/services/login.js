import axios from "axios";

export function loginUser(email, password) {
  return axios
    .get("http://localhost:3333/users")
    .then((response) => {
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        return user;
      } else {
        throw new Error("Email ou senha inválidos");
      }
    })
    .catch((error) => {
      console.error("Houve um erro ao logar", error);
      throw error;
    });
}
