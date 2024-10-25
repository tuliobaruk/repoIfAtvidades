import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange(value: string, name: string) {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        await AsyncStorage.setItem("accessToken", data.accessToken);
        await AsyncStorage.setItem("userId", data.user.id.toString());
        router.replace("/contacts");
      } else {
        Alert.alert("Falha");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro");
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="user-tie"
        type="font-awesome-5"
        size={120}
        color="black"
        style={styles.icon}
      />

      <View style={styles.formContainer}>
        <Input
          label="Email"
          placeholder="Digite seu email"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          inputMode="email"
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "email")}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          secureTextEntry={true}
          labelStyle={styles.label}
          onChangeText={(value) => handleChange(value, "password")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Logar-se"
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonWrapper}
          titleStyle={styles.buttonText}
          onPress={handleSubmit}
        />
        <Button
          title="Cadastre-se"
          buttonStyle={styles.registerButton}
          containerStyle={styles.buttonWrapper}
          titleStyle={styles.buttonText}
          onPress={() => router.push("/register")}
        />
      </View>

      <Link href="/reset">
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </Link>
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
