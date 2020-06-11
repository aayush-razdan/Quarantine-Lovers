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
    sem: "sem 1",
    year: "",
  },
  {
    id: "2",
    sem: "sem 2",
    year: "",
  },
];

export default function Semesters({ route, navigation }) {
  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              {
                item.year = route.params.id;
              }
              navigation.navigate("Branches", item);
              //setYearModalOpen(false);
            }}
          >
            <Text style={styles.text}>{item.sem}</Text>
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
