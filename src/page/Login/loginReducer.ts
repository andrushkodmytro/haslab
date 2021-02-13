import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';

let auth: any = {};
try {
  auth = store.get('auth');
} catch (e) {
  console.log(e);
}

const initialState = auth
  ? { loggedIn: true, user: auth.user, loading: false }
  : { loggedIn: false, user: null, loading: false };

const counterSlice = createSlice({
  name: 'signIn',
  initialState: initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginRequestSuccess: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
      state.loading = false;
    },
    loginRequestError: (state) => {
      // state = state;
    },
  },
});

export const { reducer } = counterSlice;
export const { loginRequest, loginRequestSuccess, loginRequestError } = counterSlice.actions;
