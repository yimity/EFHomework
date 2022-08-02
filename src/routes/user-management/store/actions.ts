import { User } from "../interface";

export interface UpdateSingleUserAction { type: 'UserManagement/UpdateSingleUser'; payload: { user: User }; }
export interface UpdateUsers { type: 'UserManagement/UpdateUsers'; payload: { users: User[] }; }
export interface AddUser { type: 'UserManagement/AddUser'; payload: { user: User; }; }
export interface GetUserListAction { type: 'UserManagement/GetUserList'; payload: { pageIndex: number }; }

const userInfos = (pageIndex: number): GetUserListAction => ({ type: 'UserManagement/GetUserList', payload: { pageIndex } });
const updateCurrentUser = (user: User): UpdateSingleUserAction => ({ type: 'UserManagement/UpdateSingleUser', payload: { user } });
const updateUsers = (users: User[]): UpdateUsers => ({ type: 'UserManagement/UpdateUsers', payload: { users } });
const addUser = (user: User): AddUser => ({ type: 'UserManagement/AddUser', payload: { user } });

export type UserManagementActions = UpdateSingleUserAction | UpdateUsers | AddUser;

export const actionCreators = {
    updateCurrentUser,
    updateUsers,
    addUser,
};

export const sagaActions = {
    userInfos,
}; 