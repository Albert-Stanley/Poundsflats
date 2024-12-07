import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

const ExitModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>
          Você realmente deseja sair do Poundflats?
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.exitButton]}
          onPress={() => console.log("Usuário saiu")}
        >
          <Text style={styles.exitButtonText}>Sim, sair agora!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.continueButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.continueButtonText}>Não, quero continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
    justifyContent: "flex-end", // Posiciona o modal no final da tela
    alignItems: "center",
  },
  modal: {
    width: "100%",
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10, // Sombra para Android
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.black,
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    width: "90%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  exitButton: {
    backgroundColor: colors.gray, // Cor do botão "Sim, sair agora!"
  },
  exitButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: colors.gray, // Cor do botão "Não, quero continuar"
  },
  continueButtonText: {
    color: colors.black,
    fontWeight: "600",
    fontSize: 16,
  },
});

export default ExitModal;
