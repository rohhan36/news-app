"use client";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import TosterProvider from "@/app/components/Providers/ToastProvider";
import store from "@/app/store";

let persistor = persistStore(store);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TosterProvider />
        {children}
      </PersistGate>
    </Provider>
  );
}
