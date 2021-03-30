import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
  allCompanies: [] | any[];
  isFirstLoading: boolean;
  isLoading: boolean;
}

const initialState = {
  allCompanies: [],
  isFirstLoading: false,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    getCompanyRequest: (state) => {
      state.isFirstLoading = true;
    },
    getCompanyRequestSuccess: (state, { payload }) => {
      state.isFirstLoading = false;
      state.allCompanies = payload.allCompanies;
    },
    getCompanyRequestFail: (state) => {
      state.isFirstLoading = false;
    },
  },
});

export const { reducer } = counterSlice;
export const { getCompanyRequest, getCompanyRequestSuccess, getCompanyRequestFail } = counterSlice.actions;
