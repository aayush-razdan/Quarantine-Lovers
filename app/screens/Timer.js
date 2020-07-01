import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) }
}

export default function Timer() {
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { mins, secs } = getRemaining(remainingSecs);

    toggle = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs + 1);
            }, 1000);
        }
        else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    reset = () => {
        setRemainingSecs(0);
        setIsActive(false);
    }

    return (
        <View style={styles.background}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
            <TouchableOpacity onPress={this.toggle} style={styles.button}>
                <Text style={styles.buttonText}>
                    {isActive ? "Pause" : "Start"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.reset} style={styles.button}>
                <Text style={[styles.buttonText, styles.buttonTextReset]}>
                    Reset
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#181E28"
    },
    button: {
        borderWidth: 10,
        borderColor: "#191E1D",
        width: screenWidth / 5,
        height: screenHeight / 5,
        borderRadius: screenHeight / 2,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ECF1F1",
        fontSize: screenHeight / 44,
        //marginLeft: "5%",
        //marginBottom: screenHeight / 400,
        //marginTop: screenHeight / 35,
    },
    timerText: {
        color: "#fff",
        fontSize: screenHeight / 22,
        marginBottom: screenHeight / 40,
    },
    buttonTextReset: {
        color: "#FF8518",
    }
});