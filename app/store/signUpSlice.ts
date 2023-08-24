import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { isSignModalOpen: false, isError: false };

const signUpSlice = createSlice({
  name: "signUpModal",
  initialState: initialModalState,
  reducers: {
    openSignUpModal(state) {
      state.isSignModalOpen = true;
    },
    closeSignUpModal(state) {
      state.isSignModalOpen = false;
    },
    openError(state) {
      state.isError = true;
    },
    closeError(state) {
      state.isError = false;
    },
  },
});

export const signUpModalActions = signUpSlice.actions;
export default signUpSlice;
