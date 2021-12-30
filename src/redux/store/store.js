import { applyMiddleware,compose,createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../../saga/rootSaga";
import { reducers } from "../reducer";
import { sessionService } from 'redux-react-session';

export const configStore = (initialState) => {
    const sagaMidddleware = createSagaMiddleware();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const middleware = [sagaMidddleware];
    const store = createStore(reducers,
                initialState,
                composeEnhancer(applyMiddleware(...middleware)));
    sessionService.initSessionService(store, {refreshOnCheckAuth: true, driver: 'LOCALSTORAGE' });
    sagaMidddleware.run(rootSaga);
    return store;
}