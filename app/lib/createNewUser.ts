import { User } from "firebase/auth";
import dummyData from "../constants/dummyData";

const createNewUser = async (user: User) => {
  const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json", {
    method: "POST",
    body: JSON.stringify({
      uid: user.uid,
      email: user.email,
      favorites: [dummyData],
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return res;
};

export default createNewUser;
