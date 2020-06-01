import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function AttendancePercent({ navigation }) {
  const [totClass, setTotClass] = useState(40);
  const [uptoClass, setUptoClass] = useState(0);
  const [attClass, setAttClass] = useState(0);
  var per;
  if (uptoClass === 0) {
    per = 0;
  } else {
    per = (attClass / uptoClass) * 100;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Did you Have an extra class</Text>
      <Button
        onPress={() => {
          setTotClass(totClass + 1);
        }}
        title="YES"
        icon={<Icon name="add" size={15} color="white" />}
      />
      <Text>Did you attend Class today</Text>

      <Button
        onPress={() => {
          if (uptoClass < totClass) {
            setUptoClass(uptoClass + 1);
            setAttClass(attClass + 1);
          }
        }}
        title="Yes"
      />
      <Button
        onPress={() => {
          if (uptoClass < totClass) {
            setUptoClass(uptoClass + 1);
          }
        }}
        title="No"
      />
      <View>
        <Text>Attended classes= {attClass}</Text>
        <Text>Total classes= {uptoClass}</Text>
        <Text>attendance is {per}%</Text>
      </View>
    </View>
  );
}
