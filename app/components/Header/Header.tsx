"use client";

import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { UserMenu } from "./UserMenu";
import { Anton, Braah_One, Russo_One } from "next/font/google";

const Header = () => {
  return (
    <div className="flex flex-row gap-2 sm:p-8 px-3 py-5 w-full items-center justify-between">
      <Link href="/" className="font-bold text-2xl text-fuchsia-950">
        Daily Bugel
      </Link>
      <SearchBar />
      <UserMenu />
    </div>
  );
};
export default Header;
