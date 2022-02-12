import { createSlice } from "@reduxjs/toolkit";

const taskOptionSlicer = createSlice({
  name : "task",
  initialState : "today",
  reducers : {
    changeTaskOptionAction : (_, action) => {
      return action.payload
    }
  }
});


export const { changeTaskOptionAction } = taskOptionSlicer.actions;
export const taskOptionReducer = taskOptionSlicer.reducer;