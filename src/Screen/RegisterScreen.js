import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { LOGIN } from "../constants/routeNames";
  const RegisterScreen = () => {
    const { navigate } = useNavigation();
    const initialState = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  
    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState({});
    const onChange = ({ name, value }) => {
      if (value !== "") {
        if (name === "password") {
          if (value.length < 6) {
            setErrors((error) => {
              return { ...error, [name]: "This field needs min 6 characters" };
            });
          } else {
            setErrors((error) => {
              return { ...error, [name]: null };
            });
          }
        } else {
          setErrors((error) => {
            return { ...error, [name]: null };
          });
        }
      } else {
        setErrors((error) => {
          return { ...error, [name]: "This field is required" };
        });
      }
      setUser({ ...user, [name]: value });
    };
    const onSubmit = () => {
      if (!user.userName) {
        setErrors((error) => {
          return { ...error, userName: "Please add a userName" };
        });
      }
      if (!user.firstName) {
        setErrors((error) => {
          return { ...error, firstName: "Please add a firstName" };
        });
      }
      if (!user.lastName) {
        setErrors((error) => {
          return { ...error, lastName: "Please add a lastName" };
        });
      }
      if (!user.email) {
        setErrors((error) => {
          return { ...error, email: "Please add a email" };
        });
      }
      if (!user.password) {
        setErrors((error) => {
          return { ...error, password: "Please add a password" };
        });
      }
    };
    return (
      <ScrollView>
        <View style={styles.wapper}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subTitle}>Please login here</Text>
          <View style={styles.inputContainer}>
            <Text>Username</Text>
            <TextInput
              placeholder="Enter Username"
              onChangeText={(value) => {
                onChange({ name: "userName", value });
              }}
              value={user.userName}
              style={styles.textInput}
            />
            {errors && <Text style={styles.error}>{errors.userName}</Text>}
            <Text>First name</Text>
            <TextInput
              placeholder="Enter First name"
              onChangeText={(value) => {
                onChange({ name: "firstName", value });
              }}
              value={user.firstName}
              style={styles.textInput}
            />
            {errors && <Text style={styles.error}>{errors.firstName}</Text>}
            <Text>Last name</Text>
            <TextInput
              placeholder="Enter Last name"
              onChangeText={(value) => {
                onChange({ name: "lastName", value });
              }}
              value={user.lastName}
              style={styles.textInput}
            />
            {errors && <Text style={styles.error}>{errors.lastName}</Text>}
            <Text>Email</Text>
            <TextInput
              placeholder="Enter Email"
              onChangeText={(value) => {
                onChange({ name: "email", value });
              }}
              value={user.email}
              style={styles.textInput}
            />
            {errors && <Text style={styles.error}>{errors.email}</Text>}
            <Text>Password</Text>
            <TextInput
              placeholder="Enter Password"
              onChangeText={(value) => {
                onChange({ name: "password", value });
              }}
              value={user.password}
              style={styles.textInput}
              secureTextEntry
            />
            {errors && <Text style={styles.error}>{errors.password}</Text>}
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}
              >
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default RegisterScreen;
  
  const styles = StyleSheet.create({
    wapper: {
      padding: 20,
    },
    logo: {
      height: 150,
      width: 150,
      alignSelf: "center",
      marginTop: 50,
    },
    title: {
      fontSize: 21,
      textAlign: "center",
      paddingTop: 20,
      fontWeight: "500",
    },
  
    subTitle: {
      fontSize: 17,
      textAlign: "center",
      paddingVertical: 20,
      fontWeight: "500",
    },
    inputContainer: {
      paddingVertical: 12,
    },
    textInput: {
      flex: 1,
      padding: 5,
      width: "100%",
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
    },
    button: {
      padding: 10,
      marginTop: 10,
      backgroundColor: "#4361ee",
    },
    buttonText: {
      alignSelf: "center",
      color: "white",
    },
    createSection: {
      flexDirection: "row",
    },
    linkBtn: {
      paddingLeft: 17,
      color: "#4361ee",
      fontSize: 16,
    },
  
    infoText: {
      fontSize: 17,
    },
    error: {
      marginTop: -10,
      marginBottom: 10,
    },
  });
  