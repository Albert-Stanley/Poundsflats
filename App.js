import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import Home from "./src/screens/Home";
import Form from "./src/screens/Form";
import { loadFonts } from "./src/styles/fonts";
import Form2 from "./src/screens/Form2";
import Form3 from "./src/screens/Form3";
import Form4 from "./src/screens/Form4";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAllFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAllFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form2"
          component={Form2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form3"
          component={Form3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form4"
          component={Form4}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
