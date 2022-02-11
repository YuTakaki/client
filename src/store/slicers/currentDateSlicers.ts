import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = moment(new Date()).format('YYYY-MM-DD')
const currentDateSlicers = createSlice({
  name : 'date',
  initialState,
  reducers:{
    setCurrentDateAction : (state, action) => {
      return action.payload;
    }
  }
});

export const {
  setCurrentDateAction,
} = currentDateSlicers.actions
export const currentDateReducer = currentDateSlicers.reducer;