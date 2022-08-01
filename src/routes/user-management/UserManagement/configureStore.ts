import * as Store from './store';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(initialState?: Store.UserManagementState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [
        sagaMiddleware,
    ];
    const store = createStore(
        Store.UserManagementReducer,
        initialState as any,
        compose(applyMiddleware(...middleware)),
    );
    sagaMiddleware.run(Store.userManagementSaga);
    return store as any;
}