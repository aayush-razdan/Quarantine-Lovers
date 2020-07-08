import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image
} from "react-native";
import { connect } from "react-redux";
import {LinearGradient} from 'expo-linear-gradient'

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

//data
// const data = [
//   {
//     year: "1",
//     sem: [
//       {
//         num: 1,
//         bas: [
//           {
//             branch: "computer",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "IT",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "EXTC",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//         ],
//       },
//       {
//         num: 2,
//         bas: [
//           {
//             branch: "computer",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "IT",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "EXTC",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     year: "2",
//     sem: [
//       {
//         num: 1,
//         bas: [
//           {
//             branch: "computer",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },

//           {
//             branch: "IT",
//             subjects: [
//               { name: "3", id: "1" },
//               { name: "3", id: "2" },
//               { name: "4", id: "3" },
//               { name: "4", id: "4" },
//               { name: "4", id: "1" },
//               { name: "5", id: "5" },
//             ],
//           },
//           {
//             branch: "EXTC",
//             subjects: [
//               { name: "3", id: "1" },
//               { name: "3", id: "2" },
//               { name: "4", id: "3" },
//               { name: "4", id: "4" },
//               { name: "4", id: "5" },
//               { name: "5", id: "6" },
//             ],
//           },
//         ],
//       },
//       {
//         num: 2,
//         bas: [
//           {
//             branch: "computer",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "IT",
//             subjects: [
//               { name: "Mathematics", id: "1" },
//               { name: "Physics", id: "2" },
//               { name: "Chemistry", id: "3" },
//               { name: "Mechanics", id: "4" },
//               { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//           {
//             branch: "EXTC",
//             subjects: [
// { name: "Mathematics", id: "1" },
// { name: "Physics", id: "2" },
// { name: "Chemistry", id: "3" },
// { name: "Mechanics", id: "4" },
// { name: "Drawing", id: "5" },
//               //{ name: "f" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

const data1 = [
  { name: "Mathematics", id: "1", page: "AttendancePercentMaths1" },
  { name: "Physics", id: "2", page: "AttendancePercentPhysics1" },
  { name: "Chemistry", id: "3", page: "AttendancePercentChemistry1" },
  { name: "Mechanics", id: "4", page: "AttendancePercentMechanics" },
  { name: "EG", id: "5", page: "AttendancePercentEG" },
];

const data2 = [
  { name: "Mathematics", id: "1", page: "AttendancePercentMaths2" },
  { name: "Physics", id: "2", page: "AttendancePercentPhysics2" },
  { name: "Chemistry", id: "3", page: "AttendancePercentChemistry2" },
  { name: "BEE", id: "4", page: "AttendancePercentBEE" },
  { name: "EME", id: "5", page: "AttendancePercentEME" },
  { name: "CPP", id: "6", page: "AttendancePercentCS" },
];

var data = [];

const Subjects = (props) => {
  // var year1 = route.params.year;
  // year1--;
  // var sem1 = route.params.sem;
  // sem1--;
  // var bas1 = route.params.id;
  // bas1--;

  // var year1 = props.year;
  // year1--;
  // var sem1 = props.sem;
  // sem1--;
  // var bas1 = props.branch;
  // bas1--;

  if (props.sem == 1) {
    data = data1;
  } else if (props.sem == 2) {
    data = data2;
  }

  return (
   
     <ImageBackground source={require('../other/bg.jpg')} style={styles.background}>
      <FlatList
        scrollEventThrottle={1900} 
     numColumns={2}
    columnWrapperStyle={{flexDirection:'row'}}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              {
                // item.year = route.params.id;
              }
              props.navigation.navigate(item.page);
              //setYearModalOpen(false);
            }}
          >
          
            <Text style={styles.text}>{item.name}</Text>
           
     
          </TouchableOpacity>
        )}
        idExtractor={(item,index) => item.id}
      />
     
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  return {
    //year: state.yearReducer.yearId,
    sem: state.semReducer.semId,
    //branch: state.branchReducer.branchId,
  };
};
export default connect(mapStateToProps)(Subjects);

const styles = StyleSheet.create({
  background: {
    alignItems:'center',
    height:"101%",
    width:screenWidth,
   
    
    
  },
  image:{
    width:screenWidth,
    height:screenHeight/4,
    opacity:0.8
  },
  btn: {
    elevation: 10,
    width: screenHeight /4.5,
    height: screenHeight / 6.5,
    borderRadius: 10,
    fontSize: screenHeight / 51,
  backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginHorizontal:screenWidth/100,
    alignItems: "center",
    marginTop:screenHeight/7,
    
    opacity:0.9
    
  },
  text: {
    color:"white",
    fontSize: screenHeight / 40,
    textAlign: "center",
    fontWeight:'bold'
  },
});
