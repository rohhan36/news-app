import { createSlice } from "@reduxjs/toolkit";

const initialViewState = { isUserMenuOpen: false };

const userMenuSlice = createSlice({
  name: "userMenu",
  initialState: initialViewState,
  reducers: {
    toogleUserMenu(state) {
      state.isUserMenuOpen = !state.isUserMenuOpen;
    },
  },
});

export const userMenuActions = userMenuSlice.actions;
export default userMenuSlice;
