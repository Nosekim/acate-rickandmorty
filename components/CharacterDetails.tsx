import {
  View,
  Text,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { ModalProps } from "../types";

export default function CharacterDetails({
  showModal,
  setShowModal,
  characterDetails,
}: ModalProps) {
  console.log(characterDetails);
  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7B25F0",
        }}
      >
        <Text style={styles.text}>SELECIONADO:</Text>
        <Text style={styles.textName}>
          {characterDetails != undefined ? characterDetails[0].name : null}
        </Text>
        <Pressable
          style={styles.buttonClose}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={styles.text}>fechar</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
  buttonClose: {
    marginTop: 12,
    height: 45,
    width: Dimensions.get("window").width - 200,
    borderColor: "#FFF",
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

