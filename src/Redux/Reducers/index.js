// combine reducers

import { combineReducers } from "redux";

// import reducers
import { fournisseurReducer } from "./FournisseurReducer";
import { authReducer } from "./AuthReducer";

export const rootReducer = combineReducers({
    fournisseurReducer,
    authReducer,
});