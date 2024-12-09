import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Back from "../../assets/icons/Back";
import SwitchOff from "../../assets/icons/SwitchOff";
import colors from "../styles/colors";

const Form3 = ({ navigation }) => {
  const [amenities, setAmenities] = useState({
    internet: true,
    arCondicionado: true,
    televisao: true,
    tvACabo: true,
  });

  const [permissions, setPermissions] = useState({
    casais: true,
    criancas: true,
    fumantes: true,
    pets: true,
  });

  const toggleAmenity = (key) => {
    setAmenities((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePermission = (key) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSwitch = (isActive, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <SwitchOff active={isActive ? "true" : "false"} />
    </TouchableOpacity>
  );

  const handleContinue = () => {
    navigation.navigate("Form4");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Defina as comodidades e permissões do seu Poundsflats
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Comodidades</Text>
        {Object.entries(amenities).map(([key, value]) => (
          <View key={key} style={styles.toggleContainer}>
            <Text style={styles.label}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace("internet", "Internet")
                .replace("ar Condicionado", "Ar-condicionado")
                .replace("televisao", "Televisão")}
            </Text>
            {renderSwitch(value, () => toggleAmenity(key))}
          </View>
        ))}
        <Text style={styles.sectionTitle}>Permissões</Text>
        {Object.entries(permissions).map(([key, value]) => (
          <View key={key} style={styles.toggleContainer}>
            <Text style={styles.label}>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace("casais", "Casais")
                .replace("criancas", "Crianças")
                .replace("fumantes", "Fumantes")
                .replace("pets", "Pets")}
            </Text>
            {renderSwitch(value, () => togglePermission(key))}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    marginTop: 40,
  },
  backButton: {
    marginRight: 8,
  },
  headerText: {
    fontFamily: "Jura-Regular",
    fontSize: 18,
    color: colors.fontColor,
    marginTop: 16,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: "Jura-Regular",
    fontSize: 18,
    color: colors.gray,
    marginTop: 12,
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8, // Espaçamento interno
  },
  label: {
    fontFamily: "Jura-Regular",
    fontSize: 14,
    color: colors.fontColor,
    marginTop: 0,
  },
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});

export default Form3;
