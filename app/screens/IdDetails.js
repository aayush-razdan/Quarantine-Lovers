import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
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
        <CollegeStack.Screen name="College" component={College} options={{
            headerLeft: () => (
                <Icons
                    name="menu"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    color="#1D2430"
                    onPress={() => navigation.openDrawer()}
                />
            )
        }} />
    </CollegeStack.Navigator>
)
const HostelStackScreen = ({ navigation }) => (
    <HostelStack.Navigator>
        <HostelStack.Screen name="Hostel" component={Hostel} options={{
            headerLeft: () => (
                <Icons
                    name="menu"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    color="#1D2430"
                    onPress={() => navigation.openDrawer()}
                />
            )
        }} />
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
                        iconName = 'school'; size=20
                    }
                    else if (route.name === 'Hostel') {
                        iconName = 'hotel'; size=20
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="College" component={CollegeStackScreen} />
            <Tab.Screen name="Hostel" component={HostelStackScreen} />
        </Tab.Navigator>

    );
}