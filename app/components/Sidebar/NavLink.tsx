"use client";

import Link from "next/link";

interface NavLinkProps {
  category: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ category, isActive }) => {
  return (
    <Link
      href={`/news?category=${category}`}
      className={`text-fuchsia-900 font-semibold text-sm  hover:scale-105 transition-all duration-200 underline-offset-8 hover:translate-x-2 
      ${isActive && "underline scale-105 font-bold text-lg"}`}>
      #{category}
    </Link>
  );
};

export default NavLink;
