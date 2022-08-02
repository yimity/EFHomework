import * as Store from './store';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

export default function configureStore(initialState?: Store.UserManagementDefaultState) {
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