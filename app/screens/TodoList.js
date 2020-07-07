import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { createStackNavigator } from "@react-navigation/stack";
import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
var d = new Date();

var randomColor = require("randomcolor");
var color = randomColor();

const GoalItem = (props) => (
  <View style={styles.listItem}>
  <Icon name="delete" onPress={props.onDelete.bind(this,props.id)} size={30} color="#292e49"style={{alignSelf:"flex-end",position:'absolute'}} size={deviceHeight/30}/>
    <Text
      style={{
        fontWeight: "bold",
        marginTop: deviceHeight / 95,
        fontSize: deviceHeight / 35,
        marginLeft: "2%",
      }}
    >
      {props.title}
    </Text>
 {/*   <View
      style={{
        flexDirection: "row",
      position:"absolute",
      top:deviceHeight/13,
      right:deviceWidth/100
      }}
    >
      <Icon name="circle" color="#203557" />
      <Text>{props.category}</Text>
    </View>
    */}
    <Text style={{ marginLeft: "3%", marginTop: "1%", marginBottom: "3%" }}>
      {props.details}
    </Text>
    
  </View>
);

function Todo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  const [enteredDetails, setEnteredDetails] = useState("");
  const [date, setDate] = useState(d);
  const [category, setCategory] = useState("College");

  const [courseGoals, changeCourseGoals] = useState([]);
  const addText = (text) => {
    setEnteredText(text);
  };

  const addDetails = (text) => {
    setEnteredDetails(text);
  };

  const addGoal = () => {
    changeCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        title: enteredText,
        details: enteredDetails,
        dates: date.toString(),
        category: category,
      },
    ]);
  };
  const removeGoal=goalId=>{
    changeCourseGoals(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id!==goalId)
    });
  }
    
  
   

  return (
    <View style={{ backgroundColor: "#fff", height: deviceHeight }}>
      <Image
        source={{
          uri:
            "https://cdn.wallpaperhub.app/cloudcache/7/4/f/3/d/5/74f3d51cbec9db78da32e103de1b28538af1b76a.jpg",
        }}
        style={styles.header}
      />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.view}>
          <Icon
            name="close-circle"
            size={deviceHeight / 25}
            color="rgba(162,161,139,0.4)"
            style={{ alignSelf: "flex-end", marginTop: 3 }}
            onPress={() => setModalVisible(!modalVisible)}
          />

          <TextInput
            style={styles.textInput}
            placeholder={"Title"}
            onChangeText={addText}
            value={enteredText}
          />
          <Text style={{ fontSize: 20, marginTop: 15 }}>Schedule related</Text>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Icon name="note-text" size={30} color="#292e49" />
            <TextInput
              style={{ marginLeft: 10, fontSize: 16, width: "80%" }}
              placeholder={"Details"}
              onChangeText={addDetails}
              value={enteredDetails}
            />
          </View>
          <DatePicker
            style={{ width: "90%" }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,

                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => setDate(date)}
          />

          <Text style={{ fontSize: 20, marginTop: 20 }}>Category</Text>
          <Picker
            selectedValue={category}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item label="Home" value="Home" />
            <Picker.Item label="College" value="College" />
            <Picker.Item label="Hostel" value="Hostel" />
          </Picker>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              addGoal();
              setModalVisible(!modalVisible);
              setCategory("College");
              setEnteredDetails("");
              setEnteredText("");
              setDate(d);
            }}
          >
            <View style={styles.addPosition}>
              <Text style={styles.add}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{ height: deviceHeight - deviceHeight / 2.7 }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.title}
              details={itemData.item.details}
              category={itemData.item.category}
             dates={itemData.item.date}
            // onDelete={removeGoal.bind(this,id)}
            onDelete={removeGoal}
            id={itemData.item.id}
           
            />
          )}
        />
      </View>
      <View
        style={{
          marginTop: deviceHeight / 20,
          marginLeft: deviceWidth / 1.3,
          position: "absolute",
        }}
      >
        <Icon name="pencil-circle"
          onPress={() => setModalVisible(!modalVisible)}
          size={deviceHeight/10}
          color="#191939"
          style={styles.button}
/>
      
       
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function TodoList({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TodoList"
        component={Todo}
        options={{ title: "TODO"/*,  headerLeft: () => (
                <Icons
                    name="menu"
                    size={30}
                    style={{ paddingLeft: 10 }}
                    color="#1D2430"
                    onPress={() => navigation.openDrawer()}
                />
            ) */}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 0,
    marginLeft: deviceWidth / 50,
    width: "96%",

    borderLeftColor: "#3A2C6F",

    marginTop: deviceHeight / 30,
    borderLeftWidth: 4,
    borderWidth: 0,
    backgroundColor: "white",
    borderRadius: 4.7,
    elevation: 5,
  },
  button: {
   
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 8, // Android
    borderWidth: 0,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  
    opacity: 0.85,
    position: "absolute",
    top: deviceHeight - deviceHeight / 3.9,
    borderRadius: 50,
  },
  textInput: {
    width: "80%",
    fontSize: 30,
  },
  view: {
    width: deviceWidth / 1.1,
    marginLeft: "4.5%",
    backgroundColor: "white",
    opacity: 0.95,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    height: deviceHeight / 1.75,
    marginTop: "45%",

    borderRadius: 15,
    elevation: 20,
  },
  button1: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    borderRadius: 7,
    backgroundColor: "#292e49",
    elevation: 2, // Android
    height: 50,
    marginTop: "10%",
  },
  add: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  addPosition: {
    alignItems: "center",
    marginTop: 12,
  },
  header: {
    height: deviceHeight / 3.5,
  },
  addButton: {
    fontSize: deviceHeight / 15,
    color: "white",
    opacity: 0.9,
  },
});
