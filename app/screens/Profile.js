import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Text,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AttPerProgress from "./AttPerProgress";
//import * as ImagePicker from 'react-native-image-picker';
import Constants from "expo-constants";
import { robotoWeights, material } from "react-native-typography";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Capture from "./Capture";
import GoalProgress from "./lost";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
function ProfileScreen() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", alignContent: "center" }}
    >
      <LinearGradient
        colors={["#17273d","#131111"]}
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          height: height / 4.3,
          width: width / 1,
          elevation: 7,
          
         
          
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            marginTop: height / 20,
            marginLeft: width / 40,
          }}
        >
          <TextInput
            style={styles.text}
            placeholder={"Your Username"}
            placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
          />
          <Text style={{ fontSize: height / 40, color: "white" }}>CSE</Text>
          <Text style={{ fontSize: height / 40, color: "white" }}>2nd Year</Text>
        </View>
        <View style={{ marginLeft: width / 30, marginTop: height / 80 }}>
          {image && (
            <Image source={{ uri: image }} style={styles.imagePicking} />
          )}
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.btnpick}
            onPress={pickImage}
          ></TouchableOpacity>
        </View>
      </LinearGradient>
       <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
       <AttPerProgress />
      <GoalProgress/>
      </View>
  
      <View
        style={{
          elevation: 10,
          height: height / 2.75,
          marginTop: height / 30,
          borderRadius: 14,
          width: width / 1.06,
          marginLeft: width / 35,
        }}
      >
        <Capture />
      </View>
    </View>

    // <Button title="Pick an image" onPress={pickImage} />
    // <Image source={require('./images/sample_image_button.png')} style={styles.ImageClass} />
    // {image && <Image source={{ uri: image }} style={styles.imagePicking} />}
    //<Image style={styles.avatar} source={{uri: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}}/>
    // <TouchableOpacity activeOpacity={.5} onPress={this.callFun}>

    //   <Image source={require('./images/sample_image_button.png')} style={styles.ImageClass} />

    // </TouchableOpacity>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({ 
  /*header: {
  backgroundColor: "#181E28",
  height: height / 4
},
avatar: {
  width: 130,
  height: 130,
  borderRadius: 63,
  borderWidth: 2,
  borderColor: "white",
  marginBottom: 10,
  alignSelf: 'flex-start',
  position: "absolute",
  marginTop: height / 7
},
name: {
  position: "absolute",
  marginTop: height / 5,
  marginLeft: width / 2.4
},*/
    imagePicking: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 300,
  },
  btnpick: {
    width: 150,
    height: 150,
    borderRadius: 300,
    //borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,

    // position: "absolute",
    // top: height / 13,
  },
  text: {
    ...robotoWeights.regular12,
    color: "white",
    fontSize: height / 30,
  },
});
