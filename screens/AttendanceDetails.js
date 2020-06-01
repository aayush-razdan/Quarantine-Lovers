import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

export default function AttendanceDetails({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("AttendancePercent")}
        title="Physics"
      />
    </View>
  );
}
