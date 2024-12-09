import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import PlusSvg from "../../assets/icons/PlusSvg";
import MinusSvg from "../../assets/icons/MinusSvg";
import Switch from "../../assets/icons/Switch";
import Back from "../../assets/icons/Back";
import ArrowDown from "../../assets/icons/ArrowDown";
import DeleteSvg from "../../assets/icons/DeleteSvg"; // Importando o DeleteSvg
import colors from "../styles/colors";

const Form2 = ({ navigation }) => {
  const [showFullForm, setShowFullForm] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const toggleForm = () => {
    setShowFullForm(!showFullForm);
  };

  const handleContinue = () => {
    navigation.navigate("Form3");
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Agora é hora de dar mais detalhes</Text>
      </View>

      {/* Conteúdo do formulário */}
      <ScrollView style={styles.scrollView}>
        {/* Campo Tipo de Imóvel */}
        <TouchableOpacity style={styles.dropdown} onPress={toggleForm}>
          <Text style={styles.dropdownText}>
            {selectedPropertyType || "Tipo de Imóvel"}
          </Text>
          <ArrowDown />
        </TouchableOpacity>

        {/* Exibição do restante do formulário */}
        {showFullForm && (
          <View style={styles.fullForm}>
            {/* Quartos */}
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <MinusSvg />
              </TouchableOpacity>
              <Text style={styles.counterText}>Quartos</Text>
              <TouchableOpacity style={styles.iconButton}>
                <PlusSvg />
              </TouchableOpacity>
            </View>

            {/* Banheiros */}
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <MinusSvg />
              </TouchableOpacity>
              <Text style={styles.counterText}>Banheiros</Text>
              <TouchableOpacity style={styles.iconButton}>
                <PlusSvg />
              </TouchableOpacity>
            </View>

            {/* Exibição de campos com tags e DeleteSvg */}
            <View style={styles.section}>
              {/* Quarto Mobiliado */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Quarto mobiliado?</Text>
                <Switch />
              </View>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Itens do quarto"
                  multiline
                  placeholderTextColor={colors.fontColor}
                />
                <TouchableOpacity>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {["Guarda-roupa", "Frigobar", "Cama de casal", "Sacada"].map(
                  (tag, index) => (
                    <View key={index} style={styles.tagWithDelete}>
                      <TouchableOpacity>
                        <DeleteSvg />
                      </TouchableOpacity>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  )
                )}
              </View>

              {/* Banheiro Equipado */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Banheiro equipado?</Text>
                <Switch />
              </View>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Itens do banheiro"
                  multiline
                  placeholderTextColor={colors.fontColor}
                />
                <TouchableOpacity>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {[
                  "Box blindex",
                  "Chuveiro elétrico",
                  "Pia",
                  "Vaso sanitário",
                  "Banheira",
                ].map((tag, index) => (
                  <View key={index} style={styles.tagWithDelete}>
                    <TouchableOpacity>
                      <DeleteSvg />
                    </TouchableOpacity>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Cozinha Equipada */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Cozinha equipada?</Text>
                <Switch />
              </View>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Itens da cozinha"
                  multiline
                  placeholderTextColor={colors.fontColor}
                />
                <TouchableOpacity>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {[
                  "Fogão elétrico",
                  "Geladeira",
                  "Microondas",
                  "Forno elétrico",
                ].map((tag, index) => (
                  <View key={index} style={styles.tagWithDelete}>
                    <TouchableOpacity>
                      <DeleteSvg />
                    </TouchableOpacity>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Área de Serviço */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Área de serviço?</Text>
                <Switch />
              </View>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Itens da área de serviço"
                  multiline
                  placeholderTextColor={colors.fontColor}
                />
                <TouchableOpacity>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {["Tanque", "Lava e seca roupas"].map((tag, index) => (
                  <View key={index} style={styles.tagWithDelete}>
                    <TouchableOpacity>
                      <DeleteSvg />
                    </TouchableOpacity>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Sala Equipada */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleLabel}>Sala equipada?</Text>
                <Switch />
              </View>
              <View style={styles.inputWithIcon}>
                <TextInput
                  style={styles.input}
                  placeholder="Itens da sala"
                  multiline
                  placeholderTextColor={colors.fontColor}
                />
                <TouchableOpacity>
                  <PlusSvg />
                </TouchableOpacity>
              </View>
              <View style={styles.tagsContainer}>
                {["Sofá cama", "Televisão"].map((tag, index) => (
                  <View key={index} style={styles.tagWithDelete}>
                    <TouchableOpacity>
                      <DeleteSvg />
                    </TouchableOpacity>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Botão Continuar */}
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
    alignItems: "left",
    padding: 16,
    marginTop: 40,
  },
  backButton: {
    marginLeft: 6,
  },
  headerText: {
    fontFamily: "Jura-Regular",
    fontSize: 16,
    color: colors.fontColor,
    marginTop: 16,
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  dropdownText: {
    fontFamily: "Jura-Regular",
    fontSize: 16,
    color: colors.fontColor,
  },
  fullForm: {
    marginTop: 16,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  counterText: {
    fontFamily: "Jura-Regular",
    fontSize: 16,
    color: colors.fontColor,
    textAlign: "center",
    flex: 1,
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  toggleLabel: {
    fontFamily: "Jura-Regular",
    fontSize: 16,
    color: colors.fontColor,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    fontFamily: "Jura-Regular",
    fontSize: 14,
    flex: 1,
    paddingVertical: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -2,
    marginBottom: 16,
  },
  tagWithDelete: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
    paddingTop: 4,
  },
  tagText: {
    alignItems: "center",
    fontFamily: "Jura-Regular",
    fontSize: 12,
    color: colors.fontColor,
    marginRight: 8,
    marginLeft: 4,
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

export default Form2;
