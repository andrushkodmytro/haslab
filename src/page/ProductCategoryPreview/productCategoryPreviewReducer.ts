import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  categories: any;
  totalPages: any;
  page: number;
  isFirstLoading: boolean;
  isLoading: boolean;
}

const initialState = {
  categories: [],
  totalPages: 0,
  page: 1,
  isFirstLoading: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'categoriesPreview',
  initialState,
  reducers: {
    resetProductCategoriesPage: () => initialState,
    getProductCategoriesRequest: (state, action?: any) => {
      state.isLoading = true;
      state.isFirstLoading = true;
    },
    getProductCategoriesRequestSuccess: (state, { payload: { data, totalPages, page } }) => {
      state.isLoading = false;
      state.isFirstLoading = false;
      state.categories = data;
      state.totalPages = totalPages;
      state.page = page;
    },
    getProductCategoriesRequestFail: (state) => {
      state.isLoading = false;
      state.isFirstLoading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const {
  resetProductCategoriesPage,
  getProductCategoriesRequest,
  getProductCategoriesRequestSuccess,
  getProductCategoriesRequestFail,
} = counterSlice.actions;
