"use client";

import CATEGORIES from "@/app/constants/navlinkCategory";
import NavLink from "./NavLink";
import { useSearchParams } from "next/navigation";

const NavLinks = () => {
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get("category");

  return (
    <nav className="sm:w-60 w-30 navlink flex flex-col p-4 gap-5 pt-20 mt-5">
      {CATEGORIES.map((category) => (
        <NavLink category={category} key={category} isActive={queryCategory === category} />
      ))}
    </nav>
  );
};
export default NavLinks;
