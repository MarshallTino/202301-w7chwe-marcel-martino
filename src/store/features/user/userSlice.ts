import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action: PayloadAction<UserState>) => ({
      ...currentUserState,
      token: action.payload.token,
      id: action.payload.id,
      username: action.payload.username,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
