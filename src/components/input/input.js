import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({ text, placeholder }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontWeight: "bold",
  },
  input: {
    width: 300,
    padding: 12,
    borderWidth: 3,
    marginTop: 10,
  },
});
export default Input;
