import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import BoxHeader from "./Container/BoxHeader";
import { useNavigation } from "@react-navigation/native";
import {  DrawerActions } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>UGBM</Text>
        <TouchableOpacity   onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            style={styles.logo_bar}
            resizeMode="contain"
            source={require("../../assets/icons8-menu-32.png")}
          />
        </TouchableOpacity>
      </View>
      <BoxHeader />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#308bf6",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    height: 210,
    marginBottom:30,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  logo_bar: {
    width: 20,
    height: 20,
    transform: [{ rotate: "180deg" }],
  },
});
