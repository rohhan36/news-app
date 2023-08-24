import { User } from "firebase/auth";

const useUser = () => {
  const isNewUser = async (uid: string) => {
    const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json");
    const users = await res.json();

    return users[uid] === null;
  };

  const createNewUser = async (user) => {
    const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return [isNewUser, createNewUser];
};

export default useUser;
