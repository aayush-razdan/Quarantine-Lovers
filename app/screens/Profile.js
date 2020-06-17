import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, Dimensions, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { robotoWeights, material } from 'react-native-typography';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
function ProfileScreen() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
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
    <View style={{ flex: 1, backgroundColor: "#2f5a78" }}>
      <View style={styles.header}></View>
      <View style={styles.name}><Text style={styles.text}>Quarantine Lovers</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity activeOpacity={0.9} style={styles.btnpick} onPress={pickImage} >
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.imagePicking} />}
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
  header: {
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
  },
  imagePicking: {
    position: "absolute",
    top: -height / 8.4,
    left: 5,
    width: 150,
    height: 150,
    borderRadius: 300,
  },
  btnpick: {
    position: "absolute",
    top: -height / 8,
    left: 0,
    width: 160,
    height: 160,
    borderRadius: 320,
    // width: 120,
    // height: 30,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    //borderRadius: 8,
    //borderColor: "dodgerblue",
    // position: "absolute",
    // top: height / 13,
    // left: width / 30,
  },
  text: {
    ...robotoWeights.medium,
    color: "white",
    fontSize: height / 31
  },
})
