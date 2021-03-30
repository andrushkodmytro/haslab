import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getOrdersRequest,
  getOrdersRequestSuccess,
  getOrdersRequestFail,
} from 'page/OrdersPreview/ordersPreviewReducer';
import { getOrdersApi } from 'page/OrdersPreview/ordersPreviewApi';

export function* getOrders() {
  try {
    const response = yield call(getOrdersApi);

    yield put(getOrdersRequestSuccess(response.data));
  } catch (error) {
    yield put(getOrdersRequestFail());
  }
}

export default all([takeLatest(getOrdersRequest().type, getOrders)]);
