import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
}
    from "react-native"


export default class Note extends React.Component {

    render() {
        return (
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>-</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "rgba(0,0,0,0.35)",
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: "rgba(255,255,255,0.7)",
    },
    noteDelete: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
        opacity: 0.5,
        padding: 20,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: "white",
    }
});
