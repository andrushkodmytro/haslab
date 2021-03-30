import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getCompanyRequest, getCompanyRequestSuccess, getCompanyRequestFail } from './companyReducer';
import { getCompanyApi } from './companyApi';

export function* getCreateOrder() {
  try {
    const { data } = yield call(getCompanyApi);

    yield put(getCompanyRequestSuccess(data.data));
  } catch (error) {
    yield put(getCompanyRequestFail());
  }
}

export default all([takeLatest(getCompanyRequest().type, getCreateOrder)]);
