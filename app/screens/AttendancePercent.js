import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  LineChart,
  ProgressChart,
} from "react-native-chart-kit";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { abs } from "react-native-reanimated";

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function AttendancePercent({ navigation }) {
  const [totClass, setTotClass] = useState(40);
  const [uptoClass, setUptoClass] = useState(0);
  const [attClass, setAttClass] = useState(0);

  var toAttend;
  if (Math.ceil(0.75 * uptoClass - attClass) <= 0) {
    toAttend = 0;
  }
  else {
    toAttend = Math.ceil(0.75 * uptoClass - attClass);
  }

  var perToAttend;
  if ((totClass - uptoClass) === 0) {
    perToAttend = (totClass * 0.75 - attClass) / (totClass - uptoClass + 0.01);
  }
  else if ((totClass - uptoClass) === 0) {
    perToAttend = 0;
  }
  else if ((totClass * 0.75 - attClass) / (totClass - uptoClass) > 1) {
    perToAttend = 1;
  }
  else {
    perToAttend = (totClass * 0.75 - attClass) / (totClass - uptoClass);
  }
  var per;
  if (uptoClass === 0) {
    per = 0;
  }
  else {
    per = (attClass / uptoClass) * 100;
  }

  const data = {
    labels: ["Required", "Attended"],
    data: [perToAttend, per / 100]
  };

  return (
    <View style={styles.background}>
      <View>
        <Text style={{ paddingLeft: screenWidth / 5 }}>Analysis of your attended classes</Text>
        <ProgressChart
          data={data}
          width={screenWidth - screenWidth / 25}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "black",
            backgroundGradientTo: "grey",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(155, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(155, 255, 255, ${opacity})`,
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
      <TouchableOpacity style={styles.btnExtraClass}
        onPress={() => {
          setTotClass(totClass + 1);
        }}
        title="YES"
        icon={<Icon name="add" size={15} color="black" />}
      >
        <Text style={{ color: 'rgba(0,0,0,1)' }}>
          +YES
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Did you attend Class today
      </Text>
      <TouchableOpacity style={styles.btnYes}
        onPress={() => {
          if (uptoClass < totClass) {
            setUptoClass(uptoClass + 1);
            setAttClass(attClass + 1);
          }
        }}
        title="Yes"
      >
        <Text style={{ color: 'rgba(0,0,0,1)' }}>
          YES
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnNo}
        onPress={() => {
          if (uptoClass < totClass) {
            setUptoClass(uptoClass + 1);
          }
        }}
        title="No"
      >
        <Text style={{ color: 'rgba(0,0,0,1)' }}>
          NO
        </Text>
      </TouchableOpacity>
      <View style={styles.OutputContainer}>
        <Text style={styles.text}>
          {"\n"}{"   "}Attended classes: {attClass}
        </Text>
        <Text style={styles.text}>
          {"  "} Total classes: {uptoClass}
        </Text>
        <Text style={styles.text}>
          {"  "} Attendance is {per.toFixed(2)}%
        </Text>
        <Text style={styles.text}>
          {"  "} Number of classes you need to attend: {toAttend} {"\n"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnExtraClass: {
    elevation: screenHeight / 90,
    width: screenWidth / 1.75,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "rgba(110 , 230 , 280 , 1.0)",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 40,
    alignItems: "center",
  },
  btnYes: {
    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "rgba(110 , 230 , 280 , 1.0)",
    justifyContent: "center",
    marginTop: screenHeight / 80,
    alignItems: "center",
  },
  btnNo: {
    elevation: screenHeight / 90,
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "rgba(110 , 230 , 280 , 1.0)",
    justifyContent: "center",
    marginTop: screenHeight / 81,
    alignItems: "center",
    marginBottom: screenHeight / 400
  },
  text: {
    fontSize: screenHeight / 44,
    marginBottom: screenHeight / 400,
    marginTop: screenHeight / 600
  },
  OutputContainer: {
    width: screenWidth - screenWidth / 20,
    elevation: 4,
    backgroundColor: "rgba(110 , 230 , 280 , 1.0)",
    borderRadius: screenHeight / 51,
    marginTop: screenHeight / 20,
  },
});