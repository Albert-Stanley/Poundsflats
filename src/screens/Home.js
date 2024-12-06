import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import IconButton from "../components/IconButton";
import colors from "../styles/colors";
import typography from "../styles/typography";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {/* Botão de voltar usando IconButton */}
        <IconButton
          icon={require("../../assets/icons/back.png")}
          onPress={() => navigation.navigate("ExitModal")}
        />

        {/* Texto e ícone de cadastrar imóvel */}
        <View style={styles.addContainer}>
          <Image
            source={require("../../assets/icons/add.png")}
            style={styles.addIcon}
          />
          <Text style={styles.addText}>Cadastrar imóvel</Text>
        </View>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <Text style={styles.welcome}>Bem-vindo, Raphael!</Text>

        {/* Botões de filtro */}
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log("Filtrar: Todos os flats")}
          >
            <Text style={styles.filterButtonText}>Todos os flats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => console.log("Filtrar: Indisponíveis")}
          >
            <Text style={styles.filterButtonText}>Indisponíveis</Text>
          </TouchableOpacity>
        </View>

        {/* Ícone de rosto triste */}
        <Image
          source={require("../../assets/icons/sad-face.png")}
          style={styles.sadFace}
        />

        {/* Texto de subtítulo */}
        <Text style={styles.subtitle}>
          Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?
        </Text>

        {/* Botão para cadastrar imóvel */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => console.log("Cadastrar Imóvel")}
        >
          <Text style={styles.primaryButtonText}>
            Cadastrar meu primeiro imóvel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 50,
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  addText: {
    fontFamily: "Jura-Bold",
    color: colors.purple,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontFamily: "Jura-Bold",
    fontSize: 24,
    fontWeight: "700",
    color: colors.fontColor,
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 32,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  filterButtonText: {
    fontFamily: "Jura-Bold",
    fontSize: 14,
    color: colors.primary,
    textAlign: "center",
  },
  sadFace: {
    width: 48,
    height: 48,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  primaryButtonText: {
    fontFamily: "Jura-Bold",
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
});

export default Home;
