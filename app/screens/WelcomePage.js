import React, { useState } from "react";
import { StyleSheet } from "react-native";
// import {
//   ImageBackground,
//   StyleSheet,
//   View,
//   Image,
//   Text,
//   TouchableWithoutFeedback,
//   TextInput,
//   Dimensions,
//   AppRegistry,
// } from "react-native";
// import { Formik } from "formik";
// import { TouchableOpacity } from "react-native-gesture-handler";
// //import { Icon } from "react-native-vector-icons/Ionicons";
// import { Button } from "react-native-elements";
// import Authentication from "../other/authentication";

// const { width: WIDTH } = Dimensions.get("window");

// export default function WelcomePage({ navigation }) {
//   return (
//     <View style={styles.background}>
//       <Formik
//         initialValues={{ username: "", password: "" }}
//         onSubmit={(values) => {
//           console.log(values);
//           //Authentication(values);
//         }}
//       >
//         {(props) => (
//           <View>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={"Username"}
//                 onChangeText={props.handleChange("username")}
//                 value={props.values.title}
//                 placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//                 underlineColorAndroid="transparent"
//               />
//             </View>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={"Password"}
//                 secureTextEntry={true}
//                 onChangeText={props.handleChange("password")}
//                 value={props.values.password}
//                 placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//                 underlineColorAndroid="transparent"
//               />
//               {/* <TouchableOpacity style={styles.btnEye}>
//                 <Text style={{ color: "rgba(0,0,0,0.35)" }}>^</Text>
//               </TouchableOpacity> */}
//               <TouchableOpacity
//                 style={styles.btnLogin}
//                 onPress={props.handleSubmit}
//               >
//                 <Text style={styles.text}>Login</Text>
//               </TouchableOpacity>
//               {/* <TouchableOpacity
//                 style={styles.btnRegister}
//                 onPress={() => props.navigation.navigate("Register")}
//                 title="Register"
//               >
//                 <Text style={styles.text}>Register</Text>
//               </TouchableOpacity> */}
//             </View>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: "white",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   input: {
//     width: 250,
//     height: 45,
//     borderRadius: 25,
//     fontSize: 16,
//     paddingLeft: 45,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     color: "rgba(255,255,255,0.7)",
//     marginHorizontal: 25,
//     justifyContent: "flex-end",
//   },
//   inputIcon: {
//     position: "absolute",
//     top: 8,
//     left: 37,
//   },
//   inputContainer: {
//     marginTop: 5,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   motto: {
//     position: "absolute",
//     top: 87,
//     alignItems: "center",
//   },
//   btnEye: {
//     position: "absolute",
//     top: 10,
//     right: 37,
//   },
//   btnLogin: {
//     width: 250,
//     height: 45,
//     borderRadius: 25,
//     fontSize: 16,
//     backgroundColor: "dodgerblue",
//     justifyContent: "center",
//     marginTop: 50,
//     marginBottom: 50,
//   },
//   btnRegister: {
//     width: 250,
//     height: 45,
//     borderRadius: 25,
//     fontSize: 16,
//     backgroundColor: "dodgerblue",
//     justifyContent: "center",
//     marginTop: 10,
//     position: "absolute",
//     bottom: 5,
//   },
//   text: {
//     color: "rgba(255,255,255,0.7)",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
  Text,
} from "native-base";

import * as firebase from "firebase";

export default function Register_page() {
  const [stateAuth, setStateAuth] = useState({
    email: "",
    password: "",
  });

  const loginUser = (email, password) => {
    try {
      if (stateAuth.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(user);
        });
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => setStateAuth({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setStateAuth({ password })}
          />
        </Item>
        <Button
          style={styles.button}
          full
          rounded
          primary
          onPress={() => loginUser(stateAuth.email, stateAuth.password)}
        >
          <Text style={styles.text}>Login</Text>
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    marginTop: 10,
  },
  text: {
    color: "white",
  },
});
