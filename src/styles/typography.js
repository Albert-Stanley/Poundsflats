import { StyleSheet } from "react-native";
import colors from "./colors"; // Arquivo de cores centralizado

const typography = StyleSheet.create({
  title: {
    fontFamily: "Jura",
    fontWeight: "300",
    fontSize: 24,
    lineHeight: 32,
    color: colors.fontColor,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Jura-Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 24,
    color: colors.fontColor,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Jura",
    fontWeight: "300",
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
});

export default typography;
