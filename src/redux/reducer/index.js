import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { sessionReducer } from "redux-react-session";
import { transfer } from "./transReducer";
import { detail } from "./detailReducer";

export const reducers = combineReducers({reducer:reducer,transfer:transfer,detail:detail,sessionReducer:sessionReducer});