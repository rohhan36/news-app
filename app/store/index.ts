import { configureStore } from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";

const store = configureStore({
  reducer: { view: viewSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
