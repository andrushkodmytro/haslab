import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  products: any;
  totalPages: any;
  page: number;
  isFirstLoading: boolean;
  isLoading: boolean;
}

const initialState = {
  products: [],
  totalPages: 0,
  page: 1,
  isFirstLoading: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'productsPreview',
  initialState,
  reducers: {
    resetProductPreviewPage: () => initialState,
    getAllProductsRequest: (state, action?: any) => {
      state.isLoading = true;
      state.isFirstLoading = true;
    },
    getAllProductsRequestSuccess: (state, { payload: { data, totalPages, page } }) => {
      state.isLoading = false;
      state.isFirstLoading = false;
      state.products = data;
      state.totalPages = totalPages;
      state.page = page;
    },
    getAllProductsRequestFail: (state) => {
      state.isLoading = false;
      state.isFirstLoading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const {
  resetProductPreviewPage,
  getAllProductsRequest,
  getAllProductsRequestSuccess,
  getAllProductsRequestFail,
} = counterSlice.actions;
