import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
export default function ButtonLinearGradient({ text, onClick, style }) {
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#7AF176", "#35B1B7"]}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    paddingVertical: 7,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
