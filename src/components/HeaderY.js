import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Check } from "../../Data";
const Header = ({ Modal }) => {
  console.log("🚀 ~ file: Header.js ~ line 5 ~ Header ~ Modal", Modal);
  return (
    <View style={{ opacity: Modal ? 1 : 0.2 }}>
      <ScrollView style={styles.headerLeaave}>
        <Text style={styles.leaveText}>Leave Request</Text>
        <View style={styles.leaveRemaiming}>
          {Check.map((Check, index) => (
            <View style={styles.list} key={index}>
              <Text style={styles.number}>{Check.number}</Text>
              <Text style={styles.request}>{Check.request}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerLeaave: {
    backgroundColor: "#308AF3",
    height: 140,
  },
  leaveText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
  leaveRemaiming: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  number: {
    color: "#FFFFFF",
    fontSize: 24,
    marginLeft: 5,
  },
  request: {
    color: "#FFFFFF",
  },
});