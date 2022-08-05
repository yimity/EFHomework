import { DELETE_USER, ADD_USER, EDIT_USER } from '../constant';
import { User } from '../types';

export const addUser = (userObj: User) => ({ type: ADD_USER, data: userObj });
export const deleteUser = (userId: string) => ({ type: DELETE_USER, data: userId });
export const editUser = (userObj: User) => ({ type: EDIT_USER, data: userObj });
