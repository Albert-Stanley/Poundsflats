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
    navigation.navigate("NextPage");
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
        <TextInput style={styles.input} placeholder="Nome do imóvel" />
        <Text style={styles.helperText}>
          O nome do imóvel será exibido na sua tela inicial e na reserva para o
          hóspede
        </Text>
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Descrição"
          multiline
          maxLength={250}
        />
        <Text style={styles.charCounter}>0/250</Text>
        <TextInput style={styles.input} placeholder="CEP" />
        <TextInput style={styles.input} placeholder="Endereço" />

        {/* Campos lado a lado */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Número"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Complemento"
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Cidade"
          />

          {/* Botão para selecionar UF */}
          <TouchableOpacity
            style={[styles.input, styles.halfInput, styles.ufButton]}
            onPress={handleUFSelect}
          >
            <View style={styles.ufContent}>
              <Text style={styles.ufText}>
                {selectedUF ? selectedUF : "Selecione UF"}
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
    marginBottom: 16,
    marginTop: 40,
  },
  headerText: {
    fontFamily: "Jura-Regular",
    fontSize: 18,
    color: colors.fontColor,
    marginLeft: 6,
    marginTop: 10,
  },
  body: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  helperText: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
  },
  charCounter: {
    textAlign: "right",
    color: colors.gray,
    fontSize: 12,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 4,
  },
  ufButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 12,
  },
  ufContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  ufText: {
    fontSize: 14,
    color: colors.fontColor,
    marginRight: 8,
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
    marginTop: 16,
  },
  buttonText: {
    fontFamily: "Jura-Medium",
    color: colors.white,
    fontSize: 15,
  },
});

export default Form;
