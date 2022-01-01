import { takeLatest,call } from "redux-saga/effects"
import { LOGIN_ACTION, LOGIN_ACTION_SUCCESS } from "../redux/action/action"
export const mySaga = function* () {
    yield takeLatest(LOGIN_ACTION,logInWatcher);
}
function* logInWatcher (action) {
    yield call(apiFecther,action);
}
const apiFecther = (action) => {
    console.log(action.payload);
   return fetch('https://localhost:44322/Customers/login',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(action.payload)
}).then(response => console.log(response)).catch(e => console.error(e,'i caught the error'));
}