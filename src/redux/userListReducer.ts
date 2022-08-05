import { DELETE_USER, ADD_USER, EDIT_USER } from '../constant';
import { User } from '../types';

import initUserList from './initUserListDate';

type actionType = {
  type: string;
  data: User | string;
};

const initState: User[] = initUserList;
export default (preState: User[] = initState, action: actionType) => {
  const { type, data } = action;
  switch (type) {
    case DELETE_USER:
      return preState.filter((user) => user.id !== (data as string));
    case ADD_USER:
      const result = [...preState];
      result.unshift(data as User);
      return result;
    case EDIT_USER:
      const newState = [...preState];
      return newState.map((user) => (user.id === (data as User).id ? (data as User) : user));
    default:
      return preState;
  }
};
