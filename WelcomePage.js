import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    TouchableOpacity,
    AppRegistry,
}
    from 'react-native';
//import Icon from "react-native-vector-icons";
//import register_page from "./register_page";

import Register_page from "./Register_page";

const { width: WIDTH } = Dimensions.get("window")


export default class WelcomePage extends React.Component {

    static navigationOptions =
        {
            title: "WelcomePage",
        };

    FunctionToOpenRegister_page = () => {
        this.props.navigation.navigate("Register_page");

    }
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={require("./assets/background.jpg")}
            >
                <View style={styles.motto}>
                    <Text style={[styles.setColorAzure]} >Manage everything with one app</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Username"}
                        placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        placeholderTextColorTextColor={"rgba(255,255,255,0.7)"}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.btnEye}>
                        <Text style={{ color: "rgba(0,0,0,0.35)" }}>^</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text
                            onPress={this.FunctionToOpenRegister_page}
                            style={styles.text}>Register</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 250,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.7)",
        marginHorizontal: 25,
        justifyContent: "flex-end"
    },
    inputIcon: {
        position: "absolute",
        top: 10,
        left: 37,
    },
    inputContainer: {
        marginTop: 5,
        alignItems: "center",
        marginBottom: 10
    },
    setColorAzure: {
        color: "azure"
    },
    motto: {
        position: "absolute",
        top: 87,
        alignItems: "center"
    },
    btnEye: {
        position: "absolute",
        top: 10,
        right: 37,
    },
    btnLogin: {
        width: 250,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: "#432577",
        justifyContent: "center",
        marginTop: 50,
    },
    btnRegister: {
        width: 250,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: "#432577",
        justifyContent: "center",
        //marginTop: 10,
        position: "absolute",
        bottom: -287,
    },
    text: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 16,
        textAlign: "center"
    }
})

