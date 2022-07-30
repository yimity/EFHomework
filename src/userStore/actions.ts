import { UserInfor } from "./interfaces";

export interface GetUserList { type: 'User/GetUserList'; payload: { pageIndex: number; pageSize: number; } }
const getUserList = (pageIndex: number, pageSize: number): GetUserList => ({ type: 'User/GetUserList', payload: { pageIndex, pageSize } });

export interface SetUserPageInfor { type: 'User/PageInfor'; payload: { pageIndex: number; pageSize: number; } }
const setUserPageInfor = (pageIndex: number, pageSize: number): SetUserPageInfor => ({ type: 'User/PageInfor', payload: { pageIndex, pageSize } });

export interface SetUserInfor { type: 'User/Users'; payload: { users: UserInfor[]; } }
const setUserInfor = (users: UserInfor[]): SetUserInfor => ({ type: 'User/Users', payload: { users } });

export interface SetUserCount{ type: 'User/UserCount'; payload:{userCount:number;}}
const setUserCount = (userCount:number):SetUserCount=>({type: 'User/UserCount', payload:{userCount}});

export interface DelUser { type: 'User/DelUser'; payload: { userId: string; } }
const delUser = (userId: string): DelUser => ({ type: 'User/DelUser', payload: { userId } });

export type UserAction = GetUserList | SetUserPageInfor |  SetUserInfor | SetUserCount;

export const userSagaTypes = {
    UserGetUsers: 'User/GetUserList',
    DelUser: 'User/DelUser',
};

export const userActionCreators ={
    getUserList,
    delUser,
    setUserPageInfor,
    setUserInfor,
    setUserCount,
};