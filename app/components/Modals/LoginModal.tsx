"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { AiOutlineGoogle } from "react-icons/ai";
import { logInModalActions } from "@/app/store/logInSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/firebase";
import { toast } from "react-hot-toast";
import { userMenuActions } from "@/app/store/userMenuSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const isLogInModalOpen = useSelector((state: RootState) => state.logInModal.isLogInModalOpen);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(logInModalActions.closeLogInModal());
      dispatch(userMenuActions.toogleUserMenu());
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const closeClickHandler = () => {
    dispatch(logInModalActions.closeLogInModal());
    dispatch(logInModalActions.closeError());
  };

  if (!isLogInModalOpen) return null;

  return (
    <div className="h-[100vh] w-full  bg-neutral-800/50 fixed z-20 flex justify-center items-center">
      <div className="bg-white shadow-lg h:auto lg:w-1/3 max-w-2xl md:w-3/5 sm:w-1/2 rounded-xl p-6 px-10 pb-10 flex flex-col items-center gap-4 relative">
        <button className="absolute top-5 left-5" onClick={closeClickHandler}>
          <XMarkIcon className="h-4 w-4" />
        </button>
        <div className="font-bold text-2xl">Join Today</div>
        <div className="">Login with one of the providers</div>
        <button
          onClick={googleLogin}
          className="bg-fuchsia-950 cursor-pointer text-white py-4 w-60 rounded-lg flex justify-evenly shadow-md">
          <AiOutlineGoogle className="text-2xl self-start" />
          <div className="font-semibold">Login with Google</div>
        </button>
        <button className="bg-fuchsia-950 cursor-pointer text-white py-4 w-60 rounded-lg flex justify-evenly shadow-md">
          <AiOutlineGoogle className="text-2xl self-start" />
          <div className="font-semibold">Login with Facebook</div>
        </button>
      </div>
    </div>
  );
};
export default LoginModal;
