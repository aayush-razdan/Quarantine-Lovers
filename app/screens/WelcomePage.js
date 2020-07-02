import React, { useState } from "react";
import { StyleSheet } from "react-native";

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

import Firebase from "../firebase/firebase";

export default function WelcomePage(props) {
  const [stateAuthEmail, setStateAuthEmail] = useState({
    email: "",
  });
  const [stateAuthPassword, setStateAuthPassword] = useState({
    password: "",
  });

  const loginUser = (email, password) => {
    try {
      if (stateAuthPassword.password.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      Firebase.auth()
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
            onChangeText={(email) => setStateAuthEmail({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setStateAuthPassword({ password })}
          />
        </Item>
        <Button
          style={styles.button}
          full
          rounded
          primary
          onPress={() =>
            loginUser(stateAuthEmail.email, stateAuthPassword.password)
          }
        >
          <Text style={styles.text}>Login</Text>
        </Button>
      </Form>
      <Button
        style={styles.button}
        full
        rounded
        primary
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      >
        <Text style={styles.text}>Not a User</Text>
      </Button>
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
