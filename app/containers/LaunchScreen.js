"use strict";

import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";

const WIN_WIDTH = Dimensions.get("window").width,
    WIN_HEIGHT = Dimensions.get("window").height;

class LaunchScreen extends React.Component {
    render() {
        return (
            <View style={[styles.container]}>
                <Text>Launch Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        position: "absolute",
        left: 0,
        top: 0,
        width: WIN_WIDTH,
        height: WIN_HEIGHT,
        resizeMode: "cover"
    }
});

const launchScreen = LaunchScreen;
launchScreen.__cards__ = define => {
    define("Default", _ => <LaunchScreen />);
};

module.exports = launchScreen;
