import { detailActionSuccess,DETAIL_ACTION } from "../redux/action/action";
import { takeLatest,put } from "redux-saga/effects";

export function* detailWatcher () {
    yield takeLatest (DETAIL_ACTION, detailLogger);
} 
function* detailLogger (action) {
    yield put(detailActionSuccess(action.payload));
}