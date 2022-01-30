import { createSlice } from "@reduxjs/toolkit";
import { LoginAction } from "../actions/userAction";

const initialState = {
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
    builder.addCase(LoginAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(LoginAction.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    })
  }
})

const userReducer = userSlicers.reducer;

export default userReducer;