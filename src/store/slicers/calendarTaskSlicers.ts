import { createSlice } from "@reduxjs/toolkit"
import { TasksType } from "../../types/types";
import { getTodosMonthAction } from "../actions/calendarTaskAction";

const initialState : any= [];

const calendarTaskSlicer = createSlice({
  name: "calendarTask",
  initialState,
  reducers: {
    deleteTaskInCalendar : (state, action) => {
      return [...state.filter((_todo : TasksType) => _todo.id !== action.payload)]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosMonthAction.fulfilled, (state, action) => {
      return [...state, ...action.payload]
    })
  } 
})

export const calendarTaskReducer = calendarTaskSlicer.reducer;
export const { deleteTaskInCalendar } = calendarTaskSlicer.actions;