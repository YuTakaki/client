import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginValuesType, RegisterValuesType } from "../../types/types";

const { REACT_APP_SERVER } = process.env;

export const LoginAction = createAsyncThunk(
  'user/LoginAction',
  async (data : LoginValuesType, {rejectWithValue}) => {
    try {
      const loginData = await axios.post(`${REACT_APP_SERVER}/api/auth/login`, data);
      localStorage.setItem('remindMe', loginData.data.token);
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
      localStorage.setItem('remindMe', registerData.data.token);
      return registerData.data;
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }

  });

export const VerifyTokenAction = createAsyncThunk(
  'user/VerifyTokenAction',
  async (_, {rejectWithValue}) => {
    try {
      const token = localStorage.getItem('remindMe');
      const verifyTokenData = await axios.get(`${REACT_APP_SERVER}/api/auth/verify`, {headers : { Authorization : `Bearer ${token}`}});
      console.log(verifyTokenData);
      return verifyTokenData.data;
    } catch (error : any) {
      return rejectWithValue(error.response.data);
    }

  })