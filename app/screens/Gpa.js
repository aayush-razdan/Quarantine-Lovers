import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GpaSubjects from "./GpaSubjects";
import GpaLabs from "./GpaLabs";



const Tab = createBottomTabNavigator();
const GpaSubjectsStack = createStackNavigator();
const GpaLabsStack = createStackNavigator();

const GpaSubjectStacksScreen = ({ navigation }) => (
    <GpaSubjectsStack.Navigator>
        <GpaSubjectsStack.Screen name="Subjects" component={GpaSubjects} options={{
            headerLeft: () => (
                <Ionicons
                    name="ios-menu"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    color="#1D2430"
                    onPress={() => navigation.openDrawer()}
                />
            )
        }} />
    </GpaSubjectsStack.Navigator>
)
const GpaLabsStackScreen = ({ navigation }) => (
    <GpaLabsStack.Navigator>
        <GpaLabsStack.Screen name="Labs" component={GpaLabs} options={{
            headerLeft: () => (
                <Ionicons
                    name="ios-menu"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    color="#1D2430"
                    onPress={() => navigation.openDrawer()}
                />
            )
        }} />
    </GpaLabsStack.Navigator>
)

export default function Gpa() {
    return (

        <Tab.Navigator initialRouteName="GpaSubject"
            tabBarOptions={{
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#1D2430'
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'GpaSubjects') {
                        iconName = 'book'; size = 23
                    }
                    else if (route.name === 'GpaLabs') {
                        iconName = 'lab-flask'; size = 23
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="GpaSubjects" component={GpaSubjectStacksScreen} />
            <Tab.Screen name="GpaLabs" component={GpaLabsStackScreen} />
        </Tab.Navigator>

    );
}