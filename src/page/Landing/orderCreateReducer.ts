import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  firstName: string;
  products: [] | any[];
  // lastName: string;
  // email: string;
  loading: boolean;
}

const initialState = {
  // firstName: '',
  // lastName: '',
  // email: '',
  products: [],
  loading: false,
};

const counterSlice = createSlice({
  name: 'orderCreate',
  initialState,
  reducers: {
    getCreateOrderRequest: (state) => {
      state.loading = true;
    },
    getCreateOrderRequestSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },
    getCreateOrderRequestFail: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const { getCreateOrderRequest, getCreateOrderRequestSuccess, getCreateOrderRequestFail } = counterSlice.actions;
