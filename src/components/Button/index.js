import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ onPress, text, styleButton, styleText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,styleButton]}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.502)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    fontFamily: "sans-serif",
    justifyContent: "center",
  },
});
