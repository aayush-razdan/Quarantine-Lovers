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
import { connect } from "react-redux";
import { modifyBranch } from "../src/actions/index";
import { modifySem } from "../src/actions/index";

import { Firebase, db } from "../firebase/firebase";

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
    <Container style={styles.container}>
      <Form>
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
          onPress={() => loginUser(Email.email, Password.password)}
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
