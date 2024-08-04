import axios from "axios";

export function getContactsByUserId(userId) {
  return axios
    .get(`http://localhost:3333/contacts?userId=${userId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao buscar contatos", error);
      throw error;
    });
}

export function createContact(userId, name, email, phone) {
  const createdDate = new Date().toISOString();
  return axios
    .post("http://localhost:3333/contacts", {
      userId,
      name,
      email,
      phone,
      createdDate,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao criar contato", error);
      throw error;
    });
}

export function updateContact(
  contactId,
  userId,
  name,
  email,
  phone,
  createdDate
) {
  return axios
    .put(`http://localhost:3333/contacts/${contactId}`, {
      userId,
      name,
      email,
      phone,
      createdDate,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao atualizar contato", error);
      throw error;
    });
}

export function deleteContact(contactId) {
  return axios
    .delete(`http://localhost:3333/contacts/${contactId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Erro ao deletar contato", error);
      throw error;
    });
}
