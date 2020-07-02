import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { robotoWeights, material } from "react-native-typography";
import ProfileScreen from "../screens/Profile";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";
import Icons from "react-native-vector-icons/AntDesign";
import Iconss from "react-native-vector-icons/FontAwesome5";
import Iconsss from "react-native-vector-icons/MaterialIcons";
import Iconssss from "react-native-vector-icons/Octicons";
import Custom from "react-native-vector-icons/AntDesign";
export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{ alignSelf: "center", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfbhEQbhS6T_6jCg4524GJ8Bf0nSA2ejNbGKOUtx_lwZgvmTuJ&usqp=CAU",
              }}
              size={120}
            />
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Home"
              labelStyle={{ color: "white" }}
              color={color}
              onPress={() => {
                props.navigation.navigate("MainPage");
              }}
            ></DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Login"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="google-classroom"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Attendance"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Attendance");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Iconss
                  name="tasks"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Todo"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Todo List");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Custom
                  name="piechart"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Goals"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Timer");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Iconssss
                  name="graph"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Gpa Calculator"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Gpa");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="taxi" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Cab Share"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("CabShare");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icons
                  name="idcard"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="ID Details"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Id Details");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Iconsss
                  name="restaurant-menu"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="Menu"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("Menu");
              }}
            />

            {/* <DrawerItem
              icon={({ color, size }) => (
                <Iconss
                  name="map-marked-alt"
                  color={"rgba(255,255,255,1)"}
                  size={size}
                />
              )}
              label="College Map"
              labelStyle={{ color: "white" }}
              onPress={() => {
                props.navigation.navigate("CollegeMap");
              }}
            />
            */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Text style={styles.creaters}>
        {"                       "}Developed by {"\n"} {"                  "}
        Quarantine Lovers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  creaters: {
    ...robotoWeights.medium,
    position: "absolute",
    color: "rgba(255,255,255,0.7)",
    bottom: 50,
  },
});
