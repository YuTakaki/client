import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginValuesType, RegisterValuesType } from "../../types/types";

const { REACT_APP_SERVER } = process.env;

export const LoginAction = createAsyncThunk(
  'user/LoginAction',
  async (data : LoginValuesType, {rejectWithValue}) => {
    try {
      const loginData = await axios.post(`${REACT_APP_SERVER}/api/auth/login`, data);
      return loginData.data;
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }

  });

export const RegisterAction = createAsyncThunk(
  'user/RegisterAction',
  async (data : RegisterValuesType, {rejectWithValue}) => {
    try {
      const registerData = await axios.post(`${REACT_APP_SERVER}/api/auth/register`, data);
      return registerData.data;
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }

  })