
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { userReducer } from './reducer';
import { watchUserInfor } from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchUserInfor)

export { store };