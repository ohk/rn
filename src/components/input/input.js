import React, { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({ text, placeholder, handler, clear }) => {
  const ref = React.createRef();

  useEffect(() => {
    console.log(clear);
    if (clear) {
      ref.current.clear();
    }
  }, []);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        ref={ref}
        onChangeText={(value) => handler(value)}
      ></TextInput>
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
