import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LineChart, ProgressChart, BarChart } from "react-native-chart-kit";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/MaterialIcons";
import { abs } from "react-native-reanimated";
import { robotoWeights, material } from "react-native-typography";
import Gpa from "./Gpa";
import { connect } from "react-redux";
import { modifyAvgGPA } from "../src/actions/index";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

// maths : 4, phy:3, mech:3 , chem:2 , eg:2 , english:1

const GpaSubjects = (props) => {
  if (props.sem == 1) {
    var [gpaMaths, setgpaMaths] = useState(10);
    if (gpaMaths > 10) {
      gpaMaths = 10;
    }
    if (gpaMaths < 4) {
      gpaMaths = 4;
    }
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
    var [gpaPhysicsLab, setgpaPhysicsLab] = useState(10);
    if (gpaPhysicsLab > 10) {
      gpaPhysicsLab = 10;
    }
    if (gpaPhysicsLab < 4) {
      gpaPhysicsLab = 4;
    }
    var [gpaChemistryLab, setgpaChemistryLab] = useState(10);
    if (gpaChemistryLab > 10) {
      gpaChemistryLab = 10;
    }
    if (gpaChemistryLab < 4) {
      gpaChemistryLab = 4;
    }
    var [gpaMechanicsLab, setgpaMechanicsLab] = useState(10);
    if (gpaMechanicsLab > 10) {
      gpaMechanicsLab = 10;
    }
    if (gpaMechanicsLab < 4) {
      gpaMechanicsLab = 4;
    }
    var [gpaDrawingLab, setgpaDrawingLab] = useState(10);
    if (gpaDrawingLab > 10) {
      gpaDrawingLab = 10;
    }
    if (gpaDrawingLab < 4) {
      gpaDrawingLab = 4;
    }
    var avgGPA =
      (gpaMaths * 4 +
        gpaPhysics * 3 +
        gpaMechanics * 3 +
        gpaChemistry * 2 +
        gpaDrawing * 2 +
        gpaEnglish * 2 +
        gpaPhysicsLab +
        gpaChemistryLab +
        gpaMechanicsLab +
        gpaDrawingLab) /
      20;
    return (
      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.background}>
          <View style={styles.card}>
            <Text style={styles.text}>Applied Mathematics I : {gpaMaths}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaMaths(gpaMaths + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaMaths(gpaMaths - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Applied Physics I : {gpaPhysics}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaPhysics(gpaPhysics + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaPhysics(gpaPhysics - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Chemistry I : {gpaChemistry}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaChemistry(gpaChemistry + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaChemistry(gpaChemistry - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Engineering Mechanics : {gpaMechanics}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaMechanics(gpaMechanics + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaMechanics(gpaMechanics - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Engineering Drawing : {gpaDrawing}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaDrawing(gpaDrawing + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaDrawing(gpaDrawing - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>English : {gpaEnglish}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaEnglish(gpaEnglish + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaEnglish(gpaEnglish - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Physics Lab : {gpaPhysicsLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaPhysicsLab(gpaPhysicsLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaPhysicsLab(gpaPhysicsLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Chemistry Lab : {gpaChemistryLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaChemistryLab(gpaChemistryLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaChemistryLab(gpaChemistryLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Engineering Mechanics Lab : {gpaMechanicsLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaMechanicsLab(gpaMechanicsLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaMechanicsLab(gpaMechanicsLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Engineering Drawing Lab : {gpaDrawingLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaDrawingLab(gpaDrawingLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaDrawingLab(gpaDrawingLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gpa}>
            <Text style={styles.text}>
              Your GPA for Subjects: {avgSubjects.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  } else if (props.sem == 2) {
    var [gpaMaths, setgpaMaths] = useState(10);
    if (gpaMaths > 10) {
      gpaMaths = 10;
    }
    if (gpaMaths < 4) {
      gpaMaths = 4;
    }
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
    var [gpaBEE, setgpaBEE] = useState(10);
    if (gpaBEE > 10) {
      gpaBEE = 10;
    }
    if (gpaBEE < 4) {
      gpaBEE = 4;
    }
    var [gpaEME, setgpaEME] = useState(10);
    if (gpaEME > 10) {
      gpaEME = 10;
    }
    if (gpaEME < 4) {
      gpaEME = 4;
    }
    var [gpaCPP, setgpaCPP] = useState(10);
    if (gpaCPP > 10) {
      gpaCPP = 10;
    }
    if (gpaCPP < 4) {
      gpaCPP = 4;
    }
    var [gpaPhysicsLab, setgpaPhysicsLab] = useState(10);
    if (gpaPhysicsLab > 10) {
      gpaPhysicsLab = 10;
    }
    if (gpaPhysicsLab < 4) {
      gpaPhysicsLab = 4;
    }
    var [gpaChemistryLab, setgpaChemistryLab] = useState(10);
    if (gpaChemistryLab > 10) {
      gpaChemistryLab = 10;
    }
    if (gpaChemistryLab < 4) {
      gpaChemistryLab = 4;
    }
    var [gpaWorkshop, setgpaWorkshop] = useState(10);
    if (gpaWorkshop > 10) {
      gpaWorkshop = 10;
    }
    if (gpaWorkshop < 4) {
      gpaWorkshop = 4;
    }
    var [gpaCPPLab, setgpaCPPLab] = useState(10);
    if (gpaCPPLab > 10) {
      gpaCPPLab = 10;
    }
    if (gpaCPPLab < 4) {
      gpaCPPLab = 4;
    }
    var avgSubjects =
      (gpaMaths * 4 +
        gpaPhysics * 3 +
        gpaBEE * 2 +
        gpaChemistry * 2 +
        gpaEME * 2 +
        gpaCPP * 2 +
        gpaPhysicsLab +
        gpaChemistryLab +
        gpaWorkshop +
        gpaCPPLab * 2) /
      20;
    return (
      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.background}>
          <View style={styles.card}>
            <Text style={styles.text}>Applied Mathematics I : {gpaMaths}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaMaths(gpaMaths + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaMaths(gpaMaths - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Applied Physics I : {gpaPhysics}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaPhysics(gpaPhysics + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaPhysics(gpaPhysics - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Chemistry I : {gpaChemistry}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaChemistry(gpaChemistry + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaChemistry(gpaChemistry - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>BEE : {gpaBEE}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaBEE(gpaBEE + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaBEE(gpaBEE - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>CPP : {gpaCPP}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaCPP(gpaCPP + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaCPP(gpaCPP - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>EME : {gpaEME}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaEME(gpaEME + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaEME(gpaEME - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Physics Lab : {gpaPhysicsLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaPhysicsLab(gpaPhysicsLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaPhysicsLab(gpaPhysicsLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>
              Applied Chemistry Lab : {gpaChemistryLab}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaChemistryLab(gpaChemistryLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaChemistryLab(gpaChemistryLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>Workshop : {gpaWorkshop}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaWorkshop(gpaWorkshop + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaWorkshop(gpaWorkshop - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.text}>CPP Lab : {gpaCPPLab}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.btnPlus}
                onPress={() => {
                  setgpaCPPLab(gpaCPPLab + 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icons name="add" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={() => {
                  setgpaCPPLab(gpaCPPLab - 1);
                  props.GpaAdd(avgGPA.toFixed(2));
                }}
              >
                <Icon name="minus" size={19} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gpa}>
            <Text style={styles.text}>
              Your GPA for Subjects: {avgSubjects.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    sem: state.semReducer.semId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GpaAdd: (avgGPA) => dispatch(modifyAvgGPA(avgGPA)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GpaSubjects);

const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
    width: "100%",
  },
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

    marginTop: screenHeight / 80,
    marginBottom: "1.5%",
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
