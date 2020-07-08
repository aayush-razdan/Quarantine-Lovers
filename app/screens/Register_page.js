import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {View,Dimensions,TouchableOpacity,Image} from 'react-native';
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
import {LinearGradient} from 'expo-linear-gradient'
import { Firebase, db } from "../firebase/firebase";
import Icons from 'expo-vector-icons/Ionicons'
var height=Dimensions.get('window').height;
var width=Dimensions.get('window').width;
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

  const signUpUser = (email, password, name, sem, branch,navigation) => {
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
    <LinearGradient  colors={["#17273d", "#000000"]} style={styles.container}>
  
<Icons name="ios-arrow-back" color="#e8f3e6" size={43} onPress={() => props.navigation.goBack()} style={{position:'absolute',alignSelf:'flex-start',left:width/20,top:height/20}}/>
      <Form style={styles.regScrn}>
      <Image source={require('../other/loginIcon.png')} style={{ alignSelf: "center",
          height: 100,
          width: 70,
          marginTop:20,
          resizeMode: "contain",
      }}/> 
        <Text style={{fontSize:height/30,fontWeight:'bold'}}>Create your account</Text>
      
        <Item floatingLabel style={{width:width/1.3,marginTop:10}}>
          <Label>NAME</Label>
          <Input
          
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(name) => setName({ name })}
          />
        </Item>
        <Item floatingLabel style={{width:width/1.3}} >
          <Label>YOUR EMAIL</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => setEmail({ email })}
          />
        </Item>
        <Item floatingLabel style={{width:width/1.3}}>
          <Label>PASSWORD</Label>
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
              label: "BATCH 1",
              value: "1",
            },
            {
              label: "BATCH 2",
              value: "2",
            },
            {
              label: "BATCH 3",
              value: "3",
            },
            {
              label: "BATCH 4",
              value: "4",
            },
            {
              label: "BATCH 5",
              value: "5",
            },
            {
              label: "BACTH 6",
              value: "6",
            },
          ]}
          defaultValue={Branch.branch}
          placeholder="BATCH"
          containerStyle={{ height: 40,width:width/1.3,marginTop:height/50 }}
          style={{ backgroundColor: "#ffffff" }}
          itemStyle={{
            justifyContent: "flex-start",
            marginTop:0
          }}
          dropDownStyle={{ backgroundColor: "#fff",height:125 }}
          onChangeItem={(item) =>
            setBranch({
              branch: item.value,
            })
          }
        />

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
          placeholder="SEMESTER"
          containerStyle={{ height: 40,width:width/1.3,marginTop:height/50}}
          style={{ backgroundColor: "#ffffff" }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#ffffff",height:80}}
          onChangeItem={(item) =>
            setSemester({
              semester: item.value,
            })
          }
        />

       
        <TouchableOpacity
          style={styles.button}
        
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
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </Form>
    </LinearGradient>
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
    alignItems:'center'

  
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#1DB954",
    height: height / 17,
    borderRadius: 20,
    width: width / 1.6,
  
    marginTop: height/9,
    elevation:10 
  },
  text: {
    color: "white",
    fontSize:height/40,
    fontWeight:'bold'
  },
  regScrn:{
    alignItems:'center',
    height:height/1.25,
    borderRadius:10,
    width:width/1.15,
    borderWidth:1,
    marginTop:height/7,
    backgroundColor:'#fafafa',
    opacity:0.98
  }
});

