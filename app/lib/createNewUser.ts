import { User } from "firebase/auth";

const createNewUser = async (user: User) => {
  const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json", {
    method: "POST",
    body: JSON.stringify({
      uid: user.uid,
      email: user.email,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return res;
};

export default createNewUser;
