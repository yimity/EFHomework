import { Reducer } from 'redux';
import { UserState } from './interfaces';
import { UserAction } from './actions';
import update from 'immutability-helper';

const defaultState: UserState = {
    users: [],
};

export const userReducer: Reducer<UserState,UserAction> = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case 'User/Users':
            return update(state, { users: { $set: action.payload.users } });
    }
    return state;
}