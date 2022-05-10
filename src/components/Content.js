import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { content } from "../../Data";

const Content = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.content}>
      {content.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (index === 0) {
              navigate("Attendance");
            }
            if (index === 3) {
              navigate("Leave");
            }
          }}
          style={styles.box}
        >
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: item.img }}
          />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 80,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "white",
    width: "47%",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 15,
    shadowColor: "rgba(0, 0, 0, 0.502)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: 35,
    height: 35,
  },
});
