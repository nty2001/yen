import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Images({ onPress, width, height }) {
      const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate("Details");
      }}
    >
      <Image
        style={{ width: width, height: height, borderRadius: 50, }}
        resizeMode="cover"
        source={require("../../../assets/userr.jpg")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});