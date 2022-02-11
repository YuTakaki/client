import { configureStore } from "@reduxjs/toolkit";
import { currentDateReducer } from "./slicers/currentDateSlicers";
import reminderReducer from "./slicers/reminderSlicers";
import userReducer from "./slicers/userSlicers";

export const store = configureStore({
  reducer: {
    userReducer : userReducer,
    reminderReducer : reminderReducer,
    currentDateReducer: currentDateReducer,
  }
})