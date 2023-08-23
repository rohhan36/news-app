"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/?q=${input}`);

    setInput("");
  };

  return (
    <form className="relative" onSubmit={submitHandler}>
      <input
        className="border-solid neutral-500 h-8 sm:w-[40vw] max-w-xl w-[70vw] outline-none rounded-full px-4 drop-shadow text-fuchsia-950 placeholder-fuchsia-950 bg-fuchsia-50"
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button disabled={!input} className="disabled:hidden">
        <MagnifyingGlassIcon className="absolute h-4 w-4 cursor-pointer top-2 right-3 neutral-400 stroke-fuchsia-950" />
      </button>
    </form>
  );
};
export default SearchBar;
