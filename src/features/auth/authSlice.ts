import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../lib/store";

interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectLogin = (state: RootState) => state.auth.isLogin;
export default authSlice.reducer;
