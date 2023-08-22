import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        className="border-solid neutral-500 h-8 sm:w-80 w-50 rounded-full px-4 drop-shadow text-fuchsia-950 placeholder-fuchsia-950 bg-fuchsia-50"
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="absolute h-4 w-4 cursor-pointer top-2 right-3 neutral-400 stroke-fuchsia-950" />
    </div>
  );
};
export default SearchBar;
