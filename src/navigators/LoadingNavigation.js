import React from "react";
import SplashScreen from "../Screen/SplashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const LoadingNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default LoadingNavigation;
