import { takeLatest,put, call } from "redux-saga/effects";
import { LOGIN_ACTION,loginActionSuccess,LOG_OUT_ACTION,logOutActionSuccess  } from "../redux/action/action";
import { sessionService } from 'redux-react-session';

export const mySaga = function* () {
    yield takeLatest(LOGIN_ACTION,logInWatcher);
    yield takeLatest(LOG_OUT_ACTION,logOutWatcher);
}

function* logInWatcher (action) {
    yield put(loginActionSuccess (action.payload));
    yield call(logInActionSession,action.payload);
}

function* logOutWatcher (action) {
    yield put(logOutActionSuccess (action.payload));
    yield call(logOutActionSession,action.payload);
}

function* logInActionSession(payload) {
    yield sessionService.saveSession();
    yield sessionService.saveUser(payload);
}
function* logOutActionSession() {
    yield sessionService.deleteSession();
    yield sessionService.deleteUser();
}
