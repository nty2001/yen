import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../Screen/NotificationScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import DrawerNavigation from "./DrawerNavigation";
import HomeScreen from "../Screen/HomeScreen";
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            }
            if (route.name === "Notification") {
              iconName = focused
                ? "notifications-sharp"
                : "notifications-outline";
            }
            if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#308bf6",
          tabBarInactiveTintColor: "#d8d8d8",
          labelPosition: "below-icon",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Notification"
          options={{
            headerShown: false,
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              backgroundColor: "#51dd97",
              color: "white",
              fontSize: 10,
              minWidth: 15,
              height: 14,
              marginLeft: -3,
              textAlign: "center",
              lineHeight: -3,
            },
          }}
          component={NotificationScreen}
        />
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
const styles = StyleSheet.create({});
