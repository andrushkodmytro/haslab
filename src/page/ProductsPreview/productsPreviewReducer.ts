import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  products: { data: [] | any[] };
  isFirstLoading: boolean;
  isLoading: boolean;
}

const initialState = {
  products: {
    data: [],
  },
  isFirstLoading: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    resetProductPreviewPage: () => initialState,
    getAllProductsRequest: (state) => {
      state.isLoading = true;
    },
    getAllProductsRequestSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    getAllProductsRequestFail: (state) => {
      state.isLoading = false;
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
