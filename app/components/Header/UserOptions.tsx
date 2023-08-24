import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import { logInModalActions } from "@/app/store/logInSlice";
import { auth } from "@/app/firebase";
import { toast } from "react-hot-toast";
import { userMenuActions } from "@/app/store/userMenuSlice";
import GetCurrentUser from "@/app/lib/getCurrentUser";

const UserOptions = () => {
  const dispatch = useDispatch();
  const user = GetCurrentUser();

  const loginClickHandler = () => {
    dispatch(logInModalActions.openLogInModal());
  };

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Logged Out");
    dispatch(userMenuActions.toogleUserMenu());
  };

  return (
    <>
      {user && (
        <div className="absolute rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
          <MenuItem label="Favorites" onClick={() => {}} />
          <MenuItem label="Logout" onClick={logoutHandler} />
        </div>
      )}

      {!user && (
        <div className="absolute rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
          <MenuItem label="Login" onClick={loginClickHandler} />
        </div>
      )}
    </>
  );
};
export default UserOptions;
