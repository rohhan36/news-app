import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import userMenuSlice from "./userMenuSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { view: viewSlice.reducer, userMenu: userMenuSlice.reducer, auth: authSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
