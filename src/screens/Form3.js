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
    airConditioning: true,
    television: true,
    cableTv: true,
  });

  const [permissions, setPermissions] = useState({
    couples: true,
    children: true,
    smokers: true,
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
      <SwitchOff active={isActive} /> {/* Passando estado ativo */}
    </TouchableOpacity>
  );

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
        <Text style={styles.headerText}>
          Defina as comodidades e permissões do seu Poundsflats
        </Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Comodidades</Text>
        {Object.entries(amenities).map(([key, value]) => (
          <View key={key} style={styles.toggleContainer}>
            <Text style={styles.label}>{key.replace(/([A-Z])/g, " $1")}</Text>
            {renderSwitch(value, () => toggleAmenity(key))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Permissões</Text>
        {Object.entries(permissions).map(([key, value]) => (
          <View key={key} style={styles.toggleContainer}>
            <Text style={styles.label}>{key.replace(/([A-Z])/g, " $1")}</Text>
            {renderSwitch(value, () => togglePermission(key))}
          </View>
        ))}
      </ScrollView>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
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
    flexDirection: "row",
    alignItems: "center",
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
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: "Jura-Bold",
    fontSize: 16,
    color: colors.fontColor,
    marginTop: 24,
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  label: {
    fontFamily: "Jura-Regular",
    fontSize: 16,
    color: colors.fontColor,
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
