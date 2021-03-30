import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getAllProductsRequest,
  getAllProductsRequestSuccess,
  getAllProductsRequestFail,
} from 'page/ProductsPreview/productsPreviewReducer';
import { getAllProductsApi } from './productsPreviewApi';

export function* getAllProducts({ payload }: any) {
  try {
    const { data } = yield call(getAllProductsApi, payload);

    yield put(getAllProductsRequestSuccess(data));
  } catch (error) {
    yield put(getAllProductsRequestFail());
  }
}

export default all([takeLatest(getAllProductsRequest({}).type, getAllProducts)]);
