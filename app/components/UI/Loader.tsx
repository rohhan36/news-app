"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center text-fuchsia-600">
      <PuffLoader size={100} color="purple" />
    </div>
  );
};

export default Loader;
