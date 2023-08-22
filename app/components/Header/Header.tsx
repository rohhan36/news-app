"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { Provider } from "react-redux";
import store from "../../store/index";

const Header = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-row gap-2 sm:px-8 px-3 py-5 w-full items-center justify-between shadow bg-white fixed z-10">
        <Link href="/" className="font-bold sm:text-2xl text-xl sm:block hidden text-fuchsia-950 ">
          Daily Bugel
        </Link>
        <SearchBar />
        <UserMenu />
      </div>
    </Provider>
  );
};
export default Header;
