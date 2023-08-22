import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="border-solid neutral-500 h-8 sm:w-80 w-40 rounded-lg px-2 drop-shadow text-fuchsia-950 placeholder-fuchsia-950"
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="absolute h-6 w-6 cursor-pointer top-1 right-2 neutral-400 stroke-fuchsia-950" />
    </div>
  );
};
export default SearchBar;
