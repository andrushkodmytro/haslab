import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'registration',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    loading: false,
  },
  reducers: {
    registrationRequest: (state) => {
      state.loading = true;
    },
    registrationRequestSuccess: (state) => {
      state.loading = false;
    },
    registrationRequestFail: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const { registrationRequest, registrationRequestSuccess, registrationRequestFail } = counterSlice.actions;
