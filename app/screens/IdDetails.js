import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import College from "./College";
import Hostel from "./Hostel";



const Tab = createBottomTabNavigator();
const CollegeStack = createStackNavigator();
const HostelStack = createStackNavigator();

const CollegeStackScreen = ({ navigation }) => (
    <CollegeStack.Navigator>
        <CollegeStack.Screen name="College" component={College} />
    </CollegeStack.Navigator>
)
const HostelStackScreen = ({ navigation }) => (
    <HostelStack.Navigator>
        <HostelStack.Screen name="Hostel" component={Hostel} />
    </HostelStack.Navigator>
)

export default function IdDetails() {
    return (

        <Tab.Navigator initialRouteName="College"
            tabBarOptions={{
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#1D2430'
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'College') {
                        iconName = 'ios-home';
                    }
                    else if (route.name === 'Hostel') {
                        iconName = 'ios-person';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="College" component={CollegeStackScreen} />
            <Tab.Screen name="Hostel" component={HostelStackScreen} />
        </Tab.Navigator>

    );
}