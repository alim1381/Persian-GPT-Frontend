import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./futures/authSlice";

export const store = configureStore({
  reducer: {
    authState: AuthReducer,
  },
});