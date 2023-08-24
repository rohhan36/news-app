const getUserData = async (uid: string) => {
  try {
    const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json");
    const users = await res.json();

    for (let user in users) {
      console.log(user);
      if (users[user].uid === uid) {
        return users[user].favorites || [];
      }
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return null;
};

export default getUserData;
