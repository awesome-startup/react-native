"use strict";

import type { Action } from "../actions/types";
type State = ?number;

function setCurrentDateForTesting(state: State = null, action: Action): State {
  if (action.type === "SET_TIMED_TESTING") {
    return action.value;
  }
  return state;
}

module.exports = setCurrentDateForTesting;
