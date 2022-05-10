import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Sick } from "../../Data";
const Between = () => {
  return (
    <View style={styles.leaveTaken}>
      <Icon style={styles.icon} name="menu-outline" color="gray" />
      {Sick.map((Sick, index) => (
        <View style={styles.list} key={index}>
          <Text style={styles.text}>{Sick.text}</Text>
        </View>
      ))}
    </View>
  );
};

export default Between;

const styles = StyleSheet.create({
  leaveTaken: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 14,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  icon: {
    fontSize: 24,
  },
});