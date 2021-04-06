import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  getProductCategoriesRequest,
  getProductCategoriesRequestSuccess,
  getProductCategoriesRequestFail,
} from './productCategoryPreviewReducer';
import { getProductCategoriesApi } from './productCategoryPreviewApi';

export function* getProductCategories({ payload }: any) {
  try {
    const { data } = yield call(getProductCategoriesApi, payload);

    yield put(getProductCategoriesRequestSuccess(data));
  } catch (error) {
    yield put(getProductCategoriesRequestFail());
  }
}

export default all([takeLatest(getProductCategoriesRequest({}).type, getProductCategories)]);
