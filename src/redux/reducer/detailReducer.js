import { DETAIL_ACTION_SUCCESS } from "../action/action";

export const detail = (state = [], action) => {
    switch (action.type) {
        case DETAIL_ACTION_SUCCESS:
            return [...action.payload]
        default:
            return state;
    }
}