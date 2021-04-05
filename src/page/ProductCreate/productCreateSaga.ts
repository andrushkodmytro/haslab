import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  createProductRequest,
  createProductRequestSuccess,
  createProductRequestFail,
  getProductCategoryRequest,
  getProductCategoryRequestSuccess,
  getProductCategoryRequestFail,
} from 'page/ProductCreate/productCreateReducer';
import { createProductApi, getProductCategoryApi } from './productCreateApi';
import { snackbarSuccess } from 'reducers/ui';
import history from 'historyHelper';

export function* createProduct({ payload }: any) {
  try {
    yield call(createProductApi, payload);

    yield put(createProductRequestSuccess());
    history.push('/products');
    yield put(snackbarSuccess('Product successfully created!'));
  } catch (error) {
    yield put(createProductRequestFail());
  }
}

export function* getProductCategory() {
  try {
    const { data } = yield call(getProductCategoryApi);

    yield put(getProductCategoryRequestSuccess(data));
  } catch (error) {
    yield put(getProductCategoryRequestFail());
  }
}

export default all([
  takeLatest(createProductRequest('').type, createProduct),
  takeLatest(getProductCategoryRequest().type, getProductCategory),
]);
