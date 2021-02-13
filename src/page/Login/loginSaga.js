import { all, put, call, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginRequestSuccess, loginRequestError } from 'page/Login/loginReducer';
import { loginApi } from 'requests/login';

import store from 'store2';

export function* login(action) {
  try {
    console.log('saga');
    const { data } = action.payload;
    const response = yield call(loginApi, data);

    const auth = {
      user: response.data.user,
      token: response.data.token,
    };

    store.set('auth', auth);

    yield put(loginRequestSuccess(response.data.user));
  } catch (error) {
    yield put(loginRequestError(error?.response?.data?.errors));
  }
}

export default all([takeLatest(loginRequest().type, login)]);
