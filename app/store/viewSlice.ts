import { createSlice } from "@reduxjs/toolkit";

const initialViewState = { isGridView: false };

const viewSlice = createSlice({
  name: "view",
  initialState: initialViewState,
  reducers: {
    toogleView(state, action) {
      state.isGridView = action.payload;
    },
  },
});

export const viewActions = viewSlice.actions;
export default viewSlice;
