import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import IconButton from "../components/IconButton";
import colors from "../styles/colors";
import ExitModal from "../components/ExitModal";

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
          <Svg width={32} height={16} viewBox="0 0 16 17" fill="none">
            <Path
              d="M9.11575 7.584H15.4838V9.856H9.11575V16.448H6.81175V9.856H0.44375V7.584H6.81175V0.959999H9.11575V7.584Z"
              fill="#7B2CBF"
            />
          </Svg>
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
          <Svg width="47" height="48" viewBox="0 0 47 48" fill="none">
            <Path
              d="M23.5 0.75C36.3438 0.75 46.75 11.1562 46.75 24C46.75 36.8438 36.3438 47.25 23.5 47.25C10.6562 47.25 0.25 36.8438 0.25 24C0.25 11.1562 10.6562 0.75 23.5 0.75ZM23.5 44.25C34.6562 44.25 43.75 35.25 43.75 24C43.75 12.8438 34.6562 3.75 23.5 3.75C12.25 3.75 3.25 12.8438 3.25 24C3.25 35.25 12.25 44.25 23.5 44.25ZM16 22.5C14.3125 22.5 13 21.1875 13 19.5C13 17.9062 14.3125 16.5 16 16.5C17.5938 16.5 19 17.9062 19 19.5C19 21.1875 17.5938 22.5 16 22.5ZM31 16.5C32.5938 16.5 34 17.9062 34 19.5C34 21.1875 32.5938 22.5 31 22.5C29.3125 22.5 28 21.1875 28 19.5C28 17.9062 29.3125 16.5 31 16.5ZM23.5 27C27.1562 27 33.0625 29.25 33.9062 34.0312C34.0938 35.0625 33.7188 36.0938 32.9688 36.75C31.9375 37.6875 30.8125 37.5938 30.0625 37.4062C27.3438 36.5625 24.8125 36 23.5 36C22.0938 36 19.5625 36.5625 16.8438 37.4062C15.8125 37.6875 14.7812 37.5 13.9375 36.75C13.1875 36.0938 12.8125 35.0625 13 34.0312C13.8438 29.25 19.75 27 23.5 27ZM23.5 33C25.0938 33 27.8125 33.5625 31 34.5C30.4375 31.7812 26.2188 30 23.5 30C20.6875 30 16.4688 31.7812 16 34.5C19.0938 33.5625 21.8125 33 23.5 33Z"
              fill="#7B2CBF"
            />
          </Svg>
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
          <Svg
            width="32"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M8 9.25V6.75C8 6.375 8.3125 6 8.75 6H11.25C11.625 6 12 6.375 12 6.75V9.25C12 9.6875 11.625 10 11.25 10H8.75C8.3125 10 8 9.6875 8 9.25ZM16.75 10C16.3125 10 16 9.6875 16 9.25V6.75C16 6.375 16.3125 6 16.75 6H19.25C19.625 6 20 6.375 20 6.75V9.25C20 9.6875 19.625 10 19.25 10H16.75ZM8.75 16C8.3125 16 8 15.6875 8 15.25V12.75C8 12.375 8.3125 12 8.75 12H11.25C11.625 12 12 12.375 12 12.75V15.25C12 15.6875 11.625 16 11.25 16H8.75ZM16.75 16C16.3125 16 16 15.6875 16 15.25V12.75C16 12.375 16.3125 12 16.75 12H19.25C19.625 12 20 12.375 20 12.75V15.25C20 15.6875 19.625 16 19.25 16H16.75ZM12 21.25C12 21.6875 11.625 22 11.25 22H8.75C8.3125 22 8 21.6875 8 21.25V18.75C8 18.375 8.3125 18 8.75 18H11.25C11.625 18 12 18.375 12 18.75V21.25ZM16.75 22C16.3125 22 16 21.6875 16 21.25V18.75C16 18.375 16.3125 18 16.75 18H19.25C19.625 18 20 18.375 20 18.75V21.25C20 21.6875 19.625 22 19.25 22H16.75ZM28 29.75V32H0V29.75C0 29.375 0.3125 29 0.75 29H1.9375V1.5C1.9375 0.6875 2.625 0 3.4375 0H24.5C25.3125 0 26 0.6875 26 1.5V29H27.25C27.625 29 28 29.375 28 29.75ZM4.9375 28.9375H12V24.75C12 24.375 12.3125 24 12.75 24H15.25C15.625 24 16 24.375 16 24.75V28.9375H23V3.0625L5 3L4.9375 28.9375Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M11.25 18H8.75C8.3125 18 8 17.6875 8 17.25V14.75C8 14.375 8.3125 14 8.75 14H11.25C11.625 14 12 14.375 12 14.75V17.25C12 17.6875 11.625 18 11.25 18ZM18 17.25C18 17.6875 17.625 18 17.25 18H14.75C14.3125 18 14 17.6875 14 17.25V14.75C14 14.375 14.3125 14 14.75 14H17.25C17.625 14 18 14.375 18 14.75V17.25ZM24 17.25C24 17.6875 23.625 18 23.25 18H20.75C20.3125 18 20 17.6875 20 17.25V14.75C20 14.375 20.3125 14 20.75 14H23.25C23.625 14 24 14.375 24 14.75V17.25ZM18 23.25C18 23.6875 17.625 24 17.25 24H14.75C14.3125 24 14 23.6875 14 23.25V20.75C14 20.375 14.3125 20 14.75 20H17.25C17.625 20 18 20.375 18 20.75V23.25ZM12 23.25C12 23.6875 11.625 24 11.25 24H8.75C8.3125 24 8 23.6875 8 23.25V20.75C8 20.375 8.3125 20 8.75 20H11.25C11.625 20 12 20.375 12 20.75V23.25ZM24 23.25C24 23.6875 23.625 24 23.25 24H20.75C20.3125 24 20 23.6875 20 23.25V20.75C20 20.375 20.3125 20 20.75 20H23.25C23.625 20 24 20.375 24 20.75V23.25ZM30 7V29C30 30.6875 28.625 32 27 32H5C3.3125 32 2 30.6875 2 29V7C2 5.375 3.3125 4 5 4H8V0.75C8 0.375 8.3125 0 8.75 0H11.25C11.625 0 12 0.375 12 0.75V4H20V0.75C20 0.375 20.3125 0 20.75 0H23.25C23.625 0 24 0.375 24 0.75V4H27C28.625 4 30 5.375 30 7ZM27 28.625V10H5V28.625C5 28.875 5.125 29 5.375 29H26.625C26.8125 29 27 28.875 27 28.625Z"
              fill="#5E2191"
              fill0pacity="0.24"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Svg
            width="32"
            height="32"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M0 3C0 1.375 1.3125 0 3 0H29C30.625 0 32 1.375 32 3V25C32 26.6875 30.625 28 29 28H3C1.3125 28 0 26.6875 0 25V3ZM29.5 17V11H12.3125V17H29.5ZM29.5 19.5H12.3125V25.5H28.75C29.125 25.5 29.5 25.1875 29.5 24.75V19.5ZM2.5 11V17H9.8125V11H2.5ZM12.3125 8.5H29.5V3.25C29.5 2.875 29.125 2.5 28.75 2.5H12.3125V8.5ZM9.8125 2.5H3.25C2.8125 2.5 2.5 2.875 2.5 3.25V8.5H9.8125V2.5ZM2.5 19.5V24.75C2.5 25.1875 2.8125 25.5 3.25 25.5H9.8125V19.5H2.5Z"
              fill="#5E2191"
              fill0pacity="0.24"
            />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M21.5625 19C26.1875 19 30 22.8125 30 27.4375V29C30 30.6875 28.625 32 27 32H5C3.3125 32 2 30.6875 2 29V27.4375C2 22.8125 5.75 19 10.375 19C12.1875 19 13 20 16 20C18.9375 20 19.75 19 21.5625 19ZM27 29V27.4375C27 24.4375 24.5625 22 21.5625 22C20.625 22 19.1875 23 16 23C12.75 23 11.3125 22 10.375 22C7.375 22 5 24.4375 5 27.4375V29H27ZM16 18C11 18 7 14 7 9C7 4.0625 11 0 16 0C20.9375 0 25 4.0625 25 9C25 14 20.9375 18 16 18ZM16 3C12.6875 3 10 5.75 10 9C10 12.3125 12.6875 15 16 15C19.25 15 22 12.3125 22 9C22 5.75 19.25 3 16 3Z"
              fill="black"
              fillOpacity="0.24"
            />
          </Svg>
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
    borderTopLeftRadius: 20, // Arredondar borda superior esquerda
    borderTopRightRadius: 20, // Arredondar borda superior direita
    paddingVertical: 40, // Espaçamento interno vertical
    paddingHorizontal: 10, // Espaçamento interno horizontal
    flexDirection: "row", // Layout em linha para os botões
    justifyContent: "space-around", // Espaçamento igual entre os botões
    alignItems: "center", // Alinhamento vertical central
    elevation: 5, // Adicionar sombra para dispositivos Android
    shadowColor: "#000", // Cor da sombra para iOS
    shadowOffset: { width: 0, height: -2 }, // Direção da sombra para iOS
    shadowOpacity: 0.2, // Opacidade da sombra para iOS
    shadowRadius: 5, // Raio da sombra para iOS
    margin: -20, // Margem negativa para cobrir a borda do container
  },
  footerIcon: {
    padding: 10,
    borderRadius: 15,
    top: -20,
  },
});

export default Home;
