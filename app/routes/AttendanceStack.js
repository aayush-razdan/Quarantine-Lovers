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
//import Branches from "../screens/Branches";
import Subjects from "../screens/subjects";
//import Semesters from "../screens/semesters";
//import { connect } from "react-redux";

const Stack = createStackNavigator();

function AttendanceStack(props) {
  return (
    <Stack.Navigator initialRouteName="Semester">
      {/* <Stack.Screen name="AttendanceDetails" component={AttendanceDetails} /> */}
      {/* <Stack.Screen name="Semester" component={Semesters} />
      <Stack.Screen name="Branches" component={Branches} /> */}
      <Stack.Screen name="Subjects" component={Subjects} options={{headerShown:false}}/>
      <Stack.Screen
        name="AttendancePercentBEE"
        component={AttendancePercentBEE}
        options={{title:"Basic Electrical Engineering"}}
      />
      <Stack.Screen
        name="AttendancePercentEME"
        component={AttendancePercentEME}
        options={{title:"Elements of Mech. Engineering"}}
      />
      <Stack.Screen
        name="AttendancePercentCS"
        component={AttendancePercentCS}
        options={{title:"Computer Programming"}}
      />
      <Stack.Screen
        name="AttendancePercentEG"
        component={AttendancePercentEG}
        options={{title:"Engineering Graphics"}}
      />
      <Stack.Screen
        name="AttendancePercentMechanics"
        component={AttendancePercentMechanics}
        options={{title:"Mechanics"}}
      />
      <Stack.Screen
        name="AttendancePercentMaths1"
        component={AttendancePercentMaths1}
        options={{title:"Mathematics-I"}}
      />
      <Stack.Screen
        name="AttendancePercentMaths2"
        component={AttendancePercentMaths2}
        options={{title:"Mathematics-II"}}
      />
      <Stack.Screen
        name="AttendancePercentPhysics1"
        component={AttendancePercentPhysics1}
        options={{title:"Physics-I"}}
      />
      <Stack.Screen
        name="AttendancePercentPhysics2"
        component={AttendancePercentPhysics2}
        options={{title:"Physics-II"}}
      />
      <Stack.Screen
        name="AttendancePercentChemistry1"
        component={AttendancePercentChemistry1}
        options={{title:"Chemistry-I"}}
      />
      <Stack.Screen
        name="AttendancePercentChemistry2"
        component={AttendancePercentChemistry2}
        options={{title:"Chemistry-II"}}
      />
    </Stack.Navigator>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     sem: state.semReducer.semId,
//   };
// };

//export default connect(mapStateToProps)(AttendanceStack);

export default AttendanceStack;
