import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import Home from "./src/screens/Home";
import ExitModal from "./src/screens/ExitModal";
import { loadFonts } from "./src/styles/fonts";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Carregar as fontes antes de renderizar a aplicação
  useEffect(() => {
    const loadAllFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAllFonts();
  }, []);

  if (!fontsLoaded) {
    // Mostrar indicador de carregamento enquanto as fontes não estiverem carregadas
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  // Renderizar a navegação apenas após o carregamento das fontes
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExitModal"
          component={ExitModal}
          options={{
            headerShown: false,
            presentation: "modal", // Apresenta como modal
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
