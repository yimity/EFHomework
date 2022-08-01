import { UserManagementActions, UserManagementState } from ".";

const defaultState: UserManagementState = {
    currentUser: undefined,
    users: [],
    total: 0,
    showEditUserModal: false,
};


export const UserManagementReducer = (state: UserManagementState = defaultState, action: UserManagementActions) => {
    switch (action.type) {
        case 'UM/UpdateCurrentUser':
            return { ...state, currentUser: state.users.find(user => user.id === action.payload.currentUserId) };
        case 'UM/UpdateUsers':
            return { ...state, users: action.payload.users };
        case 'UM/UpdateTotal':
            return { ...state, total: action.payload.total };
        case 'UM/ShowEditUserModal':
            return { ...state, showEditUserModal: action.payload.isShow };
        case 'UM/UpdateUser':
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return action.payload.user;
                    }
                    return user;
                })
            };
        default:
            return state;
    }
}