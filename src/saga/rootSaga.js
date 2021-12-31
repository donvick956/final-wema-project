import { all } from 'redux-saga/effects';
import { mySaga } from './mySaga';
export const rootSaga = function* () {
 yield all([mySaga()]);
}