import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { profile } from "../../Data";
import { useNavigation } from "@react-navigation/native";
import Images from "../components/User";

const ProfileScreen = () => {
  const { navigate } = useNavigation();
  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Profile</Text>
      </View>
      <View style={styles.box_use}>
        <Images height={90} width={90} borderRadius="600" />
        <View style={styles.id}>
          <Text style={styles.user}>John</Text>
          <Text> - ID: 19012</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate("Details");
          }}
          style={styles.product}
        >
          <Text>Product Designer</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate("Details");
        }}
        style={styles.main}
      >
        {profile.map((item) => (
          <View style={styles.content} key={item.id}>
            <View style={styles.content_box}>
              <Image
                style={styles.content_image}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
              <Text style={styles.content_text}>{item.title}</Text>
            </View>
            <Image
              style={styles.image_right}
              resizeMode="cover"
              source={{ uri: item.imageRight }}
            />
          </View>
        ))}
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6f8",
    paddingBottom: 30,
  },
  header: {
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
  },
  box_use: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  id: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  user: {
    fontSize: 20,
  },
  product: {
    fontSize: 13,
    fontFamily: "sans-serif",
  },
  main: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#f5f6f8",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "rgba(0, 0, 0, 0.502)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  content_box: {
    flexDirection: "row",
    alignItems: "center",
  },
  content_image: {
    height: 20,
    width: 20,
  },
  image_right: {
    height: 12,
    width: 12,
  },
  content_text: {
    marginLeft: 25,
    fontSize: 16,
  },
});
