import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../constants/routeNames";
import {
  primary,
  background,
  background2,
  button,
  button2,
} from "../assets/colors";
import { AuthContext } from "../contexts/AuthContext";
import { big, small, veryBig } from "../assets/fonts";
const LoginScreen = () => {
  const { navigate } = useNavigation();
  const [userName, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = React.useContext(AuthContext);
  const onClick = () => {
    setIcon(!icon);
  };
  const [icon, setIcon] = React.useState(true);
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
    setUsername({ ...userName, [name]: value });
    setPassword({ ...password, [name]: value });
  };
  React.useEffect(() => {}, []);
  const onSubmit = () => {
    if (!userName) {
      setErrors((error) => {
        return { ...error, userName: "Please add a userName" };
      });
    } else signIn({ userName, password });
    if (!password) {
      setErrors((error) => {
        return { ...error, password: "Please add a password" };
      });
    } else signIn({ userName, password });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wapper}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Employee{" "}
          <Text style={{ fontWeight: "bold", color: background }}>
            Self Service
          </Text>
        </Text>
        <Text style={styles.subTitle}>
          by{" "}
          <Text style={{ textTransform: "uppercase" }}>
            USAHA GUNABHAKTI MANDIRI
          </Text>
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{ color: background2 }}>Id number</Text>
          <View style={styles.textInput}>
            <Icon name="person" size={18} color={primary} style={styles.icon} />
            <TextInput
              style={styles.textInputcss}
              placeholder="Id number"
              placeholderTextColor="#fff"
              onChangeText={(value) => {
                onChange({ name: "userName", value });
              }}
              value={userName}
            />
          </View>
        </View>
        {errors && <Text style={styles.error}>{errors.userName}</Text>}
        <View style={styles.inputContainer}>
          <Text style={{ color: background2 }}>Password</Text>
          <View style={styles.textInput}>
            <Icon
              name="lock-closed"
              size={18}
              color={primary}
              style={styles.icon}
            />
            <TextInput
              style={styles.textInputcss}
              placeholder="Enter Password"
              autoFocus={true}
              onChangeText={(value) => {
                onChange({ name: "password", value });
              }}
              placeholderTextColor="#fff"
              value={password}
              secureTextEntry={icon}
            />

            <TouchableOpacity style={styles.iconPass} onPress={onClick}>
              <Icon
                name={icon ? "eye-outline" : "eye-off-outline"}
                size={18}
                style={styles.icons}
                color={background}
              />
            </TouchableOpacity>
          </View>
        </View>
        {errors && <Text style={styles.error}>{errors.password}</Text>}
        <TouchableOpacity
          style={styles.pass}
          onPress={() => {
            navigate("Forgot");
          }}
        >
          <Text style={styles.passText}>Forgot your password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit} style={styles.button1}>
          <LinearGradient
            style={styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#7AF176", "#35B1B7"]}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Don't have account ?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}
            style={styles.btn}
          >
            <Text style={styles.linkBtn}>Contact Administrator</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
  },
  wapper: {
    padding: 30,
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 5,
  },
  title: {
    fontSize: veryBig,
    textAlign: "center",
    paddingTop: 30,
    color: background2,
  },

  subTitle: {
    fontSize: small,
    textAlign: "center",
    paddingVertical: 8,
    marginBottom: 50,
    color: background,
  },
  inputContainer: {
    paddingVertical: 4,
  },
  textInput: {
    marginTop: 5,
    color: background,
    borderWidth: 0,
    backgroundColor: "#83ADF5",
    opacity: 0.8,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    position: "relative",
  },
  textInputcss: {
    paddingLeft: 10,
    color: background,
    flex: 1,
  },
  button: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  button1: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  passText: {
    color: button,
  },
  pass: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  buttonText: {
    alignSelf: "center",
    color: background,
    borderRadius: 5,
    padding: 5,
  },
  createSection: {},
  error: {
    marginTop: -10,
  },
  btn: {
    flex: 1,
    borderColor: button,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
  },
  linkBtn: {
    alignSelf: "center",
    color: button,
    padding: 10,
  },
  infoText: {
    alignSelf: "center",
    color: background,
    padding: 10,
    marginTop: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: background,
    borderRadius: 5,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconPass: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  icons: {
    padding: 6,
  },
});
