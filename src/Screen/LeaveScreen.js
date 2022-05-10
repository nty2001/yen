import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import React from "react";
import Header from "../components/HeaderY";
import Between from "../components/Between";
import Bottom from "../components/Bottom";
import Submit from "../components/Submit";
import ButtonModal from "../components/ButtonModal";
import Alert from "../components/Alert";
import { useState } from "react";
const {width}= Dimensions.get("window");
const LeaveScreen = () => {
  const [Modal, setModal] = useState(true);
  const [blur, setBlur] = useState(true);
  const onChange = () => {
    setModal(false);
  };
  const [Tick, setTick] = useState(true);
  console.log("🚀 ~ file: LeaveScreen.js ~ line 23 ~ LeaveScreen ~ Tick", Tick);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ opacity: blur ? 1 : 0.2}}>
        {Modal ? (
          <>
            <Header Modal={Modal} />
            <Between />
            <Bottom />
          </>
        ) : (
          <>
            <Header Modal={Modal} />
            <Submit setBlur={setBlur} />
          </>
        )}
      </View>
      {Modal ? (
        <>
          <View style={styles.add}>
            <TouchableOpacity onPress={onChange} style={{alignItems:'center',justifyContent: 'center'}}>
              <Text style={styles.create}>+</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
      {blur == false && Tick == true ? (
        <View style={styles.container}>
          <ButtonModal
            setBlur={setBlur}
            setTick={setTick}
            setModal={setModal}
          />
        </View>
      ) : null}
      {Tick == false && (
        <View style={styles.leaveAlert}>
          <Alert />
        </View>
      )}
    </ScrollView>
  );
};

export default LeaveScreen;
const styles = StyleSheet.create({
  add: {
    height: width/6,
    width: width/6,
    backgroundColor: "#2FD686",
    alignItems:'center',
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "flex-end",
    top: -139,
    left: -30,
    shadowColor: "#7AF176",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  create: {
    color: "#FFFFFF",
    fontSize: width/8,
  },
  container: {
    position: "absolute",
    top: "30%",
    alignSelf: "center",
  },
  leaveAlert: {
    position: "absolute",
    top: "20%",
    width: "80%",
    left: "10%",
  },
});
