import { result } from 'lodash';
import {  put, takeEvery,select } from 'redux-saga/effects';
import * as actions from './actions';
import {UserInfor}  from './interfaces';

function* getUserInfors(action: actions.GetUserList) {
  const pageQuery = `?pageIndex=${action.payload.pageIndex}&pageSize=${action.payload.pageSize}`;
  let data = yield fetch('users' + pageQuery,
    {
      method: 'GET'
    }
  ).then(result => result.json())
    .then(res => res.data);

  yield put(actions.userActionCreators.setUserInfor((data.data || [] )as UserInfor[]));
  yield put(actions.userActionCreators.setUserCount(data.total));
  yield put(actions.userActionCreators.setUserPageInfor(action.payload.pageIndex,action.payload.pageSize));
}

function* delUser(action:actions.DelUser)
{
  let data = yield fetch(`users/${action.payload.userId}`,
    {
      method: 'DELETE'
    }
  ).then(result => result.json())
    .then(res => res.data);

    // const pageIndex = yield select(state=>state.pageIndex);
    // const pageSize = yield select(state=>state.pageSize);
    // actions.userActionCreators.getUserList(pageIndex,pageSize);
}

export function* watchUserInfor(){
    yield takeEvery(actions.userSagaTypes.UserGetUsers, getUserInfors);
    yield takeEvery(actions.userSagaTypes.DelUser, delUser);
}