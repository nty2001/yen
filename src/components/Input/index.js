import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";

export default function Inputs({ text, onPress, width }) {
  return (
    <View style={{ width: width }}>
      <View style={styles.container}>
        <View style={styles.images}>
          <Image
            style={styles.iconInput}
            resizeMode="contain"
            source={require("../../../assets/icons8-user-30.png")}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder={text}
          placeholderTextColor="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#86acf5",
  },
  images: {
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 4,
  },
  iconInput: {
    width: 20,
    height: 20,
  },
  textInput: {
    paddingLeft: 10,
    outlineWidth: 0,
    color: "#ffffff",
  },
});
