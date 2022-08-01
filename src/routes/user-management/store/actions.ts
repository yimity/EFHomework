import { User } from "../interface";

export interface InitUserList {
    type: 'UserManagement/InitUserList';
    payload: {users: User[]};
}

export interface AddUser {
    type: 'UserManagement/AddUser';
    payload: {user: User};
}

export interface UpdateUser {
    type: 'UserManagement/UpdateUser';
    payload: {user: User};
}

export type UserManagementActions = InitUserList | AddUser | UpdateUser;

export const actionCreators = {
    initUserList: (users: User[]): InitUserList => {
        return {
            type: 'UserManagement/InitUserList',
            payload: {users}
        };
    },
    addUser: (user: User): AddUser => {
        return {
            type: 'UserManagement/AddUser',
            payload: {user}
        };
    },
    updateUser: (user: User): UpdateUser => {
        return {
            type: 'UserManagement/UpdateUser',
            payload: {user}
        };
    }
}

export interface GetUserInfoAction { type: 'UserManagement/GetUserInfo'; payload: { pageIndex: number }; }

const userInfos = (pageIndex: number): GetUserInfoAction => ({ type: 'UserManagement/GetUserInfo', payload: { pageIndex } });

export const sagaActions = {
    userInfos,
}; 