import { createSlice } from "@reduxjs/toolkit";
import { UserSlicerType } from "../../types/types";
import { LoginAction, RegisterAction, VerifyTokenAction } from "../actions/userAction";

const initialState : UserSlicerType = {
  auth : null,
  user : {},
  token : null,
  loading : false
}
const userSlicers = createSlice({
  name : 'user',
  initialState,
  reducers: {
    logoutAction : () => {
      localStorage.removeItem('remindMe');
      return initialState;
    } 
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(LoginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(LoginAction.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.auth = true;
    });
    //register
    builder.addCase(RegisterAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(RegisterAction.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.auth = true;
    });

    //verify
    builder.addCase(VerifyTokenAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(VerifyTokenAction.fulfilled, (state, action) => {
      state.user = action.payload;
      state.token = localStorage.getItem("remindMe");
      state.loading = false;
      state.auth = true;
    });
  }
})

const userReducer = userSlicers.reducer;

export default userReducer;
export const { logoutAction } = userSlicers.actions