import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttendanceDetails from "../screens/AttendanceDetails";
import AttendancePercent from "../screens/AttendancePercent";

const Stack = createStackNavigator();

function AttendanceStack() {
  return (
    <Stack.Navigator initialRouteName="AttendanceDetails">
      <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} />
      <Stack.Screen name="AttendancePercent" component={AttendancePercent} />
    </Stack.Navigator>
  );
}

export default AttendanceStack;
