// combine reducers

import { combineReducers } from "redux";

// import reducers
import { fournisseurReducer } from "./FournisseursReducers/FournisseurReducer"
import { authReducer } from "./AuthReducer/AuthReducer";
import { stockReducer } from "./StockReducer/StockReducer";

export const rootReducer = combineReducers({
    fournisseurReducer,
    authReducer,
    stockReducer,
});