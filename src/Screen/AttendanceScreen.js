import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import { Dimensions } from 'react-native';
  import { useState } from "react";
  import Icon from "react-native-vector-icons/Ionicons";
  import React from "react";
  import { Data } from "../../Data";
  import { Calendar, CalendarList, Agenda } from "react-native-calendars";
  import RNPickerSelect from "react-native-picker-select";
  const width = Dimensions.get("window");
  const AttendanceScreen = () => {
    const [button, setButton] = useState(false);
  
    const onClick = (index) => {
      setButton(!button);
    };
    const [input, setInput] = useState(false);
    const onChange = () => {
      setInput(!input);
    };
    const [colors, setColor] = useState("");
    React.useEffect(() => {
      Data.forEach((data) => {
        if (data.status == "Late") {
          setColor("red");
        }
        if (data.status == "present") {
          setColor("green");
        }
      });
    }, []);
    return (
      <ScrollView style={{ height: "100%" }}>
        {input ? (
          <ScrollView style={{ backgroundColor: "#F5F6F8", height: 700 }}>
            <View style={styles.container}>
              <Text style={styles.top}>Attendance</Text>
              <View style={styles.all}>
                <TouchableOpacity onPress={onChange}>
                  <Text style={styles.text}>HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onChange}>
                  <Text style={styles.text}>CALENDAR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.number}>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: "2019", value: "2019" },
                    { label: "2018", value: "2018" },
                  ]}
                  placeholder={{
                    label: "2020",
                    value: 2020,
                    backgroundColor: '#FFFFFF',
                  }}
                  
                ></RNPickerSelect>
  
                <Icon
                  style={styles.icon}
                  name="caret-down-outline"
                  color="white"
                />
                <View style={styles.right}>
                  <Text style={styles.jun}>May</Text>
                  <Text style={styles.jun}>Jun</Text>
                  <Text style={styles.jun}>Jul</Text>
                  <Text style={styles.jun}>Aug</Text>
                  <Text style={styles.jun}>Sep</Text>
                </View>
              </View>
              <View style={styles.boxi}>
                <View style={styles.box}>
                  <View style={styles.may}>
                    <Text style={styles.present}>8</Text>
                    <Text style={styles.presenta}>Present</Text>
                  </View>
                  <View style={styles.may}>
                    <Text style={styles.absents}>1</Text>
                    <Text style={styles.absenta}>Absent</Text>
                  </View>
                  <View style={styles.may}>
                    <Text style={styles.late}>2</Text>
                    <Text style={styles.latea}>Late</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.day}>
              {Data.map((data, index) => (
                <View style={styles.list} key={index}>
                  <View style={styles.absent}>
                    <Text style={styles.between}>
                      {data.day} {data.months} {data.years}
                    </Text>
                    <Text style={styles.chevron}>{data.status}</Text>
                    <Icon
                      style={styles.outline}
                      name={
                        button
                          ? "chevron-down-outline"
                          : "chevron-forward-outline"
                      }
                      color="black"
                      onPress={() => onClick(index)}
                    />
                  </View>
                  <View style={[styles.Tuesday, { height: button ? 140 : 0 }]}>
                    <View style={styles.minutes}>
                      <Text style={styles.time}>Date:</Text>
                      <Text style={styles.times}>
                        {" "}
                        {data.week}, {data.day} {data.months} {data.years}
                      </Text>
                    </View>
                    <View style={styles.minutes}>
                      <Text style={styles.time}>Check in:</Text>
                      <Text style={styles.times}> {data.checkin}</Text>
                    </View>
                    <View style={styles.minutes}>
                      <Text style={styles.time}>Check out: {data.checkout}</Text>
                      <Text style={styles.times}>{data.checkout}</Text>
                    </View>
                    <View style={styles.minutes}>
                      <Text style={styles.time}>Late</Text>
                      <Text style={styles.times}>{data.late}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
            <View
              style={{
                backgroundColor: "#308AF3",
                height: 140,
                marginBottom: 50,
              }}
            >
              <Text style={styles.top}>Attendance</Text>
              <View style={styles.all}>
                <TouchableOpacity onPress={onChange}>
                  <Text style={styles.text}>HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onChange}>
                  <Text style={styles.text}>CALENDAR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.boxi}>
                <View style={styles.box}>
                  <View style={styles.may}>
                    <Text style={styles.present}>8</Text>
                    <Text style={styles.presenta}>Present</Text>
                  </View>
                  <View style={styles.may}>
                    <Text style={styles.absents}>1</Text>
                    <Text style={styles.absenta}>Absent</Text>
                  </View>
                  <View style={styles.may}>
                    <Text style={styles.late}>2</Text>
                    <Text style={styles.latea}>Late</Text>
                  </View>
                </View>
              </View>
            </View>
            <Calendar
              // Collection of dates that have to be marked. Default = {}
              style={styles.Calendar}
              current={"2020-08-13"}
              markedDates={{
                "2020-08-03": { marked: true, dotColor: "#2FD686" },
                "2020-08-04": { marked: true, dotColor: "#2FD686" },
                "2020-08-05": { marked: true, dotColor: "#2FD686" },
                "2020-08-07": { marked: true, dotColor: "#2FD686" },
                "2020-08-10": { marked: true, dotColor: "#FFB931" },
                "2020-08-11": { marked: true, dotColor: "#2FD686" },
                "2020-08-12": { marked: true, dotColor: "#2FD686" },
  
                "2020-08-13": {
                  selected: true,
                  marked: true,
                  selectedColor: "#308AF3",
                  dotColor: "red",
                },
                "2020-08-08": {
                  customStyles: {
                    text: {
                      color: "#2FD686",
                      fontWeight: "bold",
                    },
                  },
                },
  
                "2020-08-06": { marked: true, dotColor: "red" },
                "2020-08-03": { marked: true, dotColor: "#2FD686" },
              }}
              firstDay={1}
              theme={{
                arrowColor: "black",
                monthTextColor: "#308AF3",
                textMonthFontWeight: "bold",
                textMonthFontSize: 24,
              }}
              hideExtraDays
            />
            <View style={styles.april}>
              <View style={styles.minutes}>
                <Text style={styles.timee}>Date:</Text>
                <Text style={styles.timess}> Tuesday, 11 August 2020</Text>
              </View>
              <View style={styles.minutes}>
                <Text style={styles.timee}>Check in:</Text>
                <Text style={styles.timess}> 09.30</Text>
              </View>
              <View style={styles.minutes}>
                <Text style={styles.timee}>Check out: </Text>
                <Text style={styles.timess}>16.30</Text>
              </View>
            </View>
          </ScrollView>
        )}
      </ScrollView>
    );
  };
  
  export default AttendanceScreen;
  
  const styles = StyleSheet.create({
    top: {
      textAlign: "center",
      marginTop: 20,
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
    },
    container: {
      backgroundColor: "#308AF3",
      height: 200,
    },
    all: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    text: {
      color: "white",
      fontWeight: "bold",
    },
    number: {
      flexDirection: "row",
      marginLeft: 30,
      marginTop: 20,
      height: 38,
      width: 97,
      backgroundColor: "#b8d6ff",
      fontSize: 12,
      borderRadius: 9,
      paddingTop: 11,
      padding: 10,
    },
    icon: {
      fontSize: 18,
      marginLeft: 15,
    },
    left: {
      color: "white",
      fontSize: 18,
    },
    right: {
      flexDirection: "row",
      marginLeft: 20,
    },
    jun: {
      marginLeft: 20,
      color: "white",
      fontSize: 18,
      height: 30,
    },
    box: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
  
      elevation: 2,
      height: 80,
      width: "90%",
      alignItems: "center",
      borderRadius: 4,
    },
  
    present: {
      fontSize: 24,
      color: "#7AF176",
      fontWeight: "bold",
    },
  
    late: {
      fontSize: 24,
      color: "red",
      fontWeight: "bold",
    },
    boxi: {
      flexDirection: "row",
      justifyContent: "center",
    },
    presenta: {
      fontSize: 18,
      color: "black",
    },
    absenta: {
      fontSize: 18,
      color: "black",
    },
    latea: {
      fontSize: 18,
      color: "black",
    },
    absents: {
      fontSize: 24,
      color: "#FFB931",
      fontWeight: "bold",
    },
    may: {
      flexDirection: "column",
      alignItems: "center",
    },
    agust: {
      flexDirection: "row",
      justifyContent: "space-around",
      height: 50,
  
      flex: 1,
      backgroundColor: "#E8E8E8",
      alignItems: "center",
      borderRadius: 15,
      borderBottomWidth: 2,
    },
    date: {
      color: "#308AF3",
      fontSize: 20,
      fontWeight: "bold",
    },
    sum: {
      color: "#F53558",
      fontSize: 17,
      fontWeight: "bold",
      marginTop: 6,
    },
    check: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 1,
      width: "100%",
    },
    day: {
      marginLeft: "5%",
      marginTop: 40,
      width: "90%",
    },
    bottom: {
      backgroundColor: "#E8E8E8",
    },
    Tuesday: {
      flexDirection: "column",
      marginLeft: "10%",
      justifyContent: "center",
    },
    time: {
      color: "#308AF3",
      marginTop: 14,
      fontWeight: "bold",
      width: "40%",
    },
    timee: {
      color: "white",
      marginTop: 14,
      fontWeight: "bold",
      width: "40%",
      fontWeight: "bold",
    },
    minutes: {
      flexDirection: "row",
    },
    times: {
      marginTop: 14,
      color: "black",
    },
    timess: {
      marginTop: 14,
      color: "white",
      fontWeight: "bold",
    },
    absent: {
      flexDirection: "row",
      fontWeight: "bold",
      borderColor: "#ECECEC",
      borderWidth: 1,
      alignItems: "center",
      height: 50,
      borderRadius: 7,
      paddingLeft: 25,
      paddingTop: 15,
    },
    list: {
      backgroundColor: "#FFFFFF",
      marginTop: 20,
      borderRadius: 8,
    },
    outline: {
      fontSize: 27,
      width: "30%",
    },
    chevron: {
      width: "20%",
      fontSize: 16,
      color: "#2FD686",
      fontWeight: "bold",
      marginLeft: 60,
      justifyContent: "flex-end",
      textAlign: "right",
      marginRight: 20,
    },
    chevronna: {
      fontSize: 17,
      color: "#FFB931",
      fontWeight: "bold",
    },
    down: {
      fontSize: 27,
      marginLeft: 10,
    },
    between: {
      color: "#308AF3",
      fontWeight: "bold",
      fontSize: 18,
    },
    fill: {
      flexDirection: "row",
    },
    back: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30,
    },
    monday: {
      fontSize: 18,
      color: "#308AF3",
      fontWeight: "bold",
    },
    checknumber: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    checknumbercheck: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    april: {
      marginTop: 20,
      width: "90%",
      marginLeft: "5%",
      backgroundColor: "#308AF3",
      borderRadius: 5,
      padding: 8,
      paddingLeft: 30,
    },
    Calendar: {
      width: "90%",
      marginLeft: "5%",
      borderRadius: 5,
    },
  });