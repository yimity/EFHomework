import { UserManagementDefaultState } from "./interface";
import { UserManagementActions } from "./actions";
import { Reducer } from 'redux';
import { User } from "../interface";

const defaultState: UserManagementDefaultState = {
    users: [],
}

export const UserManagementReducer: Reducer<UserManagementDefaultState> = (state: UserManagementDefaultState = defaultState, action: UserManagementActions) => {
    switch (action.type) {
        case 'UserManagement/InitUserList':
            const initUsers:User[] = [
                { id: 1, name: 'Amanda Harvey', email: 'amanda@site.com', photo: '', position: 'Director', department: 'Human resources', country: 'United Kingdom', status: 'Active', portfolio: 72, role: 'Employee' },
                { id: 2, name: 'Anne Richard', email: 'anne@site.com', photo: 'https://github.com/mdo.png', position: 'Seller', department: 'Branding products', country: 'United States', status: 'Active', portfolio: 24, role: 'Employee' },
                { id: 3, name: 'Bran Hooligan', email: 'bran@site.com', photo: '', position: 'Director', department: 'Accounting', country: 'France', status: 'Active', portfolio: 71, role: 'Employee' },
                { id: 4, name: 'Chris Mathew', email: 'chris@site.com', photo: '', position: 'Developer', department: 'Mobile App', country: 'Switzerland', status: 'Pending', portfolio: 0, role: 'Employee' },
                { id: 5, name: 'Clarice Boone', email: 'clarice@site.com', photo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg', position: 'Seller', department: 'Branding products', country: 'United Kingdom', status: 'Active', portfolio: 37, role: 'Employee' },
                { id: 6, name: 'Lewis Clarke', email: 'lewis@site.com', photo: '', position: 'Co-founder', department: 'IT department', country: 'Switzerland', status: 'Pending', portfolio: 100, role: 'Owner' },
            ];
            return { ...state, users: initUsers };
        case 'UserManagement/AddUser':
            const users = [...state.users];
            users.push(action.payload.user);
            return { ...state, users: users };
        case 'UserManagement/UpdateUser':
            const newUser = action.payload.user;
            const newUsers = [...state.users];
            const userIndex = newUsers.findIndex(u => u.id = newUser.id);
            newUsers[userIndex] = newUser;
            return { ...state, users: newUsers };
        default:
            return state;
    }
}