import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import { logInModalActions } from "@/app/store/logInSlice";

interface UserOptionsProps {
  isLoggedIn: boolean;
}
const UserOptions: React.FC<UserOptionsProps> = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const loginClickHandler = () => {
    dispatch(logInModalActions.openLogInModal());
  };

  return (
    <>
      {isLoggedIn && (
        <div className="absolute rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
          <MenuItem label="Favorites" onClick={() => {}} />
          <MenuItem label="Logout" onClick={() => {}} />
        </div>
      )}

      {!isLoggedIn && (
        <div className="absolute rounded-xl shadow-md w-40 bg-white overflow-hidden right-0 top-12 text-sm">
          <MenuItem label="Login" onClick={loginClickHandler} />
          <MenuItem label="Register" onClick={() => {}} />
        </div>
      )}
    </>
  );
};
export default UserOptions;
