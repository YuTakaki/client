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
      return addReminder.data;
    } catch (error : any) {
      console.log(error.response);
      
    }

  }
);

export const getReminderAction = createAsyncThunk(
  'reminder/getReminderAction',
  async(option : string) => {
    try {
      const token = localStorage.getItem('remindMe');
      const getTodayReminder = await axios.get(`${REACT_APP_SERVER}/api/reminders/${option}`, {headers : { Authorization : `Bearer ${token}`}});    
      return getTodayReminder.data;
    } catch (error) {
      console.log(error);
      
    }
  }
);

export const favoriteReminderAction = createAsyncThunk(
  'reminder/favoriteReminderAction',
  async(id : number) => {
    try {
      const token = localStorage.getItem('remindMe');
      const getTodayReminder = await axios.put(`${REACT_APP_SERVER}/api/reminders/${id}`,{}, {headers : { Authorization : `Bearer ${token}`}});    
      return getTodayReminder.data;
    } catch (error) {
      console.log(error);
      
    }
  }
);

export const searchAction = createAsyncThunk(
  'reminder/searchAction',
  async(keyword : string) => {
    try {
      const token = localStorage.getItem('remindMe');
      const searchedReminder = await axios.get(`${REACT_APP_SERVER}/api/reminders/search?keyword=${keyword}`, {headers : { Authorization : `Bearer ${token}`}});
      return searchedReminder.data;
    } catch (error) {
      console.log(error);
      
    }
  }
);

export const deleteAction = createAsyncThunk(
  'reminder/deleteAction',
  async(task : TasksType) => {
    try {
      const token = localStorage.getItem('remindMe');
      await axios.delete(`${REACT_APP_SERVER}/api/reminders/${task.id}`, {headers : { Authorization : `Bearer ${token}`}});
      return task;
    } catch (error) {
      console.log(error);
      
    }
  }
);