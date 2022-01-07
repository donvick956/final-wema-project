import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { sessionReducer } from "redux-react-session";
import { transfer } from "./transReducer";

export const reducers = combineReducers({reducer:reducer,transfer:transfer,sessionReducer:sessionReducer});