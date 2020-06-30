import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

function Canteen() {
    return (<View>

    </View>)
}
function Mess() {
    return (
        <ScrollView>
            <View style={styles.background}>
                {/* <View style={styles.heading} /> */}
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Monday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}

                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Tuesday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Wednesday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Thursday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Friday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Saturday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.heading}><Text style={{ color: "#191E1D", fontWeight: "bold", marginTop: "25%" }}>Sunday{"\n\n"}</Text></View>
                    <Text style={styles.text}>
                        <Text style={{ fontSize: screenHeight / 35 }}>Breakfast:</Text>
                        {"\n      "}Scrambled farm-eggs {"\n"}
                        {"      "}Lightly smoked back-meat {"\n"}
                        {"      "}Grilled chicken sausages {"\n"}
                        {"      "}Baked bean cocottes
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Lunch:</Text>
                        {"\n      "}Chicken mayonnaise and meat{"\n"}
                        {"      "}(on bread item){"\n"}
                        {"      "}Moroccan chicken wraps{"\n"}
                        {"      "}Pumpkin, feta and spinach{"\n"}
                        {"      "}(on bread item) (V){"\n"}
                        {"      "}Chicken stroganoff with pilaf rice{"\n"}
                        {"      "}Garden salad{"\n"}
                        {"      "}Salad of the Day
                        {"\n\n"}
                        <Text style={{ fontSize: screenHeight / 35 }}>Dinner:</Text>
                        {"\n      "}Herb crusted salmon, crushed white{"\n"}
                        {"      "}ricotta ravioli and slow braised{"\n"}
                        {"      "}tomatoes{"\n"}
                        {"      "}Wagyu slow braised 5 spices{"\n"}
                        {"      "}mash, seasonal vegetables served{"\n"}
                        {"      "}with braising sauce{"\n"}
                        {"      "}Market fish, citrus risotto, seasonal{"\n"}
                        {"      "}vegetables, lemon herb beurre blanc{"\n"}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
const Tab = createBottomTabNavigator();
const CanteenStack = createStackNavigator();
const MessStack = createStackNavigator();

const CanteenStackScreen = ({ navigation }) => (
    <CanteenStack.Navigator>
        <CanteenStack.Screen name="Canteen" component={Canteen} options={{
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
    </CanteenStack.Navigator>
)
const MessStackScreen = ({ navigation }) => (
    <MessStack.Navigator>
        <MessStack.Screen name="Mess" component={Mess} options={{
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
                        iconName = 'food'; size = 30
                    }
                    else if (route.name === 'Mess') {
                        iconName = 'office-building'; size = 30
                    }

                    return <Icons name={iconName} size={size} color={color} />
                },
            })}>
            <Tab.Screen name="Canteen" component={CanteenStackScreen} />
            <Tab.Screen name="Mess" component={MessStackScreen} />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#181E28",
        //backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#ECF1F1",
        fontSize: screenHeight / 44,
        marginLeft: "5%",
        //marginBottom: screenHeight / 400,
        marginTop: screenHeight / 35,
    },
    heading: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        elevation: screenHeight / 90,
        width: screenWidth / 3,
        height: screenHeight / 19,
        borderRadius: screenHeight / 32,
        fontSize: screenHeight / 51,
        backgroundColor: "#7ED68A",
        //justifyContent: "space-evenly",
        marginLeft: screenWidth / 3.15,
        // marginTop: screenHeight / 80,
        // marginBottom: "1.5%",
        // alignItems: "center",
    },
    textHeading: {
        color: "#ECF1F1",
        fontSize: screenHeight / 44,
        //alignItems: "center",
        //justifyContent: "center",
        marginLeft: screenWidth / 2.5,
        marginBottom: screenHeight / 400,
        marginTop: "3%",
    },
    card: {
        width: screenWidth / 1.07,
        //height: screenHeight / 8,
        elevation: 4,
        backgroundColor: "#1D2430",
        elevation: 8,
        borderRadius: screenHeight / 51,
        marginTop: "5%",
        marginBottom: "3%"
    },
})