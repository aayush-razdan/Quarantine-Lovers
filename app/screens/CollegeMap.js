import React, { useState } from "react";
import {View,ImageBackground} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import MapView, {Marker} from "react-native-maps";

const Map = () => {

  return (
<ImageBackground source={require('../other/vjti.jpeg')} style={{width:"100%",height:"100%"}}>    
<MapView 
      style={{height:"98%", width:"98%",marginLeft:"1%",marginTop:"2%",opacity:0.95}}
        initialRegion={{
        latitude: 19.0223415,
        longitude: 72.8560332,
        latitudeDelta: 0.0003,
        longitudeDelta: 0.0003
        }}
    > 
      <Marker coordinate={{ latitude: 19.0223415, longitude:72.8560332 }} />
    </MapView>
    </ImageBackground> 
  );
};

export default function CollegeMap(){

const Stack=createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name="VJTI Map" component={Map} options={{/*
          title: 'VJTI Map',
          headerStyle: {
            backgroundColor: '#1D2430',
          },
          headerTintColor: '#fff',
          */
         
        }}
      /> 
    </Stack.Navigator>
  )
}