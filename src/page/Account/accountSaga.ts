import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getAccountRequest,
  getAccountRequestSuccess,
  getAccountRequestFail,
  uploadLogoRequest,
  uploadLogoRequestSuccess,
  uploadLogoRequestFail,
} from 'page/Account/accountReducer';
import { getAccountApi, uploadLogoApi } from 'requests/account';

export function* getAccount() {
  try {
    const response = yield call(getAccountApi);

    yield put(getAccountRequestSuccess(response.data));
  } catch (error) {
    yield put(getAccountRequestFail());
  }
}

export function* uploadLogo(action: any) {
  try {
    const response = yield call(uploadLogoApi, action.payload.data);

    yield put(uploadLogoRequestSuccess(response.data));
  } catch (error) {
    yield put(uploadLogoRequestFail());
  }
}

export default all([
  takeLatest(getAccountRequest().type, getAccount),
  takeLatest(uploadLogoRequest('').type, uploadLogo),
]);
