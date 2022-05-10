import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import StackDetails from "./StackDetails";
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="Details" component={StackDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
