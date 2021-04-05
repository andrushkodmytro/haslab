import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from './interfaces';

export interface initialStateType {
  categories: ICategory[] | [];
  isFirstLoad: boolean;
  isLoading: boolean;
}

const initialState = {
  categories: [],
  isFirstLoad: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    getProductCategoryRequest: (state) => {
      state.isFirstLoad = true;
    },
    getProductCategoryRequestSuccess: (state, { payload }) => {
      state.categories = payload;
      state.isFirstLoad = false;
    },
    getProductCategoryRequestFail: (state) => {
      state.isFirstLoad = false;
    },
    createProductRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    createProductRequestSuccess: (state) => {
      state.isLoading = false;
    },
    createProductRequestFail: (state) => {
      state.isLoading = false;
    },
    resetCreateProductPage: () => initialState,
  },
});

export const { reducer } = counterSlice;
export const {
  resetCreateProductPage,
  createProductRequest,
  createProductRequestSuccess,
  createProductRequestFail,
  getProductCategoryRequest,
  getProductCategoryRequestSuccess,
  getProductCategoryRequestFail,
} = counterSlice.actions;
