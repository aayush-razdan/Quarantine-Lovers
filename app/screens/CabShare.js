import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import {createStackNavigator} from '@react-navigation/stack';
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const GoalItem = (props) => (
  <View style={styles.listItem}>
    <Text
      style={{
        fontWeight: "bold",
        marginTop: height / 95,
        fontSize: height / 35,
        marginLeft: "2%",
      }}
    >
      You and {props.name}
    </Text>
    <Icons
      name="delete"
      style={{ position: "absolute", right: 5, top: 2 }}
      size={24}
      color="#1F2023"
      onPress
    />
    <View style={{ flexDirection: "row", marginLeft: "3%", marginTop: "1%" }}>
      <Text style={{ fontSize: 15 }}>{props.from}</Text>
      <Text style={{ fontSize: 15 }}> to </Text>
      <Text style={{ fontSize: 15 }}>{props.to}</Text>
    </View>
    <Text
      style={{
        fontSize: 15,
        marginLeft: "3%",
        marginTop: "1%",
        marginBottom: "3%",
      }}
    >
      Cost per passenger: ₹{props.fare}
    </Text>
    <Icons
      name="car-side"
      style={{ position: "absolute", top: height / 10, right: width / 30 }}
      size={20}
      color="grey"
    />
  </View>
);

function CabShareComponent({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fare, setFare] = useState(0);
  const [nameBox, changeNamebox] = useState("");
  const [fromBox, changeFromBox] = useState("");
  const [toBox, changeToBox] = useState("");
  const [fareBox, changeFareBox] = useState(0);
  const [data, changeData] = useState([]);

  const addJourney = () => {
    changeData((currentItems) => [
      ...data,
      {
        id: Math.random().toString(),
        nameofperson: name,
        fromplace: from,
        toplace: to,
        fareamount: fare,
      },
    ]);
  };

  return (
    <View style={{ backgroundColor: "#fff", height: height / 1 }}>
      <Image
        source={{
          uri:
            "https://thumbs.dreamstime.com/b/last-year-premier-padmini-service-mumbai-india-circa-as-taxi-also-called-kaali-peeli-flat-vector-168230333.jpg",
        }}
        style={{ height: height / 4.5 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: height / 22,
        }}
      >
        <TouchableOpacity
          style={styles.addExpense}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: "white", fontSize: height / 35 }}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fare} onPress={()=>navigation.navigate("Fare Calculator")}>
          <Text style={{ color: "#1F2023", fontSize: height / 35 }}>
            {" "}
            Fare{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text
              style={{ marginTop: height / 76, color: "white", fontSize: 23 }}
            >
              {" "}
              Add a Trip
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 17 }}> With you and: </Text>
          <TextInput
            style={{
              position: "absolute",
              marginLeft: width / 3.3,
              marginTop: height / 15,
              fontSize: 16,
              color: "#292e49",
            }}
            value={nameBox}
            onChangeText={(value) => changeNamebox(value)}
            placeholder="enter"
          />

          <View style={{ padding: 15, flexDirection: "row", marginTop: 10 }}>
            <Icon name="taxi" size={40} />
            <View style={{ marginLeft: 10, marginTop: -4 }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <TextInput
                  style={{ fontSize: 15, width: width / 7 }}
                  placeholder="From"
                  value={fromBox}
                  onChangeText={(value) => changeFromBox(value)}
                />
                <View style={{ marginTop: 2.5, marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 16, color: "#ccc" }}>to</Text>
                </View>
                <TextInput
                  style={{ fontSize: 15, marginLeft: 10, width: width / 4 }}
                  placeholder="Destination"
                  value={toBox}
                  onChangeText={(value) => changeToBox(value)}
                />
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ fontSize: 20 }}>₹ </Text>
                <TextInput
                  style={{ fontSize: 16 }}
                  placeholder="Fare"
                  keyboardType="numeric"
                  value={fareBox}
                  onChangeText={(value) => changeFareBox(value)}
                />
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity
              style={styles.save}
              onPress={() => {
                setModalVisible(!modalVisible);
                setName(nameBox);
                setFrom(fromBox);
                setTo(toBox);
                setFare(fareBox);
                addJourney();

                changeNamebox("");
                changeFromBox("");
                changeToBox("");
                changeFareBox(0);
              }}
            >
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                changeNamebox("");
                changeFromBox("");
                changeToBox("");
                changeFareBox(0);
              }}
              style={styles.cancel}
            >
              <Text style={{ color: "#1F2023" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={data}
        renderItem={(itemData) => (
          <GoalItem
            name={itemData.item.nameofperson}
            from={itemData.item.fromplace}
            to={itemData.item.toplace}
            fare={itemData.item.fareamount / 2}
          />
        )}
      />
    </View>
  );
}
function FareCalculator(){
  return(
    <View></View>
  )
}
const Stack=createStackNavigator();

export default function CabShare(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Cab Share" component={CabShareComponent} options={{ headerShown:false}}/>
      <Stack.Screen name="Fare Calculator" component={FareCalculator}/>
    </Stack.Navigator>

  )
}
const styles = StyleSheet.create({
  modal: {
    borderRadius: 10,
    width: "80%",
    height: height / 3.2,
    backgroundColor: "white",
    elevation: 15,
    marginLeft: width / 9,
    marginTop: height / 2.7,
    opacity: 0.98,
  },
  addExpense: {
    width: width / 2.5,
    backgroundColor: "#1F2023",
    borderRadius: 8,
    height: height / 15,

    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  fare: {
    width: width / 2.5,
    backgroundColor: "#F7C135",
    borderRadius: 8,
    height: height / 15,

    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  header: {
    backgroundColor: "#1F2023",
    height: height / 16,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  save: {
    backgroundColor: "#1F2023",
    width: "30%",
    height: "50%",
    elevation: 4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    padding: 0,
    marginLeft: width / 50,
    width: "96%",

    marginTop: height / 30,
    borderLeftWidth: 5,
    borderWidth: 0,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    backgroundColor: "white",
    borderRadius: 4.7,
    elevation: 5,
  },
  cancel: {
    backgroundColor: "#F7C135",
    width: "30%",
    height: "50%",
    elevation: 4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
