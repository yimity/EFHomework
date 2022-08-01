import { UserManagementDefaultState } from "./interface";
import { UserManagementActions } from "./actions";

const defaultState: UserManagementDefaultState = {
    users: [],
}

export const UserManagementReducer = (state: UserManagementDefaultState = defaultState, action: UserManagementActions) => {
    switch (action.type) {
        case 'UserManagement/UpdateUsers':
            return { ...state, users: action.payload.users };
        case 'UserManagement/AddUser':
            const users = [...state.users];
            users.push(action.payload.user);
            return { ...state, users: users };
        case 'UserManagement/UpdateSingleUser':
            const newUser = action.payload.user;
            const newUsers = [...state.users];
            const userIndex = newUsers.findIndex(u => u.id = newUser.id);
            newUsers[userIndex] = newUser;
            return { ...state, users: newUsers };
        default:
            return state;
    }
}