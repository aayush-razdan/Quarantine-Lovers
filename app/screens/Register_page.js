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
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";
import { modifyBranch } from "../src/actions/index";
import { modifySem } from "../src/actions/index";

import { Firebase, db } from "../firebase/firebase";

function Register_page(props) {
  const [Email, setEmail] = useState({
    email: "",
  });
  const [Password, setPassword] = useState({
    password: "",
  });
  const [Name, setName] = useState({
    name: "",
  });
  const [Semester, setSemester] = useState({
    semester: null,
  });
  const [Branch, setBranch] = useState({
    branch: null,
  });

  const signUpUser = (email, password, name, sem, branch) => {
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
            semester: sem,
            branch: branch,
          });
        })
        .then(() => {
          // console.log("hello");
          props.branchAdd(branch);
          props.semAdd(sem);
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
          <Label>Full Name</Label>
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

        <DropDownPicker
          items={[
            {
              label: "1",
              value: "1",
            },
            {
              label: "2",
              value: "2",
            },
          ]}
          defaultValue={Semester.semester}
          placeholder="Semester"
          containerStyle={{ height: 40, marginTop: 20 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) =>
            setSemester({
              semester: item.value,
            })
          }
        />

        <DropDownPicker
          items={[
            {
              label: "Batch 1",
              value: "1",
            },
            {
              label: "Batch 2",
              value: "2",
            },
            {
              label: "Batch 3",
              value: "3",
            },
            {
              label: "Batch 4",
              value: "4",
            },
            {
              label: "Batch 5",
              value: "5",
            },
            {
              label: "Batch 6",
              value: "6",
            },
          ]}
          defaultValue={Branch.branch}
          placeholder="Batch"
          containerStyle={{ height: 40, marginTop: 90 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) =>
            setBranch({
              branch: item.value,
            })
          }
        />

        <Button
          style={styles.button}
          full
          rounded
          primary
          onPress={() => {
            signUpUser(
              Email.email,
              Password.password,
              Name.name,
              Semester.semester,
              Branch.branch
            );
          }}
        >
          <Text style={styles.text}>SignUp</Text>
        </Button>
      </Form>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    branchAdd: (id) => dispatch(modifyBranch(id)),
    semAdd: (id) => dispatch(modifySem(id)),
  };
};

export default connect(null, mapDispatchToProps)(Register_page);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 10,
  },
  button: {
    marginTop: 160,
  },
  text: {
    color: "white",
  },
});
