import * as React from "react";
//import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TodoList from "../screens/TodoList";
import AttendanceStack from "./AttendanceStack";
import WelcomePage from "../screens/WelcomePage";
import Register_page from "../screens/Register_page";
import RegisterStack from "./RegisterStack";
import Lost from "../screens/lost";
import MainPage from "../screens/MainPage";
import IdDetails from "../screens/IdDetails";
import DrawerContent from "./DrawerContent";
import { robotoWeights, material } from "react-native-typography";
import Gpa from "../screens/Gpa";
import CabShare from "../screens/CabShare";
import FindMe from "../screens/FindMe";
import CollegeMap from "../screens/CollegeMap";
import Menu from "../screens/Menu";
const todoListScreen = () => {
  return <TodoList />;
};
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ ...robotoWeights.medium, backgroundColor: "#1D2430" }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="MainPage" component={MainPage} />
        <Drawer.Screen name="Login" component={AuthStack} />
        <Drawer.Screen name="Todo List" component={todoListScreen} />
        <Drawer.Screen name="Attendance" component={AttendanceStack} />
        <Drawer.Screen name="CabShare" component={CabShare} />
        <Drawer.Screen name="Id Details" component={IdDetails} />
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Gpa" component={Gpa} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

{
  /* <Drawer.Screen name="Lost" component={Lost} /> */
}
{
  /* <Drawer.Screen name="GpaCalculator" component={GpaCalculator} /> */
  /* <Drawer.Screen name="CollegeMap" component={CollegeMap} />*/
}
