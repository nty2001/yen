import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import LoadingNavigation from "./src/navigators/LoadingNavigation";
import AuthNavigation from "./src/navigators/AuthNavigation";
import DrawerNavigation from "./src/navigators/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContext } from "./src/contexts/AuthContext";
export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  console.log("🚀 ~ file: App.js ~ line 40 ~ App ~ state", state)

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {}

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      {!state.userToken ? (
        <NavigationContainer>
          {state.isLoading ? <LoadingNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      ) : (
        <DrawerNavigation />
      )}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
