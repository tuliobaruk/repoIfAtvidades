import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "@rneui/themed";
import { useEffect, useState, useCallback } from "react";
import { useRouter, Link } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Contact {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

export default function ContactsListPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const router = useRouter();

  const fetchContacts = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");

      if (!userId) {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      const response = await fetch(
        `http://localhost:3000/contatos?userId=${userId}`
      );
      const data: Contact[] = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
      Alert.alert("Erro", "Não foi possível carregar os contatos.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Contatos</Text>
        <Icon
          name="plus"
          type="font-awesome"
          color="#fff"
          onPress={() => router.push("/createContact")}
          containerStyle={styles.addButton}
        />
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Icon
              name="user-circle"
              type="font-awesome"
              color="#2980b9"
              size={40}
            />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.nome}</Text>
              <Text style={styles.contactPhone}>{item.telefone}</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push(`/editContact/${item.id}`)}
            >
              <Icon name="chevron-right" type="font-awesome" color="#2980b9" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2980b9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#2980b9",
    padding: 10,
    borderRadius: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignSelf: "center",
    width: "95%",
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  contactPhone: {
    fontSize: 14,
    color: "#888",
  },
});
