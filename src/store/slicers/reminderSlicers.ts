import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { ReminderSliceType, TasksType } from "../../types/types";
import { addReminderAction, deleteAction, favoriteReminderAction, getReminderAction, searchAction } from "../actions/reminderAction";

const initialState : ReminderSliceType = {
  loading : false,
  reminders : {},
  currentReminder : null,
  currentOption : 'today'
}

const assignState = (state : any, action : any, date : string) => {
  if (date in state.reminders) {
    state.reminders[date].push(action.payload);
  } else {
    state.reminders[date] = [action.payload];
  }
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

    //delete
    builder.addCase(deleteAction.pending, (state, action) => {
      state.loading = true
    });

    builder.addCase(deleteAction.fulfilled, (state, action) => {
      state.currentOption = 'search'
      const task = action.payload!
      const date = moment(task.date).format('MMMM DD');
      state.reminders[date] = state.reminders[date].filter((_task : TasksType) => _task.id !== task.id);
      if(state.reminders[date].length === 0) {
        delete state.reminders[date];
      }
      state.loading = false;
    });

    //search
    builder.addCase(searchAction.pending, (state) => {
      state.loading = true
    });

    builder.addCase(searchAction.fulfilled, (state, action) => {
      state.currentOption = 'search'
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
      const date = moment(action.payload.date).format('MMMM DD');
      if (state.currentOption === 'upcomming-events') {
        assignState(state, action, date);
      } else if (state.currentOption === 'today') {
        const currentDate = moment(new Date()).format('MMMM DD');
        if (date === currentDate) {
          assignState(state, action, date);
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