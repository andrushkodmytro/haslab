import { all } from 'redux-saga/effects';
import accountSaga from 'page/Account/accountSaga';
import loginSaga from 'page/Login/loginSaga';
import companyCreateSaga from 'page/CompanyCreate/companyCreateSaga';
import productCreateSaga from 'page/ProductCreate/productCreateSaga';
import registrationSaga from 'page/SignUp/registrationSaga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([registrationSaga, loginSaga, accountSaga, companyCreateSaga, productCreateSaga]);
}
