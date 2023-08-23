"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header/Header";
import NavLinks from "./components/Sidebar/NavLinks";
import { Provider } from "react-redux";
import store from "@/app/store/index";

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
          <Header />
          <div className="flex flex-row items-start">
            <NavLinks />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
