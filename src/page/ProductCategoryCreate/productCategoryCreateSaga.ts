import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  createProductCategoryRequest,
  createProductCategoryRequestSuccess,
  createProductCategoryRequestFail,
} from './productCategoryCreateReducer';
import { getCreateProductCategoryApi } from './productCategoryCreateApi';
import { snackbarSuccess } from 'reducers/ui';
import history from 'historyHelper';

export function* getCreateOrder({ payload }: any) {
  try {
    const { data } = yield call(getCreateProductCategoryApi, payload);

    yield put(createProductCategoryRequestSuccess(data.data));
    history.push('/categories');
    yield put(snackbarSuccess('Category successfully created!'));
  } catch (error) {
    yield put(createProductCategoryRequestFail());
  }
}

export default all([takeLatest(createProductCategoryRequest({}).type, getCreateOrder)]);
