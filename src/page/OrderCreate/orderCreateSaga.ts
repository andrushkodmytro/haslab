import { all, put, call, takeLatest } from 'redux-saga/effects';
import { getCreateOrderRequest, getCreateOrderRequestSuccess, getCreateOrderRequestFail } from './orderCreateReducer';
import { getCreateOrderApi } from './orderCreateApi';
// import { snackbarSuccess } from 'reducers/ui';

export function* getCreateOrder() {
  try {
    const { data } = yield call(getCreateOrderApi);

    yield put(getCreateOrderRequestSuccess(data.data));
  } catch (error) {
    yield put(getCreateOrderRequestFail());
  }
}

// yield put(snackbarSuccess('Product successfully created!'));

export default all([takeLatest(getCreateOrderRequest().type, getCreateOrder)]);
