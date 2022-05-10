import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Leave } from "../../Data";
import { Date } from "../../Data";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("window");
console.log("🚀 ~ file: Submit.js ~ line 9 ~ width", width);
const Submit = ({ setBlur }) => {
  const onChange = (index) => {
    setColor(true);
    setId(index);
  };
  const onClick = () => {
    setBlur(false);
  };
  const [Color, setColor] = useState(true);
  const [id, setId] = useState(0);

  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.leave}>Leave Type:</Text>
      </View>
      <View style={styles.list}>
        {Leave.map((Leave, index) => (
          <View
            style={{
              height: 40,
              width: 80,
              backgroundColor: Color && id == index ? "#308AF3" : "#FFF",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 26,
            }}
            key={index}
          >
            <TouchableOpacity onPress={() => onChange(index)}>
              <Text
                style={{
                  color: Color && id == index ? "white" : "gray",
                  fontSize: 18,
                }}
              >
                {Leave.regime}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}
      >
        {Date.map((Date, index) => (
          <View style={styles.boxItem} key={index}>
            <View style={styles.itemLeave}>
              <Text style={styles.textItem}> Date Start:</Text>
              <Text style={styles.boxDate}>{Date.DateStart}</Text>
            </View>
            <View style={styles.itemLeave}>
              <Text style={styles.textItem}> Date End:</Text>
              <Text style={styles.boxDate}>{Date.DateEnd}</Text>
            </View>
          </View>
        ))}
        <View
          style={{
            width: 80,
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            backgroundColor: "#308AF3",
            borderRadius: 10,
            marginRight: 20,
            justifyContent: "center",
          }}
        >
          <Icon style={styles.icon} name="calendar-outline" color="black" />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            marginTop: 20,
            fontSize: 16,
            marginLeft: 25,
          }}
        >
          Note:
        </Text>
        <View
          style={{
            height: 90,
            width: 370,
            marginTop: 5,
            backgroundColor: "#F5F6F8",
            marginLeft: 25,
            borderRadius: 5,
          }}
        ></View>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 25,
            marginTop: 10,
            fontSize: 16,
          }}
        >
          Document
        </Text>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              height: 30,
              width: 100,
              backgroundColor: "#308AF3",
              paddingTop: 5,
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                color: "#FFF",
              }}
            >
              {" "}
              <Icon
                style={styles.icons}
                name="arrow-up-outline"
                color="black"
              />
              Upload
            </Text>
          </View>
          <Text style={{ marginLeft: 10, marginTop: 5, color: "gray" }}>
            No archive found
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={onClick}>
            <LinearGradient
              style={styles.buttonColor}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#7AF176", "#35B1B7"]}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  box: {
    height: width * 1.5,
    backgroundColor:'#FFF'
  },
  leave: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 30,
    marginTop: 60,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  boxRegime: {},
  itemLeave: {
    flexDirection: "row",
    marginTop: 15,
  },
  boxItem: {
    marginLeft: 20,
    flex: 3,
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 16,
    width: width/4,
  
  },
  boxDate: {
    fontSize: 16,
    marginLeft: 20,
  },
  icon: {
    fontSize: 20,
    color: "#FFF",
  },
  icons: {
    fontSize: 16,
    color: "#FFF",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonColor: {
    height: width / 8,
    width: width / 1.12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
