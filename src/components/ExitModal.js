import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../styles/colors";

const ExitModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleExitApp = () => {
    Alert.alert(
      "Sair do App",
      "Você realmente deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", onPress: () => console.log("Usuário saiu do app.") },
      ],
      { cancelable: false }
    );
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCloseModal}
    >
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <View style={styles.handle} />
              <Text style={styles.title}>
                Você, realmente, deseja sair do Poundflats?
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.exitButton]}
                onPress={handleExitApp}
              >
                <Text style={styles.exitButtonText}>Sim, sair agora!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.continueButton]}
                onPress={handleCloseModal}
              >
                <Text style={styles.continueButtonText}>
                  Não, quero continuar
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "transparent", // Fundo transparente para evitar cinza na parte superior
    justifyContent: "flex-end", // Posiciona o modal no final da tela
  },
  modal: {
    backgroundColor: colors.white, // Fundo branco do modal
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
    height: "25%", // Define que o modal ocupa 1/4 da tela
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#000",
    borderRadius: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "Jura-Light",
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
    backgroundColor: colors.purple, // Botão roxo
  },
  exitButtonText: {
    color: colors.white,
    fontFamily: "Jura-Semibold",
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: colors.gray, // Botão cinza
  },
  continueButtonText: {
    color: colors.white,
    fontFamily: "Jura-Semibold",
    fontSize: 14,
  },
});

export default ExitModal;
