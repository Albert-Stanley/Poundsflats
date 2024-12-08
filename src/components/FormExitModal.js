import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import colors from "../styles/colors";

const FormExitModal = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);

  // Obtém a altura da tela dinamicamente
  const { height } = useWindowDimensions();

  // Fecha o modal e volta para a tela anterior
  const handleExitForm = () => {
    setModalVisible(false);
    navigation.goBack(); // Retorna à tela anterior
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleExitForm} // Fecha modal com "voltar" do sistema
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modal,
                { height: height / 3 }, // Altura do modal proporcional à tela
              ]}
            >
              <View style={styles.handle} />
              <Text style={styles.title}>
                Deseja abandonar o cadastro do imóvel?{"\n"}
                Esta operação não será salva.
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.exitButton]}
                onPress={handleExitForm}
              >
                <Text style={styles.exitButtonText}>Sim, sair agora!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.continueButton]}
                onPress={() => setModalVisible(false)}
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
    backgroundColor: "trasnparent",
    justifyContent: "flex-end", // Posiciona o modal no rodapé
  },
  modal: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
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

export default FormExitModal;
