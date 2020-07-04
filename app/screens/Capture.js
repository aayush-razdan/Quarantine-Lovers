import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import victoryContainer from "victory-native/lib/components/victory-container";
import { color } from "react-native-reanimated";

const data = [
  { subject: "Maths", per: 40},
  { subject: "Phy", per: 65 },
  { subject: "Chem", per: 30 },
  { subject: "CPP", per: 40 },
  {subject:"BEE", per:30}
];

export default function Capture(){

    return (
      <View style={styles.container} >
      <Text style={{position:'absolute',top:10, fontSize:15,color:'black'}}>Analysis of Attendance</Text>
       <VictoryChart domainPadding={{x:30}} maxDomain={{y:100}}
   >
  <VictoryBar
    cornerRadius={{topLeft:8,topRight:8}}
    labels={({ datum}) => `${datum.per}%`}
    data={data}
    x="subject"
    y="per"
    style={{data:{fill:"#a6abf5"}}}
    barRatio={0.95}
    //alignment="start"
  />
</VictoryChart>
 
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:14,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
{/*import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */
//ImagePicker.launchImageLibrary(options, (response) => {
  //console.log('Response = ', response);

  //if (response.didCancel) {
    //  console.log('User cancelled image picker');
  //} else if (response.error) {
   //   console.log('ImagePicker Error: ', response.error);
  //} else if (response.customButton) {
  //    console.log('User tapped custom button: ', response.customButton);
  // else {
    //  const source = { uri: response.uri };

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      //this.setState({
        //  avatarSource: source,
      //});
 // }
//});
//*/}
}