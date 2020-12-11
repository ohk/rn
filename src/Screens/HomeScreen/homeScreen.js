import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar } from "react-native-elements";

import Input from "../../components/input";
import Button from "../../components/button";
import Alert from "../../components/alert";

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [firm, setFirm] = useState("");
  const [clear, setClear] = useState(false);

  const save = async () => {
    if (name === "") {
      Alert("Eksik Alan", "İsim boş bırakılamaz!");
      return;
    }

    if (surName === "") {
      Alert("Eksik Alan", "Soyisim boş bırakılamaz!");
      return;
    }

    if (firm === "") {
      Alert("Eksik Alan", "Firma boş bırakılamaz!");
      return;
    }

    try {
      let person = {
        key: Math.random(1000).toString(),
        name: name,
        surName: surName,
        firm: firm,
      };
      var persons = (await AsyncStorage.getItem("persons")) || "[]";
      persons = JSON.parse(persons);
      persons.push(person);
      AsyncStorage.setItem("persons", JSON.stringify(persons)).then(() =>
        Alert("Yeni Kayıt", "Kayıt eklendi.")
      );
      setClear(true);
      setClear(false);
    } catch (error) {
      console.log(error);
      Alert("Kayıt Hatası", "Cihaza kayıt esnasında hata ile karşılaşıldı");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="xlarge"
          backgroundColor="#CCC"
          icon={{ name: "user", color: "black", type: "font-awesome" }}
          activeOpacity={0.7}
        />
      </View>
      {!clear && (
        <View style={styles.inputs}>
          <Input
            text="İsim"
            placeholder="John"
            handler={setName}
            clear={clear}
          />
          <Input
            text="Soyisim"
            placeholder="Doe"
            handler={setSurName}
            clear={clear}
          />
          <Input
            text="Firma"
            placeholder="Magis Technology"
            handler={setFirm}
            clear={clear}
          />
        </View>
      )}
      <View style={styles.buttons}>
        <Button title="Kaydet" color="#4AC341" onPress={save} />
        <Button
          title="Listele"
          color="#CC0B0B"
          onPress={() => navigation.navigate("List")}
        />
        <StatusBar style="auto" />
      </View>
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
  kaydet: {
    borderWidth: 3,
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
