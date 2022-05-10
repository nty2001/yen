import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  export default function Alert({}) {
    return (
        <View style={styles.container}>
          <View style={styles.alert}>
            <Image
              style={styles.img}
              source={{
                uri: "https://res.cloudinary.com/fedscx/image/upload/v1651824127/test/icons8-ok-240_vhtej1.png",
              }}
            />
            <View style={styles.text}>
                <Text style={{fontWeight:'bold'}}>Submit Request</Text>
            </View>
            <View style={styles.text}>
                <Text style={{fontWeight:'bold'}}>Success</Text>
            </View>
            <TouchableOpacity style={styles.opacity}>
                <Text style={{color:'#308AF3',fontWeight:'bold'}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
      imageBackground:{
          height: "100%",
      },
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    alert: {
      shadowColor: "#b1b1b1",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 5,
      borderRadius: 5,
      paddingHorizontal: 45,
      paddingVertical: 20,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:"white",
    },
    img: {
      width: 120,
      height: 120,
      marginBottom: 25,
    },
    text: {
      fontWeight: "bold",
      fontFamily: "Roboto",
    },
    opacity: {
      fontSize: 12,
      color: "#2f8af3",
      fontWeight: "bold",
      fontFamily: "Roboto",
      marginTop: 35,
    },
  });