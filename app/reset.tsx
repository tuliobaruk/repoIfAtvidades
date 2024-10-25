import { View, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import { router } from "expo-router";

export default function ResetPage() {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          placeholder="Digite seu email"
          inputContainerStyle={styles.inputContainer}
          style={styles.input}
          inputMode="email"
          labelStyle={styles.label}
        />
      </View>
      <Button
        title="Enviar"
        buttonStyle={styles.resetButton}
        containerStyle={styles.buttonWrapper}
        titleStyle={styles.buttonText}
        onPress={() => router.push("/")}
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
  resetButton: {
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
