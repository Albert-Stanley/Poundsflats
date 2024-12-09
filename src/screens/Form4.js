import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Back from "../../assets/icons/Back";
import Camera from "../../assets/icons/Camera";
import colors from "../styles/colors";

const Form4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Back />
        </TouchableOpacity>
        <View style={styles.cameraContainer}>
          <Camera style={styles.cameraIcon} />
          <Text style={styles.instruction}>
            Agora é hora de fazer as fotos do seu imóvel.
          </Text>
          <Text style={styles.subInstruction}>
            Você pode abrir a câmera ou subir a foto da sua galeria.
          </Text>
        </View>
      </View>

      {/* Empty space to push buttons to the bottom */}
      <View style={styles.contentFlex} />

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <Text style={styles.cameraButtonText}>Abrir a câmera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galleryButton}>
          <Text style={styles.galleryButtonText}>Abrir galeria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "column",
    width: "100%",
    paddingTop: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  cameraContainer: {
    alignItems: "flex-start",
    marginTop: 10,
  },
  cameraIcon: {
    color: colors.purple,
    marginBottom: 16,
  },
  instruction: {
    fontFamily: "Jura-Regular",
    fontSize: 18,
    color: colors.fontColor,
    marginBottom: 4,
  },
  subInstruction: {
    fontFamily: "Jura-SemiBold",
    fontSize: 18,
    color: colors.fontColor,
  },
  contentFlex: {
    flex: 1, // Espaço vazio para empurrar os botões para o final da tela
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  cameraButton: {
    backgroundColor: colors.purple,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: "90%",
    alignItems: "center",
  },
  cameraButtonText: {
    fontFamily: "Jura-Medium",
    fontSize: 14,
    color: colors.white,
  },
  galleryButton: {
    borderWidth: 2,
    borderColor: colors.purple,
    paddingVertical: 10,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
  },
  galleryButtonText: {
    fontFamily: "Jura-Medium",
    fontSize: 14,
    color: colors.purple,
  },
});

export default Form4;
