import { LOGIN_ACTION_SUCCESS,LOG_OUT_ACTION_SUCCESS } from "../action/action";

export const reducer = (state = [],action) => {
    switch(action.type){
        case LOGIN_ACTION_SUCCESS:
            return [...state, {...action.payload}];
        case LOG_OUT_ACTION_SUCCESS:
            return [...state, {...action.payload}];
        default:
            return state;
    }
}