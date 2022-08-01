import { put, takeEvery } from "redux-saga/effects";
import { actionCreators, GetUserInfoAction, User } from ".";

interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    json?: any,
}

interface GetUserInfoType {
    data: any,
}

function* getUserInfo(action: GetUserInfoAction) {
    const { pageIndex } = action.payload;
    const response: ResponseGenerator = yield fetch(`/users?pageIndex=${pageIndex}&pageSize=8`, {
        method: 'GET',
    });
    const data: GetUserInfoType = yield response.json();
    yield put(actionCreators.updateUsers(data.data.data));
    yield put(actionCreators.updateTotal(data.data.total));
}

export function* userManagementSaga() {
    yield takeEvery('UM/GetUserInfo', getUserInfo);
}