import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/MaterialIcons";
import { abs } from "react-native-reanimated";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

export default function AttendancePercentMechanics({ navigation }) {
  const [totClass, setTotClass] = useState(40);
  const [uptoClass, setUptoClass] = useState(0);
  const [attClass, setAttClass] = useState(0);

  var toAttend;
  if (Math.ceil(0.75 * uptoClass - attClass) <= 0) {
    toAttend = 0;
  } else {
    toAttend = Math.ceil(0.75 * uptoClass - attClass);
  }

  var perToAttend;
  if (totClass - uptoClass === 0) {
    perToAttend = (totClass * 0.75 - attClass) / (totClass - uptoClass + 0.01);
  } else if (totClass - uptoClass === 0) {
    perToAttend = 0;
  } else if ((totClass * 0.75 - attClass) / (totClass - uptoClass) > 1) {
    perToAttend = 1;
  } else {
    perToAttend = (totClass * 0.75 - attClass) / (totClass - uptoClass);
  }
  if (perToAttend > 1) {
    perToAttend = 1;
  }
  var per;
  if (uptoClass === 0) {
    per = 0;
  } else {
    per = (attClass / uptoClass) * 100;
  }

  const data = {
    labels: ["Required", "Attended"],
    data: [perToAttend, per / 100],
  };

  return (
    <View style={styles.background}>
      <View>
        <Text style={{ paddingLeft: screenWidth / 5, color: "#A4A6A6" }}>
          Analysis of your attended classes
        </Text>
        <ProgressChart
          data={data}
          width={screenWidth - screenWidth / 20}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "#1D2430",
            backgroundGradientTo: "#1D2430",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(105, 242, 224 , ${opacity})`,
            labelColor: (opacity = 1) => `rgba(227, 240, 238 , ${opacity})`,
            style: {
              borderRadius: screenHeight / 51,
            },
          }}
          style={{
            marginVertical: screenHeight / 81,
            borderRadius: screenWidth / 16,
          }}
          hideLegend={false}
        />
      </View>
      <Text style={styles.text}>Did you Have an extra class ?</Text>
      <TouchableOpacity
        style={styles.btnExtraClass}
        onPress={() => {
          setTotClass(totClass + 1);
        }}
      >
        <Text style={{ color: "#D0E1DE", fontWeight: "bold" }}>YES</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Did you attend Class today?</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.btnYes}
          onPress={() => {
            if (uptoClass < totClass) {
              setUptoClass(uptoClass + 1);
              setAttClass(attClass + 1);
            }
          }}
        >
          <Text
            style={{ color: "#191E1D", fontWeight: "bold", marginLeft: 20 }}
          >
            YES
          </Text>
          <Icons name="done" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNo}
          onPress={() => {
            if (uptoClass < totClass) {
              setUptoClass(uptoClass + 1);
            }
          }}
        >
          <Text
            style={{ color: "#191E1D", fontWeight: "bold", marginLeft: 20 }}
          >
            NO
          </Text>
          <Icon name="cross" size={19} />
        </TouchableOpacity>
      </View>
      <View style={styles.OutputContainer}>
        <Text style={styles.text}>
          {"\n"}
          {"   "}Attended classes: {attClass}
        </Text>
        <Text style={styles.text}>
          {"  "} Total classes: {uptoClass}
        </Text>
        <Text style={styles.text}>
          {"  "} Attendance is {per.toFixed(2)}%
        </Text>
        <Text style={styles.text}>
          {"  "} Total classes you need to attend: {toAttend} {"\n"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#181E28",
    //backgroundColor: "white",
    justifyContent: "center",
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
  btnYes: {
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
    alignItems: "center",
  },
  btnNo: {
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
});
