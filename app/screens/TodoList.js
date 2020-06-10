import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Note from "../other/Note";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: "",
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}></Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Todo"
            placeholderTextColor="rgba(0,0,0,0.35)"
            placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
          ></TextInput>
        </View>
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: screenHeight / 81.1,
    borderBottomColor: "#ddd",
    opacity: 0.5,
  },
  headerText: {
    color: "dodgerblue",
    fontSize: screenHeight / 51,
    padding: screenHeight / 31.2,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 8.11,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 81.1,
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    opacity: 0.9,
    padding: screenHeight / 40.55,
    backgroundColor: "#ddd",
    borderTopWidth: screenHeight / 270.33,
    borderTopColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    zIndex: screenHeight / 73.72,
    right: screenHeight / 40.55,
    bottom: screenHeight / 9,
    backgroundColor: "dodgerblue",
    width: screenHeight / 9,
    height: screenHeight / 9,
    borderRadius: screenHeight / 16.22,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    opacity: 0.5,
  },
  addButtonText: {
    color: "dodgerblue",
    fontSize: screenHeight / 35,
  },
});
