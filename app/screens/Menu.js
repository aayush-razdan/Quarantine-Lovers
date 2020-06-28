import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function Canteen(){
  return(<View>

  </View>)
}
function Mess(){
  return (
    <View></View>
  )
}
const Tab = createBottomTabNavigator();
const CanteenStack = createStackNavigator();
const MessStack = createStackNavigator();

const CanteenStackScreen = ({ navigation }) => (
    <CanteenStack.Navigator>
        <CanteenStack.Screen name="Canteen" component={Canteen} />
    </CanteenStack.Navigator>
)
const MessStackScreen = ({ navigation }) => (
    <MessStack.Navigator>
        <MessStack.Screen name="Mess" component={Mess} />
    </MessStack.Navigator>
)

export default function Menu() {
    return (

        <Tab.Navigator initialRouteName="Canteen"
            tabBarOptions={{
                activeTintColor: 'white',
                style: {
                    backgroundColor: '#1D2430'
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                
                    if (route.name === 'Canteen') {
                        iconName = 'food'; size=30
                    }
                    else if (route.name === 'Mess') {
                        iconName = 'office-building'; size=30
                    }
               
                    return <Icons name={iconName} size={size} color={color}/>
                },
            })}>
            <Tab.Screen name="Canteen" component={CanteenStackScreen} />
            <Tab.Screen name="Mess" component={MessStackScreen} />
        </Tab.Navigator>

    );
}