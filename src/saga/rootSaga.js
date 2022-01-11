import { all } from 'redux-saga/effects';
import { mySaga } from './mySaga';
import { groupListener } from './tranSaga';
import { detailWatcher } from './detailSaga';
export const rootSaga = function* () {
 yield all([mySaga(),groupListener(),detailWatcher()]);
}