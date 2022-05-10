import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import Icon from "react-native-vector-icons/Ionicons";
  import { Calendar } from "../../Data";
  const Bottom = () => {
    const [create, setCreate] = useState("");
    const onClick = (index) => {
      setCreate(index+1)
    };
    return (
      <ScrollView style={styles.leaveVacation}>
        {Calendar.map((Calendar, index) => (
          <View style={styles.Calendar} key={index}>
            <View style={styles.Top}>
              <Icon
                style={styles.icon}
                name={Calendar.icon}
                color={
                  Calendar.icon == "checkmark-circle" ? "#2FD686" : "#FFB931"
                }
              />
              <View>
                <Text style={styles.date}>
                  {Calendar.dayStart} {Calendar.monthStart} {Calendar.yearsStart}
                  <View style={{ marginRight: 5, marginLeft: 5 }}>
                    <Text style={{ color: "#308AF3" }}>-</Text>
                  </View>
                  {Calendar.dayEnd} {Calendar.monthEnd} {Calendar.yearsEnd}
                </Text>
  
                <View style={styles.Topper}>
                  <View>
                    <Text style={{ color: "gray", marginLeft: 4 }}>
                      {Calendar.regime}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "bold", color: "#2FD686" }}>
                      {Calendar.require}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={() => onClick(index)}>
                  <Icon
                    style={styles.down}
                    name="chevron-down-outline"
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {Calendar.id==create && <View style={styles.leaveDate}>
            <View style={styles.datestart}>
              <View style={styles.left}>
                <Text style={{ color: "#308AF3", fontWeight: "bold" }}>
                  Date Start:
                </Text>
              </View>
              <View style={styles.right}>
                <Text>{Calendar.dateStart}</Text>
              </View>
            </View>
            <View style={styles.datestart}>
              <View style={styles.left}>
                <Text style={{ color: "#308AF3", fontWeight: "bold" }}>
                  Date End:
                </Text>
              </View>
              <View style={styles.right}>
                <Text>{Calendar.dateEnd}</Text>
              </View>
            </View>
            <View style={styles.datestart}>
              <View style={styles.left}>
                <Text style={{ color: "#308AF3", fontWeight: "bold" }}>
                  Leave Type:
                </Text>
              </View>
              <View style={styles.right}>
                <Text>{Calendar.leaveType}</Text>
              </View>
            </View>
            <View style={styles.datestart}>
              <View style={styles.left}>
                <Text style={{ color: "#308AF3", fontWeight: "bold" }}>
                  Note:
                </Text>
              </View>
              <View style={styles.right}>
                <Text>{Calendar.Note}</Text>
              </View>
            </View>
            <View style={styles.datestart}>
              <View style={styles.left}>
                <Text style={{ color: "#308AF3", fontWeight: "bold" }}>
                  Date Start:
                </Text>
              </View>
              <View style={styles.right}>
                <Text
                  style={{
                    height: 25,
                    width: 110,
                    backgroundColor: "#e3f1fa",
                    padding: 5,
                    color: "#308AF3",
                    fontWeight: "bold",
                    borderRadius: 10,
                  }}
                >
                  {Calendar.Document}
                </Text>
              </View>
            </View>
            </View>}
          </View>
        ))}
      </ScrollView>
    );
  };
  
  export default Bottom;
  const styles = StyleSheet.create({
    icon: {
      fontSize: 36,
    },
    Top: {
      flexDirection: "row",
      padding: 10,
      borderRadius: 5,
      borderColor: "#F5F6F8",
      borderWidth: 2,
    },
    leaveVacation: {
      marginTop: 10,
    },
    date: {
      color: "#308AF3",
      fontWeight: "bold",
      fontSize: 18,
      marginLeft: 7,
    },
    Topper: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 3,
    },
    bottom: {
      flexDirection: "row",
      borderRadius: 5,
    },
    Calendar: {
      
      width: "90%",
      backgroundColor: "#FFFFFF",
      marginLeft: 20,
      borderRadius: 5,
      marginTop: 20,
      
    },
    down: {
      fontSize: 18,
      marginTop: 15,
      marginLeft: 20,
    },
    datestart: {
      flexDirection: "row",
      marginTop: 5,
    },
    leaveDate: {
      marginLeft: 20,
      marginTop: 10,
      paddingBottom:20,
    },
    left: {
      width: "30%",
    },
    right: {},
    create: {
      fontSize: 35,
      color: "#FFFFFF",
    },
  });