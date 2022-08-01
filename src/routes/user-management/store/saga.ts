import { put, takeEvery } from "redux-saga/effects";
import { actionCreators, GetUserInfoAction } from "./actions";

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

function* initUserList(action: GetUserInfoAction) {
    const { pageIndex } = action.payload;
    const response: ResponseGenerator = yield fetch(`/users?pageIndex=${pageIndex}&pageSize=8`, {
        method: 'GET',
    });
    const data: GetUserInfoType = yield response.json();
    yield put(actionCreators.initUserList(data.data.data));
}

export function* userManagementSaga() {
    yield takeEvery('UserManagement/InitUserList', initUserList);
} 