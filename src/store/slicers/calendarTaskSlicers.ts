import { createSlice } from "@reduxjs/toolkit"
import { getTodosMonthAction } from "../actions/calendarTaskAction";

const initialState : any= [];

const calendarTaskSlicer = createSlice({
  name: "calendarTask",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodosMonthAction.fulfilled, (state, action) => {
      return [...state, ...action.payload]
    })
  } 
})

export const calendarTaskReducer = calendarTaskSlicer.reducer;