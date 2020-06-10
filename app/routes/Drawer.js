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

const todoListScreen = () => {
  return <TodoList />;
};
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainPage">
        <Drawer.Screen name="MainPage" component={MainPage} />
        <Drawer.Screen name="Welcome" component={AuthStack} />
        <Drawer.Screen name="Todo List" component={todoListScreen} />
        <Drawer.Screen name="Attendance" component={AttendanceStack} />
        <Drawer.Screen name="Lost" component={Lost} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}