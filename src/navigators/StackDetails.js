import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import DetailsScreen from "../Screen/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const StackDetails = () => {
  return (
    <Stack.Navigator initialRouteName="DetailsScreen" >
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackDetails;

const styles = StyleSheet.create({});
