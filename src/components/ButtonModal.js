import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";
const ButtonModal = ( {setBlur,setTick,setModal}) => {
  const onButton = () => {
    setTick(false)
    setModal(true)
  };
  const onSubmit = () => {
    setBlur(true)
  };
  return (
    <View style={styles.boxModal}>
      <View style={styles.leaveRequest}>
        <Text style={{fontSize:18,}}>Are you sure to </Text>
        <Text style={{fontSize:18,}}>Submit Request ? </Text>
      </View>
      <View style={styles.submit}>
        <View style={styles.buttonModal}>
          <Button style={{ color:'#2FD686'}} onSubmit={onSubmit}  text="CANCLE" />
        </View>
        <View style={styles.submitModal}>
          <Button style={{color:'#FFF'}} onSubmit={onButton} text="SUBMIT" />
        </View>
      </View>
    </View>
  );
};

export default ButtonModal;

const styles = StyleSheet.create({
  buttonModal: {
    height: 40,
    width: 100,
    borderWidth: 2,
    borderColor: "#2FD686",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
   
  },
  modalText: {
    color: "#2FD686",
    fontWeight: "bold",
    textAlign: "center",
  },
  submitModal: {
    height: 40,
    width: 100,
    borderWidth: 2,
    borderColor: "#2FD686",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#2FD686",
    marginLeft: 20,
    
  },
  submitText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  submit: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop:20,
  },
  leaveRequest:{
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
   
  },
  boxModal:{
    backgroundColor: '#FFFFFF',
    height:170,
    width:320,
    borderRadius:10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
   
  }
});