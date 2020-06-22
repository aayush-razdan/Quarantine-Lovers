import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttendanceDetails from "../screens/AttendanceDetails";
import AttendancePercent from "../screens/AttendancePercent";
import Branches from "../screens/Branches";
import Subjects from "../screens/subjects";
import Semesters from "../screens/semesters";

const Stack = createStackNavigator();

function AttendanceStack() {
  return (
    <Stack.Navigator initialRouteName="Semester">
      <Stack.Screen name="Semester" component={Semesters} />
      <Stack.Screen name="Branches" component={Branches} />
      <Stack.Screen name="Subjects" component={Subjects} />
      <Stack.Screen name="AttendancePercent" component={AttendancePercent} />
    </Stack.Navigator>
  );
}

export default AttendanceStack;

//<Stack.Screen name="AttendanceDetails" component={AttendanceDetails} />
