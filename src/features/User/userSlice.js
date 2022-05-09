import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// Define a type for the slice state

const initialState = {
   user: null,
   isLoggedIn: false,
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setLogin: (state, action) => {
         state.isLoggedIn = true;
         state.user = action.payload;
      },
      setLogout: (state) => {
         state.isLoggedIn = false;
         state.user = null;
      },
   },
});
export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
export const useUserData = () => useSelector((state) => state.user);
