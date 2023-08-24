import { configureStore, combineReducers } from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";
import userMenuSlice from "./userMenuSlice";
import logInSlice from "./logInSlice";
import signUpSlice from "./signUpSlice";
import articleeSlice from "./articleSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "counter",
  storage,
};

const reducers = combineReducers({
  view: viewSlice.reducer,
  userMenu: userMenuSlice.reducer,
  logInModal: logInSlice.reducer,
  signUpModal: signUpSlice.reducer,
  article: articleeSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
