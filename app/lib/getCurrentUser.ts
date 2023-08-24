import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase";

const GetCurrentUser = () => {
  const [user] = useAuthState(auth);
  return user;
};
export default GetCurrentUser;
