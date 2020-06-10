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
} from "react-native-chart-kit";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

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

  var per;
  if (uptoClass === 0) {
    per = 0;
  }
  else {
    per = (attClass / uptoClass) * 100;
  }
  return (
    <View style={styles.background}>
      <View>
        <Text style={{ paddingLeft: screenWidth / 5 }}>Analysis of your attended classes</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            datasets: [
              {
                data: [
                  0,
                  25,
                  50,
                  75,
                  100
                ]
              }
            ]
          }}
          width={screenWidth - screenWidth / 10} // from react-native
          height={220}
          yAxisSuffix="%"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "dodgerblue",
            backgroundGradientFrom: "#4169e1",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: screenHeight / 51
            },
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "dodgerblue"
            }
          }}
          bezier
          style={{
            marginVertical: screenHeight / 81,
            borderRadius: screenWidth / 51,
          }}
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
        <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
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
        <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
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
        <Text style={{ color: 'rgba(255,255,255,0.7)' }}>
          NO
        </Text>
      </TouchableOpacity>
      <View style={styles.OutputContainer}>
        <Text style={styles.text}>
          Attended classes: {attClass}
        </Text>
        <Text style={styles.text}>
          Total classes: {uptoClass}
        </Text>
        <Text style={styles.text}>
          Attendance is {per.toFixed(2)}%
        </Text>
        <Text style={styles.text}>
          Number of classes you need to attend: {toAttend}
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
    width: screenWidth / 1.75,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 40,
    alignItems: "center",
  },
  btnYes: {
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 80,
    alignItems: "center",
  },
  btnNo: {
    width: screenWidth / 4.9,
    height: screenHeight / 19,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
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
    marginTop: screenHeight / 20,
  },
});