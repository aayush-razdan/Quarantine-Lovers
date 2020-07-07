import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { connect } from "react-redux";
import { modifyBranch } from "../src/actions/index";
import { modifySem } from "../src/actions/index";

import { Firebase, db } from "../firebase/firebase";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
function WelcomePage(props) {
  const [Email, setEmail] = useState({
    email: "",
  });
  const [Password, setPassword] = useState({
    password: "",
  });

  const loginUser = (email, password) => {
    try {
      if (Password.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((cred) => {
          // console.log(user);
          if (cred.user) {
            db.collection("users")
              .doc(cred.user.uid)
              .get()
              .then((doc) => {
                props.branchAdd(doc.data().branch);
                props.semAdd(doc.data().semester);
              });
          }
        })
        .then(() => {
          props.navigation.navigate("Dashboard");
        });
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <LinearGradient colors={["#17273d", "#000000"]} style={styles.container}>
      <Image
        source={require("../other/loginIcon.png")}
        style={{
          alignSelf: "center",
          height: 170,
          width: 170,
          resizeMode: "contain",
          marginTop:height/7
        }}
      />
      <View style={{marginTop:height/14}}>
        <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="grey"
         onChangeText={(email) => setEmail({ email })} />

          <TextInput
           placeholder="Password"
           secureTextEntry={true}
           placeholderTextColor="grey"
           style={styles.input}
            onChangeText={(password) => setPassword({ password })}
          />
  
        <TouchableOpacity
          style={styles.lgBtn}
          onPress={() => loginUser(Email.email, Password.password)}
        >
          <Text style={styles.text}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop:height/4
        }}
      >
        <Text style={{ color: "grey" }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    branchAdd: (id) => dispatch(modifyBranch(id)),
    semAdd: (id) => dispatch(modifySem(id)),
  };
};

export default connect(null, mapDispatchToProps)(WelcomePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize:height/47
  },
  lgBtn: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1DB954",
    height: height / 17,
    borderRadius: 20,
    width: width / 1.1,
    opacity: 0.8,
    marginTop: 20,
    elevation:10
  
  },
  input:{
    borderWidth:1,
    backgroundColor:'white',
    borderRadius:22,
    height:height/16 ,
    width:width/1.12,
    alignSelf:'center',
    paddingLeft:20,
    fontSize:height/50,
    marginBottom:height/55
  }
});
