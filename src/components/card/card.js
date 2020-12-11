import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
const customCard = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Card.Title>
        {item?.name} {item?.surName}
      </Card.Title>
      <Card.Divider style={styles.divider} />
      <Text style={styles.text}>{item?.firm}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#576BB2",
  },
  text: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default customCard;
