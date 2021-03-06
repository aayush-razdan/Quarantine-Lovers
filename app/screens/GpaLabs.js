import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart, ProgressChart, BarChart } from "react-native-chart-kit";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/MaterialIcons";
import { abs } from "react-native-reanimated";
import { robotoWeights, material } from "react-native-typography";

import { connect } from "react-redux";
import { modifyAvgLab } from "../src/actions/index";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const GpaLabs = (props) => {
  var [gpaPhysics, setgpaPhysics] = useState(10);
  if (gpaPhysics > 10) {
    gpaPhysics = 10;
  }
  if (gpaPhysics < 4) {
    gpaPhysics = 4;
  }
  var [gpaChemistry, setgpaChemistry] = useState(10);
  if (gpaChemistry > 10) {
    gpaChemistry = 10;
  }
  if (gpaChemistry < 4) {
    gpaChemistry = 4;
  }
  var [gpaMechanics, setgpaMechanics] = useState(10);
  if (gpaMechanics > 10) {
    gpaMechanics = 10;
  }
  if (gpaMechanics < 4) {
    gpaMechanics = 4;
  }
  var [gpaDrawing, setgpaDrawing] = useState(10);
  if (gpaDrawing > 10) {
    gpaDrawing = 10;
  }
  if (gpaDrawing < 4) {
    gpaDrawing = 4;
  }
  var [gpaEnglish, setgpaEnglish] = useState(10);
  if (gpaEnglish > 10) {
    gpaEnglish = 10;
  }
  if (gpaEnglish < 4) {
    gpaEnglish = 4;
  }
  var avgLabs =
    (gpaChemistry + gpaDrawing + gpaEnglish + gpaMechanics + gpaPhysics) / 5;
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.text}>Applied Physics Lab : {gpaPhysics}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              setgpaPhysics(gpaPhysics + 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icons name="add" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMinus}
            onPress={() => {
              setgpaPhysics(gpaPhysics - 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icon name="minus" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Applied Chemistry Lab : {gpaChemistry}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              setgpaChemistry(gpaChemistry + 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icons name="add" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMinus}
            onPress={() => {
              setgpaChemistry(gpaChemistry - 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icon name="minus" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>
          Engineering Mechanics Lab : {gpaMechanics}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              setgpaMechanics(gpaMechanics + 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icons name="add" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMinus}
            onPress={() => {
              setgpaMechanics(gpaMechanics - 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icon name="minus" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Engineering Drawing Lab : {gpaDrawing}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              setgpaDrawing(gpaDrawing + 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icons name="add" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMinus}
            onPress={() => {
              setgpaDrawing(gpaDrawing - 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icon name="minus" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>English Lab: {gpaEnglish}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              setgpaEnglish(gpaEnglish + 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icons name="add" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnMinus}
            onPress={() => {
              setgpaEnglish(gpaEnglish - 1);
              props.labGpaAdd(avgLabs.toFixed(2));
            }}
          >
            <Icon name="minus" size={19} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gpa}>
        <Text style={styles.text}>Your GPA for labs: {avgLabs.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    labGpaAdd: (avgLabs) => dispatch(modifyAvgLab(avgLabs)),
  };
};

export default connect(null, mapDispatchToProps)(GpaLabs);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#181E28",
    //backgroundColor: "white",
    //justifyContent: "center",
    alignItems: "center",
  },
  btnExtraClass: {
    elevation: screenHeight / 90,
    width: screenWidth / 3,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#2D3D64",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 40,
    alignItems: "center",
  },
  btnPlus: {
    flexDirection: "row",

    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#7ED68A",
    justifyContent: "space-evenly",
    marginRight: screenWidth / 5,
    marginBottom: "1.5%",
    marginTop: screenHeight / 80,
    alignItems: "center",
  },
  btnMinus: {
    flexDirection: "row",
    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "#EFF577",
    justifyContent: "space-evenly",
    marginTop: screenHeight / 81,
    alignItems: "center",
    marginBottom: screenHeight / 400,
  },
  text: {
    color: "#ECF1F1",
    fontSize: screenHeight / 44,
    marginBottom: screenHeight / 400,
    marginTop: screenHeight / 600,
  },
  OutputContainer: {
    width: screenWidth - screenWidth / 10,
    elevation: 4,
    backgroundColor: "#1D2430",
    borderRadius: screenHeight / 51,
    marginTop: screenHeight / 20,
  },
  container: {
    backgroundColor: "#181E28",
    borderRadius: 0,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gpa: {
    position: "absolute",
    top: screenHeight / 1.22,
  },
  card: {
    width: screenWidth,
    //height: screenHeight / 8,
    elevation: 4,
    backgroundColor: "#1D2430",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screenHeight / 51,
    marginTop: screenHeight / 80,
  },
});
