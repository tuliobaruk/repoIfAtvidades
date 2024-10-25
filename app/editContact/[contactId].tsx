import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EditContactPage() {
  const { contactId } = useLocalSearchParams();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const router = useRouter();

  useEffect(() => {
    fetchContactDetails();
  }, []);

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/contatos/${contactId}`
      );
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Erro ao carregar contato:", error);
      Alert.alert("Erro", "Não foi possível carregar os dados do contato.");
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/contatos/${contactId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso", "Contato atualizado com sucesso!");
        router.back();
      } else {
        Alert.alert("Erro", "Não foi possível atualizar o contato.");
      }
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
      Alert.alert("Erro", "Não foi possível atualizar o contato.");
    }
  };

  const handleChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDelete = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (!userId) {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      const contactResponse = await fetch(
        `http://localhost:3000/contatos/${contactId}`
      );
      const contactData = await contactResponse.json();

      if (contactData.userId !== parseInt(userId)) {
        Alert.alert(
          "Erro",
          "Você não tem permissão para excluir este contato."
        );
        return;
      }

      const response = await fetch(
        `http://localhost:3000/contatos/${contactId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso", "Contato excluído com sucesso!");
        router.push("/contacts");
      } else {
        Alert.alert("Erro", "Não foi possível excluir o contato.");
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
      Alert.alert("Erro", "Não foi possível excluir o contato.");
    }
    router.push("/contacts");
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        value={formData.nome}
        onChangeText={(value) => handleChange(value, "nome")}
      />
      <Input
        label="Email"
        value={formData.email}
        onChangeText={(value) => handleChange(value, "email")}
      />
      <Input
        label="Telefone"
        value={formData.telefone}
        onChangeText={(value) => handleChange(value, "telefone")}
      />
      <Button
        title="Salvar Alterações"
        onPress={handleSubmit}
        buttonStyle={styles.button}
      />
      <Button
        title="Excluir"
        onPress={handleDelete}
        buttonStyle={styles.deleteButton}
        containerStyle={styles.buttonContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#e0e0e0" },
  button: { backgroundColor: "#2980b9", marginTop: 16 },
  buttonContainer: {
    marginVertical: 10,
  },
  alterButton: {
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    borderRadius: 8,
  },
});
