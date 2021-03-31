import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginRequestSuccess,
  loginRequestError,
  logoutRequest,
  logoutRequestSuccess,
  logoutRequestError,
} from 'page/Login/loginReducer';
import { loginApi } from 'requests/login';
import history from 'historyHelper';
import Auth from 'utils/auth';
import store from 'store2';

export function* login(action) {
  try {
    const { data, from } = action.payload;
    const response = yield call(loginApi, data);

    const auth = {
      user: response.data.user,
      token: response.data.token,
    };

    store.set('auth', auth);

    yield put(loginRequestSuccess(response.data.user));

    history.push(from);
  } catch (error) {
    yield put(loginRequestError(error?.response?.data?.errors));
  }
}

export function* logout() {
  try {
    yield put(logoutRequestSuccess());
    Auth.removeSession();
    history.push('/login');
  } catch (error) {
    yield put(logoutRequestError());
  }
}

export default all([takeLatest(loginRequest().type, login), takeLatest(logoutRequest().type, logout)]);
