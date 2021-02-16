import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getAccountRequest, getAccountRequestSuccess, getAccountRequestFail } from 'page/Account/accountReducer';
import { getAccountApi } from 'requests/account';

export function* getAccount() {
  try {
    const response = yield call(getAccountApi);

    yield put(getAccountRequestSuccess(response.data));
  } catch (error) {
    yield put(getAccountRequestFail());
  }
}

export default all([takeLatest(getAccountRequest().type, getAccount)]);
