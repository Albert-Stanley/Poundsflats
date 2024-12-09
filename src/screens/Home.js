import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconButton from "../components/IconButton";
import colors from "../styles/colors";
import ExitModal from "../components/ExitModal";
import Cadastrar from "../../assets/icons/Cadastrar";
import SadFace from "../../assets/icons/SadFace";
import Predio from "../../assets/icons/Predio";
import Calendar from "../../assets/icons/Calendar";
import Grade from "../../assets/icons/Grade";
import User from "../../assets/icons/User";

const Home = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {isModalVisible && (
          <ExitModal
            navigation={navigation} // Passa a navegação para o modal
          />
        )}
        <TouchableOpacity onPress={toggleModal}>
          <IconButton
            icon={require("../../assets/icons/back.png")}
            onPress={toggleModal}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addContainer}
          onPress={() => navigation.navigate("Form")}
        >
          {/* SVG inline no código */}
          <Cadastrar />
          <Text style={styles.addText}>Cadastrar imóvel</Text>
        </TouchableOpacity>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        {/* Saudação */}
        <Text style={styles.welcome}>Bem-vindo, Raphael!</Text>

        {/* Filtros */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, styles.activeFilterButton]}
            onPress={() => console.log("Filtrar: Todos os flats")}
          >
            <Text style={styles.filterButtonText}>Todos os flats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, styles.inactiveFilterButton]}
            onPress={() => console.log("Filtrar: Indisponíveis")}
          >
            <Text style={[styles.filterButtonText, styles.inactiveText]}>
              Indisponíveis
            </Text>
          </TouchableOpacity>
        </View>

        {/* Ícone de rosto triste usando SVG */}
        <View style={styles.sadFaceContainer}>
          <SadFace />
        </View>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?
        </Text>

        {/* Botão para cadastrar imóvel */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Form")}
        >
          <Text style={styles.primaryButtonText}>
            Cadastrar meu primeiro imóvel
          </Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé do formulário */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Predio />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Calendar />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Grade />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <User />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 40,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addIcon: {
    width: 24,
    height: 24,
    paddingRight: 18,
  },
  addText: {
    fontFamily: "Jura-Bold",
    color: colors.purple,
    fontSize: 16,
  },
  body: {
    flex: 1,
  },
  welcome: {
    fontFamily: "Jura-Bold",
    fontSize: 22,
    lineHeight: 28,
    color: colors.fontColor,
    marginBottom: 20,
    marginTop: 8,
    textAlign: "left",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 32,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
    borderWidth: 1,
  },
  activeFilterButton: {
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  inactiveFilterButton: {
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
  },
  filterButtonText: {
    fontFamily: "Jura-Bold",
    fontSize: 12,
    textAlign: "center",
    color: colors.white,
  },
  inactiveText: {
    color: "#333333",
  },
  sadFaceContainer: {
    marginVertical: 20,
    marginTop: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: "Jura-Regular",
    fontSize: 20,
    lineHeight: 24,
    color: colors.fontColor,
    textAlign: "center",
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.purple,
    alignSelf: "center",
  },
  primaryButtonText: {
    fontFamily: "Jura-Bold",
    fontSize: 14,
    color: colors.purple,
    textAlign: "center",
  },
  footer: {
    backgroundColor: colors.purple,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    margin: -20,
  },
  footerIcon: {
    padding: 10,
    borderRadius: 15,
    top: -20,
  },
});

export default Home;
