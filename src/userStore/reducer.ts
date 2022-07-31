import { Reducer } from 'redux';
import { UserState } from './interfaces';
import { UserAction } from './actions';
import update from 'immutability-helper';

const defaultState: UserState = {
    users: [],
    pageIndex: 1,
    pageSize: 10,
    userCount: 0,
    showUserDialog: false,
    editUserId: '',
};

export const userReducer: Reducer<UserState, UserAction> = (state: UserState = defaultState, action: UserAction) => {
    switch (action.type) {
        case 'User/Users':
            return update(state, { users: { $set: action.payload.users } });
        case 'User/PageInfor':
            return update(state, { pageIndex: { $set: action.payload.pageIndex }, pageSize: { $set: action.payload.pageSize } });
        case 'User/UserCount':
            return update(state, { userCount: { $set: action.payload.userCount } });
        case 'User/ShowUserDialog':
            return update(state, { showUserDialog: { $set: action.payload.showUserDialog } });
        case 'User/SowEditUser':
            return update(state, { editUserId: { $set: action.payload.userId } });
        case 'User/EditUser':
            {
                const index = state.users.findIndex(user => user.id === action.payload.user.id);
                return update(state, { users: { $splice: [[index, 1, action.payload.user]] } });
            }
            
    }
    return state;
}