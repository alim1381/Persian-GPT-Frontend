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
    addToMessages: (state, action) => {
      return [
        ...state,
        ...action.payload
      ];
    },
  },
});

export const { addToMessages } = auth.actions;
export default messages.reducer;
