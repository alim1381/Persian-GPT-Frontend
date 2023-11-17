import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState = {
//   id: "",
//   text: "",
//   aiSide: "",
//   credit: 0,
//   createdAt: false,
// };
const initialState = [];

export const messages = createSlice({
  name: "Message",
  initialState: initialState,
  reducers: {
    addToFrontMessages: (state, action) => {
      return [action.payload, ...state];
    },
    addToBackMessages: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addToFrontMessages, addToBackMessages } = messages.actions;
export default messages.reducer;
