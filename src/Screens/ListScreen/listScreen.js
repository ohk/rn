import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../../components/button";
import Card from "../../components/card";
import createAlert from "../../components/alert";
const ListScreen = ({ navigation }) => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getData = async () => {
    var persons = (await AsyncStorage.getItem("persons")) || "[]";
    persons = JSON.parse(persons);
    console.log(persons.length);
    setPersons(persons);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const deletePersons = async () => {
    try {
      await AsyncStorage.removeItem("persons");
      createAlert("Silme", "Kayıtlar Temizlendi");
      setPersons([]);
    } catch (e) {
      setPersons([]);
    }
  };
  return (
    <View style={styles.container}>
      {isLoading === false && (
        <FlatList
          keyExtractor={() => Math.random(1000).toString()}
          data={persons}
          renderItem={({ item }) => {
            console.log(item);
            return <Card item={item} />;
          }}
        />
      )}
      <View style={styles.buttons}>
        <Button
          title="Geri Dön"
          color="#4AC341"
          onPress={() => navigation.goBack()}
        />
        <Button title="Sil" color="#CC0B0B" onPress={() => deletePersons()} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
    justifyContent: "center",
  },
  buttons: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ListScreen;
