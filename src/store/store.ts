import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slicers/userSlicers";

export const store = configureStore({
  reducer: {
    userReducer : userReducer
  }
})