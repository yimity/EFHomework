import {  put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import {UserInfor}  from './interfaces';

async function* getUserInfors(action: actions.GetUserList) {
    const pageQuery =  `?pageIndex=${action.payload.pageIndex}&pageSize=${action.payload.pageSize}`;

      const result = await fetch('users'+ pageQuery, {
        method:'GET'
      });
      const data = await result.json();

      yield put(actions.userActionCreators.setUserInfor(data.data as UserInfor[]));
}

export function* watchUserInfor(){
    yield takeEvery(actions.userSagaTypes.UserGetUsers, getUserInfors);
}