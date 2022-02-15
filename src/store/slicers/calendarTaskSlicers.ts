import { createSlice } from "@reduxjs/toolkit"

const initialState : any= [];

const calendarTaskSlicer = createSlice({
  name:"calendarTask",
  initialState,
  reducers:{}
})

export const calendarTaskReducer = calendarTaskSlicer.reducer;