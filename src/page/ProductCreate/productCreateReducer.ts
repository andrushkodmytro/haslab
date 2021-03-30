import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  firstName: string;
  // lastName: string;
  // email: string;
  isFirstLoad: boolean;
  isLoading: boolean;
}

const initialState = {
  // firstName: '',
  // lastName: '',
  // email: '',
  isFirstLoad: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
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
  createProductRequest,
  createProductRequestSuccess,
  createProductRequestFail,
  resetCreateProductPage,
} = counterSlice.actions;
