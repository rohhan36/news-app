const getCurrentUserId = async (uid: string) => {
  try {
    const res = await fetch("https://news-app-3ce7c-default-rtdb.firebaseio.com/user.json");
    const users = await res.json();

    for (let userID in users) {
      if (users[userID].uid === uid) {
        return userID;
      }
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }

  return null;
};

export default getCurrentUserId;
