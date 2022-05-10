import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Content />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6f8",
    paddingTop: 30,
  },
});
