import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const {REACT_APP_SERVER} = process.env

export const getTodosMonthAction = createAsyncThunk(
  'calendarTask/getTodosMonthAction',
  async({month, year} : {month : number, year: number}) => {
    try {
      const token = localStorage.getItem('remindMe');
      const tasks = await axios.get(`${REACT_APP_SERVER}/api/reminders/month?month=${month}&year=${year}`,{headers : { Authorization : `Bearer ${token}`}});
      return tasks.data;
    } catch (error) {
      console.log(error)
    }
  }
)