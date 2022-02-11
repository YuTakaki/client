import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TasksType } from "../../types/types";

const { REACT_APP_SERVER } = process.env

export const addReminderAction = createAsyncThunk(
  'reminder/addReminderAction',
  async(data : TasksType) => {
    try {
      const token = localStorage.getItem('remindMe');
      const addReminder = await axios.post(`${REACT_APP_SERVER}/api/reminders/`, data, {headers : { Authorization : `Bearer ${token}`}});
      console.log(addReminder);
      
    } catch (error) {
      
    }

  }
)