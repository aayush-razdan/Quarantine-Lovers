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

//data
const data = [
  {
    year: "1",
    sem: [
      {
        num: 1,
        bas: [
          {
            branch: "computer",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "IT",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "EXTC",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
        ],
      },
      {
        num: 2,
        bas: [
          {
            branch: "computer",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "IT",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "EXTC",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
        ],
      },
    ],
  },
  {
    year: "2",
    sem: [
      {
        num: 1,
        bas: [
          {
            branch: "computer",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },

          {
            branch: "IT",
            subjects: [
              { name: "3", id: "1" },
              { name: "3", id: "2" },
              { name: "4", id: "3" },
              { name: "4", id: "4" },
              { name: "4", id: "1" },
              { name: "5", id: "5" },
            ],
          },
          {
            branch: "EXTC",
            subjects: [
              { name: "3", id: "1" },
              { name: "3", id: "2" },
              { name: "4", id: "3" },
              { name: "4", id: "4" },
              { name: "4", id: "5" },
              { name: "5", id: "6" },
            ],
          },
        ],
      },
      {
        num: 2,
        bas: [
          {
            branch: "computer",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "IT",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
          {
            branch: "EXTC",
            subjects: [
              { name: "Mathematics", id: "1" },
              { name: "Physics", id: "2" },
              { name: "Chemistry", id: "3" },
              { name: "Mechanics", id: "4" },
              { name: "Drawing", id: "5" },
              //{ name: "f" },
            ],
          },
        ],
      },
    ],
  },
];

export default function Subjects({ route, navigation }) {
  var year1 = route.params.year;
  year1--;
  var sem1 = route.params.sem;
  sem1--;
  var bas1 = route.params.id;
  bas1--;

  return (
    <View style={styles.background}>
      <FlatList
        data={data[year1].sem[sem1].bas[bas1].subjects}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              {
                // item.year = route.params.id;
              }
              navigation.navigate("AttendancePercent", item);
              //setYearModalOpen(false);
            }}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        idExtractor={(item) => item.id}
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
