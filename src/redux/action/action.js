export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOG_OUT_ACTION = 'LOG_OUT_ACTION';
export const LOGIN_ACTION_SUCCESS = 'LOGIN_ACTION_SUCCESS';
export const LOG_OUT_ACTION_SUCCESS = 'LOG_OUT_ACTION_SUCCESS';

export const loginAction = (payload) => {
    return {
        type:LOGIN_ACTION,
        payload
    }
} 
export const logOutAction = (payload) => {
    return {
        type:LOG_OUT_ACTION,
        payload
    }
} 
export const logOutActionSuccess = (payload) => {
    return {
        type:LOG_OUT_ACTION_SUCCESS,
        payload
    }
} 
export const loginActionSuccess = (payload) => {
    return {
        type:LOGIN_ACTION_SUCCESS,
        payload
    }
} 