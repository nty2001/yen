import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AttendanceScreen from "../Screen/AttendanceScreen";
import LeaveScreen from "../Screen/LeaveScreen";
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Leave" component={LeaveScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
