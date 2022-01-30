import { createSlice } from "@reduxjs/toolkit";
import { UserSlicerType } from "../../types/types";
import { LoginAction, RegisterAction } from "../actions/userAction";

const initialState : UserSlicerType = {
  auth : null,
  user : {},
  token : null,
  loading : false
}
const userSlicers = createSlice({
  name : 'user',
  initialState,
  reducers: {},
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
  }
})

const userReducer = userSlicers.reducer;

export default userReducer;