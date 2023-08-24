import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { isLogInModalOpen: false, isError: false };

const logInSlice = createSlice({
  name: "logInModal",
  initialState: initialModalState,
  reducers: {
    openLogInModal(state) {
      state.isLogInModalOpen = true;
    },
    closeLogInModal(state) {
      state.isLogInModalOpen = false;
    },
    openError(state) {
      state.isError = true;
    },
    closeError(state) {
      state.isError = false;
    },
  },
});

export const logInModalActions = logInSlice.actions;
export default logInSlice;
