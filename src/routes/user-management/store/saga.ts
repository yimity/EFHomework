import { put, takeEvery } from "redux-saga/effects";
import { actionCreators, GetUserListAction } from "./actions";

interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    json?: any,
}

interface GetUserList {
    data: any,
}

function* initUserList(action: GetUserListAction) {
    const { pageIndex } = action.payload;
    const response: ResponseGenerator = yield fetch(`/users?pageIndex=${pageIndex}&pageSize=8`, {
        method: 'GET',
    });
    const data: GetUserList = yield response.json();
    yield put(actionCreators.updateUsers(data.data.data));
}

export function* userManagementSaga() {
    yield takeEvery('UserManagement/GetUserList', initUserList);
} 