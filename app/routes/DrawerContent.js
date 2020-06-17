import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { robotoWeights, material } from 'react-native-typography'
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

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Home"
              style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.7)" }}
              onPress={() => {
                props.navigation.navigate("MainPage");
              }}
            >
              <Text style={robotoWeights.medium} >Home</Text>
            </DrawerItem>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Login"
              style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.7)" }}
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Todo"
              style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.7)" }}
              onPress={() => {
                props.navigation.navigate("Todo List");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="google-classroom" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Attendance"
              style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.7)" }}
              onPress={() => {
                props.navigation.navigate("Attendance");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="paw" color={"rgba(255,255,255,1)"} size={size} />
              )}
              label="Lost"
              style={{ borderRadius: 20, backgroundColor: "rgba(255,255,255,0.7)" }}
              onPress={() => {
                props.navigation.navigate("Lost");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Text style={styles.creaters}>
        {"                            "}Made by {"\n"} {"                  "}Quarantine Lovers
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
  }
});
