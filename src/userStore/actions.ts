import { UserInfor } from "./interfaces";

export interface GetUserList { type: 'User/GetUserList'; payload: { pageIndex: Number; pageSize: Number; } }
const getUserList = (pageIndex: Number, pageSize: Number): GetUserList => ({ type: 'User/GetUserList', payload: { pageIndex, pageSize } });

export interface SetUserPageInfor { type: 'User/PageInfor'; payload: { pageIndex: Number; pageSize: Number; } }
const setUserPageInfor = (pageIndex: Number, pageSize: Number): SetUserPageInfor => ({ type: 'User/PageInfor', payload: { pageIndex, pageSize } });

export interface SetUserInfor { type: 'User/Users'; payload: { users: UserInfor[]; } }
const setUserInfor = (users: UserInfor[]): SetUserInfor => ({ type: 'User/Users', payload: { users } });

export type UserAction = GetUserList | SetUserPageInfor |  SetUserInfor;

export const userSagaTypes = {
    UserGetUsers: 'User/GetUserList',
};

export const  userActionCreators ={
    getUserList,
    setUserPageInfor,
    setUserInfor,
};