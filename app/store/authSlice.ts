import { createSlice } from "@reduxjs/toolkit";
// import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "@/app/firebase";

// const googleSignIn = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider);
// };

// const logOut = () => {
//   signOut(auth);
// };

const initialViewState = { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initialViewState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },

    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
