import React from 'react'
import {View,StyleSheet,Image, Text,Dimensions} from 'react-native'

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
function ProfileScreen() {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png'}}/>
      <View style={styles.name}><Text style={{color:"white",fontSize:height/33}}>Quarantine  Lovers</Text></View>
    </View>
   
  );
}
export default ProfileScreen;

const styles=StyleSheet.create({
  header:{
    backgroundColor:"#1D2430",
    height: height/4
  },
  avatar:{
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'flex-start',
    position:"absolute",
    marginTop:height/7
  },
  name:{
    position:"absolute",
    marginTop:height/5,
    marginLeft:width/2.4
   
  }
})
