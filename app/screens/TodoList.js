
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

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var d = new Date();
var randomColor=require('randomcolor');
var color=randomColor();

const GoalItem = (props) => (
  <View style={styles.listItem}>
    <Text style={{fontWeight:'bold', marginTop:deviceHeight/95,fontSize:deviceHeight/35, marginLeft:"2%"}}>{props.title}</Text>
   <View style={{flexDirection:"row",position:"absolute",alignSelf:"flex-end"}}>
     <Icon name="circle" color="#203557"/>
     <Text>{props.category}</Text>
   </View>
    <Text style={{marginLeft:"3%",marginTop:"1%"}}>{props.details}</Text>

   </View>
);

 function Todo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredText, setEnteredText] = useState('');
  const [enteredDetails, setEnteredDetails] = useState('');
  const [date, setDate] = useState(d);
  const[category, setCategory]=useState("College")

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
    <View style={{ backgroundColor: '#fff', height: deviceHeight }}>
      <Image source={{uri: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-office-worker-cartoon-work-minimalist-background-image_239069.jpg'}} style={styles.header}/>
      <Modal  animationType="slide" visible={modalVisible}>
      <Icon name="close-circle" size={deviceHeight/25} color="rgba(162,161,139,0.4)" style={{alignSelf:"flex-end", marginTop:3}} onPress={()=>setModalVisible(!modalVisible)}/>
          <View style={styles.view}>
          
            <TextInput
              style={styles.textInput}
              placeholder={'Title'}
              onChangeText={addText}
              value={enteredText}
            />
            <Text style={{ fontSize: 20, marginTop: 20 }}>
              Schedule related
            </Text>
            <View style={{ flexDirection: 'row' }}>
            <Icon name="note-text" size={30} color="#EE481B"/>
              <TextInput
                style={{ marginLeft: 10, fontSize: 16, width:"80%"}}
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
              format="YYYY-MM-DD"
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
        <Picker.Item label="Homework" value="Homework" />
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
          <Text style={{ color: 'white', fontSize: (deviceHeight * 6) / 100 }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack=createStackNavigator();

export default function TodoList(){
  return(

  <Stack.Navigator>
  
  <Stack.Screen name="TodoList" component={Todo} options={{title:"TODO"}}/>
 
  </Stack.Navigator>
  
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 0,
    marginLeft: deviceWidth/20,
    width: '90%',
    height:110,
    borderLeftColor: "#3A2C6F",
    marginTop: deviceHeight/30,
    borderLeftWidth:4,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 4.7,
    elevation: 1,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 2, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 7, //IOS
    backgroundColor: '#203557',
    elevation: 2, // Android
    borderWidth: 0,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    marginRight: deviceWidth / 18,
    marginTop: deviceHeight / 1.4,
    borderRadius: 50,
  },
  textInput: {
    width: '80%',
    fontSize: 25,
  },
  view: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height:deviceHeight/1.4,
    marginTop:"0%"
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
    marginTop: '50%',
  },
  add: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  addPosition: {
    alignItems: 'center',
    marginTop:12
  },
  header: {
    
    height: deviceHeight / 4
  },
});
