import React, { useState } from 'react';
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
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { robotoWeights, material } from 'react-native-typography';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var d = new Date();
var randomColor = require('randomcolor');
var color = randomColor();

const GoalItem = (props) => (
  <View style={styles.listItem}>
    <Text style={styles.titleHead}>{props.title}</Text>
    <View style={styles.category}>
      <Icon name="circle" color="#203557" />
      <Text style={styles.outputCategory}>{props.category}</Text>
    </View>
    <Text style={{ marginLeft: "3%", marginTop: "1%", marginBottom: "3%" }}>{props.details}</Text>

  </View>
);

function Todo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredText, setEnteredText] = useState('');
  const [enteredDetails, setEnteredDetails] = useState('');
  const [date, setDate] = useState(d);
  const [category, setCategory] = useState("College")

  const [courseGoals, changeCourseGoals] = useState([]);
  const addText = (text) => {
    setEnteredText(text);
  };

  const addDetails = (text) => {
    setEnteredDetails(text);
  };

  const addGoal = () => {
    changeCourseGoals((currentGoals) => [
      ...courseGoals,
      {
        id: Math.random().toString(),
        title: enteredText,
        details: enteredDetails,
        date: date,
        category: category
      },
    ]);
  };

  return (
    <View style={{ backgroundColor: 'white', height: deviceHeight }}>
      <Image source={require("../../assets/todo.jpg")} style={styles.header} />
      <Modal animationType="slide" visible={modalVisible}>
        <Icon name="close-circle" size={deviceHeight / 25} color="rgba(162,161,139,0.4)" style={{ alignSelf: "flex-end", marginTop: 3 }} onPress={() => setModalVisible(!modalVisible)} />
        <View style={styles.view}>

          <TextInput
            style={styles.textInput}
            placeholder={'Title'}
            onChangeText={addText}
            value={enteredText}
          />
          <Text style={{ fontSize: 20, marginTop: deviceHeight / 4, marginBottom: 10 }}>
            Schedule related
            </Text>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Icon name="note-text" size={30} color="#EE481B" />
            <TextInput
              style={{ marginLeft: 10, fontSize: 16, width: "80%" }}
              placeholder={'Details'}
              onChangeText={addDetails}
              value={enteredDetails}
            />
          </View>
          <DatePicker
            style={{ width: '90%' }}
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                width: deviceWidth / 2,
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => setDate(date)}
          />

          <Text style={{ fontSize: 20, marginTop: 10 }}>Category</Text>
          <Picker
            selectedValue={category}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item label="Home" value="Home" />
            <Picker.Item label="College" value="College" />
          </Picker>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              addGoal();
              setModalVisible(!modalVisible);

            }}>
            <View style={styles.addPosition}>
              <Text style={styles.add}>ADD</Text>
            </View>
          </TouchableOpacity>
        </View>

      </Modal>
      <View>
        <FlatList
          inverted
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.title}
              details={itemData.item.details}

              category={itemData.item.category}
            />
          )} />

      </View>
      <View
        style={{
          marginTop: deviceHeight / 20,
          marginLeft: deviceWidth / 1.3,
          position: 'absolute',
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.button}>
          <Text style={styles.addButton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function TodoList() {
  return (

    <Stack.Navigator>

      <Stack.Screen name="TodoList" component={Todo} options={{ title: "TODO" }} />

    </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 0,
    marginLeft: deviceWidth / 50,
    width: '96%',
    //height: 110,
    //borderLeftColor: "#3A2C6F",
    borderColor: "skyblue",
    marginTop: deviceHeight / 30,
    borderLeftWidth: 4,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 4.7,
    elevation: 8,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 2, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 7, //IOS
    backgroundColor: 'skyblue',
    elevation: 8, // Android
    borderWidth: 0,
    borderColor: 'white',
    borderBottomColor: "skyblue",
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    opacity: 0.7,
    height: 70,
    borderRadius: 50,
    position: "absolute",
    top: deviceHeight - deviceHeight / 4,

  },
  textInput: {
    width: '80%',
    fontSize: 25,
  },
  view: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: deviceHeight / 1.4,
    marginTop: "0%"
  },
  button1: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    borderRadius: 7,
    backgroundColor: '#292e49',
    elevation: 2, // Android
    height: 50,
    marginTop: '60%',
  },
  add: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',

  },
  addPosition: {
    alignItems: 'center',
    marginTop: 12
  },
  header: {
    height: deviceHeight / 3,
    opacity: 0.5,
  },
  addButton: {
    position: "absolute",
    bottom: deviceHeight / 130,
    right: deviceWidth / 19.5,
    fontSize: deviceHeight / 18,
    color: "white",
    opacity: 0.5
  },
  titleHead: {
    ...robotoWeights.medium,
    marginTop: deviceHeight / 95,
    fontSize: deviceHeight / 35,
    marginLeft: "2%",
  },
  category: {
    flexDirection: "row",
    position: "absolute",
    right: deviceWidth / 6,
    top: deviceHeight / 90,
    alignSelf: "flex-end"
  },
  outputCategory: {
    flexDirection: "row",
    position: "absolute",
    right: - deviceWidth / 7,
    top: - deviceHeight / 250,

  }
});
