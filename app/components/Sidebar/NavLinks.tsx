"use client";

import CATEGORIES from "@/app/constants/navlinkCategory";
import NavLink from "./NavLink";
import { useSearchParams } from "next/navigation";

const NavLinks = () => {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category");

  return (
    <nav className="w-60 sm:flex hidden navlink flex-col p-4 gap-5 pt-28 pb-96 sticky top-0 rounded-3xl shadow-md">
      {CATEGORIES.map((category) => (
        <NavLink category={category} key={category} isActive={queryCategory === category} />
      ))}
    </nav>
  );
};
export default NavLinks;
