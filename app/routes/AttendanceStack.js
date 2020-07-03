import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AttendanceDetails from "../screens/AttendanceDetails";
import AttendancePercentBEE from "../screens/AttendancePercentBEE";
import AttendancePercentEME from "../screens/AttendancePercentEME";
import AttendancePercentCS from "../screens/AttendancePercentCS";
import AttendancePercentEG from "../screens/AttendancePercentEG";
import AttendancePercentMechanics from "../screens/AttendancePercentMechanics";
import AttendancePercentMaths1 from "../screens/AttendancePercentMaths1";
import AttendancePercentMaths2 from "../screens/AttendancePercentMaths2";
import AttendancePercentPhysics1 from "../screens/AttendancePercentPhysics1";
import AttendancePercentPhysics2 from "../screens/AttendancePercentPhysics2";
import AttendancePercentChemistry1 from "../screens/AttendancePercentChemistry1";
import AttendancePercentChemistry2 from "../screens/AttendancePercentChemistry2";
import Branches from "../screens/Branches";
import Subjects from "../screens/subjects";
import Semesters from "../screens/semesters";
import { connect } from "react-redux";

const Stack = createStackNavigator();

function AttendanceStack(props) {
  if (props.sem == null) {
    return (
      <Stack.Navigator initialRouteName="Semester">
        {/* <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} /> */}
        <Stack.Screen name="Semester" component={Semesters} />
        <Stack.Screen name="Branches" component={Branches} />
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen
          name="AttendancePercentBEE"
          component={AttendancePercentBEE}
        />
        <Stack.Screen
          name="AttendancePercentEME"
          component={AttendancePercentEME}
        />
        <Stack.Screen
          name="AttendancePercentCS"
          component={AttendancePercentCS}
        />
        <Stack.Screen
          name="AttendancePercentEG"
          component={AttendancePercentEG}
        />
        <Stack.Screen
          name="AttendancePercentMechanics"
          component={AttendancePercentMechanics}
        />
        <Stack.Screen
          name="AttendancePercentMaths1"
          component={AttendancePercentMaths1}
        />
        <Stack.Screen
          name="AttendancePercentMaths2"
          component={AttendancePercentMaths2}
        />
        <Stack.Screen
          name="AttendancePercentPhysics1"
          component={AttendancePercentPhysics1}
        />
        <Stack.Screen
          name="AttendancePercentPhysics2"
          component={AttendancePercentPhysics2}
        />
        <Stack.Screen
          name="AttendancePercentChemistry1"
          component={AttendancePercentChemistry1}
        />
        <Stack.Screen
          name="AttendancePercentChemistry2"
          component={AttendancePercentChemistry2}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Subjects">
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen
          name="AttendancePercentBEE"
          component={AttendancePercentBEE}
        />
        <Stack.Screen
          name="AttendancePercentEME"
          component={AttendancePercentEME}
        />
        <Stack.Screen
          name="AttendancePercentCS"
          component={AttendancePercentCS}
        />
        <Stack.Screen
          name="AttendancePercentEG"
          component={AttendancePercentEG}
        />
        <Stack.Screen
          name="AttendancePercentMechanics"
          component={AttendancePercentMechanics}
        />
        <Stack.Screen
          name="AttendancePercentMaths1"
          component={AttendancePercentMaths1}
        />
        <Stack.Screen
          name="AttendancePercentMaths2"
          component={AttendancePercentMaths2}
        />
        <Stack.Screen
          name="AttendancePercentPhysics1"
          component={AttendancePercentPhysics1}
        />
        <Stack.Screen
          name="AttendancePercentPhysics2"
          component={AttendancePercentPhysics2}
        />
        <Stack.Screen
          name="AttendancePercentChemistry1"
          component={AttendancePercentChemistry1}
        />
        <Stack.Screen
          name="AttendancePercentChemistry2"
          component={AttendancePercentChemistry2}
        />
      </Stack.Navigator>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sem: state.semReducer.semId,
  };
};

export default connect(mapStateToProps)(AttendanceStack);
