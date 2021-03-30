import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  orders: {
    count: number;
    data: any;
  };
  isFirstLoading: boolean;
  isLoading: boolean;
}

const initialState: initialStateType = {
  orders: {
    count: 0,
    data: [],
  },
  isFirstLoading: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    resetOrderPreviewPage: (state) => initialState,
    getOrdersRequest: (state) => {
      state.isFirstLoading = true;
    },
    getOrdersRequestSuccess: (state, { payload }) => {
      state.isFirstLoading = false;
      state.orders = payload.data;
    },
    getOrdersRequestFail: (state) => {
      state.isFirstLoading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const {
  resetOrderPreviewPage,
  getOrdersRequest,
  getOrdersRequestSuccess,
  getOrdersRequestFail,
} = counterSlice.actions;
