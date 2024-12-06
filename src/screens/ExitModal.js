import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import colors from "../styles/colors";

const ExitModal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Você, realmente, deseja sair do Poundsflats?
      </Text>
      <Button
        title="Sim, sair agora!"
        style={styles.exitButton}
        onPress={() => console.log("Usuário saiu")}
      />
      <Button
        title="Não, quero continuar"
        style={styles.continueButton}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
    marginBottom: 20,
  },
  exitButton: {
    backgroundColor: colors.primary,
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: colors.gray,
  },
});

export default ExitModal;
