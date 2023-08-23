import MenuItem from "./MenuItem";

interface UserOptionsProps {
  isLoggedIn: boolean;
}
const UserOptions: React.FC<UserOptionsProps> = ({ isLoggedIn }) => {
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
          <MenuItem label="Login" onClick={() => {}} />
          <MenuItem label="Register" onClick={() => {}} />
        </div>
      )}
    </>
  );
};
export default UserOptions;
