import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./HomeScreen";
import TimeTable from "./Timetable";
import ProfileScreen from "./Profile";



const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const TimetableStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
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
  </HomeStack.Navigator>
)
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
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
  </ProfileStack.Navigator>
)
const TimetableStackScreen = ({ navigation }) => (
  <TimetableStack.Navigator>
    <TimetableStack.Screen name="Time-Table" component={TimeTable} options={{
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
  </TimetableStack.Navigator>
)
export default function MainPage() {
  return (

    <Tab.Navigator initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: '#1D2430'
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person';
          } else if (route.name === 'Time-table') {
            iconName = 'ios-list-box';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Time-table" component={TimetableStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>

  );
}