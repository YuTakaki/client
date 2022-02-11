import { createSlice } from "@reduxjs/toolkit";
import { ReminderSliceType } from "../../types/types";

const initialState : ReminderSliceType = {
  loading : false,
  reminders : [],
  currentReminder : null,
}
const reminderSlicers = createSlice({
  name : "reminder",
  initialState,
  reducers: {}
})

const reminderReducer = reminderSlicers.reducer
export default reminderReducer