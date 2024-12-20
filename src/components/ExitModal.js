import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../styles/colors";

const ExitModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleExitApp = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Home"); // Redireciona para a tela inicial
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
              <Text style={styles.title}>Deseja sair do Poundflats?</Text>
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
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
    height: "28%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.fontColor,
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
    backgroundColor: colors.purple,
  },
  exitButtonText: {
    color: colors.white,
    fontFamily: "Jura-Semibold",
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: colors.gray,
  },
  continueButtonText: {
    color: colors.white,
    fontFamily: "Jura-Semibold",
    fontSize: 14,
  },
});

export default ExitModal;
