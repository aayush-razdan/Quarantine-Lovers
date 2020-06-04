import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  AppRegistry,
} from "react-native";

import { TouchableOpacity, } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements";
const { width: WIDTH } = Dimensions.get("window");

export default function WelcomePage({ navigation }) {
  return (
    <View
      style={styles.background}
    >
      <View style={styles.motto}>
        <Text style={[styles.setColorAzure]}>
          Manage everything with one app
          </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.btnEye}>
          <Text style={{ color: "rgba(0,0,0,0.35)" }}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate("Register_page")}
          title="Register">
          <Text style={styles.text}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
    justifyContent: "flex-end",
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  inputContainer: {
    marginTop: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  setColorAzure: {
    color: "azure",
  },
  motto: {
    position: "absolute",
    top: 87,
    alignItems: "center",
  },
  btnEye: {
    position: "absolute",
    top: 10,
    right: 37,
  },
  btnLogin: {
    width: 250,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  btnRegister: {
    width: 250,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: 10,
    position: "absolute",
    bottom: 5,
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
    textAlign: "center",
  },
});
