import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  loading: boolean;
}

const initialState = {
  loading: false,
};

const counterSlice = createSlice({
  name: 'companyCreate',
  initialState,
  reducers: {
    createCompanyRequest: (state, action) => {
      state.loading = true;
    },
    createCompanyRequestSuccess: (state, { payload }) => {
      state.loading = false;
    },
    createCompanyRequestFail: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const { createCompanyRequest, createCompanyRequestSuccess, createCompanyRequestFail } = counterSlice.actions;
