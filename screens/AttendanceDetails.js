import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function AttendanceDetails({ navigation }) {

  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.btnPhysics}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="PHYSICS"
      >
        <Text>
          PHYSICS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnMaths}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="CHEMISTRY"
      >
        <Text>
          CHEMISTRY
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnChemistry}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="MATHEMATICS"
      >
        <Text>
          MATHEMATICS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnComputers}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="COMPUTERS"
      >
        <Text>
          COMPUTERS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBEE}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="B.E.E."
      >
        <Text>
          B.E.E.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEME}
        onPress={() => navigation.navigate("AttendancePercent")}
        title="E.M.E."
      >
        <Text>
          E.M.E.
        </Text>
      </TouchableOpacity>
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
  btnPhysics: {
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
});
