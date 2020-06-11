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
//import Subjects from "../other/subjects";

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

export default function AttendanceDetails({ navigation }) {
  //const [yearModalOpen, setYearModalOpen] = useState(true);
  //const [branchModalOpen, setBranchModalOpen] = useState(false);
  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("Semester", item);
              //setYearModalOpen(false);
            }}
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* <TouchableOpacity style={styles.btnPhysics}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="PHYSICS"
      >
        <Text style={styles.text}>
          PHYSICS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnMaths}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="CHEMISTRY"
      >
        <Text style={styles.text}>
          CHEMISTRY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnChemistry}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="MATHEMATICS"
      >
        <Text style={styles.text}>
          MATHEMATICS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnComputers}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="COMPUTERS"
      >
        <Text style={styles.text}>
          COMPUTERS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBEE}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="B.E.E."
      >
        <Text style={styles.text}>
          B.E.E.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEME}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="E.M.E."
      >
        <Text style={styles.text}>
          E.M.E.
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

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
