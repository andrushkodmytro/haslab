import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  createProductRequest,
  createProductRequestSuccess,
  createProductRequestFail,
} from 'page/ProductCreate/productCreateReducer';
import { createProductApi } from './productCreateApi';
import history from 'historyHelper';

export function* createProduct({ payload }: any) {
  try {
    yield call(createProductApi, payload);

    yield put(createProductRequestSuccess());
    history.push('/products');
  } catch (error) {
    yield put(createProductRequestFail());
  }
}

export default all([takeLatest(createProductRequest('').type, createProduct)]);
