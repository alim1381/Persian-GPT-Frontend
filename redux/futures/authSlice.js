import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  phone: "",
  name: "",
  credit: 0,
  phoneVerify: false,
  token: null,
};

export const auth = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return {
        id: action.payload.id,
        phone: action.payload.phone,
        name: action.payload.name,
        credit: action.payload.credit,
        phoneVerify: action.payload.phoneVerify,
        token: action.payload.token,
      };
    },
    logout: () => {
      return initialState;
    },
    changeCredit: (state , action) => {
      return {
        ...state,
        credit: action.payload,
      };
    },
  },
});

export const { login, logout, changeCredit } = auth.actions;
export default auth.reducer;
