import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  createCompanyRequest,
  createCompanyRequestSuccess,
  createCompanyRequestFail,
} from 'page/CompanyCreate/companyCreateReducer';
import { companyCreateApi } from './companyCreateApi';

export function* createCompany({ payload }: any) {
  try {
    const { data } = payload;
    const response = yield call(companyCreateApi, data);

    yield put(createCompanyRequestSuccess(response.data));
  } catch (error) {
    yield put(createCompanyRequestFail());
  }
}

export default all([takeLatest(createCompanyRequest('').type, createCompany)]);
