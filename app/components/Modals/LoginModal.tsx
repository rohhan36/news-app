"use client";

import { useSelector, useDispatch } from "react-redux";
import Input from "../UI/Input";
import { RootState } from "@/app/store";
import Button from "../UI/Button";
import { logInModalActions } from "@/app/store/logInSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

const LoginModal = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state: RootState) => state.logInModal.isError);
  const isLogInModalOpeen = useSelector((state: RootState) => state.logInModal.isLogInModalOpen);
  const closeClickHandler = () => {
    dispatch(logInModalActions.closeLogInModal());
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  if (!isLogInModalOpeen) return null;
  return (
    <div className="h-[100vh] w-full  bg-neutral-800/50 fixed z-20 flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-white lg:h-auto md:h-auto h-full w-2/5 rounded-xl p-6 pb-10 flex flex-col items-center gap-8 relative">
        <button className="absolute top-5 left-5" onClick={closeClickHandler}>
          <XMarkIcon className="h-4 w-4" />
        </button>
        <div className="font-semibold text-xl">Welcome Back!</div>
        <Input type="email" isError={isError} placeholder="Email" />
        <Input type="password" isError={isError} placeholder="Password" />
        {isError && <div className="text-rose-600 font-semibold">Invalid Credentials</div>}
        <div className="flex gap-5">
          <Button label={"Cancel"} type="button" onClick={closeClickHandler} />
          <Button label={"Submit"} isPrimary={true} type="submit" onClick={submitHandler} />
        </div>
      </form>
    </div>
  );
};
export default LoginModal;
