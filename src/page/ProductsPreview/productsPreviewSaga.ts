import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getAllProductsRequest,
  getAllProductsRequestSuccess,
  getAllProductsRequestFail,
} from 'page/ProductsPreview/productsPreviewReducer';
import { getAllProductsApi } from './productsPreviewApi';

export function* getAllProducts() {
  try {
    const response = yield call(getAllProductsApi);

    yield put(getAllProductsRequestSuccess(response.data.data));
  } catch (error) {
    yield put(getAllProductsRequestFail());
  }
}

export default all([takeLatest(getAllProductsRequest().type, getAllProducts)]);
