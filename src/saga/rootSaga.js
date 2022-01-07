import { all } from 'redux-saga/effects';
import { mySaga } from './mySaga';
import { groupListener } from './tranSaga';
export const rootSaga = function* () {
 yield all([mySaga(),groupListener()]);
}