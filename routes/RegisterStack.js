import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "../screens/WelcomePage";
import Register_page from "../screens/Register_page";

const Stack = createStackNavigator();

function RegisterStack() {
    return (
        <Stack.Navigator initialRouteName="WelcomePage">
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="Register_page" component={Register_page} />
        </Stack.Navigator>
    );
}

export default RegisterStack;