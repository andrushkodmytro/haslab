import { createSlice } from '@reduxjs/toolkit';

interface initialStateType {
  snackbarOpen: boolean;
  snackbarMessage: string;
  snackbarType: 'success' | 'error' | 'info' | 'warning' | undefined;
}

const initialState: initialStateType = {
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarType: 'success',
};

const counterSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    snackbarSuccess: (state, { payload }) => {
      state.snackbarOpen = true;
      state.snackbarType = 'success';
      state.snackbarMessage = payload;
    },
    snackbarInfo: (state, { payload }) => {
      state.snackbarOpen = true;
      state.snackbarType = 'info';
      state.snackbarMessage = payload;
    },
    snackbarError: (state, { payload }) => {
      state.snackbarOpen = true;
      state.snackbarType = 'error';
      state.snackbarMessage = payload;
    },
    snackbarWarning: (state, { payload }) => {
      state.snackbarOpen = true;
      state.snackbarType = 'warning';
      state.snackbarMessage = payload;
    },
    snackbarClear: (state) => {
      state.snackbarOpen = false;
      state.snackbarMessage = '';
      state.snackbarType = 'success';
    },
  },
});

export const { reducer } = counterSlice;
export const { snackbarSuccess, snackbarClear } = counterSlice.actions;
