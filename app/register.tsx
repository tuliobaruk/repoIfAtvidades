import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "@rneui/themed";
import { router } from "expo-router";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nome: "",
    cpf: "",
  });

  function handleSubmit() {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        router.push("/");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar:", error);
        Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
      });
  }

  function handleChange(value: string, name: string) {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          inputContainerStyle={styles.inputContainer}
          style={styles.input}
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "nome")}
        />
        <Input
          label="CPF"
          placeholder="Digite seu CPF"
          inputContainerStyle={styles.inputContainer}
          style={styles.input}
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "cpf")}
        />
        <Input
          label="Email"
          placeholder="Digite seu email"
          inputContainerStyle={styles.inputContainer}
          style={styles.input}
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "email")}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          inputContainerStyle={styles.inputContainer}
          secureTextEntry={true}
          style={styles.input}
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "password")}
        />
      </View>
      <Button
        title="Cadastrar"
        buttonStyle={styles.registerButton}
        containerStyle={styles.buttonWrapper}
        titleStyle={styles.buttonText}
        onPress={handleSubmit}
      />
      <Button
        title="Voltar"
        buttonStyle={styles.backButton}
        containerStyle={styles.buttonWrapper}
        titleStyle={styles.buttonText}
        onPress={() => router.push("/")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e0e0e0",
  },
  icon: {
    marginBottom: 30,
  },
  formContainer: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 0,
  },
  input: {
    fontSize: 12,
    padding: 6,
  },
  label: {
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    width: "50%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonWrapper: {
    width: "20%",
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: "#2980b9",
    borderRadius: 20,
    paddingVertical: 8,
  },
  registerButton: {
    backgroundColor: "#27ae60",
    borderRadius: 20,
    paddingVertical: 8,
  },
  backButton: {
    borderRadius: 20,
    paddingVertical: 8,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  link: {
    color: "#00000",
    marginTop: 15,
    fontSize: 18,
  },
});
