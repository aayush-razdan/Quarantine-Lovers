import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
//import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { modifyYear } from "../src/actions/index";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const data = [
  {
    id: "1",
    title: "First Year",
  },
  {
    id: "2",
    title: "Second Year",
  },
  {
    id: "3",
    title: "Third Year",
  },
  {
    id: "4",
    title: "Final Year",
  },
];

const AttendanceDetails = (props) => {
  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              props.yearAdd(item.id, item.title);
              props.navigation.navigate("Semester");
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    yearAdd: (id, year) => dispatch(modifyYear(id, year)),
  };
};

export default connect(null, mapDispatchToProps)(AttendanceDetails);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnChemistry: {
    elevation: screenHeight / 90,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  btn: {
    elevation: screenHeight / 90,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  btnMaths: {
    elevation: screenHeight / 80,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  btnComputers: {
    elevation: screenHeight / 80,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  btnBEE: {
    elevation: screenHeight / 80,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  btnEME: {
    elevation: screenHeight / 90,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: screenHeight / 51,
    textAlign: "center",
  },
});
