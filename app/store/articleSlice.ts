import { createSlice } from "@reduxjs/toolkit";

const initialArticleState = {
  currentArticle: {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: { id: "" || null, name: "" },
    title: "",
    url: "",
    urlToImage: "" || null,
  },
};

const articleeSlice = createSlice({
  name: "article",
  initialState: initialArticleState,
  reducers: {
    setCurrentArticle(state, action) {
      state.currentArticle = action.payload;
    },
  },
});

export const articleActions = articleeSlice.actions;
export default articleeSlice;
