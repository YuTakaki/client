import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginValuesType } from "../../types/types";
const { REACT_APP_SERVER } = process.env;
export const LoginAction = createAsyncThunk(
  'user/LoginAction',
  async (data : LoginValuesType) => {
    try {
      const loginData = await axios.post(`${REACT_APP_SERVER}/api/login`, data);
      return loginData.data;
    } catch (error) {
      console.log(error);
    }

  })