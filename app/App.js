"use strict";

import React from "react";
import { AppState, StyleSheet, View, Text } from "react-native";
import {
    getAppInfo
} from "./actions";
import { connect } from "react-redux";
import { version } from "./env.js";

class App extends React.Component {
    componentDidMount() {
        AppState.addEventListener("change", this.handleAppStateChange);

        // TODO: Make this list smaller, we basically download the whole internet
        // this.props.dispatch(getAppInfo());
        // this.props.dispatch(loadConfig());
        // this.props.dispatch(loadNotifications());
        // this.props.dispatch(loadVideos());
        // this.props.dispatch(loadMaps());
        // this.props.dispatch(loadFAQs());
        // this.props.dispatch(loadPages());
        // this.props.dispatch(loadPolicies());

        // if (this.props.isLoggedIn) {
        //     this.props.dispatch(restoreSchedule());
        //     this.props.dispatch(loadSurveys());
        //     this.props.dispatch(loadFriendsSchedules());
        // }

    }

    componentWillUnmount() {
        AppState.removeEventListener("change", this.handleAppStateChange);
    }

    handleAppStateChange = appState => {
        if (appState === "active") {
            console.log("active")
        }
    };

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>App Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function select(store) {
    return {
        // isLoggedIn: store.user.isLoggedIn,
        // skipWelcomeScreen: store.user.isLoggedIn || store.user.hasSkippedLogin
    };
}

module.exports = connect(select)(App);
