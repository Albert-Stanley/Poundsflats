// src/styles/fonts.js
import * as Font from "expo-font";

// Função para carregar as fontes
export const loadFonts = async () => {
  await Font.loadAsync({
    "Jura-Regular": require("../../assets/fonts/Jura-Regular.ttf"),
    "Jura-Bold": require("../../assets/fonts/Jura-Bold.ttf"),
    "Jura-Light": require("../../assets/fonts/Jura-Light.ttf"),
    "Jura-Medium": require("../../assets/fonts/Jura-Medium.ttf"),
  });
};
