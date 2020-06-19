import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const data = [
  {
    id: "1",
    branch: "Batch 1",
    year: "",
    sem: "",
  },
  {
    id: "2",
    branch: "Batch 2",
    // year: "",
    sem: "",
  },
  {
    id: "3",
    branch: "Batch 3",
    // year: "",
    sem: "",
  },
  {
    id: "4",
    branch: "Batch 4",
    // year: "",
    sem: "",
  },

  {
    id: "5",
    branch: "Batch 5",
    // year: "",
    sem: "",
  },
  {
    id: "6",
    branch: "Batch 6",
    // year: "",
    sem: "",
  },
  // {
  //   id: "7",
  //   branch: "Civil",
  //   year: "",
  //   sem: "",
  // },
  // {
  //   id: "8",
  //   branch: "Production",
  //   year: "",
  //   sem: "",
  // },
  // {
  //   id: "9",
  //   branch: "Textile",
  //   year: "",
  //   sem: "",
  // },
];

export default function Branches({ route, navigation }) {
  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              {
                item.year = route.params.year;
                item.sem = route.params.id;
              }
              navigation.navigate("Subjects", item);
              //setYearModalOpen(false);
            }}
          >
            <Text style={styles.text}>{item.branch}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    elevation: screenHeight / 90,
    width: screenHeight / 4.63,
    height: screenHeight / 18,
    borderRadius: screenHeight / 32,
    fontSize: screenHeight / 51,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    marginTop: screenHeight / 54,
    marginBottom: screenHeight / 32,
    alignItems: "center",
  },
  text: {
    color: "rgba(255,255,255,0.7)",
    fontSize: screenHeight / 51,
    textAlign: "center",
  },
});
