import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { ReminderSliceType, TasksType } from "../../types/types";
import { addReminderAction, favoriteReminderAction, getReminderAction } from "../actions/reminderAction";

const initialState : ReminderSliceType = {
  loading : false,
  reminders : {},
  currentReminder : null,
  currentOption : 'today'
}
const reminderSlicers = createSlice({
  name : "reminder",
  initialState,
  reducers: {
    setCurrentReminderAction : (state, action) => {
      state.currentReminder = action.payload
    },
    changeTaskOptionAction : (state, action) => {
      state.currentOption = action.payload.replace(' ', '-')
    },
    setTodosAction: (state, action) => {
      state.reminders = {}
      action.payload.forEach((task : TasksType) => {
        const date = moment(task.date).format('MMMM DD');
        if(date in state.reminders){
          state.reminders[date].push(task);
        }else{
          state.reminders[date] = [task];
        }
      });
    }
  },
  extraReducers: (builder) => {
    //get reminder
    builder.addCase(getReminderAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(getReminderAction.fulfilled, (state, action) => {
      state.reminders = {}
      action.payload.forEach((task : TasksType) => {
        const date = moment(task.date).format('MMMM DD');
        if(date in state.reminders){
          state.reminders[date].push(task);
        }else{
          state.reminders[date] = [task];
        }
      });

      state.loading = false;
    });

    //add reminder
    builder.addCase(addReminderAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(addReminderAction.fulfilled, (state, action) => {
      if (state.currentOption === 'upcomming-events') {
        const date = moment(action.payload.date).format('MMMM DD');
        if (date in state.reminders) {
          state.reminders[date].push(action.payload);
        } else {
          state.reminders[date] = [action.payload];
        }
      }
      state.loading = false;
    });

    //favorite
    
    builder.addCase(favoriteReminderAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(favoriteReminderAction.fulfilled, (state, action) => {

      const date = moment(action.payload.date).format('MMMM DD');
      if (state.currentOption === 'important') {
        state.reminders[date] = state.reminders[date].filter((_reminder : TasksType) => _reminder.id !== action.payload.id);
        if (state.reminders[date].length === 0) {
          delete state.reminders[date];
        }
      }else{
        state.reminders[date] = state.reminders[date].map((_reminder : TasksType) => {
          if(_reminder.id === action.payload.id){
            _reminder = action.payload
          }
          return _reminder;
        });
      }
      state.loading = false;
    });
  }
})

export const { 
  setCurrentReminderAction,
  changeTaskOptionAction,
  setTodosAction,
 } = reminderSlicers.actions;
const reminderReducer = reminderSlicers.reducer
export default reminderReducer