"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import NavLinks from "./components/Sidebar/NavLinks";
import { Provider } from "react-redux";
import store from "@/app/store/index";
import LoginModal from "./components/Modals/LoginModal";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Bugel",
  description: "Daily News App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <LoginModal />
            <Header />
            <div className="flex flex-row items-start">
              <NavLinks />
              {children}
            </div>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
