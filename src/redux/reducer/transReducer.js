import { CREATE_GROUP_SUCCESS } from "../action/transAction";

export const transfer = (state = [], action) => {
    switch (action.type) {
        case CREATE_GROUP_SUCCESS:
            return [ {...action.payload}]
        default:
            return state;
    }
}