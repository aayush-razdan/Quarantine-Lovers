import React, { useState } from "react";
import {View,ImageBackground} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import MapView, {Marker} from "react-native-maps";

export default function TimeTable(){

  return (
<ImageBackground source={require('../other/vjti.jpeg')} style={{width:"100%",height:"100%"}}>    
<MapView 
      style={{height:"98%", width:"98%",marginLeft:"1%",marginTop:"2%",opacity:0.95}}
        initialRegion={{
        latitude: 19.0223415,
        longitude: 72.8560332,
        latitudeDelta: 0.0008,
        longitudeDelta: 0.0008
        }}
    > 
      <Marker coordinate={{ latitude: 19.0223415, longitude:72.8560332 }}
    />
    </MapView>
    </ImageBackground> 
  );
};
