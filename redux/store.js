import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./futures/authSlice";
import MessagesReducer from "./futures/messageSlice";

export const store = configureStore({
  reducer: {
    authState: AuthReducer,
    messagesState: MessagesReducer,
  },
});