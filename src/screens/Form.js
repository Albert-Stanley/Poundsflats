import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  Platform,
  ActionSheetIOS,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import FormExitModal from "../components/FormExitModal";
import IconButton from "../components/IconButton";
import colors from "../styles/colors";

const Form = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUF, setSelectedUF] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false); // Controla a visibilidade do Picker

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleContinue = () => {
    navigation.navigate("Form2");
  };

  const handleUFSelect = () => {
    if (Platform.OS === "ios") {
      // Exibe o ActionSheetIOS para iOS
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [
            "Cancelar",
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO",
          ],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex !== 0) {
            setSelectedUF(
              [
                "AC",
                "AL",
                "AP",
                "AM",
                "BA",
                "CE",
                "DF",
                "ES",
                "GO",
                "MA",
                "MT",
                "MS",
                "MG",
                "PA",
                "PB",
                "PR",
                "PE",
                "PI",
                "RJ",
                "RN",
                "RS",
                "RO",
                "RR",
                "SC",
                "SP",
                "SE",
                "TO",
              ][buttonIndex - 1]
            ); // Ajuste devido ao botão 'Cancelar'
          }
        }
      );
    } else {
      // Exibe o Picker para Android
      setPickerVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {isModalVisible && (
          <FormExitModal
            navigation={navigation} // Passa a navegação para o modal
          />
        )}
        <TouchableOpacity onPress={toggleModal}>
          <IconButton
            icon={require("../../assets/icons/back.png")}
            onPress={toggleModal} // Exibe o modal ao pressionar
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Para começarmos, precisamos de alguns dados
        </Text>
      </View>

      {/* Corpo do formulário */}
      <View style={styles.body}>
        {/* Campos de entrada */}
        <TextInput
          style={styles.input}
          placeholder="Nome do imóvel"
          placeholderTextColor={colors.fontColor}
        />
        <Text style={styles.helperText}>
          O nome do imóvel será exibido na sua tela inicial e na reserva para o
          hóspede
        </Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Descrição"
          placeholderTextColor={colors.fontColor}
          multiline
          maxLength={250}
        />
        <Text style={styles.charCounter}>0/250</Text>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor={colors.fontColor}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor={colors.fontColor}
        />

        {/* Campos lado a lado */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.numberInput]}
            placeholder="Número"
            placeholderTextColor={colors.fontColor}
          />
          <TextInput
            style={[styles.input, styles.complementInput]}
            placeholder="Complemento"
            placeholderTextColor={colors.fontColor}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.cityInput]}
            placeholder="Cidade"
            placeholderTextColor={colors.fontColor}
          />

          {/* Botão para selecionar UF */}
          <TouchableOpacity
            style={[styles.input, styles.ufButton]}
            onPress={handleUFSelect}
          >
            <View style={styles.ufContent}>
              <Text style={styles.ufText}>
                {selectedUF ? selectedUF : "UF"}
              </Text>
              <Image
                source={require("../../assets/icons/arrowdown.png")}
                style={styles.ufIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal para exibir o Picker no Android */}
      {pickerVisible && (
        <Modal transparent={true} animationType="slide">
          <View style={styles.modalPickerContainer}>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedUF}
                onValueChange={(itemValue) => {
                  setSelectedUF(itemValue);
                  setPickerVisible(false); // Fecha o Picker
                }}
                style={styles.picker} // Aplica estilo ao Picker
              >
                <Picker.Item label="UF" value="" />
                {[
                  "AC",
                  "AL",
                  "AP",
                  "AM",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MT",
                  "MS",
                  "MG",
                  "PA",
                  "PB",
                  "PR",
                  "PE",
                  "PI",
                  "RJ",
                  "RN",
                  "RS",
                  "RO",
                  "RR",
                  "SC",
                  "SP",
                  "SE",
                  "TO",
                ].map((uf) => (
                  <Picker.Item key={uf} label={uf} value={uf} />
                ))}
              </Picker>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setPickerVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {/* Rodapé */}
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
    padding: 16,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
    marginTop: 45,
  },
  headerText: {
    fontFamily: "Jura-Regular",
    fontSize: 18,
    color: colors.fontColor,
    marginLeft: 6,
    marginTop: 20,
  },
  body: {
    flex: 1,
  },
  input: {
    fontFamily: "Jura-Regular",
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  helperText: {
    fontFamily: "Jura-Regular",
    fontSize: 12,
    color: colors.fontColor,
    marginBottom: 12,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
  },
  charCounter: {
    textAlign: "right",
    color: "#858585",
    fontSize: 12,
    marginBottom: 14,
    marginRight: 10,
    marginTop: -10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numberInput: {
    flex: 1,
    marginHorizontal: 5,
    marginLeft: 0,
    marginRight: 8,
  },
  complementInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 0,
  },
  cityInput: {
    flex: 2, // O campo Cidade ocupa o dobro do espaço do campo UF
    marginRight: 8, // Espaço entre os campos
  },
  ufButton: {
    flex: 1, // O campo UF ocupa metade do espaço do campo Cidade
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: colors.borderColor,
    borderWidth: 1,
    marginBottom: 12,
  },
  ufContent: {
    flexDirection: "row", // Coloca UF e o ícone na mesma linha
    alignItems: "center",
    justifyContent: "space-between", // Espaça o texto e o ícone
    width: "100%", // Garante que o conteúdo preencha o botão
    paddingHorizontal: 8, // Espaçamento interno
  },
  ufText: {
    fontFamily: "Jura-Regular",
    fontSize: 14,
    color: colors.fontColor,
    borderColor: colors.borderColor,
  },
  ufIcon: {
    width: 12,
    height: 12,
  },
  modalPickerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pickerWrapper: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  picker: {
    color: colors.fontColor,
    fontSize: 14,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: colors.gray,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 14,
  },
  button: {
    backgroundColor: colors.purple,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 60,
  },
  buttonText: {
    fontFamily: "Jura-Medium",
    color: colors.white,
    fontSize: 15,
  },
});

export default Form;
