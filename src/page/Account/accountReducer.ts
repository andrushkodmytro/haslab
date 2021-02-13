import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  firstName: string;
  lastName: string;
  email: string;
  loading: boolean;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  loading: false,
};

const counterSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    getAccountRequest: (state) => {
      state.loading = true;
    },
    getAccountRequestSuccess: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.loading = false;
    },
    getAccountRequestFail: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const { getAccountRequest, getAccountRequestSuccess, getAccountRequestFail } = counterSlice.actions;
