import { createSlice } from "@reduxjs/toolkit";

const initialViewState = { isGridView: false };

const viewSlice = createSlice({
  name: "view",
  initialState: initialViewState,
  reducers: {
    toogleView(state, action) {
      console.log("from store", action.payload);
      state.isGridView = action.payload;
    },
  },
});

export const viewActions = viewSlice.actions;
export default viewSlice;
