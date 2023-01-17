// combine reducers

import { combineReducers } from "redux";

// import reducers
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    userReducer,
});