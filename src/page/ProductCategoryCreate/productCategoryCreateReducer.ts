import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  loading: boolean;
}

const initialState = {
  loading: false,
};

const counterSlice = createSlice({
  name: 'productCategoriesCreate',
  initialState,
  reducers: {
    createProductCategoryRequest: (state, { payload }) => {
      state.loading = true;
    },
    createProductCategoryRequestSuccess: (state, { payload }) => {
      state.loading = false;
    },
    createProductCategoryRequestFail: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const {
  createProductCategoryRequest,
  createProductCategoryRequestSuccess,
  createProductCategoryRequestFail,
} = counterSlice.actions;
