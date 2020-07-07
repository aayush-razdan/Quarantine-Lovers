import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import Register_page from "../screens/Register_page";

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomePage} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register_page} options={{title:'SIGN UP'}} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default AuthStack;
