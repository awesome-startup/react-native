"use strict";

import { Alert, ActionSheetIOS, Platform } from "react-native";
import { version } from "../env";

import type { Action, ThunkAction } from "./types";

function testResetNuxes(): Action {
    return {
        type: "RESET_NUXES"
    };
}

function getAppInfo(): ThunkAction {
    return (dispatch, getState) => {
        const subject = `App v${version} state`;
        const message = JSON.stringify(getState(), undefined, 2);
        if (Platform.OS === "ios") {
            ActionSheetIOS.showShareActionSheetWithOptions(
                {
                    subject: subject,
                    message: message
                },
                () => { },
                () => { }
            );
        } else {
            Alert.alert(subject);
        }
    };
}

function testSetCurrentDate(value: ?number): Action {
    return {
        type: "SET_TIMED_TESTING",
        value
    };
}

const TEST_MENU = {

    "Reset NUXes": testResetNuxes,
    "Get app info": getAppInfo,
    "Set current date: Day 1": _ => testSetCurrentDate(1),
    "Set current date: Day 2": _ => testSetCurrentDate(2),
    "Reset current date": _ => testSetCurrentDate(null)
};

module.exports = { TEST_MENU };
