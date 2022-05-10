import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ButtonLinearGradient from "../ButtonLinearGradient";
import Button from "../Button";
import Images from "../User/index";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/AuthContext";
const BoxHeader = () => {
  const { signOut } = React.useContext(AuthContext);
  const { navigate } = useNavigation();
  const checkIn = () => {
    navigate("Details");
  };
  return (
    <View style={styles.box}>
      <View style={styles.header_box}>
        <View style={styles.image}>
          <View>
            <Text style={styles.wcome}>Welcome back</Text>
            <View style={styles.id}>
              <Text style={styles.user}>John</Text>
              <Text> - ID: 19012</Text>
            </View>
          </View>
          <Images width={45} height={45} borderRadius="50%" />
        </View>
        <View style={styles.clock}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../../../assets/icons8-clock-24.png")}
          />
          <Text style={styles.hours}>09 : 15 : 34</Text>
        </View>
        <Text style={styles.today}>You're not check in yet today</Text>
        <View style={styles.check}>
          <ButtonLinearGradient
            onClick={checkIn}
            text="CHECK IN"
            style={{ width: 120 }}
          />
          <Button onPress={signOut} text="CHECK OUT" styleButton={styles.out} styleText={styles.text}/>
          
        </View>
      </View>
    </View>
  );
};

export default BoxHeader;

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
  },
  wcome: {
    marginBottom: 2,
  },
  box: {
    backgroundColor: "white",
    width: "90%",
    marginHorizontal: "auto",
    borderRadius: 8,
    margin: 10,
    position: "absolute",
    left: "5%",
    padding: 20,
    top: 70,
    shadowColor: "rgba(0, 0, 0, 0.502)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  id: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    fontSize: 20,
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  hours: {
    marginLeft: 10,
    color: "#308bf6",
    fontSize: 18,
  },
  image: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  today: {
    color: "gray",
    marginTop: 5,
  },
  out: {
    width: 125,
    backgroundColor: "#d8d8d8",
    fontSize: 15,
  },
  check: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  text: {
    color:'white',
  }
});
