"use strict";

// Depdencies
import React from "react";

// import Parse from "parse/react-native";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// Components
import { Text } from "react-native";
import App from "./App";
import LaunchScreen from "./containers/LaunchScreen";

// Config
import { serverURL, parseAppID } from "./env";

function setup(): ReactClass<{}> {

    console.disableYellowBox = true;

    // config parse
    // Parse.initialize(parseAppID);
    // Parse.serverURL = `${serverURL}/parse`;
    // console.log("DEBUG!!! " + serverURL);
    // Parse.FacebookUtils.init();

    // TODO: Don't prevent fontScaling on iOS (currently breaks UI)
    Text.defaultProps.allowFontScaling = false;

    class Root extends React.Component {
        state: {
            isLoading: boolean,
            store: any
        };

        constructor() {
            super();
            this.state = {
                storeCreated: false,
                storeRehydrated: false,
                store: null
            };
        }

        componentDidMount() {
            configureStore(
                // rehydration callback (after async compatibility and persistStore)
                _ => {
                    this.setState({ storeRehydrated: true })
                }
            ).then(
                // creation callback (after async compatibility)
                store => {
                    this.setState({ store, storeCreated: true })
                }
                );
        }

        render() {
            if (!this.state.storeCreated || !this.state.storeRehydrated) {
                return <LaunchScreen />;
            }
            return (
                <Provider store={this.state.store}>
                    <App />
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
