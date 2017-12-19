"use strict";

import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import promise from "./promise";
import array from "./array";
import reducers from "../reducers";
import { createLogger } from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import { ensureCompatibility } from "./compatibility";
// import { composeWithDevTools } from 'redux-devtools-extension';

const isDebuggingInChrome = false;

const logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
});
var createAppStore = applyMiddleware(thunk, promise, array, logger)(
    createStore
);
async function configureStore(onComplete: ?() => void) {
    const didReset = await ensureCompatibility();
    await sleep(2000);
    const store = autoRehydrate()(createAppStore)(reducers);
    persistStore(store, { storage: AsyncStorage }, _ => onComplete(didReset));

    if (isDebuggingInChrome) {
        window.store = store;
    }
    return store;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = configureStore;