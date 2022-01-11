export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const PREVIOUS_GROUP = 'PREVIOUS_GROUP';

export const createGroup = (payload) => {
    return {
        type:CREATE_GROUP,
        payload
    };
}
export const createGroupSuccess = (payload) => {
    return {
        type:CREATE_GROUP_SUCCESS,
        payload
    };
}
export const prevGroup = (payload) => {
    return {
        type:PREVIOUS_GROUP,
        payload
    };
}
// dispatch an action
// {
//     grp,num
// }
// store name of group in state
// dispatch an action
// store name of group in state
// dispatch han action
// store name of group in state
