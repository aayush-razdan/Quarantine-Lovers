import * as React from "react";
//import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TodoList from "../screens/TodoList";
import AttendanceStack from "./AttendanceStack";

const todoListScreen = () => {
  return <TodoList />;
};
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={AuthStack} />
        <Drawer.Screen name="Todo List" component={todoListScreen} />
        <Drawer.Screen name="Attendance" component={AttendanceStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
