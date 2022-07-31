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

export interface EditUser { type: 'User/EditUser'; payload: { user: UserInfor; } }
const editUser = (user: UserInfor): EditUser => ({ type: 'User/EditUser', payload: { user } });

export interface ShowEditUser { type: 'User/SowEditUser'; payload: { userId: string; } }
const showEditUser = (userId: string): ShowEditUser => ({ type: 'User/SowEditUser', payload: { userId } });

export interface ShowUserDialog {type: 'User/ShowUserDialog';payload:{showUserDialog:boolean;}}
const showUserDialog = (isShowDialog:boolean):ShowUserDialog=>({type: 'User/ShowUserDialog',payload:{showUserDialog:isShowDialog}});

export type UserAction = GetUserList | SetUserPageInfor |  SetUserInfor | SetUserCount | ShowUserDialog | ShowEditUser;

export const userSagaTypes = {
    UserGetUsers: 'User/GetUserList',
    DelUser: 'User/DelUser',
    EditUser: 'User/EditUser',
};

export const userActionCreators ={
    getUserList,
    delUser,
    setUserPageInfor,
    setUserInfor,
    setUserCount,
    showEditUser,
    editUser,
    showUserDialog,
};