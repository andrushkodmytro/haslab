import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  registrationRequest,
  registrationRequestSuccess,
  registrationRequestFail,
} from 'page/SignUp/registrationReducer';
import { registrationApi } from 'requests/registration';

import store from 'store2';

export function* registration(action) {
  try {
    const response = yield call(registrationApi, action.payload);
    console.log('Registered');
    yield registrationRequestFail();
  } catch (e) {
    yield registrationRequestFail(e.message);
  }
}

export default all([takeLatest(registrationRequest().type, registration)]);
