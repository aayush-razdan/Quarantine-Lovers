import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Button,
    StatusBar,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Lost extends React.Component {

    render() {
        return (
            <View
                style={styles.background}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"What is it (1/2 words)"}
                        placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Describe it a bit"}
                        placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity style={styles.btnSave}>
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    input: {
        width: 250,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
        justifyContent: 'flex-end',
    },
    found: {
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 10,
        position: "absolute",
        bottom: 140,
    },
    header: {
        position: 'absolute',
        top: StatusBar.currentHeight + 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(190,190,190)',
    },
    headerText: {
        color: 'rgb(190,190,190)',
        fontSize: 16,
        padding: 26,
    },
    btnSave: {
        width: 230,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        //marginTop: 10,
        position: 'absolute',
        bottom: (screenHeight / 50),
    },
    inputContainer: {
        marginTop: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    },
});