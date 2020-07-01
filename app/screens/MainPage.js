import * as React from 'react';
import { Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
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
    <HomeStack.Screen name="Notifications" component={HomeScreen} options={{
      headerLeft: () => (
        <Icon
          name="menu"
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
    <ProfileStack.Screen name="Welcome" component={ProfileScreen} options={{
      headerLeft: () => (
        <Icon
          name="menu"
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
    <TimetableStack.Screen name="College Map" component={TimeTable} options={{
      headerLeft: () => (
        <Icon
          name="menu"
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

    <Tab.Navigator initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: '#1D2430'
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
       
          if (route.name === 'Notifications') {
            iconName = 'newspaper';
          } else if (route.name === 'Dashboard') {
            iconName = 'human-greeting';
          } else if (route.name === 'College Map') {
            iconName = 'google-maps';
          }

          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color}/>
        },
      })}>
   
      <Tab.Screen name="College Map" component={TimetableStackScreen} />
      <Tab.Screen name="Dashboard" component={ProfileStackScreen} />
      <Tab.Screen name="Notifications" component={HomeStackScreen} />
    </Tab.Navigator>

  );
}