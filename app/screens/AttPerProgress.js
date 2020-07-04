import React from 'react'
import {ProgressCircle} from 'react-native-svg-charts'
import {Text,View} from 'react-native'
import { ceil } from 'react-native-reanimated';
 
export default function AttPerProgress() {
 return (
 <View style={{justifyContent:'center',height:180,width:'45%',borderRadius:7,elevation:10,backgroundColor:'white'}}>
 <Text style={{alignSelf:'center',position:'absolute',color:'#82e083',fontSize:20,fontWeight:'bold'}}>70%</Text>
 <ProgressCircle style={{height: 145}} progress={0.7} strokeWidth={14}backgroundColor='#f6fcf4' progressColor={'#82e083'}/>
<Text style={{alignSelf:'center',marginTop:"1%",fontSize:16}}>Overall Attendance(%)</Text>
</View>
);   
}