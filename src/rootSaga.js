import { all } from 'redux-saga/effects';
import loginSaga from 'page/Login/loginSaga';

import registrationSaga from 'page/SignUp/registrationSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([ registrationSaga,loginSaga ]);
}
