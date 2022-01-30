import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth : null,
  user : {},
  loading : false
}
const userSlicers = createSlice({
  name : 'user',
  initialState,
  reducers: {},
})

const userReducer = userSlicers.reducer;

export default userReducer;