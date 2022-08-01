import { User } from ".";

export interface UpdateCurrentUserAction { type: 'UM/UpdateCurrentUser'; payload: { currentUserId: string }; }
export interface UpdateUsers { type: 'UM/UpdateUsers'; payload: { users: User[] }; }
export interface UpdateTotal { type: 'UM/UpdateTotal'; payload: { total: number }; }
export interface UpdateShowEditUserModal { type: 'UM/ShowEditUserModal'; payload: { isShow: boolean }; }
export interface UpdateUser { type: 'UM/UpdateUser'; payload: { userId: string; user: User; }; }

const updateCurrentUser = (currentUserId: string): UpdateCurrentUserAction => ({ type: 'UM/UpdateCurrentUser', payload: { currentUserId } });
const updateUsers = (users: User[]): UpdateUsers => ({ type: 'UM/UpdateUsers', payload: { users } });
const updateTotal = (total: number): UpdateTotal => ({ type: 'UM/UpdateTotal', payload: { total } });
const updateShowEditUserModal = (isShow: boolean): UpdateShowEditUserModal => ({ type: 'UM/ShowEditUserModal', payload: { isShow } });
const updateUser = (userId: string, user: User): UpdateUser => ({ type: 'UM/UpdateUser', payload: { userId, user } });

export type UserManagementActions = UpdateCurrentUserAction | UpdateUsers | UpdateTotal | UpdateShowEditUserModal | UpdateUser;

export const actionCreators = {
    updateCurrentUser,
    updateUsers,
    updateTotal,
    updateShowEditUserModal,
    updateUser,
};

export interface GetUserInfoAction { type: 'UM/GetUserInfo'; payload: { pageIndex: number }; }

const getUserInfo = (pageIndex: number): GetUserInfoAction => ({ type: 'UM/GetUserInfo', payload: { pageIndex } });

export const sagaActions = {
    getUserInfo,
};