import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttendanceDetails from "../screens/AttendanceDetails";
import AttendancePercent from "../screens/AttendancePercent";
import Branches from "../screens/Branches";
import Subjects from "../screens/subjects";
import Semesters from "../screens/semesters";
import { connect } from "react-redux";

const Stack = createStackNavigator();

function AttendanceStack(props) {
  if (props.year == null) {
    return (
      <Stack.Navigator initialRouteName="AttendanceDetails">
        <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} />
        <Stack.Screen name="Semester" component={Semesters} />
        <Stack.Screen name="Branches" component={Branches} />
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="AttendancePercent" component={AttendancePercent} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Subjects">
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="AttendancePercent" component={AttendancePercent} />
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    year: state.yearReducer.yearId,
  };
};

export default connect(mapStateToProps)(AttendanceStack);
