import React, { useState } from "react";
import { Alert } from "react-native";

const createAlert = async (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ],
    { cancelable: false }
  );
  return;
};

export default createAlert;
