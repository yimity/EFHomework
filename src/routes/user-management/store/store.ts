import * as Store from '.';
import { createStore } from 'redux';

export default function configureStore(initialState?: Store.UserManagementDefaultState) {
    const store = createStore(
		Store.UserManagementReducer,
		initialState as any,
	);
    return store as any;
}