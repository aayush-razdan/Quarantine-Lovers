import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TextInput, Text, Dimensions, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { robotoWeights, material } from 'react-native-typography';
import { connect } from "react-redux";

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
function College() {
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Constants.platform.ios) {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [2.9, 3.5],
            quality: 1,
        });

        //console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#1D2430" }}>
            {/* <Text>Home screen under Construction</Text> */}
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={0.9} style={styles.btnpick} onPress={pickImage} >
                    <Text style={styles.text}>
                        Edit
          </Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={styles.imagePicking} />}
            </View>
        </View>
    );
}
export default College;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#181E28",
        height: height / 4
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'flex-start',
        position: "absolute",
        marginTop: height / 7
    },
    name: {
        position: "absolute",
        marginTop: height / 5,
        marginLeft: width / 2.4
    },
    imagePicking: {
        position: "absolute",
        top: height / 20,
        width: width / 1.1,
        height: height / 1.4,
        borderRadius: 10,
    },
    btnpick: {
        position: "absolute",
        bottom: 5,
        width: width,
        height: height / 20,
        // width: 120,
        // height: 30,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#7ED68A",
        //borderRadius: 8,
        //borderColor: "dodgerblue",
        // position: "absolute",
        // top: height / 13,
        // left: width / 30,
    },
    text: {
        ...robotoWeights.light,
        color: "white",
        fontSize: height / 31
    }
})
