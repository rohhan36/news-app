"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex flex-row gap-2 sm:px-8 px-3 py-5 w-full items-center justify-between shadow bg-white fixed z-10">
      <Link href="/" className="font-bold sm:text-2xl text-xl sm:block hidden text-fuchsia-950 ">
        Daily Bugel
      </Link>
      <Link href="/">
        <HomeIcon className="stroke-fuchsia-950 h-8 w-8 sm:hidden" />
      </Link>
      <SearchBar />
      <UserMenu />
    </div>
  );
};
export default Header;
