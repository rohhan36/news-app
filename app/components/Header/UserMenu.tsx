import { Bars3Icon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

export const UserMenu = () => {
  return (
    <div className="flex flex-row items-center sm:gap-5 gap-2">
      <MoonIcon className="h-5 w-5 cursor-pointer fill-fuchsia-950" />
      <Bars3Icon className="h-8 w-8 cursor-pointer fill-fuchsia-950" />
    </div>
  );
};
