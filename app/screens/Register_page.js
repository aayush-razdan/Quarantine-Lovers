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
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { } from "react-native-gesture-handler";
// import { Dropdown } from 'react-native-material-dropdown';
// import { Icon } from "react-native-elements";

// const { width: WIDTH } = Dimensions.get("window");

// export default class Register_page extends React.Component {
//   render() {
//     let data = [{
//       value: 'Computer Science',
//     },
//     {
//       value: 'Electronics and telecommunications',
//     },
//     {
//       value: 'Electronics',
//     },
//     {
//       value: 'Electrical',
//     },
//     {
//       value: 'Mechanical',
//     },
//     {
//       value: 'Production',
//     },
//     ];
//     return (
//       <View
//         style={styles.background}
//       >
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder={"First Name"}
//             placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder={"Surname"}
//             placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder={"Semester (1-8)"}
//             placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <View style={styles.inputDropdown}>
//           <Dropdown
//             style={{ color: 'rgba(255,255,255,0.7)' }}
//             baseColor="rgba(255, 255, 255, 1)"
//             inputContainerStyle={{ borderBottomWidth: 0 }}
//             placeholder={"Branch"}
//             placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//             data={data}
//           >
//           </Dropdown>
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder={"Username (College ID)"}
//             placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
//             underlineColorAndroid="transparent"
//           />
//         </View>
//         <TouchableOpacity style={styles.btnRegister}>
//           <Text style={styles.text}>Finish</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
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
//   inputDropdown: {
//     borderBottomColor: "transparent",
//     width: 250,
//     height: 45,
//     borderRadius: 25,
//     fontSize: 16,
//     paddingLeft: 45,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     color: "rgba(255,255,255,0.7)",
//     marginHorizontal: 25,
//     justifyContent: "flex-end",
//     marginBottom: 5
//   },
//   inputContainer: {
//     marginTop: 5,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   btnRegister: {
//     width: 250,
//     height: 45,
//     borderRadius: 25,
//     fontSize: 16,
//     backgroundColor: "dodgerblue",
//     justifyContent: "center",
//     //marginTop: 10,
//     position: "absolute",
//     bottom: 57,
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

import { Firebase, db } from "../firebase/firebase";

export default function Register_page() {
  const [Email, setEmail] = useState({
    email: "",
  });
  const [Password, setPassword] = useState({
    password: "",
  });
  const [Name, setName] = useState({
    name: "",
  });

  const signUpUser = (email, password, name) => {
    try {
      if (Password.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          return db.collection("users").doc(cred.user.uid).set({
            name: name,
          });
        })
        .then(() => {
          console.log("hello");
        });
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(name) => setName({ name })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => setEmail({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setPassword({ password })}
          />
        </Item>
        <Button
          style={styles.button}
          full
          rounded
          primary
          onPress={() => {
            signUpUser(Email.email, Password.password, Name.name);
          }}
        >
          <Text style={styles.text}>SignUp</Text>
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
