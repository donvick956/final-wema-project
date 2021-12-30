import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { sessionReducer } from "redux-react-session";

export const reducers = combineReducers({reducer:reducer,sessionReducer:sessionReducer});