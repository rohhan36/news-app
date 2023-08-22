import { RootState } from "@/app/store";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/solid";

import { useSelector, useDispatch } from "react-redux";
import { viewActions } from "@/app/store/viewSlice";

export const UserMenu = () => {
  const isGridView = useSelector((state: RootState) => state.view.isGridView);
  const viewDispatch = useDispatch();

  const viewToggleHandler = (isGrid: boolean) => {
    if (isGrid) {
      viewDispatch(viewActions.toogleView(true));
      return;
    }
    viewDispatch(viewActions.toogleView(false));
  };

  return (
    <div className="flex flex-row items-center sm:gap-5 gap-2">
      <div className=" hidden sm:flex bg-fuchsia-100 rounded-full h-8 justify-around drop-shadow relative ">
        <div
          className={`w-8 h-8 bg-fuchsia-950 rounded-full absolute transition-all duration-300 left-0
          ${isGridView && "translate-x-8"} 
          z-0`}></div>
        <button
          className={`rounded-full w-8 flex justify-center items-center z-10`}
          onClick={() => {
            viewToggleHandler(false);
          }}>
          <ListBulletIcon
            className={`h-6 transition-all delay-200 ${
              isGridView ? "fill-fuchsia-950" : "fill-white"
            }`}
          />
        </button>
        <button
          className={`rounded-full w-8 flex justify-center items-center z-10`}
          onClick={() => {
            viewToggleHandler(true);
          }}>
          <Squares2X2Icon
            className={`h-5 transition-all delay-200 ${
              !isGridView ? "fill-fuchsia-950" : "fill-white"
            }`}
          />
        </button>
      </div>
      <button>
        <Bars3Icon className="h-8 w-8 cursor-pointer fill-fuchsia-950" />
      </button>
    </div>
  );
};
