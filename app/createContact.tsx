import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (!userId) {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      const contactData = {
        ...formData,
        userId: parseInt(userId),
      };

      const response = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Contato criado com sucesso!");
        router.push("/contacts");
      } else {
        Alert.alert("Erro", "Não foi possível criar o contato.");
      }
    } catch (error) {
      console.error("Erro ao criar contato:", error);
      Alert.alert("Erro", "Não foi possível criar o contato.");
    }
  };

  const handleChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nome"
        placeholder="Digite o nome do contato"
        onChangeText={(value) => handleChange(value, "nome")}
      />
      <Input
        label="Email"
        placeholder="Digite o email do contato"
        onChangeText={(value) => handleChange(value, "email")}
      />
      <Input
        label="Telefone"
        placeholder="Digite o telefone do contato"
        onChangeText={(value) => handleChange(value, "telefone")}
      />
      <Button
        title="Criar Contato"
        onPress={handleSubmit}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#e0e0e0" },
  button: { backgroundColor: "#27ae60", marginTop: 16 },
});
