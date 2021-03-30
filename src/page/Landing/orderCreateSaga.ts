import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getCreateOrderRequest, getCreateOrderRequestSuccess, getCreateOrderRequestFail } from './orderCreateReducer';
import { getCreateOrderApi } from './orderCreateApi';

export function* getCreateOrder() {
  try {
    const { data } = yield call(getCreateOrderApi);

    yield put(getCreateOrderRequestSuccess(data.data));
  } catch (error) {
    yield put(getCreateOrderRequestFail());
  }
}

export default all([takeLatest(getCreateOrderRequest().type, getCreateOrder)]);
