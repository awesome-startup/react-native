/**
 * Created by llitfkitfk on 2/10/17.
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./Routes";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}