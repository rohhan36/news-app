import Link from "next/link";
import SearchBar from "./SearchBar";
import { UserMenu } from "./UserMenu";

const Header = () => {
  return (
    <div className="flex flex-row gap-2 sm:px-8 px-3 py-5 w-full items-center justify-between shadow bg-white fixed z-10">
      <Link href="/" className="font-bold sm:text-2xl text-xl sm:block hidden text-fuchsia-950 ">
        Daily Bugel
      </Link>
      <SearchBar />
      <UserMenu />
    </div>
  );
};
export default Header;
