import { View, Text, StyleSheet } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { Link, router } from "expo-router";

export default function LoginPage() {
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
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          secureTextEntry={true}
          labelStyle={styles.label}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Logar-se"
          buttonStyle={styles.loginButton}
          containerStyle={styles.buttonWrapper}
          titleStyle={styles.buttonText}
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
