import { takeLatest,put,  } from "redux-saga/effects";
import { CREATE_GROUP,createGroupSuccess } from "../redux/action/transAction";


export const groupListener = function* () {
    yield takeLatest(CREATE_GROUP, groupWatcher);
}
 const groupWatcher = function* (action) {
    yield put(createGroupSuccess(action.payload));
}